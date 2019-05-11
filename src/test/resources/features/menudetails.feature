@menu
Feature: menu details

  Scenario: LeadsRep menu pages
    Given user on the login page
    When user logs in using "LeadsRep1" and "Cybertek1"
    Then user should be able to see following menu names
      |Dashboards|
      |Fleet     |
      |Customers |
      |Sales     |
      |Activities|
      |Marketing |
      |System    |

#    When user hover on "Dashboards" menu
#    Then user should be able to see following dashboardmenu names
#    |Dashboard        |
#    |Manage Dashboards|

    When user hover on "Fleet" menu
    Then user should be able to see following fleetmenu names
    |Vehicle               |
    |Vehicle Odometer      |
    |Vehicle Costs         |
    |Vehicle Contracts     |
    |Vehicles Fuel Logs    |
    |Vehicle Services Logs |
    |Vehicles Model        |