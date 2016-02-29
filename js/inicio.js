function inicio(){
	globo();
	$.mobile.changePage("#page1");
	//window.location.reload(true);
	
	document.addEventListener("deviceready", gcm, false);
	
	//comprobarid();
	
	}
	
	function gcm(){
		
		var xregid = localStorage.regid;
		var xuuid = localStorage.uuid;
		var xmovil = localStorage.movil;
	
	
	$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/comprobarid.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {regid: xregid, movil: xmovil, uuid: xuuid},
		
			});
		
		
		
		}