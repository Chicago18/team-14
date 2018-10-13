const pdfFillForm = require('pdf-fill-form');
const fs = require('fs');

/*
pdfFillForm.read('Forms/English-IntakeDFSS_Form-2018.pdf')
.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(err);
});
*/
let formMap = {};

pdfFields = pdfFillForm.readSync('Forms/English-IntakeDFSS_Form-2018.pdf');
pdfFields.forEach(element => {
    if (element.type === 'text') {
        formMap[element.name] = "";
    }
    else {
        formMap[element.name] = false;
    }
});

exports.fillFormP1 = (data) => {

    formMap['ProjectName Field'] = data.ProjectName;
    formMap['Agency Name Field'] = data.AgencyName;
    formMap['Last Name Field'] = data.LastName;
    formMap['First Name Field'] = data.FirstName;
    formMap['Middle Initial Field'] = data.MiddleInitial;
    formMap['StreetNum Field'] = data.StreetNum;
    formMap['StreetDirection Field'] = data.StreetDirection;
    formMap['StreetName FIeld'] = data.StreetName;
    formMap['AptNo Field'] = data.AptNo;
    formMap['AreaCode Field'] = data.AreaCode;
    formMap['PhoneNumber Field'] = data.PhoneNumber;
    formMap['ZipCode Field'] = data.ZipCode;
    formMap['Age Field'] = data.Age;
    formMap['BirthDate Field'] = data.Birthdate;
    formMap['Grade Field'] = data.Grade;
    formMap['School Field'] = data.School;
    formMap['isDisabledText Field'] = data.isDisabledtext;
    formMap['CommunityArea Field'] = data.CommunityArea;
    formMap['Ward Field'] = data.Ward;

    let typesofPrograms = ['Out of School Field', 'PI Field', 'CHA Field'];
    let races = ['isAmericanIndian Field', 'isAsian Field', 'isBlack Field', 'isPacificIslander Field', 'isWhite Field', 'isOther Field'];
    if (data.isHomeslessYouth)
        formMap['isHomelessYouth Field'] = true;
    if (data.Gender)
        formMap['isMale Field'] = true;
    else 
        formMap['isFemale Field'] = true;
    if (data.isHispanic) 
        formMap['isHispanic Field'] = true;
    else 
        formMap['isNonHispanic'] = true;
    
    formMap[typesofPrograms[data.TypeOfProgram]] = true;

    if (data.isDisabled)
        formMap['isDisabled Field'] = true;
    else 
        formMap['isNotDisabled Field'] = true;

    formMap[races[data.Race]] = true;
};

exports.fillFormP2 = (data) => {

    let FamilyTypes = ['isSingleFemale Field', 'isSingleMale Field', 'isTwoParent Field',
                        'isIndependent Field', 'isRelative Field', 'isGuardian Field'];
    
    let HousingTypes = ['isRent Field', 'isOwn Field', 'isHomeless Field', 'isTempHousing Field'];

    formMap[FamilyTypes[data.FamilyType]] = true;
    formMap[HousingTypes[data.HousingStatus]] = true;
                        
    if (data.FoodStamps)
        formMap['isFoodStamps Field'] = true;
    else 
        formMap['isNotFoodStamps Field'] = true;

    if (data.FreeLunch)
        formMap['isFreeLunch Field'] = true;
    else 
        formMap['isNotFreeLunch Field'] = true;
    
    if (data.HealthInsurance) 
        formMap['isHealthInsurance Field'] = true;
    else 
        formMap['isNotHealthInsurance Field'] = true;
    
    if (data.Employment)
        formMap['isEmployment Field'] = true;
    if (data.Pension)
        formMap['isPension Field'] = true;
    if (data.TANF)
        formMap['isTANF Field'] = true;
    if (data.Earnfare)
        formMap['isEarnfare Field'] = true;
    if (data.SocialSecurity)
        formMap['isSocialSecurity Field'] = true;
    if (data.UnemploymentInsurance)
        formMap['isUnemploymentInsurance Field'] = true;
    if (data.OtherSource)
        formMap['isOtherIncome Field'] = true;
    if (data.SSI)
        formMap['isSSI Field'] = true
    formMap['Referral Field'] = data.Referral;
    formMap['CHAClient Field'] = data.CHAClientId;

    pdfFillForm.write('Forms/English-IntakeDFSS_Form-2018.pdf', 
        formMap,
        { "save": "pdf", 'cores': 4, 'scale': 0.2, 'antialias': true } )
    .then(function(result) {
        fs.writeFile("test123.pdf", result, function(err) {
            if(err) {
           		return console.log(err);
           	}
           	console.log("The file was saved!");
        }); 
    }, function(err) {
      	console.log(err);
    });
};