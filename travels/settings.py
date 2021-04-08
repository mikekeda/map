"""
Django settings for Travels project.
"""

import os
import requests

SITE_ENV_PREFIX = "TRAVELS"


def get_env_var(name: str, default: str = "") -> str:
    """Get all sensitive data from google vm custom metadata."""
    try:
        name = f"{SITE_ENV_PREFIX}_{name}"
        res = os.environ.get(name)
        if res:
            # Check env variable (Jenkins build).
            return res
        else:
            res = requests.get(
                "http://metadata.google.internal/computeMetadata/"
                "v1/instance/attributes/{}".format(name),
                headers={"Metadata-Flavor": "Google"},
            )
            if res.status_code == 200:
                return res.text
    except requests.exceptions.ConnectionError:
        return default
    return default


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = get_env_var(
    "SECRET_KEY", "zaa7wy8q_pnfi=)h^zei!wukd6c^x(s9z)mb-+7j)rby)q_&t2"
)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = bool(get_env_var("DEBUG", "True"))

ALLOWED_HOSTS = get_env_var("ALLOWED_HOSTS", "*").split(",")


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "travel",
]

if DEBUG:
    INSTALLED_APPS += ["django_jenkins"]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    # 'django.middleware.csrf.CsrfViewMiddleware',
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_jwt.authentication.JSONWebTokenAuthentication",
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.BasicAuthentication",
    ),
}

ROOT_URLCONF = "travels.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "travels.wsgi.application"


# Database

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": get_env_var("DB_NAME", "travels"),
        "USER": get_env_var("DB_USER", "travels_admin"),
        "PASSWORD": get_env_var("DB_PASSWORD", "travels_pass_!_45"),
        "HOST": get_env_var("DB_HOST", "127.0.0.1"),
        "PORT": "",
    }
}


# Password validation

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

STATIC_ROOT = "/home/voron/sites/cdn/travels"

STATIC_URL = "/static/" if DEBUG else "https://storage.googleapis.com/cdn.mkeda.me/map/"
DEFAULT_AUTO_FIELD = "django.db.models.AutoField"

JENKINS_TASKS = (
    "django_jenkins.tasks.run_pylint",
    "django_jenkins.tasks.run_pep8",
    "django_jenkins.tasks.run_pyflakes",
)

PROJECT_APPS = ["travel", "travels"]

PYLINT_LOAD_PLUGIN = ["pylint_django"]
