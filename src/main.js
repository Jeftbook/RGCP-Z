const express = require('express');
const cors = require('cors');
const app = express();

const { CreateUser, ReadUser, UpadteUser, DeleteUser } = require('./database/database');

app.use(express.json());
app.use(cors());

//Enviar datos
app.post('/users', (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    console.log('AlgoPost');
    
    CreateUser(nombre, apellido, (err) => {
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
            // res.json(rows);
            res.send("Hola mundo " + rows[0].id);
        }
    });
});

//Actualizar datos
app.put('users/:id', (req, res) => {

    UpadteUser([email, nombre, apellido, telefono, ser_parte_como, nombre_institucion, tipo_institucion, desarrolla_su_tare_como], (err) => {
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