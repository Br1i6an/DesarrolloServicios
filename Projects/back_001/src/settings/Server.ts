import cors from 'cors';
import morgan from 'morgan';
import express from 'express'
import routeTestAPI from '../routes/TestRoute';

class Server{
    public app: express.Application;

    constructor(){
        this.app = express();
        this.startSettings();
        this.activateRoutes();
    }

    public startSettings():void{
        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({limit: '100mb'}));
        this.app.use(express.urlencoded({extended: true}));        
    }
    public activateRoutes():void{
        this.app.use('/api/dontbelieve',routeTestAPI);
    }
    public boot():void{
        this.app.listen(this.app.get('PORT'),()=>{
            console.log('WORKING!!!',this.app.get('PORT'));
        });
    }
}

export default Server;