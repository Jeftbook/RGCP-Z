import express from 'express'
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import usuariosRoutes from "./routes/usuario.routes.js";

//Inicializacion
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Routes
app.get('/', (req, res)=>{
    res.render('index')
})

app.use(usuariosRoutes);

//Public files
app.use(express.static(join(__dirname, 'public')));

//Servidor
app.listen(app.get('port'), ()=>
    console.log('Servidor escuchando en el puerto ', app.get('port'))
);