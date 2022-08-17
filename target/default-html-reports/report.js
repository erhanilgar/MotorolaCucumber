$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountTypes.feature");
formatter.feature({
  "name": "Account Types",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Teacher User",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using \"eurotech@gmail.com\" and \"Test12345!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login and see message \"Eurotech\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.theUserShouldBeAbleToLoginAndSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/DashboardPageMenus.feature");
formatter.feature({
  "name": "DashboardPage Menus",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to see the Dashboard menus after logged in as a student",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.step({
  "name": "the user logs in using \"zehra@gmail.com\" and \"12345#\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see following menus",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.DashboardPageMenusStepDefs.the_user_should_be_able_to_see_following_menus(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginWithParameters.feature");
formatter.feature({
  "name": "Login as different users",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as teacher with parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using \"eurotech@gmail.com\" and \"Test12345!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login and see message \"Eurotech\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.theUserShouldBeAbleToLoginAndSeeMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/NavigateMenuWithParameters.feature");
formatter.feature({
  "name": "Navigate to menu with Parameters",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User navigate to menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using \"eurotech@gmail.com\" and \"Test12345!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"My Account\" menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.NavigationMenuStepDefs.theUserNavigatesToMenu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see header as \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.NavigationMenuStepDefs.theUserShouldBeAbleToSeeHeaderAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User navigate to menu outline \"\u003cuserType\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user logs in using \"\u003cuserTYpe\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.step({
  "name": "the user navigates to \"\u003cmenu\u003e\" menu",
  "keyword": "And "
});
formatter.step({
  "name": "the user should be able to see header as \"\u003cHeader\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userTYpe",
        "password",
        "menu",
        "Header"
      ]
    },
    {
      "cells": [
        "eurotech@gmail.com",
        "Test12345!",
        "All Posts",
        "Posts"
      ]
    },
    {
      "cells": [
        "eurotech@gmail.com",
        "Test12345!",
        "Developers",
        "Filter Profiles by Skill or by Location"
      ]
    },
    {
      "cells": [
        "eurotech@gmail.com",
        "Test12345!",
        "My Account",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User navigate to menu outline \"\u003cuserType\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using \"eurotech@gmail.com\" and \"Test12345!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"All Posts\" menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.NavigationMenuStepDefs.theUserNavigatesToMenu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see header as \"Posts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.NavigationMenuStepDefs.theUserShouldBeAbleToSeeHeaderAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User navigate to menu outline \"\u003cuserType\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using \"eurotech@gmail.com\" and \"Test12345!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Developers\" menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.NavigationMenuStepDefs.theUserNavigatesToMenu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see header as \"Filter Profiles by Skill or by Location\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.NavigationMenuStepDefs.theUserShouldBeAbleToSeeHeaderAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User navigate to menu outline \"\u003cuserType\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using \"eurotech@gmail.com\" and \"Test12345!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"My Account\" menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.NavigationMenuStepDefs.theUserNavigatesToMenu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see header as \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.NavigationMenuStepDefs.theUserShouldBeAbleToSeeHeaderAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});