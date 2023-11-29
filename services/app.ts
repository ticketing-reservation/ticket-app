import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

export class ExpressInstance {
    private static expressInstance : ExpressInstance;
    
    private _app: express.Application;

    private constructor() {
        this._app = express();

        this._app.use(cors());

        this.setupMiddlewares();

        this.setupRoutes();
    }

    private setupMiddlewares(): void {
        this._app.use(express.json({limit: '50mb'}));
        this._app.use(express.urlencoded({limit: '50mb', extended:true}));
        this._app.use(morgan('dev'));
        // TODO: set spesific origin
        this._app.use(cors({ origin: '*', credentials: true }));
        this._app.use(helmet({ crossOriginResourcePolicy: false }));
        this._app.use(cookieParser());
    }

    private setupRoutes(): void {
        
    }

    public static getInstance(): ExpressInstance {
        if (! ExpressInstance.expressInstance) {
            ExpressInstance.expressInstance = new ExpressInstance()
        }

        return ExpressInstance.expressInstance;
    }

    public getApp(): express.Application {
        return this._app;
    }
}  