"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const ProgramRoutes_1 = __importDefault(require("../../routes/programs/ProgramRoutes"));
const SubjectRoutes_1 = __importDefault(require("../../routes/subjects/SubjectRoutes"));
const AccessRoutes_1 = __importDefault(require("../../routes/access/AccessRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startSettings();
        this.activateRoutes();
    }
    startSettings() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activateRoutes() {
        this.app.use('/api/program', ProgramRoutes_1.default);
        this.app.use('/api/subject', SubjectRoutes_1.default);
        this.app.use('/api', AccessRoutes_1.default);
    }
    boot() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('WORKING!', this.app.get('PORT'));
        });
    }
}
exports.default = Server;
