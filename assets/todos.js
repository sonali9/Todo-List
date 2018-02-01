$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grabbing new todo text from input
		var text= $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span>X </span>" + text +"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});