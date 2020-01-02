const knex = require('knex')

const knexFile = require('../knexfile')

const knexConfig = knexFile.development;

module.exports = knex(knexConfig);