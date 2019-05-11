@homepage
Feature: Homepage details


  Scenario: Leads homepage
    Given user on the login page
    When user logs in using "LeadsRep1" and "Cybertek1"
    Then user should be able to see following menu names
    |Dashboards|
    |Fleet     |
    |Customers  |
    |Sales     |
    |Activities|
    |Marketing |
    |System    |

