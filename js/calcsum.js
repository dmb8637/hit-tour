	$("td[id='s']").each(function(index){
		var ss = 1.0*parseFloat($(this).text());
		
		$(this).replaceWith('<td class="lc" id="s">' + Math.round(ss) + '</td>');
	});