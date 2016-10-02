import { WrapsyFEPage } from './app.po';

describe('wrapsy-fe App', function() {
  let page: WrapsyFEPage;

  beforeEach(() => {
    page = new WrapsyFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
