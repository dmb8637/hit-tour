	var euroRateCB = 82.83+2;
	var usdRateCB = 73.47+2;

	function rate(){
		$("span[id='rateeuro']").each(function(index){
			$(this).replaceWith('<span id="rateeuro">1€ = ' + euroRateCB + ' ₽</span>');
		});

		$("span[id='rateusd']").each(function(index){
			$(this).replaceWith('<span id="rateusd">1$ = ' +  usdRateCB + ' ₽</span>');
		});
	}

	$("td[id='s']").each(function(index){
		var euroRateKalinka = 84.5;
		var ss = parseFloat($(this).text())/euroRateKalinka;
		
		$(this).replaceWith('<td class="lc" id="s">' + Math.round(ss) + ' €</td>');
	});