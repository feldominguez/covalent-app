import { CovalentAppPage } from './app.po';

describe('covalent-app App', () => {
  let page: CovalentAppPage;

  beforeEach(() => {
    page = new CovalentAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
