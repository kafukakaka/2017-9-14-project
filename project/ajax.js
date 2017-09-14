
	function ajaxGet(url,callback,data){
		var ajax = null;
		if( window.XMLHttpRequest ){
			ajax = new XMLHttpRequest();
		}else{
			ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		if( arguments.length == 3 ){ //表示有data
			url = url + "?" + data;
		}
		
		ajax.open("GET",url);
		ajax.send();
		ajax.onreadystatechange = function(){
			if( ajax.readyState == 4 && ajax.status == 200 ){
				//操作结果  
				if( callback ){
					callback(ajax.responseText);
				}	
			}
		}
		
	}