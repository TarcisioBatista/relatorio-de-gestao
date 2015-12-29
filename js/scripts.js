	
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
			$("#list"+item).html("<div style='float:right;font-size:18px;font-weight:bold;font-style:normal;left:8px; width:100px;  font-family: inherit;'>"+listname+"</div>");
			


			for(num_listas = 1; num_listas < 29; num_listas++){		
				//alert(num_listas);
				if(num_listas != item){
					$("#list"+num_listas).css(listapadrao);
					$("#list"+num_listas).html("");
					
					
				
				}
			}

			
		
	}

	var posicao	= 5;
	var listapadrao = {marginLeft: "-100px", fontSize: "1em", marginTop: ""};
	var efeitolista = {marginLeft: "0px", fontSize: "2em", marginTop: "3px"};
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
					titulo = "Relaório de Gestão";
					link = "#capa";

				    $('.go-to').attr("onclick", "handle(handle, 12); handledot(2,titulo)");					
					$(".metade-esquerda").css({"background": "url(img/relatorio/capa.png)", "background-repeat": "no-repeat", backgroundSize: "cover"});



						handledot(1,titulo);

					
						
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
					titulo = "Apresentação";
					link = "#apresentacao";

				    $('.go-to').attr("onclick", "handle(handle, 18); handledot(3,titulo)");

					$("body").css("background", "#8F7753");

					$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/apresentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/apresentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

						handledot(2,titulo);

					
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
					titulo = "Reitor";
					link = "#reitor";
					$('.go-to').attr("onclick", "handle(handle, 24); handledot(4,titulo)");
					$("body").css("background", "#EDE09A");
					//$(".metade-esquerda").css("background", "purple");

					
					$(".metade-esquerda").toggle("blind", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Reitor.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("blind", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/Reitor.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});


						handledot(3,titulo);

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
								$(".metade-direita").css("background" ,"#EDE09A");
						
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
					titulo = "Numeros";
					link = "#numeros";
					$('.go-to').attr("onclick", "handle(handle, 30); handledot(5,titulo)");

					$("body").css("background","#65DFA4");

					$(".metade-esquerda").toggle("size", 700, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/numeros.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("size", 700, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/numeros.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});					
						});

					});
					

						handledot(4,titulo);

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
								$(".metade-direita").css("background" ,"#65DFA4");
						
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
					titulo = "Objetivo";
					link = "#objetivo";

					$('.go-to').attr("onclick", "handle(handle, 36); handledot(7,titulo)");		

					$("body").css("background", "#C0E7D4");
					$(".metade-esquerda").toggle("clip", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Objetivo.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("clip", 800, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/Objetivo.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});
						handledot(5,titulo);

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
								$(".metade-direita").css("background" ,"#C0E7D4");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

					break;


				case 36:


					paragrafo = "Novo parágrafo";
					titulo = "Aplicação";
					link = "#aplicacao";
					$('.go-to').attr("onclick", "handle(handle, 42); handledot(7,titulo)");
					$("body").css("background", "black");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/aplicacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/aplicacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});
						handledot(6,titulo);

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
								$(".metade-direita").css("background" ,"black");
						
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
					titulo = "Atuação";
					link = "#atuacao";
					$('.go-to').attr("onclick", "handle(handle, 48); handledot(8,titulo)");
					$("body").css("background", "#8F7753");
					
					$(".metade-esquerda").toggle("puff", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/atuacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("puff", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/atuacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});

					});

						handledot(7,titulo);

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
								$(".metade-direita").css("background" ,"#8F7753");
						
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
					titulo = "Meta";
					link = "#meta";
					$('.go-to').attr("onclick", "handle(handle, 54); handledot(9,titulo)");
					$("body").css("background", "#95EAF1");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Meta.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/Meta.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});

						handledot(8,titulo);

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
								$(".metade-direita").css("background" ,"#95EAF1");
						
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
					titulo = "Atividades";
					link = "#atividades";
					$('.go-to').attr("onclick", "handle(handle, 60); handledot(10,titulo)");

					$("body").css("background", "blue");
					
					$(".metade-esquerda").toggle("size", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Atividades.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("size", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/Atividades.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});
						handledot(9, titulo);

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
								$(".metade-direita").css("background" ,"blue");
						
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
					titulo = "Ensino";
					link = "#ensino";
					$('.go-to').attr("onclick", "handle(handle, 66); handledot(11,titulo)");
					$("body").css("background", "#DBE2FF");
					
					$(".metade-esquerda").toggle("clip", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Ensino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("clip", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/Ensino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});					
						});


					});
						handledot(10,titulo);

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

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 66:



					paragrafo = "Novo parágrafo";
					titulo = "CEAD";
					link = "#cead";
					$('.go-to').attr("onclick", "handle(handle, 72); handledot(12,titulo)");
					$("body").css("background", "#EF729C");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/cead.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/cead.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(11,titulo);


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
								$(".metade-direita").css("background" ,"#EF729C");
						
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
				titulo = "Pesquisa";
				link = "#pesquisa";						
				$('.go-to').attr("onclick", "handle(handle, 78); handledot(13,titulo)");
				$("body").css("background", "#96EAF4");

				$(".metade-esquerda").toggle("blind", 1000, function(){
					$(".metade-esquerda").css({"background": "url(img/relatorio/pesquisa.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
					$(".metade-esquerda").toggle("blind", 1000, function(){					
						$(".metade-esquerda").css({"background": "url(img/relatorio/pesquisa.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
					});
				});
					
					handledot(12,titulo);
					

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
								$(".metade-direita").css("background" ,"#96EAF4");
						
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
					titulo = "Pós";
					link = "#pos";
					$('.go-to').attr("onclick", "handle(handle, 84); handledot(14, titulo)");
					
					$("body").css("background", "black");

					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/pos.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/pos.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});					
						});

					});

						handledot(13,titulo);

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
								$(".metade-direita").css("background" ,"black");
						
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
					titulo = "PGS";
					link = "#pgs";
					$('.go-to').attr("onclick", "handle(handle, 90); handledot(15,titulo)");
					$("body").css("background", "black");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/pgs.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/pgs.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});

					});

						handledot(14,titulo);

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
								$(".metade-direita").css("background" ,"black");
						
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
					titulo = "Hospital";
					link = "#hospital";
					$('.go-to').attr("onclick", "handle(handle, 96); handledot(16,titulo)");
					$("body").css("background", "#97E39B");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/hospital.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/hospital.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});

						handledot(15,titulo);

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
								$(".metade-direita").css("background" ,"#97E39B");
						
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
					titulo = "Extensão";
					link = "#extensao";
					$('.go-to').attr("onclick", "handle(handle, 102); handledot(17,titulo)");
					$("body").css("background", "#E1D7BC");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/extensao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){		
							$(".metade-esquerda").css({"background": "url(img/relatorio/extensao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});			
						});

					});

						handledot(16,titulo);

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
								$(".metade-direita").css("background" ,"#E1D7BC");
						
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
					titulo = "Biblioteca";
					link = "#biblioteca";
					$('.go-to').attr("onclick", "handle(handle, 108); handledot(18,titulo)");
					$("body").css("background", "#4690B5");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/biblioteca.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/biblioteca.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});

						handledot(17,titulo);

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
								$(".metade-direita").css("background" ,"#4690B5");
						
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
					titulo = "Editora";
					link = "#editora";
					$('.go-to').attr("onclick", "handle(handle, 114); handledot(19,titulo)");
					$("body").css("background", "#F2F1DD");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/editora.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/editora.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(18,titulo);

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
								$(".metade-direita").css("background" ,"#F2F1DD");
						
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
					titulo = "Documentação";
					link = "#documentacao";
					$('.go-to').attr("onclick", "handle(handle, 120); handledot(20,titulo)");
					$("body").css("background", "#93E6EE");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/documentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/documentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(19,titulo);
					

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
								$(".metade-direita").css("background" ,"#93E6EE");
						
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
					titulo = "Imprensa";
					link = "#imprensa";
					$('.go-to').attr("onclick", "handle(handle, 126); handledot(21,titulo)");
					$("body").css("background", "#EAEBBF");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/imprensa.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/imprensa.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(20,titulo);

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
								$(".metade-direita").css("background" ,"#EAEBBF");
						
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
					titulo = "Rádio";
					link = "#radio";
					$('.go-to').attr("onclick", "handle(handle, 132); handledot(22,titulo)");
					$("body").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/radio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/radio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(21,titulo);

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
								$(".metade-direita").css("background" ,"blue");
						
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
					titulo = "Cotec";
					link = "#cotec";
					$('.go-to').attr("onclick", "handle(handle, 138); handledot(23,titulo)");
					$("body").css("background", "#E1D7BC");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/cotec.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/cotec.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(22,titulo);

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
								$(".metade-direita").css("background" ,"#E1D7BC");
						
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
					titulo = "Intercâmbio";
					link = "#intercambio";
					$('.go-to').attr("onclick", "handle(handle, 144); handledot(24,titulo)");
					$("body").css("background", "#D522DE");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/intercambio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/intercambio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(23,titulo);

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
								$(".metade-direita").css("background" ,"#D522DE");
						
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
					titulo = "IPC";
					link = "#ipc";
					$('.go-to').attr("onclick", "handle(handle, 150); handledot(25,titulo)");
					$("body").css("background", "#75DD6A");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/ipc.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/ipc.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(24,titulo);

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
								$(".metade-direita").css("background" ,"#75DD6A");
						
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
					titulo = "Jurídico";
					link = "#juridico";
					$('.go-to').attr("onclick", "handle(handle, 156); handledot(26,titulo)");
					$("body").css("background", "#C369E5");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/juridico.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/juridico.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(25,titulo);

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
								$(".metade-direita").css("background" ,"#C369E5");
						
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
						titulo = "Avaliação";
						link = "#avaliacao";
						$('.go-to').attr("onclick", "handle(handle, 162); handledot(27,titulo)");
						$("body").css("background", "#CAF3F9");
						
						$(".metade-esquerda").toggle("puff", 800, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/avaliacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/avaliacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

							handledot(26,titulo);
						

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
								$(".metade-direita").css("background" ,"#CAF3F9");
						
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
						titulo = "Tecnologia";
						link = "#tecnologia";

						$('.go-to').attr("onclick", "handle(handle, 168); handledot(28,titulo)");
						$("body").css("background", "blue");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/tecnologia.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/tecnologia.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

							handledot(27,titulo);
						

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
								$(".metade-direita").css("background" ,"blue");
						
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

						titulo = "Sustentabilidade";
						link = "#sustentabilidade";
						$('.go-to').attr("onclick", "handle(handle, 174); handledot(29, titulo)");	

						$(".metade-esquerda").css("background", "blue");
						

						$("body").css("background", "blue");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

							$(".metade-esquerda").css({"background": "url(img/relatorio/sustentabilidade.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/sustentabilidade.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

							handledot(28,titulo);


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
								$(".metade-direita").css("background" ,"blue");
						
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

						paragrafo = "Novo parágrafo";

						titulo = "Hino";
						link = "#hino";

						$('.go-to').attr("onclick", "handle(handle, 12); handledot(2,titulo)");	

						
						$("body").css("background", "blue");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

							$(".metade-esquerda").css({"background": "url(img/relatorio/hino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/hino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
							});
						});	

							handledot(29,titulo);

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
								$(".metade-direita").css("background" ,"blue");
						
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
					case 180:
						
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

	