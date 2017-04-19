import { CareerDayPage } from './app.po';

describe('career-day App', () => {
  let page: CareerDayPage;

  beforeEach(() => {
    page = new CareerDayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
