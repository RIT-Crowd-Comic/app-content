

import dotenv from 'dotenv'
dotenv.config()

import { Sequelize } from "sequelize";
import { setupAssociations, syncTables } from "./initializeModels";
import { User, modelDefiners } from './models'
import UserService from './services/UserService';
import { PanelSet } from './models/panelSet.model';

/**
 * SSL is required for Heroku Postgres
 */
const sslOptions = process.env.SSL === 'true' ?
    { dialectOptions: { ssl: { rejectUnauthorized: false }, }, } :
    {};

const sequelize = new Sequelize(
    process.env.DATABASE_URL ?? '',
    {
        logging:  false,
        protocol: 'postgres',
        dialect:  'postgres',
        ...sslOptions,
        pool:     {
            max:     5,
            min:     0,
            acquire: 30000,
            idle:    10000
        },
    }
);

// actually define each model
modelDefiners.forEach(modelDefiner => modelDefiner(sequelize));

// additional setup
setupAssociations(sequelize);

// last step is to make sure tables actually exist
syncTables(sequelize).then(
    async () => {
        await PanelSet.create({ author_id: "ID" });
    } );

export default sequelize;
