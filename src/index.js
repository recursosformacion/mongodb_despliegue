import app from "./app"
import  './config/database';
import { PORT } from "./config/config.env";


app.listen(PORT);
console.log('Servidor en puerto ' + PORT);
