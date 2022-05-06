$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking Hotel In Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User LogIn The Web Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;user-login-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"karthikraj0130\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Vfr4vfr$\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 7180788000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karthikraj0130",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 134941700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vfr4vfr$",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 117364000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 708829300,
  "status": "passed"
});
});