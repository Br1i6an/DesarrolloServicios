// ********************************************************
Primero lo primero haga el init
npm init

// ********************************************************

src
    settings
    controllers
    daos
    middleware
    models
    repositories
    routes
    index.ts

// *********************************************************

Y ahora a instalar paquetes.

npm i cors
npm i morgan
npm i express
npm i jsonwebtoken
npm i pg-promise

npm uninstall packageName

npm i @types/cors --save-dev
npm i @types/morgan --save-dev
npm i @types/express --save-dev
npm i @types/jsonwebtoken --save-dev
npm i nodemon --save-dev   Permitir ejecutar la app en local.

// ********************************************************
Crear nuestros propios scripts.
    "dev": "nodemon build index.js",
    "build": "tsc -w"

// ********************************************************
Indicar que usaremos typescripts
tsc --init
Puedes hacerlo dentro de la carpeta desde administrador de archivos usando CMD.

// ********************************************************

En el tsconfig.json asegurarse de "outDir": "./build"
Revisar el target tiene que ser es2016

// ********************************************************

Para instalar todos los paquetes del Json -> npm i

// ********************************************************
Server

import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import xxxxx from '../../routes/xxxxx';

class Server {

    public app: express.Application;

    constructor(){
        this.app = express();
        this.startConfig();
        this.activateRoutes();

    }

    public startConfig(): void{

        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({limit: '100mb'}));
        this.app.use(express.urlencoded({extended: true}));
    }

    public activateRoutes(){
        this.app.use('/api', xxxxx);
    }

    public start(){
        this.app.listen(this.app.get('PORT'), ()=> {
            console.log('WORKS! ', this.app.get('POST'));
        })

    }
}

export default Server;

// ********************************************************

First one 

npm run build

Second one

npm run dev
