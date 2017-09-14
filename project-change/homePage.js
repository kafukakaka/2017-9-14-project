//分页
	getData();
	function getData(){
		//加载json文件
		$.ajax({
			type:"get",
			url:"homeData.json",
			success:function(res){
				var html = "";
				for (var  i in  res) {
					for(var j in res[i].list){
						var ch = res[i].list[j];
						html += `<a href="product.html?pid=${ch.id}&cname=${i}">
									<dl>
										<dt><img src="img/${ch.firstSrc}"/></dt>
										<dd>
											<p>${ch.name}</p>
											<p>${ch.price}</p>
											<p>${ch.addr}<img src="img/${ch.lastSrc}"/></p>
										</dd>
									</dl>
								</a>`;
					}
				}
				$(".new li").html(html);
				$(".waterBottom").html(html);
				//banner导航效果
				$(".new dl,.waterBottom dl").each(function(index,ele){
					$(this).find("dd").css("background-position-y",-index*27);
				}).mouseover(function(){
					//console.log(1);
					$(this).find("dd").stop().animate({"bottom":"0"},300);
				}).mouseout(function(){
					$(this).find("dd").stop().animate({"bottom":"-27"},300);
				})
				//页面轮播效果
				var timer = setInterval(autoPlay,2500);
				var flag = true;
				function autoPlay(){
					$(".new").animate({"margin-left":-1200},500,function(){
						$(".new").css("margin-left",0)
								 .find("ul:first")
								 .appendTo(".new");
								 flag = true;
					})		
				}
				$(".banner-nb").mouseenter(function(){
					clearInterval(timer);
					$("#left,#right").show();
				})
				$(".banner-nb").mouseleave(function(){
					timer = setInterval(autoPlay,2500);
					$("#left,#right").hide();
				})
				$("#left").click(function(){
					autoPlay();
				})
				$("#right").click(function(){
					if( flag ){
						$(".new").find("ul:last")
								  .prependTo(".new")
								  .end()
								  .css("margin-left",-1200)
								  .animate({"margin-left":0},500,function(){
								  	flag = true;
								  });
						flag = false;
					}
				})
			}
		})
	}

//大图轮播
	var timerBig = setInterval(autoPlayBig,3500);
	var indexBig = 0;
	function autoPlayBig(){
		indexBig++;
		if( indexBig == $(".nu li").size() ){
			indexBig = 0;
		}
		$(".nu li").eq(indexBig).fadeIn(400).siblings().fadeOut(400);
		$(".no li").eq(indexBig).addClass("active").siblings().removeClass("active");
	}
	$(".nav").mouseenter(function(){
		clearInterval(timerBig);
		$(".no li,.navLeft,.navRight").show();
	})
	$(".nav").mouseleave(function(){
		timerBig = setInterval(autoPlayBig,3500);
		$(".no li,.navLeft,.navRight").hide();
	})
	$( ".no li" ).click(function(){
		clearInterval(timerBig);
		indexBig = $(this).index()-1;
		autoPlayBig();
	})
	$(".navRight").click(function(){
		autoPlayBig();
	})
	$(".navLeft").click(function(){
		indexBig--;
		if( indexBig == -1 ){
			indexBig = 9;
		}
		$(".nu li").eq(indexBig).fadeIn(400).siblings().fadeOut(400);
		$(".no li").eq(indexBig).addClass("active").siblings().removeClass("active");
	})
//商标轮播
	var timerLogo1 = setInterval(autoPlayLogo1,2000);
	function autoPlayLogo1(){
		$(".waterCr_u1").animate({"margin-left":-240},500,function(){
			$(".waterCr_u1").css("margin-left",0)
					       .find("li:first")
						   .appendTo(".waterCr_u1");
		})		
	}
	$(".waterCr1").mouseenter(function(){
		$(this).find("ol")
			   .show();	
	})
	$(".waterCr1").mouseleave(function(){
		$(this).find("ol")
			   .hide();
	})
	var timerLogo2 = setInterval(autoPlayLogo2,2000);
	function autoPlayLogo2(){
		$(".waterCr_u2").animate({"margin-left":-240},500,function(){
			$(".waterCr_u2").css("margin-left",0)
					       .find("li:first")
						   .appendTo(".waterCr_u2");
		})		
	}
	$(".waterCr2").mouseenter(function(){
		$(this).find("ol")
			   .show();	
	})
	$(".waterCr2").mouseleave(function(){
		$(this).find("ol")
			   .hide();
	})
	var timerLogo3 = setInterval(autoPlayLogo3,2000);
	function autoPlayLogo3(){
		$(".waterCr_u3").animate({"margin-left":-240},500,function(){
			$(".waterCr_u3").css("margin-left",0)
					       .find("li:first")
						   .appendTo(".waterCr_u3");
		})		
	}
	$(".waterCr3").mouseenter(function(){
		$(this).find("ol")
			   .show();	
	})
	$(".waterCr3").mouseleave(function(){
		$(this).find("ol")
			   .hide();
	})
	var timerLogo4 = setInterval(autoPlayLogo4,2000);
	function autoPlayLogo4(){
		$(".waterCr_u4").animate({"margin-left":-240},500,function(){
			$(".waterCr_u4").css("margin-left",0)
					       .find("li:first")
						   .appendTo(".waterCr_u4");
		})		
	}
	$(".waterCr4").mouseenter(function(){
		$(this).find("ol")
			   .show();	
	})
	$(".waterCr4").mouseleave(function(){
		$(this).find("ol")
			   .hide();
	})
	var timerLogo5 = setInterval(autoPlayLogo5,2000);
	function autoPlayLogo5(){
		$(".waterCr_u5").animate({"margin-left":-240},500,function(){
			$(".waterCr_u5").css("margin-left",0)
					       .find("li:first")
						   .appendTo(".waterCr_u5");
		})		
	}
	$(".waterCr5").mouseenter(function(){
		$(this).find("ol")
			   .show();	
	})
	$(".waterCr5").mouseleave(function(){
		$(this).find("ol")
			   .hide();
	})
	var timerLogo6 = setInterval(autoPlayLogo6,2000);
	function autoPlayLogo6(){
		$(".waterCr_u6").animate({"margin-left":-240},500,function(){
			$(".waterCr_u6").css("margin-left",0)
					       .find("li:first")
						   .appendTo(".waterCr_u6");
		})		
	}
	$(".waterCr6").mouseenter(function(){
		$(this).find("ol")
			   .show();	
	})
	$(".waterCr6").mouseleave(function(){
		$(this).find("ol")
			   .hide();
	})
	var timerLogo7 = setInterval(autoPlayLogo7,2000);
	function autoPlayLogo7(){
		$(".waterCr_u7").animate({"margin-left":-240},500,function(){
			$(".waterCr_u7").css("margin-left",0)
					       .find("li:first")
						   .appendTo(".waterCr_u7");
		})		
	}
	$(".waterCr7").mouseenter(function(){
		$(this).find("ol")
			   .show();	
	})
	$(".waterCr7").mouseleave(function(){
		$(this).find("ol")
			   .hide();
	})
		
//圈圈
$("#shopbtm li").mouseenter(function(){
	$(this).stop().animate({"margin-top":0},300)
})
$("#shopbtm li").mouseleave(function(){
	$(this).stop().animate({"margin-top":37},300)
})				
//小图轮播
	var timerSmall1 = setInterval(autoPlay1,2000);
	function autoPlay1(){
		$(".waterCc1 ul").animate({"margin-left":-700},500,function(){
			$(".waterCc1 ul").css("margin-left",0)
						  	.find( "li:first" )
						  	.appendTo( $(".waterCc1 ul") )
		})
	}
	var timerSmall2 = setInterval(autoPlay2,2000);
	function autoPlay2(){
		$(".waterCc2 ul").animate({"margin-left":-700},500,function(){
			$(".waterCc2 ul").css("margin-left",0)
						  	.find( "li:first" )
						  	.appendTo( $(".waterCc2 ul") )
		})
	}
	var timerSmall3 = setInterval(autoPlay3,2000);
	function autoPlay3(){
		$(".waterCc3 ul").animate({"margin-left":-700},500,function(){
			$(".waterCc3 ul").css("margin-left",0)
						  	.find( "li:first" )
						  	.appendTo( $(".waterCc3 ul") )
		})
	}
	var timerSmall4 = setInterval(autoPlay4,2000);
	function autoPlay4(){
		$(".waterCc4 ul").animate({"margin-left":-700},500,function(){
			$(".waterCc4 ul").css("margin-left",0)
						  	.find( "li:first" )
						  	.appendTo( $(".waterCc4 ul") )
		})
	}
	var timerSmall5 = setInterval(autoPlay5,2000);
	function autoPlay5(){
		$(".waterCc5 ul").animate({"margin-left":-700},500,function(){
			$(".waterCc5 ul").css("margin-left",0)
						  	.find( "li:first" )
						  	.appendTo( $(".waterCc5 ul") )
		})
	}
	var timerSmall6 = setInterval(autoPlay6,2000);
	function autoPlay6(){
		$(".waterCc6 ul").animate({"margin-left":-700},500,function(){
			$(".waterCc6 ul").css("margin-left",0)
						  	.find( "li:first" )
						  	.appendTo( $(".waterCc6 ul") )
		})
	}
	var timerSmall7 = setInterval(autoPlay7,2000);
	function autoPlay7(){
		$(".waterCc7 ul").animate({"margin-left":-700},500,function(){
			$(".waterCc7 ul").css("margin-left",0)
						  	.find( "li:first" )
						  	.appendTo( $(".waterCc7 ul") )
		})
	}
	
