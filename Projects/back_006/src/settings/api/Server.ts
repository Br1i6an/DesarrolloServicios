import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import programRoutes from '../../routes/ProgramRoutes';
import PensumRoutes from '../../routes/PensumRoutes';
import SemesterRoutes from '../../routes/SemesterRoutes';
import SubjectRoutes from '../../routes/SubjectRoutes';
import SubjectPensumRoutes from '../../routes/SubjectPensumRoutes';
import AccessRoutes from '../../routes/AccessRoutes';
import validation from '../../middleware/validation';

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.startConfig();
        this.activateRoutes();

    }

    public startConfig(): void {

        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ extended: true }));
    }

    public activateRoutes() {

        this.app.use('/api/private/prog', programRoutes);
        this.app.use('/api/private/pen', PensumRoutes);
        this.app.use('/api/private/sem', SemesterRoutes);
        this.app.use('/api/private/sub', SubjectRoutes);
        this.app.use('/api/private/subpen', SubjectPensumRoutes);
        this.app.use('/api/public/verify', AccessRoutes);
        this.app.use('/api/private/acc', validation.delToken, AccessRoutes);
    }

    public start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('WORKS! ', this.app.get('PORT'));
        })

    }
}

export default Server;