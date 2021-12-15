$(function(){
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = dd + '/' + mm + '/' + yyyy;
	
	//var uri = "http://www.cbr.ru/scripts/XML_daily.asp?date_req=" + today;
	var uri = "curs.xml";
	/*var name = "curs.xml";
	window.onload = function downloadURI(uri, name) 
	{
		var link = document.createElement("a");
		// If you don't know the name or want to use
		// the webserver default set name = ''
		link.setAttribute('download', name);
		link.href = uri;
		document.body.appendChild(link);
		link.click();
		link.remove();
	}*/

  if (window.XMLHttpRequest)
  { // для IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp = new XMLHttpRequest();
  }
  else
  { // для IE6, IE5
	 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("GET", uri, false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;

  var x = xmlDoc.getElementsByTagName("Valute");
  var codechar;
  
  for (i = 0; i < x.length; i++)
  {
	codechar = x[i].getElementsByTagName("CharCode")[0].childNodes[0].nodeValue;
	
	if(codechar=='EUR'){
		$("span[id='rateeurocb']").each(function(index){
			$(this).replaceWith('<span id="rateeurocb">1€ = ' + x[i].getElementsByTagName("Value")[0].childNodes[0].nodeValue + ' ₽</span>');
		});
	}
	
	if(codechar=='USD'){
		$("span[id='rateusdcb']").each(function(index){
			$(this).replaceWith('<span id="rateusdcb">1$ = ' + x[i].getElementsByTagName("Value")[0].childNodes[0].nodeValue + ' ₽</span>');
		});
	}

  }

	var euroRateCB;
	var usdRateCB;
	
	$("span[id='rateeurocb']").each(function(index){
		euroRateCB = (($(this).text().replace('1€ = ','')).replace('₽','')).replace(',','.');
		euroRateCB = parseFloat(euroRateCB);
	});

	$("span[id='rateusdcb']").each(function(index){
		usdRateCB = (($(this).text().replace('1$ = ','')).replace('₽','')).replace(',','.');
		usdRateCB = parseFloat(usdRateCB);
	});
	

	$("span[id='rateeuro']").each(function(index){
		$(this).replaceWith('<span id="rateeuro">1€ = ' + Math.round((euroRateCB+2)*100)/100 + ' ₽</span>');
	});

	$("span[id='rateusd']").each(function(index){
		$(this).replaceWith('<span id="rateusd">1$ = ' +  Math.round((usdRateCB+2)*100)/100 + ' ₽</span>');
	});
		
});

	$("td[id='s']").each(function(index){
		var euroRateKalinka = 84.5;
		var ss = parseFloat($(this).text())/euroRateKalinka;
		
		$(this).replaceWith('<td class="lc" id="s">' + Math.round(ss*10)/10 + ' €</td>');
	});