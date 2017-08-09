import { MyApplicationPage } from './app.po';

describe('my-application App', () => {
  let page: MyApplicationPage;

  beforeEach(() => {
    page = new MyApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
