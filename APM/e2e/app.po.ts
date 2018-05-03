import { browser, by, element } from 'protractor';

export class APMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pm-root h1')).getText();
  }
}
