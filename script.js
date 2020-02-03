$("ul").on("click","li",function(){$(this).toggleClass("try");});
// var col=document.querySelectorAll("li");
// for(var i=0; i<col.length; i++){
// 	col[i].addEventListener("click",function(){this.classList.toggle("class");})
// }

$("ul").on("click","span",function(e){$(this).parent().slideUp(200,function(){$(this).remove();});
	e.stopPropagation();

});


$("input[type='text']").on("keypress",function(a){

		if(a.which===13){
			// console.log($(this).val());
			var data = $(this).val();
			if (data.length==0) {console.log("Kuch to likhna bhai")}
				else{
			$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+data+"</li>");
			$(this).val("");
			}
		}
	})

$("h1 span").on("click",function(){
	$("input").toggle();
})