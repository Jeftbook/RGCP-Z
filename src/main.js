const express = require('express');
const cors = require('cors');
const app = express();

const { CreateUser, ReadUser, UpadteUser, DeleteUser } = require('./database/database');

const { imprimirJSON } = require('./json_pruebas/generar_json');

app.use(express.json());
app.use(cors());

//Enviar datos
app.post('/users', (req, res) => {
    const email = "hola@mundo.com.ar"; //Texto
    const nombre = "Hola"; //Texto
    const apellido = "Mundo"; //Texto
    const telefono = 3541; //Numero
    const ser_parte_como = "Algo"; //Texto
    const nombre_institucion = "Alguito"; //Texto
    const tipo_institucion = "Otro"; //Texto
    const desarrolla_su_tare_como = "Humor"; //Texto

    console.log('AlgoPost');
    
    CreateUser(email, nombre, apellido, telefono, ser_parte_como, nombre_institucion, tipo_institucion, desarrolla_su_tare_como, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Usuario agregado correctamente');
        }
    })
});

//Pedir datos
app.get('/users', (req, res) => {
    
    console.log('AlgoGet');

    ReadUser((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
            console.log(rows);
            imprimirJSON(rows);
        }
    });
});

//Actualizar datos
app.put('users/:id', (req, res) => {

    UpadteUser(email, nombre, apellido, telefono, id, (err) => {
        if(err){
            res.status(500).send(err.message);
        } else {
            res.status(200).send('Usuario actualizado correctamente');
        }
    });
});

//Eliminar datos respecto al id
app.delete('/users/:id', (req, res) => {
    DeleteUser(id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send('Usuario eliminado correctamente');
        }
    })
});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});