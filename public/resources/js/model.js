(function() {
    "use strict";

    app.BaseModel = Backbone.Model.extend({
        urlRoot: context
    });
    app.EmpleadoModel = Backbone.Model.extend({
        initialize: function() {
            this.urlRoot= 'api/v1/empleados/';
          }
    });
})();
