	
	setInterval(
    function () {
        $('.foto').animate({rotate: '+=0.12deg'}, 0);
        $('.foto1').animate({rotate: '-=0.12deg'}, 0);
    },
    100
	);

	function handledot (item, listname){
			var num_listas;
			item = item-1;
			$("#list"+item).css(efeitolista);

			for(num_listas = 1; num_listas < 27; num_listas++){		
				//alert(num_listas);
				if(num_listas != item){
					$("#list"+num_listas).css(listapadrao);
				
				}
			}

			
		
	}

	var posicao	= 5;
	var listapadrao = {marginLeft: "", fontSize: "1em", marginTop: ""};
	var efeitolista = {marginLeft: "-5px", fontSize: "2em", marginTop: "3px"};
	var titulo = "Título default";
	var paragrafo = "Texto default";
	var link = '';
	

	
		function handle(delta, ver) {
			
			if(posicao >= 214){

		    	posicao = 214;
		    	if(ver == 2){
					posicao = 156;
				}
		    }

		   	else if(posicao <= 0){
		    	posicao = 0 ;
	 			if(ver == 2){
					posicao = 156;
				}
				if(ver > 2){
					posicao=ver;
				}
		    
		    }


		    /* EVENTO COM O MOUSE WHEEL DESCENDO */
		    else if (delta < 0){ 
		        posicao = posicao + 1;
		        $('.text').html('para baixo'+posicao);

		        if(ver == 2){
					posicao = 156;
				}

				if(ver >2 ){ 
					posicao = ver;
				}

		    }

		   /* EVENTO COM O MOUSE WHEEL SUBINDO */
		    else {
		        posicao = posicao - 1;
		        $('.text').html('para cima'+posicao);

				if(ver == 2){
					posicao = 156;
				}

				if(ver >2 ){
					posicao=ver;
				}

		    }
		    	//$('h1').html("Hello world");
		
			switch (posicao) {

				case 0:	


					posicao = 161;			
					break;	

				case 6:		

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#biblioteca";

				    $('.go-to').attr("onclick", "handle(handle, 12); handledot(2)");

					$("body").css("background", "#8F7753");

					$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/capa.png)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/capa.png)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});


						handledot(1,' Apresentacao');
					
						
						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		

						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#8F7753"); //COLOCAREMOS IMAGEM OU COR
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/


					break;	

				case 12:		

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#biblioteca";

				    $('.go-to').attr("onclick", "handle(handle, 18); handledot(3)");

					$("body").css("background", "#8F7753");

					$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/apresentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/apresentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});


						handledot(2);
					
						
						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		

						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#8F7753"); //COLOCAREMOS IMAGEM OU COR
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/


					break;



				case 18:

					
					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal2";
					$('.go-to').attr("onclick", "handle(handle, 24); handledot(4)");
					$("body").css("background", "#EDE09A");
					//$(".metade-esquerda").css("background", "purple");

					
					$(".metade-esquerda").toggle("blind", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Documentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("blind", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/Documentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});


						handledot(3);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#DBE2FF");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 24:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal3";
					$('.go-to').attr("onclick", "handle(handle, 30); handledot(5)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("size", 700, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("size", 700, function(){					
						});

					});
					

						handledot(4);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-4.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					
					break;

				case 30:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal4";
					$('.go-to').attr("onclick", "handle(handle, 36); handledot(7)");
					
					$(".metade-esquerda").css("background", "red");
					$(".metade-esquerda").toggle("clip", 800, function(){

						$(".metade-esquerda").css("background", "black");
						$(".metade-esquerda").toggle("clip", 800, function(){					
						});

					});
						handledot(5);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

					break;


				case 36:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal5";
					$('.go-to').attr("onclick", "handle(handle, 36)");
					$(".metade-esquerda").css("background", "black");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "blue");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});
						handledot(6,' Teste5');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 42:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal6";
					$('.go-to').attr("onclick", "handle(handle, 42)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("puff", 1000, function(){

						$(".metade-esquerda").css("background", "purple");
						$(".metade-esquerda").toggle("puff", 1000, function(){					
						});

					});

						handledot(7,'Teste6');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 48:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal7";
					$('.go-to').attr("onclick", "handle(handle, 48)");
					$(".metade-esquerda").css("background", "purple");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "blue");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(8,' Teste7');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 54:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal8";
					$('.go-to').attr("onclick", "handle(handle, 54)");

					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("size", 1000, function(){

						$(".metade-esquerda").css("background", "green");
						$(".metade-esquerda").toggle("size", 1000, function(){					
						});

					});
						handledot(9, 'Teste8');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-5.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;

				case 60:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal9";
					$('.go-to').attr("onclick", "handle(handle, 60)");
					$(".metade-esquerda").css("background", "green");
					
					$(".metade-esquerda").toggle("clip", 1000, function(){

						$(".metade-esquerda").css("background", "blue");
						$(".metade-esquerda").toggle("clip", 1000, function(){					
						});


					});
						handledot(10,' Teste9');


						$(".metade-esquerda").css("background", "purple");

					

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 66:



					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal10";
					$('.go-to').attr("onclick", "handle(handle, 66)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(11,' teste10');


						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 72:



				paragrafo = "Novo parágrafo";
				titulo = "novo titulo";
				link = "#myModal11";						
				$('.go-to').attr("onclick", "handle(handle, 72)");			
				$(".metade-esquerda").toggle("blind", 1000, function(){
					$(".metade-esquerda").css("background", "red");
					$(".metade-esquerda").toggle("blind", 1000, function(){					
					});
				});
					
					handledot(12,'teste11');
					

					/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
					$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});						
					/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);/* MUDA O LINK DOS BOTOES */
					$('a').attr("href", link);
					/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
					$("#foto2").attr("src","img/ic-6.png");
					$("#foto2").attr("id", "foto2");
					$("#foto4").attr("src","img/ic-1.png");
					$("#foto4").attr("id", "foto3");						
					$("#foto6").attr("src","img/ic-5.png");
					$("#foto6").attr("id", "foto3");
					/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/
					break;


				case 78:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal12";
					$('.go-to').attr("onclick", "handle(handle, 78)");	
					
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(13,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						
						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-6.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 84:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal13";
					$('.go-to').attr("onclick", "handle(handle, 84)");
					$(".metade-esquerda").css("background", "red");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(14,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 90:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal14";
					$('.go-to').attr("onclick", "handle(handle, 90)");	
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(15,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;
				case 96:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal15";
					$('.go-to').attr("onclick", "handle(handle, 96)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(16,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 102:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal16";
					$('.go-to').attr("onclick", "handle(handle, 102)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(17,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 108:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal17";
					$('.go-to').attr("onclick", "handle(handle, 108)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(18,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-6.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 114:

					
					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal18";
					$('.go-to').attr("onclick", "handle(handle, 114)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(19,'');
					

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 120:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal19";
					$('.go-to').attr("onclick", "handle(handle, 120)");	
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(20,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;


				case 126:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal20";
					$('.go-to').attr("onclick", "handle(handle, 126)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(21,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 132:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal21";
					$('.go-to').attr("onclick", "handle(handle, 132)");	
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(22,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 138:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal22";
					$('.go-to').attr("onclick", "handle(handle, 138)");	
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(23,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 144:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal23";
					$('.go-to').attr("onclick", "handle(handle, 144)");	
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(24,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-4.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 150:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal24";
					$('.go-to').attr("onclick", "handle(handle, 150)");
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						handledot(25,'');

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, .p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('.p').html(paragrafo);
						$('h1, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

					case 156:

						paragrafo = "Novo parágrafo";
						titulo = "novo titulo";
						link = "#myModal25";
						$('.go-to').attr("onclick", "handle(handle, 156)");
						$(".metade-esquerda").css("background", "blue");
						
						$(".metade-esquerda").toggle("blind", 1000, function(){

							$(".metade-esquerda").css("background", "red");
							$(".metade-esquerda").toggle("blind", 1000, function(){					
							});

						});

							handledot(26,'');
						

							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('h1, p').fadeOut("slow", function(){
								$('h1').html(titulo);
								$('.p').html(paragrafo);
								$('h1, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('a').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;

					case 162:

						paragrafo = "Novo parágrafo";
						titulo = "novo titulo";
						link = "#myModal26";
						$('.go-to').attr("onclick", "handle(handle, 6)");	
						$(".metade-esquerda").css("background", "blue");
						
						$(".metade-esquerda").toggle("blind", 1000, function(){

							$(".metade-esquerda").css("background", "red");
							$(".metade-esquerda").toggle("blind", 1000, function(){					
							});

						});

							handledot(27,'');
						

							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('h1, p').fadeOut("slow", function(){
								$('h1').html(titulo);
								$('.p').html(paragrafo);
								$('h1, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('a').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");
							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;

					case 168:

						paragrafo = "Novo parágrafo";
						titulo = "novo titulo";
						link = "#myModal28";
							
						$(".metade-esquerda").css("background", "blue");
						
						$(".metade-esquerda").toggle("blind", 1000, function(){

							$(".metade-esquerda").css("background", "red");
							$(".metade-esquerda").toggle("blind", 1000, function(){					
							});

						});

							handledot(27);

							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('h1, p').fadeOut("slow", function(){
								$('h1').html(titulo);
								$('.p').html(paragrafo);
								$('h1, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('a').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;

					case 174:

						posicao = 5;
						break;

			}

		}

	function wheel(event){
		var delta = 0;
		if(!event)event=window.event;

		if(event.wheelDelta){
			
		
			delta=event.wheelDelta/120;

			if(window.opera){delta=-delta;

			}

		}
		else if(event.detail){
			delta=-event.detail/3;
		}

		if(delta)handle(delta);

		if(event.preventDefault){
			event.preventDefault();
			event.returnValue=false;
		}
	}

	if(window.addEventListener){
		window.addEventListener('DOMMouseScroll',wheel,false);
		window.onmousewheel=document.onmousewheel=wheel;
	}

	