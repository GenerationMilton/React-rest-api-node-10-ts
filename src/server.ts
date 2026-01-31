import express from 'express';
import router from './router';
import db from './config/db'
import colors from 'colors';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import swaggerSpect, { swaggerUiOptions } from './config/swagget';

// Conectar a base de datos
export async function connectDB(){

    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.blue('Conexion exitosa a la BD'))
    } catch (error) {
        console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar a la BD'))
    }
}
connectDB()

// Instancia de express
const server = express()

// Permitir conexiones con CORS
const CorsOptions : CorsOptions = {
    origin: function(origin, callback){
        console.log(origin)
        if(origin === process.env.FRONTEND_URL){
            console.log('Permitir....')
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
            console.log('Denegar....')
        }
    }
}
server.use(cors(CorsOptions))

// Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', router)

// Docs
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpect, swaggerUiOptions))
export default server