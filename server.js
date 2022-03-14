const express = require('express')
require('dotenv').config()

const dbconfig = require('./empleados-restapi/configuracion/db');
const empleadosControlador = require('./empleados-restapi/rutas/empleados')
const areasControlador = require('./empleados-restapi/rutas/areas')
const subareasControlador = require('./empleados-restapi/rutas/subareas')
const tiposdocumentosControlador = require('./empleados-restapi/rutas/tiposdocumentos')

const app = express()
app.set('port', process.env.PORT || 3000)


app.use(express.json())
dbconfig.init(app)

const path = require('path');

app.use('/api', empleadosControlador)
app.use('/api', areasControlador)
app.use('/api', subareasControlador)
app.use('/api', tiposdocumentosControlador)
app.use('/', express.static('public/'));


app.listen(app.get('port'), ()=>{
    console.log('El servidor esta corriendo en el puerto: ', app.get('port'))
})
