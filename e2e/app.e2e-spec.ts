import { WebSitePage } from './app.po';

describe('web-site App', () => {
  let page: WebSitePage;

  beforeEach(() => {
    page = new WebSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
