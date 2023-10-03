const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/database_RGCP.db');


//Guarda la info del nuevo usuario en la base de datos
function CreateUser(email, nombre, apellido, telefono, ser_parte_como, nombre_institucion, tipo_institucion, desarrolla_su_tare_como, callback){
    db.run("INSERT INTO ser_parte_usuarios (email, nombre, apellido, telefono, ser_parte_como, nombre_institucion, tipo_institucion, desarrolla_su_tare_como) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [email, nombre, apellido, telefono, ser_parte_como, nombre_institucion, tipo_institucion, desarrolla_su_tare_como], callback);
}

//Trae los datos del usuario de la base de datos
function ReadUser(callback) {
    db.all("SELECT rowid AS id, email, nombre, apellido, telefono, ser_parte_como, nombre_institucion, tipo_institucion, desarrolla_su_tare_como FROM ser_parte_usuarios", callback);
}

//Actualiza los datos del usario en la base de datos
function UpdateUser(email, nombre, apellido, id, callback) {
    db.run("UPDATE ser_parte_usuarios SET email = ?, nombre = ?, apellido = ? WHERE rowid = ?", [email, nombre, apellido, id], callback)
}

//Elimina al usuario de la base de datos
function DeleteUser(id, callback) {
    db.run("DELETE FROM ser_parte_usuarios WHERE id = ?", [id], callback);
}

function DevolverUsuario(id, callback) {
    db.get("SELECT * FROM ser_parte_usuarios WHERE id = ?", [id], callback);
}

module.exports = {
    CreateUser,
    ReadUser,
    UpdateUser,
    DeleteUser,
    DevolverUsuario
}