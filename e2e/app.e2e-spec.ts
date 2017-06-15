import { AddressBookPage } from './app.po';

describe('address-book App', () => {
  let page: AddressBookPage;

  beforeEach(() => {
    page = new AddressBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
