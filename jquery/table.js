	$('table').each(function(index){
		//alert("2 таблица номер " + index);
		if (document.documentElement.clientWidth < 840)  {
			$(this).css('width', '470px');
		} else {
			$(this).css('width', '800px');
		}
	});