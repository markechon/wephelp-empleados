app.InicioView = Backbone.View.extend({
  template: InicioTemplate,
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});


app.EmpleadosView = Backbone.View.extend({
  template: EmpleadosTemplate,
  initialize: function() {
    this.collection = new app.EmpleadosCollection();
  },
  render: function() {
    var element = jQuery(this.el);
    var self = this;
    this.collection.fetch({
      success: function() {
        element.empty();
        if(self.collection.length > 0){
            element.html(self.template({
              c: self.collection.models
            }));
        }
      },
      error: function() {
        console.log('Failed to fetch!');
      }
    });
    return this;
  }    
});

app.EmpleadoView = Backbone.View.extend({
  template: EmpleadoTemplate,
  events: {
    'click .pSub': 'submit',
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  submit: function(e) {
    e.preventDefault();
    var data =  _.object(_.pluck($("form").serializeArray(), 'name'), _.pluck($("form").serializeArray() , 'value'));
    delete data.area;    
    if(data.id=="" || data.id<=0) delete data.id;
    (new app.EmpleadoModel(data)).save([],{
       success:function(m,response){
        if(response){
          console.log("registro guardado con exito");
        }
       }
    });
    $.appGoPage('/');
  }
});

app.AreasComboView = Backbone.View.extend({
  template: AreasComboTemplate,
  initialize: function() {
    this.collection = new app.AreasComboCollection();
  },
  render: function() {
    var element = jQuery(this.el);
    var self = this;
    this.collection.fetch({
      success: function() {
        element.empty();
        if(self.collection.length > 0){
            element.html(self.template({
              c: self.collection.models
            }));
        }
      },
      error: function() {
        console.log('Failed to fetch!');
      }
    });
    return this;
  }
  });

  app.SubAreasComboView = Backbone.View.extend({
    template: SubAreasComboTemplate,
    initialize: function(options) {
      this.collection = new app.SubAreasComboCollection(options);
    },
    render: function() {
      var element = jQuery(this.el);
      var self = this;
      this.collection.fetch({
        success: function() {
          element.empty();
          if(self.collection.length > 0){
              element.html(self.template({
                c: self.collection.models
              }));
          }
        },
        error: function() {
          console.log('Failed to fetch!');
        }
      });
      return this;
    }
  });

  app.TiposDocumentosComboView = Backbone.View.extend({
    template: TiposDocumentosComboTemplate,
    initialize: function() {
      this.collection = new app.TiposDocumentosComboCollection();
    },
    render: function() {
      var element = jQuery(this.el);
      var self = this;
      this.collection.fetch({
        success: function() {
          element.empty();
          if(self.collection.length > 0){
              element.html(self.template({
                c: self.collection.models
              }));
          }
        },
        error: function() {
          console.log('Failed to fetch!');
        }
      });
      return this;
    }
  });
