import { Router } from "express";
import { CreateUser, ReadUser, UpdateUser, DeleteUser, DevolverUsuario } from '../database/database.cjs';

const router = Router();

//Pagina para crear nuevo usuario
router.get('/add', (req, res) => {
    res.render('usuarios/add');
});

//Crear nuevo usuario
router.post('/add', async (req, res) => {
    const email = req.body.email;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = 3541;
    const ser_parte_como = 'algo1';
    const nombre_institucion = 'algo2';
    const tipo_institucion = 'algo3';
    const desarrolla_su_tare_como = 'algo4';

    CreateUser(email, nombre, apellido, telefono, ser_parte_como, nombre_institucion, tipo_institucion, desarrolla_su_tare_como, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Usuario agregado correctamente');
            res.redirect('/list');
        }
    })
});

//Devolver usuarios
router.get('/list', async (req, res) => {
    ReadUser((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            // console.log(rows);
            res.render('usuarios/list', { usuarios: rows });
        }
    });
});

//Devolver datos del usuario para actualizar
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;

    DevolverUsuario(id, (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            // console.log(rows);
            res.render('usuarios/edit', { usuario: rows });
        }
    });
});

//Actualizar usuarios
router.post('/edit/:id', async (req, res) => {

    const {id} = req.params;
    const email = req.body.email;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    UpdateUser(email, nombre, apellido, id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            // res.status(200).send('Usuario actualizado correctamente');
            res.redirect('/list');
        }
    });
});

//Eliminar usuario
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;

    DeleteUser(id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            // res.status(200).send('Usuario eliminado correctamente');
            res.redirect('/list');
        }
    })
});

export default router;