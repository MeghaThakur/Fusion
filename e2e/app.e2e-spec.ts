import { OcrTestPage } from './app.po';

describe('ocr-test App', function() {
  let page: OcrTestPage;

  beforeEach(() => {
    page = new OcrTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
