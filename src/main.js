const express = require('express');
const cors = require('cors');
const app = express();

const { CreateUser, ReadUser, UpadteUser, DeleteUser } = require('./database/database');

app.use(express.json());
app.use(cors());

app.post('/users', (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    console.log('AlgoPost');
    
    CreateUser(, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Usuario agregado correctamente');
        }
    })
});

app.get('/users', (req, res) => {
    
    console.log('AlgoGet');

    ReadUser((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

app.delete('/users/:id', (req, res) => {
    DeleteUser(id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send('Usuario eliminado correctamente');
        }
    })
});

app.put();


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
    
});