const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/database_RGCP.db');


//Guarda la info del nuevo usuario en la base de datos
function CreateUser(callback){
    db.run("INSERT INTO ser_parte_usuarios () VALUES (?, ?)", [], callback);
}

//Trae los datos del usuario de la base de datos
function ReadUser(callback) {
    db.all("SELECT rowid AS id, email, nombre, apellido, telefono, ser_parte_como, nombre_institucion, tipo_institucion, desarrolla_su_tare_como FROM ser_parte_usuarios", callback);
}

//Actualiza los datos del usario en la base de datos
function UpadteUser() {
    
}

//Elimina al usuario de la base de datos
function DeleteUser(id, callback) {
    db.run("DELETE FROM ser_parte_usuarios WHERE rowid =?", [id], callback);
}

module.exports = {
    CreateUser,
    ReadUser,
    UpadteUser,
    DeleteUser
}