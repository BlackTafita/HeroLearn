import { HeroLearPage } from './app.po';

describe('hero-lear App', () => {
  let page: HeroLearPage;

  beforeEach(() => {
    page = new HeroLearPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
