	$(document).ready(function(){
		$('.metade-esquerda, .metade-direita').height($( window ).height());
	});
	
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
		$(".list_effect"+item).css('padding-top', '6px');
		$(".list_effect"+item).animate({opacity: 1,	},4000);


		for(num_listas = 1; num_listas < 29; num_listas++){		
			//alert(num_listas);
			if(num_listas != item){
				$("#list"+num_listas).css(listapadrao);
				$(".list_effect"+num_listas).css('padding-top', '');
				$(".list_effect"+num_listas).animate({opacity: 0.5,},2000);
				//$("#list"+num_listas).html("");
			}
		}
		
	}

	var posicao	= 5;
	var listapadrao = {marginLeft: "0px", fontSize: "1em", marginTop: ""};
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
		   		if((posicao%6)==0){
						function sleep(milliseconds) {
	 						var start = new Date().getTime();
	  						for (var i = 0; i < 1e7; i++) {
	    						if ((new Date().getTime() - start) > milliseconds){
	      						break;
	    						}
	  						}
						}
				sleep(500);
				posicao++;
				}
		        posicao = posicao + 1;
		        
		  		

		      //  $('.text').html('para baixo'+posicao);

		        if(ver == 2){
					posicao = 156;
				}

				if(ver >2 ){ 
					posicao = ver;
				}

		    }

		   /* EVENTO COM O MOUSE WHEEL SUBINDO */
		    else {
		    	        if((posicao%6)==0){
					function sleep(milliseconds) {
 						var start = new Date().getTime();
  						for (var i = 0; i < 1e7; i++) {
    						if ((new Date().getTime() - start) > milliseconds){
      						break;
    						}
  						}
					}
				sleep(1000);
				posicao--;
				}
		        posicao = posicao - 1;

		
		      //  $('.text').html('para cima'+posicao);

				if(ver == 2){
					posicao = 156;
				}

				if(ver >2 ){
					posicao=ver;
				}

		    }
		    	//$('.h1-desk').html("Hello world");

			switch (posicao) {

				case 0:	


					posicao = 161;			
					break;
						
				case 6:		
					/*$(".fa-circle").css("color", "#105228");


					paragrafo = "Novo parágrafo";
					titulo = "Teste";
					link = "";
					$("body").css("background", "#fff");

					$('.go-top').attr("onclick", "handle(handle, 0);");	

				    $('.go-to').attr("onclick", "handle(handle, 12);");					
										
					
						//handledot(1,titulo);

					$("body").css("background", "#B6D852");

					$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/resultados.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/resultados.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

					
						
						// ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO 
						//$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						//$('.h1-desk, .p').fadeIn("slow");
					//});		

						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						//$( ".metade-direita" ).animate({
							
						//	 opacity: 0.1
						//	}, 800, function(){
								$(".metade-direita").css("background" ,"#fff"); //COLOCAREMOS IMAGEM OU COR
						
						//	});

						//$( ".metade-direita" ).animate({
						//	  opacity: 1
						//	}, 800);
					
						// MUDA O LINK DOS BOTOES 
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO 

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						// FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO 


					break;*/

				case 12:
					$(".fa-circle").css("color", "#000");

					
					paragrafo = "Novo parágrafo";
					titulo = "Atividades Institucionais";
					link = "#atividades";
					handledot(2,titulo);

				    $('.go-top').attr("onclick", "location.reload();");
				    $('.go-to').attr("onclick", "handle(handle, 18);");
				    $('.go-top').css("visibility", "visible");
				    $('.time-line').css("visibility", "visible");
				    $('.go-to i').css("font-size", "2em");
				    $('.voltarTopo').css("visibility", "visible");




					$("body").css("background", "#F0F0B2");

					$(".metade-esquerda").toggle("puff", 800, function(){
						$('.encapsulador-conteudo').css("margin-top", "180px");
						$('.encapsulador-conteudo').css("color", "#000");


						$(".metade-esquerda").css({"background": "url(img/relatorio/Atividades.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/Atividades.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});
					
						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		

						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#F0F0B2"); //COLOCAREMOS IMAGEM OU COR
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO


					break;



				case 18:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#0E2FAF");
					paragrafo = "Novo parágrafo";
					titulo = "Ensino superior, profissional e tecnológico";
					link = "#ensino";
					$('.go-top').attr("onclick", "handle(handle, 12);");
					$('.go-to').attr("onclick", "handle(handle, 24);");
					$("body").css("background", "#DCE3FE");
					//$(".metade-esquerda").css("background", "purple");

					

					
					$(".metade-esquerda").toggle("blind", 800, function(){
						$('.encapsulador-conteudo').css("margin-top", "80px");
						$('.encapsulador-conteudo').css("color", "#000");


						$(".metade-esquerda").css({"background": "url(img/relatorio/Ensino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("blind", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/Ensino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});


						handledot(3,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#DCE3FE");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO
						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

					break;


				case 24:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#000");
					paragrafo = "Novo parágrafo";
					titulo = "Educação à Distância";
					link = "#cead";
					$('.go-top').attr("onclick", "handle(handle, 18);");
					$('.go-to').attr("onclick", "handle(handle, 30);");
					

					$("body").css("background","#F287B4");

					$(".metade-esquerda").toggle("size", 700, function(){
						$('.encapsulador-conteudo').css("margin-top", "180px");
						$('.encapsulador-conteudo').css("color", "#000");


						$(".metade-esquerda").css({"background": "url(img/relatorio/cead.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("size", 700, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/cead.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});					
						});

					});
					

						handledot(4,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#F287B4");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-4.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

					
					break;

				case 30:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#288183");
					paragrafo = "Novo parágrafo";
					titulo = "Programas de Pós-Graduação";
					link = "#pos";

					$('.go-top').attr("onclick", "handle(handle, 24);");		
					$('.go-to').attr("onclick", "handle(handle, 36);");		

					$("body").css("background", "#ACEDCF");
					$(".metade-esquerda").toggle("clip", 800, function(){

						$('.encapsulador-conteudo').css("margin-top", "100px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/pos.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("clip", 800, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/pos.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});
						handledot(5,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#ACEDCF");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

					break;


				case 36:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#28732A");
					paragrafo = "Novo parágrafo";
					titulo = "Extensão";
					link = "#extensao";
					$('.go-top').attr("onclick", "handle(handle, 30);");
					$('.go-to').attr("onclick", "handle(handle, 42);");
					$("body").css("background", "#E3DAC6");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/extensao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/extensao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});
						handledot(6,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#E3DAC6");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

					break;


				case 42:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");
					paragrafo = "Novo parágrafo";
					titulo = "Pesquisa";
					link = "#pesquisa";
					$('.go-top').attr("onclick", "handle(handle, 36);");
					$('.go-to').attr("onclick", "handle(handle, 48);");
					$("body").css("background", "#9FECF4");
					
					$(".metade-esquerda").toggle("puff", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/pesquisa.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("puff", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/pesquisa.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});

					});

						handledot(7,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#9FECF4");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

					break;


				case 48:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#4E639F");
					paragrafo = "Novo parágrafo";
					titulo = "Sistema de Bibliotecas";
					link = "#biblioteca";
					$('.go-top').attr("onclick", "handle(handle, 42);");
					$('.go-to').attr("onclick", "handle(handle, 54);");
					$("body").css("background", "#4DC5D8");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "150px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/Biblioteca.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/Biblioteca.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});

						handledot(8,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#4DC5D8");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

					break;


				case 54: //PROCESSOS SELETIVOS SEM IMAGEM!!!!!!

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");
					paragrafo = "Novo parágrafo";
					titulo = "Processos Seletivos";
					link = "#processosseletivos";
					$('.go-top').attr("onclick", "handle(handle, 48);");
					$('.go-to').attr("onclick", "handle(handle, 60);");
					

					$("body").css("background", "#72789E");
					
					$(".metade-esquerda").toggle("size", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "150px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/processos_seletivos.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("size", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/processos_seletivos.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});
						handledot(9, titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#72789E");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-5.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

					break;

				case 60:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#1E5249");
					paragrafo = "Novo parágrafo";
					titulo = "Hospital Universitário Clemente de Faria";
					link = "#hospital";
					$('.go-top').attr("onclick", "handle(handle, 54);");
					$('.go-to').attr("onclick", "handle(handle, 66);");
					$("body").css("background", "#86E19C");
					
					$(".metade-esquerda").toggle("clip", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "80px");
						$('.encapsulador-conteudo').css("color", "#000");

						$(".metade-esquerda").css({"background": "url(img/relatorio/hospital.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("clip", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/hospital.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});					
						});


					});
						handledot(10,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#86E19C");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

					break;


				case 66:


					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#270202");
					paragrafo = "Novo parágrafo";
					titulo = "Cepedor";
					link = "#cepedor";
					$('.go-top').attr("onclick", "handle(handle, 60);");
					$('.go-to').attr("onclick", "handle(handle, 72);");
					$("body").css("background", "#2677CA");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/cepedor.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/cepedor.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(11,titulo);


						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#2677CA");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 72:


				$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#465210");
				paragrafo = "Novo parágrafo";
				titulo = "Editora Unimontes";
				link = "#editora";						
				$('.go-top').attr("onclick", "handle(handle, 66);");
				$('.go-to').attr("onclick", "handle(handle, 78);");
				$("body").css("background", "#EDECD6");

				$(".metade-esquerda").toggle("size", 1000, function(){

					$('.encapsulador-conteudo').css("margin-top", "160px");
					$('.encapsulador-conteudo').css("color", "#000");
					$(".metade-esquerda").css({"background": "url(img/relatorio/editora.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
					$(".metade-esquerda").toggle("size", 1000, function(){					
						$(".metade-esquerda").css({"background": "url(img/relatorio/editora.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
					});
				});
					
					handledot(12,titulo);
					

					//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
					$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});						
					// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#EDECD6");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);// MUDA O LINK DOS BOTOES
					$('.b-desk').attr("href", link);
					//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO
					$("#foto2").attr("src","img/ic-6.png");
					$("#foto2").attr("id", "foto2");
					$("#foto4").attr("src","img/ic-1.png");
					$("#foto4").attr("id", "foto3");						
					$("#foto6").attr("src","img/ic-5.png");
					$("#foto6").attr("id", "foto3");
					//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO
					break;


				case 78:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#08775E");
					paragrafo = "Novo parágrafo";
					titulo = "Índice de Preços ao Consumidor";
					link = "#ipc";
					$('.go-top').attr("onclick", "handle(handle, 74)");
					$('.go-to').attr("onclick", "handle(handle, 84)");
					
					$("body").css("background", "#8BE181");

					$(".metade-esquerda").toggle("puff", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "100px");
						$('.encapsulador-conteudo').css("color", "#000");			
						$(".metade-esquerda").css({"background": "url(img/relatorio/ipc.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("puff", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/ipc.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});					
						});

					});

						handledot(13,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#8BE181");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO
						
						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-6.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 84:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");
					paragrafo = "Novo parágrafo";
					titulo = "SAJ Itinerante";
					link = "#saj";
					$('.go-top').attr("onclick", "handle(handle, 78);");
					$('.go-to').attr("onclick", "handle(handle, 90);");
					$("body").css("background", "#E44637");
					
					$(".metade-esquerda").toggle("clip", 1000, function(){
						
						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/saj.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("clip", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/saj.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});

					});

						handledot(14,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#E44637");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 90:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");
					paragrafo = "Novo parágrafo";
					titulo = "Intercâmbio e Cooperação Interinstitucional";
					link = "#intercambio";
					$('.go-top').attr("onclick", "handle(handle, 84);");
					$('.go-to').attr("onclick", "handle(handle, 96);");
					$("body").css("background", "#E062EA");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "100px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/intercambio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/intercambio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});

						handledot(15,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#E062EA");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;
				case 96:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#fff");
					paragrafo = "Novo parágrafo";
					titulo = "Museu Histórico Regional";
					link = "#museu";
					$('.go-top').attr("onclick", "handle(handle, 90);");
					$('.go-to').attr("onclick", "handle(handle, 102);");
					$("body").css("background", "#2729A2");
					
					$(".metade-esquerda").toggle("size", 1000, function(){
						
						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$('.encapsulador-conteudo').css("color", "#969BD8");
						$(".metade-esquerda").css({"background": "url(img/relatorio/museu.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("size", 1000, function(){		
							$(".metade-esquerda").css({"background": "url(img/relatorio/museu.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});			
						});

					});

						handledot(16,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#2729A2");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO
						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 102:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");
					paragrafo = "Novo parágrafo";
					titulo = "Comunicação organizacional (Ascom)";
					link = "#ascom";
					$('.go-top').attr("onclick", "handle(handle, 96);");
					$('.go-to').attr("onclick", "handle(handle, 108);");
					$("body").css("background", "#E2BD79");
					
					$(".metade-esquerda").toggle("clip", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "150px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/ascom.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("clip", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/ascom.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});

						handledot(17,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#E2BD79");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 108:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");
					paragrafo = "Novo parágrafo";
					titulo = "Mídias Sociais";
					link = "#midiassociais";
					$('.go-top').attr("onclick", "handle(handle, 102)");
					$('.go-to').attr("onclick", "handle(handle, 114)");
					$("body").css("background", "#2FBC34");
					
					$(".metade-esquerda").toggle("puff", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/midias_sociais.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("puff", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/midias_sociais.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(18,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#2FBC34");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-6.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 114:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#1B5877");
					paragrafo = "Novo parágrafo";
					titulo = "Publicidade";
					link = "#publicidade";
					$('.go-top').attr("onclick", "handle(handle, 108)");
					$('.go-to').attr("onclick", "handle(handle, 120)");
					$("body").css("background", "#E3B834");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/publicidade.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/publicidade.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(19,titulo);
					

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#E3B834");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 120:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");
					paragrafo = "Novo parágrafo";
					titulo = "Rádio Unimontes";
					link = "#radio";
					$('.go-top').attr("onclick", "handle(handle, 114)");
					$('.go-to').attr("onclick", "handle(handle, 126)");
					$("body").css("background", "#C7D8EA");
					
					$(".metade-esquerda").toggle("clip", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/Radio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("clip", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/Radio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(20,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#C7D8EA");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;


				case 126:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");
					paragrafo = "Novo parágrafo";
					titulo = "Imprensa Universitária";
					link = "#imprensa";
					$('.go-top').attr("onclick", "handle(handle, 120)");
					$('.go-to').attr("onclick", "handle(handle, 132)");
					$("body").css("background", "#EBECC3");
					
					$(".metade-esquerda").toggle("size", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "200px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/imprensa.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("size", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/imprensa.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(21,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#EBECC3");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 132:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");

					paragrafo = "Novo parágrafo";
					titulo = "Infraestrutura (obras, TI)";
					link = "#infraestrutura";
					$('.go-top').attr("onclick", "handle(handle, 126)");
					$('.go-to').attr("onclick", "handle(handle, 138)");
					$("body").css("background", "#8084EB");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "170px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/infraestrutura.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/infraestrutura.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(22,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#8084EB");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO
						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 138:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#000");

					paragrafo = "Novo parágrafo";
					titulo = "Orçamento e Finanças";
					link = "#orcamentoefinancas";
					$('.go-top').attr("onclick", "handle(handle, 132)");
					$('.go-to').attr("onclick", "location.reload()");
					$("body").css("background", "#59CF7B");
					
					$(".metade-esquerda").toggle("puff", 1000, function(){

						$('.encapsulador-conteudo').css("margin-top", "180px");
						$('.encapsulador-conteudo').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/orcamento_financas.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("puff", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/orcamento_financas.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(23,titulo);

						//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#59CF7B");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");
						//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				/*case 144:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#0E520D");
					paragrafo = "Novo parágrafo";
					titulo = "IPC";
					link = "#ipc";
					$('.go-top').attr("onclick", "handle(handle, 138)");
					$('.go-to').attr("onclick", "handle(handle, 150)");
					$("body").css("background", "#75DD6A");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/orcamento_financas.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/orcamento_financas.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(24,titulo);

						// ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO 
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						//MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#75DD6A");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						//MUDA O LINK DOS BOTOES 
						$('.b-desk').attr("href", link);

						//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						$("#foto3").attr("src","img/ic-4.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						// FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

				case 150:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#141514");
					paragrafo = "Novo parágrafo";
					titulo = "Jurídico";
					link = "#juridico";
					$('.go-top').attr("onclick", "handle(handle, 144)");
					$('.go-to').attr("onclick", "handle(handle, 156)");
					$("body").css("background", "#C369E5");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/juridico.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/juridico.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(25,titulo);

						// ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO 
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#C369E5");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						// MUDA O LINK DOS BOTOES 
						$('.b-desk').attr("href", link);

						 //DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO 

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						// FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

						break;

					case 156:
						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#51A4EA");
						paragrafo = "Novo parágrafo";
						titulo = "Avaliação";
						link = "#avaliacao";
						$('.go-top').attr("onclick", "handle(handle, 150)");
						$('.go-to').attr("onclick", "handle(handle, 162)");
						$("body").css("background", "#CAF3F9");
						
						$(".metade-esquerda").toggle("puff", 800, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/avaliacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/avaliacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

							handledot(26,titulo);
						

							//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
							$('.h1-desk, p').fadeOut("slow", function(){
								$('.h1-desk').html(titulo);
								$('.p').html(paragrafo);
								$('.h1-desk, p').fadeIn("slow");
							});
							// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#CAF3F9");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							// MUDA O LINK DOS BOTOES
							$('.b-desk').attr("href", link);

							//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

							$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

							//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

							break;

					case 162:
						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#51A4EA");
						paragrafo = "Novo parágrafo";
						titulo = "Tecnologia";
						link = "#tecnologia";

						$('.go-top').attr("onclick", "handle(handle, 156)");
						$('.go-to').attr("onclick", "handle(handle, 168)");
						$("body").css("background", "#DCECF4");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/tecnologia.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/tecnologia.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

							handledot(27,titulo);
						

							//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
							$('.h1-desk, p').fadeOut("slow", function(){
								$('.h1-desk').html(titulo);
								$('.p').html(paragrafo);
								$('.h1-desk, p').fadeIn("slow");
							});
							// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#DCECF4");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							// MUDA O LINK DOS BOTOES
							$('.b-desk').attr("href", link);

							//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");
							//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

							break;

					case 168:
						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#FBFBFB");
						paragrafo = "Novo parágrafo";

						titulo = "Sustentabilidade";
						link = "#sustentabilidade";
						$('.go-top').attr("onclick", "handle(handle, 162);");	
						$('.go-to').attr("onclick", "handle(handle, 174);");	

						$(".metade-esquerda").css("background", "#52BF56");
						

						$("body").css("background", "#52BF56");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

							$(".metade-esquerda").css({"background": "url(img/relatorio/sustentabilidade.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/sustentabilidade.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

							handledot(28,titulo);


							//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
							$('.h1-desk, p').fadeOut("slow", function(){
								$('.h1-desk').html(titulo);
								$('.p').html(paragrafo);
								$('.h1-desk, p').fadeIn("slow");
							});
							// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#52BF56");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							// MUDA O LINK DOS BOTOES
							$('.b-desk').attr("href", link);

							//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

							//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

							break;
					case 174:
						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#191D74");
						paragrafo = "Novo parágrafo";

						titulo = "Hino";
						link = "#hino";

						$('.go-top').attr("onclick", "handle(handle, 168);");
						$('.go-to').attr("onclick", "handle(handle, 54);");	

						
						$("body").css("background", "#AC9ED1");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

							$(".metade-esquerda").css({"background": "url(img/relatorio/hino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/hino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
							});
						});	

							handledot(29,titulo);

							//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
							$('.h1-desk, p').fadeOut("slow", function(){
								$('.h1-desk').html(titulo);
								$('.p').html(paragrafo);
								$('.h1-desk, p').fadeIn("slow");
							});
							// MUDA O BACKGRDOUND DA METADE DIREITA
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#AC9ED1");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							// MUDA O LINK DOS BOTOES
							$('.b-desk').attr("href", link);

							//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

							//FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO

							break;*/
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
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
	function disableScroll() {
		  if (window.addEventListener) // older FF
		  window.addEventListener('DOMMouseScroll', preventDefault, false);
		  window.onwheel = preventDefault; // modern standard
		  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		  window.ontouchmove  = preventDefault; // mobile
		  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
    if(window.addEventListener){
		
				window.addEventListener('DOMMouseScroll',wheel,false);
				window.onmousewheel=document.onmousewheel=wheel;
	}
}

