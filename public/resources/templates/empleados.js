var EmpleadosTemplate = _.template(
    '<div class="container mt-3">'+
    '<h2>Listado de empleados</h2>'+
    '<p></p>'+
    '<table class="table">'+
        '<thead>'+
            '<tr>'+
            '<th>#</th>'+
            '<th>Nombre</th>'+
            '<th>Documento</th>'+
            '<th>Area</th>'+
            '</tr>'+
        '</thead>'+
        '<tbody>'+
        '<% _.each(c, function(m , i) { %>' +
            '<tr>'+
                '<td rowid="<%= m.get("id") %>"><%= m.get("rownum") %></td>'+
                '<td><%= m.get("nombre") %></td>'+
                '<td><%= m.get("documento") %></td>'+
                '<td><%= m.get("area") %></td>'+
            '</tr>'+
        '<% }); %>' +
            '</tbody>'+
    '</table>'+
    '<div id="paginacion"></div>'+
    '</div>'+'<% $(document).ready(function(){ $.appRefreshPagination(); }); %>'
);

