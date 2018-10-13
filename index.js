
let bodyParser = require('body-parser'),
    db         = require('./database/db.js');


    /*
    [body.projectName, body.agencyName, body.lastName, body.firstName, body.middleInitial, body.streetNum, 
        body.streetDirection, body.streetName, body.aptNo, body.areaCode, body.phoneNumber, body.zipCode,
        body.isHomelessYouth, body.age, body.birthDate, body.grade, body.school, body.disabledText, body.gender,
        body.isHispanic, body.typeOfProgram, body.isDisabled, body.race, body.communityArea, body.ward]);
    */
let obj = {projectName : 'projectTest', agencyName : 'agencyTest', lastName : 'lastNameTest', firstName : 'firstNameTest', middleInitial : 'middleInitialTest', 
            streetNum : 'streetNumTest', streetDirection : 'streetDirectionTest', streetName : 'streetNameTest', aptNo : 'aptNoTest', areaCode : 'areaCodeTest', 
            phoneNumber : 'phoneNumberTest', zipCode : 'zipCodeTest', isHomelessYouth : 0, age : 'ageTest', birthDate : 'birthDateTest',
            grade : 'gradeTest', school : 'schoolTest', disabledText : 'disabledText', gender: 1, isHispanic : 0, typeOfProgram : 3, isDisabled : 1, race : 2, 
            communityArea : 'communityAreaTest', ward : 'wardTest'};


function addToClientIntake1(req) {
    db.addClientIntake(req).then(function(data) {
        //res.sendStatus(200);
    }).catch(function(error) {
        console.log(error);
       // res.sendStatus(500);
    });
}

addToClientIntake1(obj);