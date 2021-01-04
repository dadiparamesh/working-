Feature: Display the 5 day weather forecast for a given location



  Scenario: Display the 5 day weather for a given location
    Given I navigate to the entry page
    When  I enter the different city names
    Then  It should dispaly five-days weather forecast
   
 Scenario: Display the 5 day weather for a given location
    Given I navigate to the entry page
    When  I enter the different city names
    When  Select day and from displayed weather 
    Then  should summarise the three hour data
   

