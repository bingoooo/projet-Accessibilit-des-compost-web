'use strict'
$(document).ready(function(){

	$('body').on('click','a',function(){

		var recupattr=$(this).attr("href");
		$('.cible').hide();
		$(recupattr).show();
	});



});