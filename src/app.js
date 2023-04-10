import express from 'express';
import {engine} from 'express-handlebars';
import path from 'path';

import indexRoutes from "./routes/index.routes";
import morgan from "morgan";

const app = express();

app.set('views',path.join(__dirname,'views'));
app.engine(".hbs",engine({
    layoutsDir: path.join(app.get('views'),'layouts'),
    //partialsDir: path.join(app.get('views'),'layouts'), // {{>nombre}}
    defaultLayout: 'main',
    extname:".hbs",
}))
app.set("view engine", ".hbs");

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

app.use(indexRoutes);

app.use(express.static(path.join(__dirname,"public")));

export default app;
