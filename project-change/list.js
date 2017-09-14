//加载数据 分页
listData();
var index = 1;
var pageNum = 40; 
function listData(){
	$.ajax({
		type:"get",
		url:"list.json",
		success : function(res){
			var str = "";
			for (var  i in  res) {
				for( var j = (index-1)*pageNum; j<index*pageNum; j++ ){
						var ch = res[i].list[j];
						str += `<li>
								<p><a href="product.html?pid=${ch.id}&cname=${i}"><img src="img/${ch.firstSrc}"/></a></p>
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
			}
			$(".list_bottom ul").html(str);
			var page = ""
			for( var a=1; a<=5; a++ ){
				page += `<li>${a}</li>`;
			}
			$("#u").html(page);
		}
	});
}
$("#u").on("click","li",function(){
	$(this).addClass("active")
		   .siblings()
		   .removeClass("active");
	index = $(this).html();
	listData();
})
$("#big").click(function(){
	$(this).find("ul")
		   .slideToggle(260);
		   
})
