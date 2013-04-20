$(function(){
	
	//Ajustando o tamanho do bg colorido do cabeçalho para que a animação fique bonita
	$('head').append('<style>#header .bg { width:' + screen.width + 'px; }</style>');
	
	//Abre e fecha o cabeçalho
	$('#header').bind('click', function(){
		$('#header').removeClass('compact');
	});
	
	$(window).bind('scroll', function(){
		if(window.scrollY < 20)
		{
			$('#header').removeClass('compact');
		}
		else
		{
			$('#header').addClass('compact');
		}

	});
	
	
	//Correção do da posição da informação
	$(window).bind('scroll', function(){
		var scrolled = window.scrollY;
		
		$('.item').each(function(count, i){
			var bar = $(i).find('.bar');
			var diff = scrolled + 150 - $(i).offset().top;
			var height = $(i).height();
			var bh = bar.innerHeight();
			var top = diff;
			
			//Se for maior que o espaço disponível
			if(diff + bh > height){
				top = height - bh;
			}
			//Se for menor que 0
			if(diff < 0)
			{
				top = 0;
			}
			
			bar.stop().animate({
				'marginTop': top
			}, 500);
			
		})
	});
	
	//not-allowed - Off buttons
	$("#main").on("click", "a.off", function(){ return false; });
	
	
})
