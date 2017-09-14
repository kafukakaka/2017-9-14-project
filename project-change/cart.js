//结算
	$(function(){
		var arr = getCookie("shop");
		var html = "";
		for(var i in arr){
			var shopinfo = arr[i];
			html +='<div class="shop-item clearfix">'+
						'<p class="fl checkfl"><input type="checkbox" class="ck"/></p>'+
						'<p class="fl infofl">'+'<img class="fl imgfl" src="img/'+ shopinfo.src +'" alt="" />'+'<span>'+ shopinfo.name +'</span>'+'</p>'+
						'<span class="fl pricefl">¥'+ shopinfo.price +'</span>'+
						'<p class="fl count" '+
							'data-id="'+ shopinfo.id +'" '+
							'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
							'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
							'>'+
							'<span class="updateCount" data-number="1">+</span>'+
							'<span class="shop-count">'+ shopinfo.count +'</span>'+
							'<span class="updateCount" data-number="-1">-</span>'+
						'</p>'+
						'<em class="fl sumPrice">¥'+ (shopinfo.count * shopinfo.price) +'</em>'+
						'<i class="fl delBtn">删除</i>'+
					'</div>';
		}
		$(".shop1").html( html );
		/*var num1 = 0;
		num1 += parseInt($(".shop-count").html()); 
		$("#num").html(num1);*/
		//全选
		$("#selectAll1,#selectAll2").click(function(){
			$(".ck").prop("checked", $(this).prop("checked"));
			jiesuan();
		})
		//删除
		$(".shop1").on("click","i",function(){
			var id = $(this).parent().find(".count").data("id");  //获取当前要删除的商品编号 和名称
			var pname = $(this).parent().find(".count").data("name");  //获取当前要删除的商品编号 和名称
			
			for(var i in arr){
				if( id == arr[i].id && pname == arr[i].name ){
					arr.splice(i,1);
					//操作数组同时，也要改变cookie
					setCookie("shop",JSON.stringify(arr));
					$(this).parent().remove();
				}
			}	
		})
		//删除选中商品
		$(".col-2 a").click(function(){
			if( $(".count2").html() != 0 ){
				$(".col-3,.layer").show();
			}else{
				$(".col-3,.layer").hide();
			}
		})
		$("#no").click(function(){
			$(".col-3,.layer").hide();
		})
		$("#yes").click(function(){
			$(".ck:checked").each(function(){
				$(this).parent().parent().hide();
				$(".col-3,.layer").hide();
			})
		})
		//加减操作
		$(".updateCount").click(function(){
			var sign = $(this).html();
			var id = $(this).parent().data("id");  //获取当前要删除的商品编号 和名称
			var pname = $(this).parent().data("name");  //获取当前要删除的商品编号 和名称
			//取出数量
			var num = $(this).parent().find(".shop-count").html();
			if( sign == "-" && num == 1 ){
				return;
			}
			for( var i in arr ){
				if( id == arr[i].id && pname == arr[i].name ){
					sign=="+" ? arr[i].count++ : arr[i].count--;
					setCookie("shop",JSON.stringify(arr));
					$(this).parent().find(".shop-count").html( arr[i].count );
					$(this).parent().parent().find(".sumPrice").html( "¥" + (arr[i].count * arr[i].price)  );
				}
			}
			jiesuan();
		})
		//点击复选框 结算
		$(".ck").click(function(){
			jiesuan();
		})
	})
	//结算
	function jiesuan(){
		var money = 0;
		var count = 0;
		$(".ck:checked").each(function(){
			count += parseInt( $(this).parent().parent().find(".shop-count").html() )
			money += parseFloat( $(this).parent().parent().find(".sumPrice").html().split("¥")[1] )
			//console.log($(this).parent().parent().find(".sumPrice").html());
		})
		$(".count2").html( count );
		$(".money2").html( money );
		if( count != 0 ){
			$(".currant").show()
					 	 .css("color","white");
			$(".btn").hide();
		}else{
			$(".currant").hide()
					 	 .css("color","rgb(51, 51, 51)");
			$(".btn").show();
		}
	}

