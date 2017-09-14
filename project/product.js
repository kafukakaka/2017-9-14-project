//mian-right
	getData();
	function getData(){
		//加载json文件
		$.ajax({
			type:"get",
			url:"http://127.0.0.1/project/productData.json",
			success:function(res){
				var str1 = "";
				var bname = "classify001";
				for(var j in res[bname].list){
					var ch = res[bname].list[j];
					str1 += `<li>
								<p><a href=""><img src="img/${ch.firstSrc}"/></a></p>
								<dl>
									<dt>
										<a href="">${ch.name}</a>
										<p>${ch.price}</p>
									</dt>
									<dd>
										<img src="img/${ch.lastSrc}" />
										<p>${ch.addr}</p>
									</dd>
								</dl>
							</li>`;
				}			
				$(".main-right ul").html(str1);
				$(".main-right li").mouseenter(function(){
					$(this).css("box-shadow","2px 2px 6px #bbb");
				})
				$(".main-right li").mouseleave(function(){
					$(this).css("box-shadow","0px 0px 0px #fff");
				})
			}
		})
	}
//.main-left下的每一个li的第一个a 加粗
	$(".main-left li").each(function(){
			$(this).children().eq(0).css("font-weight","bold");
	})	

//吸顶
	var wt = $(".main-top").offset().top;
	$(document).scroll(function(){
		if( $(document).scrollTop() > wt ){
			$(".main-top").addClass("active")
						  .find("dl")
						  .show();
		}else{
			$(".main-top").removeClass("active")
						  .find("dl")
						  .hide();
		}
	})
//切换
	$(".main-top li").eq(0).click(function(){
		$("#first").show();
		$("#last").hide();
	})
	$(".main-top li").eq(1).click(function(){
		$("#first").hide();
		$("#last").show();
	})
//详情显示
	var str = location.href;
	//http://127.0.0.1/project/product.html?pid=shop001&cname=classify01
	var brr = str.split("?")[1];
	var pid = brr.split("&")[0].split("=")[1];
	var cname = brr.split("&")[1].split("=")[1];
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/project/productData.json",
		success : function(res){
			//console.log( res[cname].list );
			var html1 = "";
			console.log(cname);
			for(var i in res[cname].list){
				if( pid == res[cname].list[i].id ){//找到了要显示的商品详情
					html1 = `<div id="box">
					<div id="small" class="small">
				         <img src="img/${res[cname].list[i].bigImg1}" alt="" id="mm" style="z-index: 1;"/> 
				         <img src="img/${res[cname].list[i].bigImg2}" alt=""/> 
				         <img src="img/${res[cname].list[i].bigImg3}" alt=""/> 
				    	 <div id="mask"></div>   
				    </div>
				    <div id="big">
						<img src="img/${res[cname].list[i].bigImg1}" class="bigImage" style="z-index: 1;"/>
						<img src="img/${res[cname].list[i].bigImg2}" class="bigImage"/>
						<img src="img/${res[cname].list[i].bigImg3}" class="bigImage"/>
					</div>
					<ul id="bottom">
				        <li class="layer"><img src="img/${res[cname].list[i].smallImg1}" alt=""/></li>
				        <li><img src="img/${res[cname].list[i].smallImg2}" alt=""/></li>
				        <li><img src="img/${res[cname].list[i].smallImg3}" alt=""/></li>
				    </ul>
				</div>
				<div class="goods">
					<div class="goods-top">
						<span>${res[cname].list[i].carriage}</span>
						<h1>${res[cname].list[i].name}</h1>
					</div>
					<p class="infor">
						<span>商品编码:&nbsp;&nbsp;${res[cname].list[i].code}</span>
						<span>原产地:&nbsp;&nbsp;中国</span>
					</p>
					<div class="price">
						<span>价格:</span>
						<span>¥${res[cname].list[i].price}</span>
					</div>
					<div class="shop">
						<p>发货地:&nbsp;&nbsp;${res[cname].list[i].addr}</p>
		  				<span>
		  					<a href="http://127.0.0.1/project/login.html">立即购买</a>
		  					<a href="javascript:;" id="add">加入购物车</a>
		  					<a href="">添加关注(<span>6</span>)</a>
		  				</span>
		  				<div class="success">
							<p>商品添加成功</p>
							<p>
								<span data-id=${res[cname].list[i].id}  data-name=${res[cname].list[i].name} data-src=${res[cname].list[i].smallImg1} data-price=${res[cname].list[i].price}   style="display:none"></span>
								<a href="http://127.0.0.1/project/cart.html" id="btn">去结算</a>
								<a href="javascript:;" id="continue">继续购物</a>
							</p>
		  				</div>	
					</div>
				</div>`;		
				}
			}
			$(".nav-center").html(html1);
			//放大镜
			$("#bottom li").bind("mouseenter",function(){
				var index = $(this).index();
				$("#small img").eq(index).show().siblings().hide();
				$("#big img").eq(index).show().siblings().hide();
				$(this).addClass("layer").siblings().removeClass("layer");
			})
			$("#small").bind({
				mouseenter : function(){
					$("#big").show();
					$("#mask").show();
				},
				mouseleave : function(){
					$("#big").hide();
					$("#mask").hide();
				},
				mousemove : function(e){
					var e = e || event;
					var x = e.pageX - $("#small").offset().left - $("#mask").width()/2;
					var y = e.pageY - $("#small").offset().top - $("#mask").height()/2;
					var maxL = $("#small").width() - $("#mask").width();
					var maxH = $("#small").height() - $("#mask").height();
					x = Math.min( maxL , Math.max( 0 , x ) );
					y = Math.min( maxH , Math.max( 0 , y ) );
					$("#mask").css({
				 		left : x,
				 		top : y,
				 		backgroundPositionX : -x,
				 		backgroundPositionY : -y
				 	})
				 	//大图宽度/小图宽度 = 大图left/ x
				 	var bigImgX = x*$(".bigImage").eq(0).width()/$("#small").width();
				 	var bigImgY = y*$(".bigImage").eq(0).height()/$("#small").height();
				 	//console.log(bigImgX);
				 	$(".bigImage").css({
				 		left : -bigImgX,
				 		top : -bigImgY
				 	})
				 	//console.log( $(".bigImage").offset().left );
				}
			})
			//点击加入购物车时 提示
			$("#add").click(function(){
				$(".success").show();
			})
			//点击继续购物则不跳转
			$("#continue").click(function(){
				$(".success").hide();
			})
		}
	});
//存cookie
	$(".shop").on("click","#btn",function(){
		var arr = [];
		var flag = true;//可以向数组中添加数据
		var _json = {
			id:$(this).prev().data("id"),
			name:$(this).prev().data("name"),
			src:$(this).prev().data("src"),
			price:$(this).prev().data("price"),
			count:1
		}
		//当再次点击按钮时，cookie信息被覆盖  解决 ： 先取出cookie数据 存入到数组中，然后在把新增的商品存入到数组中
		var cookieInfo = getCookie("shop");
		if( cookieInfo.length != 0 ){//表示cookie中有数据
			arr = cookieInfo;
			//点击相同商品时，需要做商品数量的累加    用当前点击的商品编号id   和  取出来的cookie的 数据中商品id做比较 发现有相等的，count++
			for(var i in arr){
				if(_json.id == arr[i].id && _json.name == arr[i].name){
					arr[i].count++;
					flag = false;
					break;
				}
			}
		}
		if(flag){
			arr.push(_json);
		}
		setCookie("shop",JSON.stringify(arr));
	});