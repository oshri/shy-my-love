import { ShyMyLovePage } from './app.po';

describe('shy-my-love App', () => {
  let page: ShyMyLovePage;

  beforeEach(() => {
    page = new ShyMyLovePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
