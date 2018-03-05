import { CodeBasePage } from './app.po';

describe('code-base App', () => {
  let page: CodeBasePage;

  beforeEach(() => {
    page = new CodeBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
