import { browser,protractor} from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given,Then,When } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();


Given(/^I navigate to the entry page$/, async () => {
   await search.searchTextBox.clear();
    await search.searchTextBox.sendKeys("Aberdeen");
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
     browser.getTitle().then(function(title ){
      console.log(title);
      expect(title).to.eventually.equal("5 Weather Forecast");     
    })
    
  });


  When(/^I enter the different city names$/, async () => {
    await search.searchTextBox.clear();
    await search.searchTextBox.sendKeys("Aberdeen");
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
  //  await browser.pause(8000);

    
    
});

Then(/^It should dispaly five-days weather forecast$/, async () => {
 

});

When(/^Select day and from displayed weather$/, async () => {

  await search.day1.click();
  await search.day2.click();
  //await search.day3.click();
  await search.day4.click();
  await search.day5.click();
 
});



Then(/^should summarise the three hour data$/, async () => {

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