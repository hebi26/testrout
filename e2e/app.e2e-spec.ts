import { TestroutPage } from './app.po';

describe('testrout App', () => {
  let page: TestroutPage;

  beforeEach(() => {
    page = new TestroutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
