const mysql = require('mysql')
const myconn = require('express-myconnection')

const dbOptions = {
    host: process.env.MYSQL_ADDON_HOST,
    port: process.env.MYSQL_ADDON_PORT,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB
}


exports.init = function (app) { 
    app.use(myconn(mysql, dbOptions, 'single'))
}
