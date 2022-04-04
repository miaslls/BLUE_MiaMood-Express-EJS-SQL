'use strict';

const Sequelize = require('sequelize');

const connection = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: 'postgres',
        dialectOptions: {
            sll: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = connection;