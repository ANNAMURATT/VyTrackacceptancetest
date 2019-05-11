$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\userDetails.feature");
formatter.feature({
  "name": "User details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.scenario({
  "name": "user information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"MarketingManager1\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Andy Green"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see the informations:",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "name",
        "\u003cname\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name"
      ]
    },
    {
      "cells": [
        "Driver1",
        "Cybertek1",
        "Tom Smith"
      ]
    },
    {
      "cells": [
        "Driver2",
        "Cybertek1",
        "Ben Davis"
      ]
    },
    {
      "cells": [
        "LeadsRep1",
        "Cybertek1",
        "Lin Steel"
      ]
    },
    {
      "cells": [
        "LeadsRep2",
        "Cybertek1",
        "Harry Potter"
      ]
    },
    {
      "cells": [
        "MarketingManager1",
        "Cybertek1",
        "Andy Green"
      ]
    },
    {
      "cells": [
        "MarketingManager2",
        "Cybertek1",
        "Carl Pressler"
      ]
    },
    {
      "cells": [
        "SalesManager1",
        "Cybertek1",
        "Paul Unger"
      ]
    },
    {
      "cells": [
        "SalesManager2",
        "Cybertek1",
        "Gary Wheeler"
      ]
    },
    {
      "cells": [
        "SalesRep1",
        "Cybertek1",
        "Hal Norman"
      ]
    },
    {
      "cells": [
        "SalesRep2",
        "Cybertek1",
        "Victor Lornoff"
      ]
    },
    {
      "cells": [
        "StoreManager1",
        "Cybertek1",
        "Mary Phee"
      ]
    },
    {
      "cells": [
        "StoreManager2",
        "Cybertek1",
        "Rob Morse"
      ]
    },
    {
      "cells": [
        "VehicleService1",
        "Cybertek1",
        "Nick Cambridge"
      ]
    },
    {
      "cells": [
        "Driver3",
        "Cybertek1",
        "Rich Piedmont"
      ]
    },
    {
      "cells": [
        "VehicleService2",
        "Cybertek1",
        "Nancy Lee"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"Driver1\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Tom Smith"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"Driver2\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Ben Davis"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"LeadsRep1\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Lin Steel"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"LeadsRep2\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Harry Potter"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"MarketingManager1\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Andy Green"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"MarketingManager2\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Carl Pressler"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"SalesManager1\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Paul Unger"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"SalesManager2\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Gary Wheeler"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"SalesRep1\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Hal Norman"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"SalesRep2\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Victor Lornoff"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"StoreManager1\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Mary Phee"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"StoreManager2\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Rob Morse"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"VehicleService1\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Nick Cambridge"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"Driver3\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Rich Piedmont"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"VehicleService2\" and \"Cybertek1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the informations:",
  "rows": [
    {
      "cells": [
        "name",
        "Nancy Lee"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserDetailsStepDefinitions.user_should_see_the_informations(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});