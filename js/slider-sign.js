	function imgsign() {
		$('.sim-slider-element img[title]').each( function(index) {
			if($(this).parent().css('opacity')>0.5){
				// console.log($(this).parent().css('opacity') + ' - ' + $(this).attr('title'));
				var st = $(this).attr('title');
				$('.slider-sign label').replaceWith('<label><i>' + (st ? st : "") + '</i></label>');
			}
		});
	}

	$(function(){
		setTimeout(imgsign, 100);
	});

	var Visible = function (target, index) {
	  // Все позиции элемента
	  var targetPosition = {
		  left: target.getBoundingClientRect().left,
		  right: window.pageXOffset + target.getBoundingClientRect().right
		},
		// Получаем позиции окна
		windowPosition = {
		  left: window.pageXOffset,
		  right: window.pageXOffset + document.documentElement.clientWidth
		};
		/*console.log(index + "\ntargetPosition.right=" + targetPosition.right + "\ntargetPosition.left="+targetPosition.left+
						"\nwindowPosition.left="+windowPosition.left + "\nwindowPosition.right="+windowPosition.right);*/
		
	  if (
			(targetPosition.right-windowPosition.right*0.2)<windowPosition.right &&
			(targetPosition.left+windowPosition.right*0.2)>windowPosition.left
		) { 
			$('.slider-sign1 label').replaceWith('<label><i>' + target.getAttribute('alt') + '</i></label>');
	  } else {
		// Если элемент не видно, то запускаем этот код
		
	  }
	};

	function runslidersign(){
	// 	console.clear(); 
		$('.slider-sign1 label').replaceWith('<label></label>');
		$('.slider img[alt]').each(function(index){
			Visible(this, index);
		})
	}

	let timerId = setInterval(() => setTimeout(runslidersign, 100), 1000);
	setTimeout(() => { clearInterval(timerId); }, 5000);

	$('.slider').on('scroll', function(){
		setTimeout(runslidersign, 100);
	});