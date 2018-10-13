
let  express = require('express'),
    bodyParser = require('body-parser'),
    db         = require('./database/db.js'),
    formFiller = require('./Forms/formFiller.js');

const app = express();


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(__dirname));

    /*
   [body.familyType, body.housingStatus, body.foodStamps, body.freeLunch, body.healthInsurance, body.employment, 
        body.pension, body.TANF, body.earnfare, body.socialSecurity, body.UnemploymentInsurance, body.otherSource,
        body.SSI, body.referral, body.CHAClientId]);
    */

//Tests
let obj1 = {projectName : 'projectTest', agencyName : 'agencyTest', lastName : 'lastNameTest', firstName : 'firstNameTest', middleInitial : 'middleInitialTest', 
            streetNum : 'streetNumTest', streetDirection : 'streetDirectionTest', streetName : 'streetNameTest', aptNo : 'aptNoTest', areaCode : 'areaCodeTest', 
            phoneNumber : 'phoneNumberTest', zipCode : 'zipCodeTest', isHomelessYouth : 0, age : 'ageTest', birthDate : 'birthDateTest',
            grade : 'gradeTest', school : 'schoolTest', disabledText : 'disabledText', gender: 1, isHispanic : 0, typeOfProgram : 1, isDisabled : 1, race : 2, 
            communityArea : 'communityAreaTest', ward : 'wardTest'};

let obj2 = {familyType : 2, housingStatus : 3, foodStamps: 0, freeLunch : 1, healthInsurance : 1, employment : 1, pension : 1, TANF : 0, earnfare : 0, 
            socialSecurity : 1, unemploymentInsurance : 1, otherSource : 1, SSI : 1, referral : 'referralTest', CHAClientId : 'CHAClientIdTest'};

/*
let obj3 = {
    ProjectName: 'projectTest',
    AgencyName: 'agencyTest',
    LastName: 'lastNameTest',
    FirstName: 'firstNameTest',
    MiddleInitial: 'middleInitialTest',
    StreetNum: 'streetNumTest',
    StreetDirection: 'streetDirectionTest',
    StreetName: 'streetNameTest',
    AptNo: 'aptNoTest',
    AreaCode: 'areaCodeTest',
    PhoneNumber: 'phoneNumberTest',
    ZipCode: 'zipCodeTest',
    isHomelessYouth: 0,
    Age: 'ageTest',
    Birthdate: 'birthDateTest',
    Grade: 'gradeTest',
    School: 'schoolTest',
    isDisabledtext: 'disabledText',
    Gender: 1,
    isHispanic: 0,
    TypeOfProgram: 2,
    isDisabled: 1,
    Race: 2,
    CommunityArea: 'communityAreaTest',
    Ward: 'wardTest',
    ID: 5 }


let obj4 = {
    ID: 5,
    FamilyType: 2,
    HousingStatus: 3,
    FoodStamps: 0,
    FreeLunch: 1,
    HealthInsurance: 1,
    Employment: 1,
    Pension: 1,
    TANF: 0,
    Earnfare: 0,
    SocialSecurity: 1,
    UnemploymentInsurance: 1,
    OtherSource: 1,
    SSI: 1,
    Referral: 'referralTest',
    CHAClientId: 'CHAClientIdTest'
}
*///app.post('/new-item', (req, res) => {

app.post('/addClientIntake1', (req, res) => {
    db.addClientIntake1(req.body).then(function(data) {
        res.sendStatus(200);
    }).catch(function(error) {
        console.log(error);
        res.sendStatus(500);
    });
});

/*
function addToClientIntake2(req) {
    db.addClientIntake2(req).then(function(data) {
        //res.sendStatus(200);
        return;
    }).catch(function(error) {
        console.log(error);
       // res.sendStatus(500);
    });
}
*/

app.post('/addClientIntake2', (req, res) => {
    db.addClientIntake2(req.body).then(function(data) {
        res.sendStatus(200);
    }).catch(function(error) {
        console.log(error);
        res.sendStatus(500);
    });
});


app.get('/getLastClientIntake1', (req, res) => {
    db.getLastClientIntake1().then(function(data) {
        console.log(data);
        res.send(data);
        return data;
    }).catch(function(error) {
        console.log(error);
    });
});

app.get('/getLastClientIntake2', (req, res) => {
    db.getLastClientIntake2().then(function(data) {
        //res.send(data);
        console.log(data);
        res.send(data);
        return data;
    }).catch(function(error) {
        console.log(error);
        //res.sendStatus(500);
    });
})

const port = process.env.PORT || 8650;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//let datap1 = getLastClientIntake1();
//let datap2 = getLastClientIntake2();

//formFiller.fillFormP1(obj3);
//formFiller.fillFormP2(obj4);

/* Testing */
/*
addToClientIntake1(obj1);
addToClientIntake2(obj2);

getLastClientIntake1();
getLastClientIntake2();
*/