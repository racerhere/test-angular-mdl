import { TestAngularMdlPage } from './app.po';

describe('test-angular-mdl App', () => {
  let page: TestAngularMdlPage;

  beforeEach(() => {
    page = new TestAngularMdlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
