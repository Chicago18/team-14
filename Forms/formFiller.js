const pdfFillForm = require('pdf-fill-form');
const fs = require('fs');

pdfFillForm.read('Forms/English-IntakeDFSS_Form-2018.pdf')
.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(err);
});

/*
pdfFields = pdfFillForm.readSync('English-IntakeDFSS_Form-2018.pdf');
console.log(pdfFields);
*/

pdfFillForm.write('Forms/English-IntakeDFSS_Form-2018.pdf', 
    { "Agency Name Field": "test" }, 
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