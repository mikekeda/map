import { TravelsFrontendPage } from './app.po';

describe('travels-frontend App', function() {
  let page: TravelsFrontendPage;

  beforeEach(() => {
    page = new TravelsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
