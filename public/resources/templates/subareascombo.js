var SubAreasComboTemplate = _.template(
  '<label for="inputSubArea" class="form-label">Sub-area</label>'+
	'<select id="inputSubArea" class="form-select form-control form-control-lg" placeholder="Sub-area" name="subarea">'+
    	'<option selected></option>'+
      '<% _.each(c, function(m , i) { %>' +
        '<option value="<%= m.get("id") %>"><%= m.get("nombre") %></option>'+
      '<% }); %>'+ 
      '</select>'  
);

