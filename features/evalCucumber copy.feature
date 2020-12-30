Feature: Display the 5 day weather forecast for a given location



Scenario: Display the 5 day weather for a given location
  Given I navigate to the entry page
    When  I enter the different city names
    Then  The screen will display relevant forecast data for last five days inclusive
    And   All numerical data should be rounded down to the nearest integer

