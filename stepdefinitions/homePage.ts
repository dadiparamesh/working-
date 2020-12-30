import { browser,protractor} from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given,Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();


Given(/^I navigate to the entry page$/, async () => {
    //expect(browser.getTitle()).to.eventually.equal("5 Weather Forecast");
   await search.searchTextBox.clear();
    await search.searchTextBox.sendKeys("Aberdeen");
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
     browser.getTitle().then(function(title ){
      console.log(title);
      expect(title).to.eventually.equal("5 Weather Forecast");     
    })
    
  });


  Then(/^I enter the different city names$/, async () => {
    await search.searchTextBox.clear();
    await search.searchTextBox.sendKeys("Aberdeen");
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
  //  await browser.pause(8000);

    
    
});

  Then(/^The screen will display relevant forecast data for last five days inclusive$/, async () =>  {
   await search.searchTextBox.clear();
    await search.searchTextBox.sendKeys("Dundee");
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
   // await browser.pause(8000);

  });


  Then(/^All numerical data should be rounded down to the nearest integer$/, async () =>  {
    await search.searchTextBox.clear();
    await search.searchTextBox.sendKeys("Edinburgh");
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
    

    //console.log(browser.findElement(by.xpath('//h1')).getText());

    await search.searchButton.click();
  });