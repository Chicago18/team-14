const mysql = require('mysql'),
      nconf = require('nconf');

nconf.file({
  file: './config/config.json'
  });

if (!Object.keys(nconf.get()).length) {
    throw new Error('Unable to load config file. Check to make sure config/config.json exists');
}
//comment
let connection = mysql.createConnection({
    host    : nconf.get('mysql').host,
    user    : nconf.get('mysql').user,
    password: nconf.get('mysql').password,
    database: nconf.get('mysql').database
});

connection.connect();

executeQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, function(error, results, fields) {
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(results);
        });
        //connection.end();
    });
}

exports.addClientIntake1 = (body) => {
    return executeQuery('INSERT INTO ClientIntake1 (ProjectName, AgencyName, LastName, FirstName, MiddleInitial, \
        StreetNum, StreetDirection, StreetName, AptNo, AreaCode, PhoneNumber, ZipCode, isHomelessYouth, \
        Age, Birthdate, Grade, School, isDisabledText, Gender, isHispanic, TypeOfProgram, isDisabled, Race, \
        CommunityArea, Ward) Values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [body.projectName, body.agencyName, body.lastName, body.firstName, body.middleInitial, body.streetNum,
        body.streetDirection, body.streetName, body.aptNo, body.areaCode, body.phoneNumber, body.zipCode,
        body.isHomelessYouth, body.age, body.birthDate, body.grade, body.school, body.disabledText, body.gender,
        body.isHispanic, body.typeOfProgram, body.isDisabled, body.race, body.communityArea, body.ward]);
}

exports.addClientIntake2 = (body) => {
    return executeQuery('INSERT INTO ClientIntake2 (FamilyType, HousingStatus, FoodStamps, FreeLunch, \
        HealthInsurance, Employment, Pension, TANF, Earnfare, SocialSecurity, UnemploymentInsurance, \
        OtherSource, SSI, Referral, CHAClientId) Values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [body.familyType, body.housingStatus, body.foodStamps, body.freeLunch, body.healthInsurance, body.employment,
        body.pension, body.TANF, body.earnfare, body.socialSecurity, body.unemploymentInsurance, body.otherSource,
        body.SSI, body.referral, body.CHAClientId]);
}

exports.getLastClientIntake1 = () => {
    return executeQuery('SELECT * FROM ClientIntake1 ORDER BY ID DESC LIMIT 1', []);
}

exports.getLastClientIntake2 = () => {
    return executeQuery('SELECT * FROM ClientIntake2 ORDER BY ID DESC LIMIT 1', []);
}
