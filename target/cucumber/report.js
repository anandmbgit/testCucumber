$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Capture the BMI Result value \u0026 Print it",
  "description": "",
  "id": "capture-the-bmi-result-value-\u0026-print-it",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Capture the BMI Result value \u0026 Print it",
  "description": "",
  "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate the Tittle of the current page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the Title of the Page again",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters Age as \"\u003cAge\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters height as \"\u003cHeight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters weight as \"\u003cWeight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User taps on Calulate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 16,
      "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 17,
      "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 18,
      "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 19,
      "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 20,
      "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 21,
      "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Capture the BMI Result value \u0026 Print it",
  "description": "",
  "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate the Tittle of the current page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the Title of the Page again",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters Age as \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters height as \"127\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters weight as \"40\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User taps on Calulate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stefDefLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 7003703200,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 33353200,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.I_click()"
});
formatter.result({
  "duration": 1195717600,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.i_verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 17963400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "stefDefLogin.i_Enter_Age_as(String)"
});
formatter.result({
  "duration": 191099100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "127",
      "offset": 23
    }
  ],
  "location": "stefDefLogin.enter_Height(String)"
});
formatter.result({
  "duration": 387149600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 23
    }
  ],
  "location": "stefDefLogin.enter_weight(String)"
});
formatter.result({
  "duration": 229242000,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.tap_on_Calulate_BMI()"
});
formatter.result({
  "duration": 1229595200,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 64226100,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.close_the_browser()"
});
formatter.result({
  "duration": 1033256800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Capture the BMI Result value \u0026 Print it",
  "description": "",
  "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate the Tittle of the current page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the Title of the Page again",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters Age as \"30\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters height as \"156\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters weight as \"70\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User taps on Calulate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stefDefLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 5214204900,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 20537900,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.I_click()"
});
formatter.result({
  "duration": 1263819800,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.i_verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 24640000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 20
    }
  ],
  "location": "stefDefLogin.i_Enter_Age_as(String)"
});
formatter.result({
  "duration": 233940200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "156",
      "offset": 23
    }
  ],
  "location": "stefDefLogin.enter_Height(String)"
});
formatter.result({
  "duration": 392590400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 23
    }
  ],
  "location": "stefDefLogin.enter_weight(String)"
});
formatter.result({
  "duration": 290590500,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.tap_on_Calulate_BMI()"
});
formatter.result({
  "duration": 1075185700,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 72580500,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.close_the_browser()"
});
formatter.result({
  "duration": 960413700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Capture the BMI Result value \u0026 Print it",
  "description": "",
  "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate the Tittle of the current page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the Title of the Page again",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters Age as \"25\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters height as \"152\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters weight as \"55\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User taps on Calulate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stefDefLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 5036678100,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 14386300,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.I_click()"
});
formatter.result({
  "duration": 1241346200,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.i_verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 21765900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 20
    }
  ],
  "location": "stefDefLogin.i_Enter_Age_as(String)"
});
formatter.result({
  "duration": 132718900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "152",
      "offset": 23
    }
  ],
  "location": "stefDefLogin.enter_Height(String)"
});
formatter.result({
  "duration": 228793500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 23
    }
  ],
  "location": "stefDefLogin.enter_weight(String)"
});
formatter.result({
  "duration": 475372800,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.tap_on_Calulate_BMI()"
});
formatter.result({
  "duration": 1263508500,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 87287800,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.close_the_browser()"
});
formatter.result({
  "duration": 894718000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Capture the BMI Result value \u0026 Print it",
  "description": "",
  "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate the Tittle of the current page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the Title of the Page again",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters Age as \"20\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters height as \"160\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters weight as \"45\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User taps on Calulate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stefDefLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 5029258200,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 34696000,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.I_click()"
});
formatter.result({
  "duration": 1091724200,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.i_verify_the_Title_of_the_Page_again()"
});
formatter.result({
  "duration": 18489900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 20
    }
  ],
  "location": "stefDefLogin.i_Enter_Age_as(String)"
});
formatter.result({
  "duration": 371999500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 23
    }
  ],
  "location": "stefDefLogin.enter_Height(String)"
});
formatter.result({
  "duration": 418521700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 23
    }
  ],
  "location": "stefDefLogin.enter_weight(String)"
});
formatter.result({
  "duration": 199424300,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.tap_on_Calulate_BMI()"
});
formatter.result({
  "duration": 1225480600,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 66695900,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.close_the_browser()"
});
formatter.result({
  "duration": 929153900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Capture the BMI Result value \u0026 Print it",
  "description": "",
  "id": "capture-the-bmi-result-value-\u0026-print-it;capture-the-bmi-result-value-\u0026-print-it;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate the Tittle of the current page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the Title of the Page again",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters Age as \"35\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters height as \"160\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters weight as \"70\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User taps on Calulate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stefDefLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 4984720900,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 87471600,
  "status": "passed"
});
formatter.match({
  "location": "stefDefLogin.I_click()"
});
