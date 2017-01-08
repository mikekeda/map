/*jslint browser: true*/
/*global processCityClear, processCitySelect, google, map, initMap, clearMarkers*/

$(document).ready(function () {
    "use strict";

    function set_active_link(link) {
        var a_selector = 'a[href="' + link + '"]',
            $link = $(a_selector);
        $('li.active > a').parent().removeClass('active');
        $link.parent('li').addClass('active');
    }

    /* Process ajax links */
    $(document).on('click', 'a.ajax-link', function (event) {
        event.preventDefault();
        if (!$(this).parent('li').hasClass("active")) {
            var $link = $(this);
            $.ajax({
                url: $link.attr("href") !== '/' ? '/ajax' + $link.attr("href") : '/ajax',
                dataType: 'html'
            })
                .done(function (data) {
                    $('#content').html(data);
                    set_active_link($link.attr("href"));
                    $(".modal-backdrop.in").remove();
                    history.pushState({content: data}, null, $link.attr("href"));
                    if ($link.attr("href") === '/') {
                        try {
                            initMap();
                        } catch (err) {
                            $('#content').append('<script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTbl1EudJoUWSj2XqQZ6tK_VLwT74ppt4&callback=initMap">');
                        }
                    }
                })
                .fail(function () {
                    window.location.replace($link.attr("href"));
                });
        }
    });

    /* Back button */
    $(window).on("popstate", function (event) {
        if (event.originalEvent.state !== null && event.originalEvent.state.content !== null) {
            $('#content').html(event.originalEvent.state.content);
            set_active_link(window.location.pathname);
            if (window.location.pathname === '/') {
                try {
                    initMap();
                } catch (err) {
                    $('#content').append('<script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTbl1EudJoUWSj2XqQZ6tK_VLwT74ppt4&callback=initMap">');
                }
            }
        }
    });

    /* Process input clear */
    $('#map path').on('click', function () {
        $(this).toggleClass('visited');
    });

});