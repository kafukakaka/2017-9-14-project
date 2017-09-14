//处理中...
	$(".btn").click(function(){
		$(this).hide();
		$(".reg_btn").animate({"display":"block"},1000,function(){
			$(".btn").show();
		});
	})
//登录
	function rand(max,min){
		return	Math.floor(Math.random()*(max - min) + 1) + min;
	}
	$("#sure").click(function(){
		var num = rand(1000,9999)
		$(this).html(num);
	})
	$("#btn").click(function(){
		//取出cookie
		var str = document.cookie;
		var arr = str.split("; ");
		//console.log(1);
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == "username" ){
				uname = item[1];//记录用户名
			}
			if( item[0] == "userpwd" ){
				upwd = item[1]; //记录密码
			}
		}
		//取出用户输入的用户名和密码，通过用户输入的数据和cookie中的信息做比较  如果都相等，说明 存储数据成功
		if( $("#uname").val() == uname && $("#upwd").val() == upwd && $("#yanzheng").val() == $("#sure").text() ){
			location.href = "homePage.html";
		}
	});