import { EchoServiceClientPage } from './app.po';

describe('echo-service-client App', () => {
  let page: EchoServiceClientPage;

  beforeEach(() => {
    page = new EchoServiceClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
