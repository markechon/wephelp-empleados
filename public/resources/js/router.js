"use strict";
var Workspace = Backbone.Router.extend({
    routes: {
        '': 'inicio',
        '/': 'inicio',
        'empleados': 'empleados',
        'empleadosPag/:pag': 'empleadosPag',
        'empleado': 'empleado'
    },
    inicio: function() {
        $.appWriteContainer((new app.InicioView()).render().el);
    },
    empleados: function() {
        app.pg = {"tamanio" : 0,"inicio" : 1,"limite" : 10,"paginaActual" : 1,"paginaSiguiente" : 1,"registros" : 0};
        $.appWriteContainer((new app.EmpleadosView()).render().el);
    },
    empleadosPag: function(pag) {
        app.pg.paginaSiguiente=pag;
        $.appWriteContainer((new app.EmpleadosView()).render().el);
    },
    empleado: function() {
        $.appWriteContainer((new app.EmpleadoView()).render().el);
        $.appTiposDocumentosComboViewLoad();
        $.appAreasComboViewLoad();
    }
});
app.AppRouter = new Workspace();
Backbone.history.start({});
