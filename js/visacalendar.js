	$(function(){
		$('.wrap-content .wrap li button').each(function(){
			if($(this).text()=='Визовый календарь') {
				$(this).css('display','none'); 
			}
		})  
	});