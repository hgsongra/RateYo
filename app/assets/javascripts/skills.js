	
$(function(){
	$("#skill_form").hide();
	$("#add_skill").show();
	$("#add_skill").click(function(e){
		$(this).hide();
		$("#skill_form").show();
		e.stopPropagation();
	});

	$("#cancel_add_skill_index").click(function(e){
		$("#add_skill").show();
		$("form#new_skill")[0].reset();
		$("#skill_form").hide();
		e.stopPropagation();
	});
});