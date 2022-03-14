var EmpleadoTemplate = _.template(
'<div class="container ">'+
  '<h2>Adicion de empleado</h2>'+
  '<p></p>'+
  '<form>'+
  '<div class="col-md-6" style="display:none" >'+
	'<label for="inputId" class="form-label">ID</label>'+
    '<input type="text" class="form-control" id="inputId" name="id">'+
  '</div>'+
  '<div class="col-md-6">'+
	'<label for="inputNombre" class="form-label">Nombre</label>'+
    '<input type="text" class="form-control" id="inputNombre" name="nombres">'+
  '</div>'+
  '<div class="col-md-6">'+
	'<label for="inputApellido" class="form-label">Apellido</label>'+
    '<input type="text" class="form-control" id="inputApellido" name="apellidos">'+
  '</div>'+
  '<div id="divTiposDocumentosCombo" class="col-md-6">'+
	'<label for="inputTipoDocumento" class="form-label">Tipo Documento</label>'+
	'<select id="inputTipoDocumento" class="form-select form-control form-control-lg" placeholder="Tipo Documento" name="tipodocumento">'+
	  '<option selected></option>'+
	'</select>'+
	'</div>'+
  '<div class="col-md-6">'+
	'<label for="inputDocumento" class="form-label">Documento</label>'+
    '<input type="text" class="form-control" id="inputDocumento" name="documento">'+
  '</div>'+
  '<div id="divAreaCombo" class="col-md-6">'+
	'<label for="inputArea" class="form-label">Area</label>'+
	'<select id="inputArea" class="form-select form-control form-control-lg" placeholder="Area">'+
	  '<option selected></option>'+
	'</select>'+
	'</div>'+
  '<div id="divSubAreaCombo" class="col-md-6">'+
	'<label for="inputSubArea" class="form-label">Sub-area</label>'+
	'<select id="inputSubArea" class="form-select form-control form-control-lg" placeholder="SubArea" name="subarea">'+
	  '<option selected></option>'+
	'</select>'+
  '</div>'+
  '<button type="button" class="pSub btn btn-primary">Guardar</button>'+
  '</form>'+
'</div>'
);

