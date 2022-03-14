(function() {
    "use strict";

    app.BaseCollection = Backbone.Collection.extend({
      model: app.BaseModel
    });

    app.EmpleadosCollection = Backbone.Collection.extend({
        initialize: function() {
          this.url = 'api/v1/empleados/?inicio='+(((app.pg.paginaSiguiente*app.pg.limite)+1)-app.pg.limite)+'&limite='+app.pg.limite;
        },
        parse : function(response) {
          app.pg.registros=0;
          if((!response.error) && (response.datos).length>=0){
            app.pg.tamanio=(response.datos).length;
            app.pg.registros=0;
            app.pg.inicio=1;
            if(app.pg.tamanio>0){
              app.pg.registros=response.datos[0].registros;
              app.pg.inicio=response.datos[0].rownum;
              app.pg.paginaActual=(Math.ceil(response.datos[app.pg.tamanio-1].rownum/app.pg.limite));
            }
          }
          console.log(response.datos[app.pg.tamanio-1].rownum);
          return response.datos;
        }
    });

    app.AreasComboCollection = Backbone.Collection.extend({
      model : app.BaseModel,
      url : "api/v1/areas"
    });

    app.SubAreasComboCollection = Backbone.Collection.extend({
      initialize: function(options) {
            this.model = app.BaseModel;
            this.url = "api/v1/subareas/0/"+options.area;
      }, parse : function(response) {
        return response;
      }      
    });

    app.TiposDocumentosComboCollection = Backbone.Collection.extend({
      initialize: function() {
            this.model = app.BaseModel;
            this.url = "api/v1/tiposdocumentos/";
      }, parse : function(response) {
        return response;
      }      
    });
    

})();
