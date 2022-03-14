var AreasComboTemplate = _.template(
  '<label for="inputArea" class="form-label">Area</label>'+
	'<select onchange="$.appSubAreasComboViewLoad()" id="inputArea" class="form-select form-control form-control-lg" placeholder="Tipo Documento" name="area">'+
    	'<option selected></option>'+
      '<% _.each(c, function(m , i) { %>' +
        '<option value="<%= m.get("id") %>"><%= m.get("nombre") %></option>'+
      '<% }); %>'+ 
      '</select>'  
);

