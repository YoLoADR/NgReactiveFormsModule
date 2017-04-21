import { ReactiveFormAngularPage } from './app.po';

describe('reactive-form-angular App', () => {
  let page: ReactiveFormAngularPage;

  beforeEach(() => {
    page = new ReactiveFormAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
