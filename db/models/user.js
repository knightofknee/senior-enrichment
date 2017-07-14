'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

//intended for future use for logging in users and giving editing privileges
module.exports = db.define('user', {
  name: Sequelize.STRING,
})
