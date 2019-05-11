@user
Feature: User details


  Scenario: user information
    Given user on the login page
    Then user logs in using "MarketingManager1" and "Cybertek1"
    Then user should see the informations:
    |name|Andy Green|


    Scenario Outline: user information data driven test
      Given user on the login page
      Then user logs in using "<username>" and "<password>"
      Then user should see the informations:

        | name     | <name>     |

      Examples:
        | username          | password  | name           |
        | Driver1           | Cybertek1 | Tom Smith      |
        | Driver2           | Cybertek1 | Ben Davis      |
        | LeadsRep1         | Cybertek1 | Lin Steel      |
        | LeadsRep2         | Cybertek1 | Harry Potter   |
        | MarketingManager1 | Cybertek1 | Andy Green     |
        | MarketingManager2 | Cybertek1 | Carl Pressler  |
        | SalesManager1     | Cybertek1 | Paul Unger     |
        | SalesManager2     | Cybertek1 | Gary Wheeler   |
        | SalesRep1         | Cybertek1 | Hal Norman     |
        | SalesRep2         | Cybertek1 | Victor Lornoff |
        | StoreManager1     | Cybertek1 | Mary Phee      |
        | StoreManager2     | Cybertek1 | Rob Morse      |
        | VehicleService1   | Cybertek1 | Nick Cambridge |
        | Driver3           | Cybertek1 | Rich Piedmont  |
        | VehicleService2   | Cybertek1 | Nancy Lee      |
