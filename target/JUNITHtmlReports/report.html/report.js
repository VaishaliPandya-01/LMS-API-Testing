$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/batchSampleTest.feature");
formatter.feature({
  "name": "Batch Requests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify can send get request to retrieve all Batch data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ViewAllBatch"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get request to view all batches \"/batches\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.get_request_to_view_all_batches(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cretae new Program for Batch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewProgram"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request to create program \"/saveprogram\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.post_request_to_create_program(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cretae Batch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewBatch"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request to create batch \"/batches\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.post_request_to_create_batch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cretae duplicate Batch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateDuplicateBatch"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "post request to create duplicate batch \"/batches\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.post_request_to_create_duplicate_batch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get Batches By Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ViewBatchByID"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get request by batch ID to \"/batches/batchId/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.get_request_by_batch_ID_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate batch Id is displayed as 0",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_batch_Id_is_displayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get Batches By Batch Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ViewBatchByName"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get request by batch name to \"/batches/batchName/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.get_request_by_batch_name_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate batch Name is displayed as \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_batch_Name_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get Batches By Program Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ViewBatchByProgramID"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get request by program ID to \"/batches/program/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.get_request_by_program_ID_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Program Id is displayed as 0",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_Program_Id_is_displayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Update Batch By Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UpdateBatchByID"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put request to update batch data \"/batches/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.put_request_to_update_batche_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Batch By Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteBatchByID"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete batch request to \"/batches/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.delete_batch_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Batch By already deleted  Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteSameBatchByID"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete already deleted batch request to \"/batches/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.delete_already_deleted_batch_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Program by name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteProgramByName"
    }
  ]
});
formatter.step({
  "name": "A Service with LMS API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.a_Service_with_lms_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete program request to \"/deletebyprogname/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.delete_program_request_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BatchSD.Validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/programsSampleTest.feature");
formatter.feature({
  "name": "Program Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LMSApplication"
    }
  ]
});
formatter.scenario({
  "name": "Verify can send get request to retrieve all program data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@GAllProgram"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request \"/allPrograms\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\", valid response body and json schema validated for successful GET request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify can send get request to retrieve all program data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request \"/allProgram\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"404\", valid response body and json schema validated for successful GET request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateNewUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends POST request to create program \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"201\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "create",
        "0"
      ]
    },
    {
      "cells": [
        "create",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@CreateNewUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends POST request to create program \"create\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_POST_request_to_create_program(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_get_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@CreateNewUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends POST request to create program \"create\" and 1",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_POST_request_to_create_program(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_get_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends POST request with data using \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"400\" for duplicate entry",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "postdata",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends POST request with data using \"postdata\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_POST_request_with_data_using_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"400\" for duplicate entry",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_get_status_code_for_duplicate_entry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify  can send get request to retrieve single Program dara",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@GETProgramId"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for single Programid data",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_GET_request_for_single_Programid_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\" for getProgramId and Name",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_get_status_code_for_getProgramId_and_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Update By Program Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UpdateProgramById"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends put request to \"/putprogram/\" and \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code update validation \"200\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "putdataId",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Update By Program Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@UpdateProgramById"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends put request to \"/putprogram/\" and \"putdataId\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_put_request_to_and_and(java.lang.String,java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code update validation \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_get_status_code_update_validation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Update By Program Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UpdateProgramByName"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends put request to \"/program/\" byName \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code update validation \"200\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "putdataName",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Update By Program Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@UpdateProgramByName"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends put request to \"/program/\" byName \"putdataName\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_put_request_to_byName_and(java.lang.String,java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code update validation \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_get_status_code_update_validation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Program By Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@DeleteProgramById"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends Delete program by id \"/deletebyprogid/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_Delete_program_by_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should validate status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_validate_status_code_deletebyprogname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Program By Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LMSApplication"
    },
    {
      "name": "@DeleteProgramByName"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends Delete program by Name \"/deletebyprogname/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_sends_Delete_program_by_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should validate status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ProgramsSD.user_should_validate_status_code_deletebyprogname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});