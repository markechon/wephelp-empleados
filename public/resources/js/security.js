$.ajaxSetup({
    beforeSend: function(xhr,s) {
      try{
        if(!(s.url.match(/api\/sec/i)===null)){$.appLoadingView();}

        if((JSON.parse(atob($.appGSS('QXV0aG9yaXphdGlvbg').split('.')[0])).exp * 1000) > (new Date()).getTime())
          xhr.setRequestHeader(atob('QXV0aG9yaXphdGlvbg'), $.appGSS('QXV0aG9yaXphdGlvbg'));
        else
          $.appSSS('QXV0aG9yaXphdGlvbg', '');
      } catch(err) {
        //console.log('Unauthorized');
      }
    },
    complete: function(xhr, stat) {
      var val=xhr.getResponseHeader('Authorization');
      if(val){
          if(val.length > 20){
            $.appSSS('QXV0aG9yaXphdGlvbg', val);
            if(app.lm){
              app.lm = false;
              $.appGoPage('');
            }
          }
      }
      $.appHttpResponse(xhr, stat);
    }
});
