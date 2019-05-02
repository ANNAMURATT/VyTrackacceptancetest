
@login
  Feature: login functionality

    Scenario: driver login
      Given user on the login page
      When user logs in using "Driver1" and "Cybertek1"
      Then homepage should be displayed
      And title should be "FLEET MANAGEMENT"
      And there should be 4 menu options