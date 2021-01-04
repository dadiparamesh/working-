import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;
    public day1: ElementFinder;
    public day2: ElementFinder;
    public day3: ElementFinder;
    public day4: ElementFinder;
    public day5: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[id='city']");
        this.searchButton = $("input[value='Google Search']");
        this.day1 = $("#root > div > div:nth-child(2) > div.summary > span:nth-child(1)");
        this.day2 = $("#root > div > div:nth-child(3) > div.summary > span:nth-child(1)");
        this.day3 = $("#root > div > div:nth-child(4) > div.summary > span:nth-child(1)");
        this.day4 = $("#root > div > div:nth-child(5) > div.summary > span:nth-child(1)");
        this.day5 = $("#root > div > div:nth-child(6) > div.summary > span:nth-child(1)");

      
    }
}
