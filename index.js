
let bodyParser = require('body-parser'),
    db         = require('./database/db.js');


    /*
   [body.familyType, body.housingStatus, body.foodStamps, body.freeLunch, body.healthInsurance, body.employment, 
        body.pension, body.TANF, body.earnfare, body.socialSecurity, body.UnemploymentInsurance, body.otherSource,
        body.SSI, body.referral, body.CHAClientId]);
    */

//Tests
let obj1 = {projectName : 'projectTest', agencyName : 'agencyTest', lastName : 'lastNameTest', firstName : 'firstNameTest', middleInitial : 'middleInitialTest', 
            streetNum : 'streetNumTest', streetDirection : 'streetDirectionTest', streetName : 'streetNameTest', aptNo : 'aptNoTest', areaCode : 'areaCodeTest', 
            phoneNumber : 'phoneNumberTest', zipCode : 'zipCodeTest', isHomelessYouth : 0, age : 'ageTest', birthDate : 'birthDateTest',
            grade : 'gradeTest', school : 'schoolTest', disabledText : 'disabledText', gender: 1, isHispanic : 0, typeOfProgram : 3, isDisabled : 1, race : 2, 
            communityArea : 'communityAreaTest', ward : 'wardTest'};

let obj2 = {familyType : 2, housingStatus : 3, foodStamps: 0, freeLunch : 1, healthInsurance : 1, employment : 1, pension : 1, TANF : 0, earnfare : 0, 
            socialSecurity : 1, unemploymentInsurance : 1, otherSource : 1, SSI : 1, referral : 'referralTest', CHAClientId : 'CHAClientIdTest'};

function addToClientIntake1(req) {
    db.addClientIntake1(req).then(function(data) {
        //res.sendStatus(200);
        return;
    }).catch(function(error) {
        console.log(error);
       // res.sendStatus(500);
    });
}

function addToClientIntake2(req) {
    db.addClientIntake2(req).then(function(data) {
        //res.sendStatus(200);
        return;
    }).catch(function(error) {
        console.log(error);
       // res.sendStatus(500);
    });
}

function getLastClientIntake1(req) {
    db.getLastClientIntake1().then(function(data) {
        //res.send(data);
        console.log(data);
    }).catch(function(error) {
        console.log(error);
        //res.sendStatus(500);
    });
}

function getLastClientIntake2(req) {
    db.getLastClientIntake2().then(function(data) {
        //res.send(data);
        console.log(data);
    }).catch(function(error) {
        console.log(error);
        //res.sendStatus(500);
    });
}

addToClientIntake1(obj1);
addToClientIntake2(obj2);

getLastClientIntake1();
getLastClientIntake2();
