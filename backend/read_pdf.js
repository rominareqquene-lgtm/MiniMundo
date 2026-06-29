const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../Formato_Propuesta_App_Movil_Estudiantes (1).pdf');

pdf(dataBuffer).then(function(data) {
    console.log("== BEGIN PDF TEXT ==");
    console.log(data.text);
    console.log("== END PDF TEXT ==");
}).catch(err => console.error("Error:", err));
