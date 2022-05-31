$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountTypes.feature");
formatter.feature({
  "name": "Account Types",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Student User",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@rerun"
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
  "name": "the user should be able to login and see message \"zehra\"",
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
formatter.scenario({
  "name": "Developer User",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@rerun"
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
  "name": "the user logs in using \"oyku@gmail.com\" and \"oyku123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login and see message \"oykhhhhhhhh\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.eurotechStudy.step_definitions.LoginStepDefs.theUserShouldBeAbleToLoginAndSeeMessage(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat com.eurotechStudy.step_definitions.LoginStepDefs.theUserShouldBeAbleToLoginAndSeeMessage(LoginStepDefs.java:65)\n\tat ✽.the user should be able to login and see message \"oykhhhhhhhh\"(file:///Users/erhanilgar/IdeaProjects/seleniumProject/src/main/MotorolaCucumber/src/test/resources/features/AccountTypes.feature:17)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});