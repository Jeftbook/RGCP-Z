const fs = require('fs');

function imprimirJSON(data) {
    let jsonData = JSON.stringify(data);

    fs.writeFile('./src/json_pruebas/db_pruebas.json', jsonData, (error) => {
        if (error) {
            console.log(`Error: ${error}`);
        } else {
            console.log('Archivo JSON generado correctamente');
        }
    });
}

module.exports = {
    imprimirJSON
}