$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\login.feature");
formatter.feature({
  "name": "login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "driver login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@login"
    }
  ]
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
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title should be \"FLEET MANAGEMENT\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there should be 4 menu options",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.there_should_be_menu_options(Integer)"
});
formatter.result({
  "status": "passed"
});
});