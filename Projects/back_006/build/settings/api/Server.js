"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const ProgramRoutes_1 = __importDefault(require("../../routes/ProgramRoutes"));
const PensumRoutes_1 = __importDefault(require("../../routes/PensumRoutes"));
const SemesterRoutes_1 = __importDefault(require("../../routes/SemesterRoutes"));
const SubjectRoutes_1 = __importDefault(require("../../routes/SubjectRoutes"));
const SubjectPensumRoutes_1 = __importDefault(require("../../routes/SubjectPensumRoutes"));
const AccessRoutes_1 = __importDefault(require("../../routes/AccessRoutes"));
const validation_1 = __importDefault(require("../../middleware/validation"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startConfig();
        this.activateRoutes();
    }
    startConfig() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activateRoutes() {
        this.app.use('/api/private/prog', ProgramRoutes_1.default);
        this.app.use('/api/private/pen', PensumRoutes_1.default);
        this.app.use('/api/private/sem', SemesterRoutes_1.default);
        this.app.use('/api/private/sub', SubjectRoutes_1.default);
        this.app.use('/api/private/subpen', SubjectPensumRoutes_1.default);
        this.app.use('/api/public/verify', AccessRoutes_1.default);
        this.app.use('/api/private/acc', validation_1.default.delToken, AccessRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('WORKS! ', this.app.get('PORT'));
        });
    }
}
exports.default = Server;
