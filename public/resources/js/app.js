var app = app || {};
var customContainer = $("body > .container");
var context = 'api/v1/';
app.pg = {"tamanio" : 0,"inicio" : 1,"limite" : 10,"paginaActual" : 1,"paginaSiguiente" : 1,"registros" : 0};
app.lm =false;

$.appWriteContainer = function(obj) {
  app.AppRouter.navigate(btoa(new Date().getTime()).toLowerCase(), { trigger: true });
  customContainer.html(obj);
}

$.appOnLoad = function() {
	if(($('body > .container').html()).trim()==='')
    $.appGoPage('');
    window.history.forward();
    function noBack() { window.history.forward(); }    
};

$.appGoPage = function(path) {
  app.AppRouter.navigate(path, {trigger: true})
}

$.appContext = function() {
  if($.appGSS('QXV0aG9yaXphdGlvbg'))
    return scontext;
  else
    return context;
}

$.appAreasComboViewLoad = function() {
  $("#divAreaCombo").html((new app.AreasComboView()).render().el);
}

$.appSubAreasComboViewLoad = function() {
//  $("#inputSubArea").empty();
//  $("#inputSubArea").append((new app.SubAreasComboView()).render().el);
  $("#divSubAreaCombo").html((new app.SubAreasComboView({"area": $("#inputArea").val()})).render().el);
}
$.appTiposDocumentosComboViewLoad = function() {
  $("#divTiposDocumentosCombo").html((new app.TiposDocumentosComboView()).render().el);
}


$.appRefreshPagination = function() {
  var totalPage = (Math.ceil(app.pg.registros/app.pg.limite));
  var inicio = app.pg.inicio;
  var paginaActual = (parseInt(app.pg.paginaActual));
  var botones="";

  if(totalPage>5){
    botones="";
    for(i=(paginaActual-2);i<=totalPage;i++){
      if((i*app.pg.limite)>totalPage) break;
      botones+='<li class="page-item '+((i==paginaActual)?'active':'')+'"><a class="page-link" '+((i==paginaActual)?'#':'href="#empleadosPag/'+i+'"')+'>'+i+'</a></li>';
    }
  }else{
    botones="";
    for(i=1;i<=totalPage;i++){
      botones+='<li class="page-item '+((i==paginaActual)?'active':'')+'"><a class="page-link" '+((i==paginaActual)?'':'href="#empleadosPag/'+i+'"')+'>'+i+'</a></li>';
    }
  }
  $("#paginacion").html('<ul class="pagination">'+botones+'</ul>');

}

$.appLoadingView = function() {
  $('.panel-body').html('<div align="center"><h2>Esperando respuesta.</h2><img src="resources/img/loading.gif" alt="loading...." ></div>');
}

$.appHttpResponse = function(xhr, stat) {
  var o;
  if(xhr.responseText.indexOf('message')>0){
    o = (JSON.parse(xhr.responseText));
    if(o.error){
      $.appMessage('danger',o.message);
      $.appGoPage('');
    } else if((!o.error) && (o.size==0)){
      $.appMessage('warn',o.message);
      $.appGoPage('');
    }
  } else {
    $.appMessage('danger','HTTP '+xhr.status+' - '+xhr.statusText);
    $.appGoPage('');
  }
}

$.appPanel = function(title, body, footer) {
  return '<div  class="panel panel-default" >' +
  ((title)?
  '<div class="panel-heading">' +
  '<h3 class="panel-title">'+title+'</h3>' +
  '</div>':'')+
  '<div class="panel-body">' +
  body+
  '</div>'+
  ((footer)?
  '<div class="panel-footer clearfix">' +
  footer+
  '</div>':'')+
  '</div>';
}

$(document).ready(function(){
    $('.count').prop('disabled', true);
		$(document).on('click','.plus',function(){
		$('.count').val(parseInt($('.count').val()) + 1 );
		if ($('.count').val() >= $('.count').attr('max')) {
			$('.count').val($('.count').attr('max'));
		}
	});
	$(document).on('click','.minus',function(){
		$('.count').val(parseInt($('.count').val()) - 1 );
			if ($('.count').val() <= 2) {
				$('.count').val(2);
			}
    	});
});

