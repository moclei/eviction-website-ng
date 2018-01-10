import { EvictionWebsitePage } from './app.po';

describe('eviction-website App', () => {
  let page: EvictionWebsitePage;

  beforeEach(() => {
    page = new EvictionWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
