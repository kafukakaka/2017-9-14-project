//切换	
	$("nav li").eq(0).click(function(){
		$(".email").show();
		$(".commit").hide();
		$(this).addClass("active")
			   .siblings()
			   .removeClass("active");
	})
	$("nav li").eq(1).click(function(){
		$(".commit").show();
		$(".email").hide();
		$(this).addClass("active")
			   .siblings()
			   .removeClass("active");
	})
//失去焦点事件
	//邮箱注册
	var flagName1 = null;
	$("#email").blur(function(){
		var reg = /\w@qq.com/;
		var str = $("#email").val();
		if( reg.test(str) ){
			$("#eNsg1").hide()
					  .html("");
			flagName1 = true;
		}else{
			$("#eNsg1").show()
					  .html("请输入正确的邮箱地址");
			flagName1 = false;
		}
	})
	var flagPwd1 = null;
	$("#email_pwd").blur(function(){
		var reg = /\w{6,}/;
		var str = $("#email_pwd").val();
		if( reg.test(str) ){
			$("#ePsg1").hide()
					  .html("");
			flagPwd1 = true;
		}else{
			$("#ePsg1").show()
					  .html("请先填写密码");
			flagPwd1 = false;
		}
	})
	var flagAgain1 = null;
	$("#email_pwd_again").blur(function(){
		if( $("#email_pwd").val() == $("#email_pwd_again").val() ){
			$("#eAsg1").hide()
					   .html("");
			flagAgain1 = true;
		}else{
			$("#eAsg1").show()
					   .html("密码必须至少6位");
			flagAgain1 = false;
		}
	})
	function checkForm(){
		if( flagName1 && flagPwd1 && flagAgain1 ){
			return true;
		}else{
			return false;
		}
	}
	//手机注册
	var flagName2 = null;
	$("#mobile").blur(function(){
		var reg = /\d{11}/;
		var str = $("#mobile").val();
		if( reg.test(str) ){
			$("#eNsg2").hide()
					   .html("");
			flagName2 = true;
		}else{
			$("#eNsg2").show()
					   .html("请输入正确的手机号码");
			flagName2 = false;
		}
	})
	var flagPwd2 = null;
	$("#mobile_pwd").blur(function(){
		var reg = /\w{6,}/;
		var str = $("#mobile_pwd").val();
		if( reg.test(str) ){
			$("#ePsg2").hide()
					   .html("");
			flagPwd2 = true;
		}else{
			$("#ePsg2").show()
					   .html("请先填写密码");
			flagPwd2 = false;
		}
	})
	var flagAgain2 = null;
	$("#mobile_pwd_again").blur(function(){
		if( $("#mobile_pwd").val() == $("#mobile_pwd_again").val() ){
			$("#eAsg2").hide()
					   .html("");
			flagAgain2 = true;
		}else{
			$("#eAsg2").show()
					   .html("密码必须至少6位");
			flagAgain2 = false;
		}
	})
	function checkForm(){
		if( flagName2 && flagPwd2 && flagAgain2 ){
			return true;
		}else{
			return false;
		}
	}
//邮箱注册
	$("#email_btn").click(function(){
		var now = new Date();
		now.setDate( now.getDate() + 2 );
		document.cookie = "username=" + $("#email").val() + ";expires=" + now;
		document.cookie = "userpwd=" + $("#email_pwd").val();
		location.href = "login.html";
	});
//手机号注册
	$("#mobile_btn").click(function(){
		var now = new Date();
		now.setDate( now.getDate() + 2 );
		document.cookie = "username=" + $("#mobile").val() + ";expires=" + now;
		document.cookie = "userpwd=" + $("#mobile_pwd").val();
		location.href = "login.html";
	});