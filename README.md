# wephelp-empleados
restapi e interfaz grafica para el mantenimiento de empleados utilizando NodeJS, Express, MySql, Bootstrap, BackboneJS.

Para el funcionamiento del proyecto esta se encuentra en el repositorio de github y desplegado en heroku, la base datos mysql se encuentra en clever-cloud.

URL de la solucion desplegada en heroku
https://wephelp-empleados.herokuapp.com/


URL del codigo fuente en github
https://github.com/markechon/wephelp-empleados



Descargar el proyecto ya sea como archivo ZIP o por medio de git
git clone https://github.com/markechon/wephelp-empleados.git .


Es necesario iniciar el entorno ejecutando las siguientes lineas:
./npm init 
./npm install --save express
./npm install mysqljs/mysql
./npm install express-myconnection



Las direccions de la api rest para interactuar con la interfaz grafica son las siguientes:

GET -Consultar todos los registros
http://localhost:3000/api/v1/empleados/
http://localhost:3000/api/v1/areas/
http://localhost:3000/api/v1/subareas/
http://localhost:3000/api/v1/tiposdocumentos/

GET -COnsultar un registro por su llave :id
http://localhost:3000/api/v1/empleados/:id
http://localhost:3000/api/v1/areas/:id
http://localhost:3000/api/v1/subareas/:id
http://localhost:3000/api/v1/tiposdocumentos/:id

POST - Adicion de empleado
http://localhost:3000/api/v1/empleados/







Estructura del proyecto

.
├── empleados-restapi
│   ├── configuracion
│   │   └── db.js
│   └── rutas
│       ├── areas.js
│       ├── empleados.js
│       ├── subareas.js
│       └── tiposdocumentos.js
├── package.json
├── package-lock.json
├── public
│   ├── index.html
│   └── resources
│       ├── css
│       │   ├── libs
│       │   │   └── bootstrap.min.css
│       │   └── main.css
│       ├── img
│       ├── js
│       │   ├── app.js
│       │   ├── collection.js
│       │   ├── libs
│       │   │   ├── backbone.js
│       │   │   ├── backbone.localStorage.js
│       │   │   ├── bootstrap.bundle.min.js
│       │   │   ├── bootstrap.min.js
│       │   │   ├── jquery-3.1.1.js
│       │   │   ├── json2.js
│       │   │   ├── popper.min.js
│       │   │   ├── underscore.js
│       │   │   └── zepto.js
│       │   ├── model.js
│       │   ├── router.js
│       │   ├── security.js
│       │   └── view.js
│       └── templates
│           ├── areascombo.js
│           ├── empleado.js
│           ├── empleados.js
│           ├── inicio.js
│           ├── subareascombo.js
│           └── tiposdocumentoscombo.js
├── README.md
└── server.js


