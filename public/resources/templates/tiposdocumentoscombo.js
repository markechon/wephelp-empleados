var TiposDocumentosComboTemplate = _.template(
  '<label for="inputTipoDocumento" class="form-label">Tipo de Documento</label>'+
	'<select id="inputTipoDocumento" class="form-select form-control form-control-lg" placeholder="Tipo Documento" name="tipodocumento">'+
    	'<option selected></option>'+
      '<% _.each(c, function(m , i) { %>' +
        '<option value="<%= m.get("id") %>"><%= m.get("nombre") %></option>'+
      '<% }); %>'+ 
      '</select>'  
);

