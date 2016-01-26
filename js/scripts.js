	$(document).ready(function(){
		$('.metade-esquerda, .metade-direita').height($( window ).height());



		$('#list1').hover(function(){
			$(".list_effect1").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect1").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list2').hover(function(){
			$(".list_effect2").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect2").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list3').hover(function(){
			$(".list_effect3").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect3").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list4').hover(function(){
			$(".list_effect4").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect4").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list5').hover(function(){
			$(".list_effect5").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect5").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list6').hover(function(){
			$(".list_effect6").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect6").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list7').hover(function(){
			$(".list_effect7").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect7").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list8').hover(function(){
			$(".list_effect8").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect8").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list9').hover(function(){
			$(".list_effect9").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect9").animate({ opacity: 0,},200);
		});


		//-------------------------------------------------
		$('#list10').hover(function(){
			$(".list_effect10").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect10").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list11').hover(function(){
			$(".list_effect11").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect11").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list12').hover(function(){
			$(".list_effect12").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect12").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list13').hover(function(){
			$(".list_effect13").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect13").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list14').hover(function(){
			$(".list_effect14").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect14").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list15').hover(function(){
			$(".list_effect15").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect15").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list16').hover(function(){
			$(".list_effect16").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect16").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list17').hover(function(){
			$(".list_effect17").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect17").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list18').hover(function(){
			$(".list_effect18").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect18").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list19').hover(function(){
			$(".list_effect19").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect19").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list20').hover(function(){
			$(".list_effect20").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect20").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list21').hover(function(){
			$(".list_effect21").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect21").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list22').hover(function(){
			$(".list_effect22").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect22").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list23').hover(function(){
			$(".list_effect23").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect23").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list24').hover(function(){
			$(".list_effect24").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect24").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list25').hover(function(){
			$(".list_effect25").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect25").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list26').hover(function(){
			$(".list_effect26").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect26").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list27').hover(function(){
			$(".list_effect27").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect27").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------
		$('#list28').hover(function(){
		$(".list_effect28").animate({ opacity: 1,},200);
		},function(){
			$(".list_effect28").animate({ opacity: 0,},200);
		});

		//-------------------------------------------------




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
			$(".list_effect"+item).animate({opacity: 1,	},4000);	


			for(num_listas = 1; num_listas < 29; num_listas++){		
				//alert(num_listas);
				if(num_listas != item){
					$("#list"+num_listas).css(listapadrao);
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
				sleep(1000);
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

<<<<<<< HEAD
				/*case 6:		
					//$(".fa-circle").css("color", "#105228");
=======
				case 6:		
					//$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#105228");
>>>>>>> b3ec8ff509447b79aef3a42104ecf78aead3d014
					paragrafo = "Novo parágrafo";
					titulo = "Resultados 2015";
					link = "#capa";
					$("body").css("background", "#fff");

					$('.go-top').attr("onclick", "handle(handle, 0); handledot(2,titulo)");	

				    $('.go-to').attr("onclick", "handle(handle, 12); handledot(2,titulo)");					
					$(".metade-esquerda").css({"background": "url(img/relatorio/capa.png)", "background-repeat": "no-repeat", backgroundSize: "cover"});

					
					
						//handledot(1,titulo);

					
						
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


					break;	*/

<<<<<<< HEAD
				case 6:		
					$(".fa-circle").css("color", "#105228");
=======
				case 12:		
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#105228");
>>>>>>> b3ec8ff509447b79aef3a42104ecf78aead3d014
					
					paragrafo = "Novo parágrafo";
					titulo = "Apresentação";
					link = "#apresentacao";

				    $('.go-top').attr("onclick", "handle(handle, 6); handledot(3,titulo)");
				    $('.go-to').attr("onclick", "handle(handle, 18); handledot(3,titulo)");


					$("body").css("background", "#B6D852");

					$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/apresentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/apresentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

						handledot(2,titulo);

					
						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		

						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#B6D852"); //COLOCAREMOS IMAGEM OU COR
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						
						/* MUDA O LINK DOS BOTOES */
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/


					break;



				case 18:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#9E2020");
					paragrafo = "Novo parágrafo";
					titulo = "Reitor";
					link = "#reitor";
					$('.go-top').attr("onclick", "handle(handle, 12); handledot(4,titulo)");
					$('.go-to').attr("onclick", "handle(handle, 24); handledot(4,titulo)");
					$("body").css("background", "#E9DDAB");
					//$(".metade-esquerda").css("background", "purple");

					
					$(".metade-esquerda").toggle("blind", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Reitor.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("blind", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/Reitor.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});


						handledot(3,titulo);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 24:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#0A3C07");
					paragrafo = "Novo parágrafo";
					titulo = "Numeros";
					link = "#numeros";
					$('.go-top').attr("onclick", "handle(handle, 18); handledot(5,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-4.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					
					break;

				case 30:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#288183");
					paragrafo = "Novo parágrafo";
					titulo = "Objetivo";
					link = "#objetivo";

					$('.go-top').attr("onclick", "handle(handle, 24); handledot(7,titulo)");		
					$('.go-to').attr("onclick", "handle(handle, 36); handledot(7,titulo)");		

					$("body").css("background", "#EAEBDA");
					$(".metade-esquerda").toggle("clip", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Objetivo.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("clip", 800, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/Objetivo.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});
						handledot(5,titulo);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#EAEBDA");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('.b-desk').attr("href", link);

					break;


				case 36:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color", "#438FCF");
					paragrafo = "Novo parágrafo";
					titulo = "Aplicação";
					link = "#aplicacao";
					$('.go-top').attr("onclick", "handle(handle, 30); handledot(7,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 42:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#3F4334");
					paragrafo = "Novo parágrafo";
					titulo = "Atuação";
					link = "#atuacao";
					$('.go-top').attr("onclick", "handle(handle, 36); handledot(8,titulo)");
					$('.go-to').attr("onclick", "handle(handle, 48); handledot(8,titulo)");
					$("body").css("background", "#B1925A");
					
					$(".metade-esquerda").toggle("puff", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/atuacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("puff", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/atuacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});

					});

						handledot(7,titulo);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#B1925A");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 48:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#0981B1");
					paragrafo = "Novo parágrafo";
					titulo = "Meta";
					link = "#meta";
					$('.go-top').attr("onclick", "handle(handle, 42); handledot(9,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 54:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#AB7758");
					paragrafo = "Novo parágrafo";
					titulo = "Atividades";
					link = "#atividades";
					$('.go-top').attr("onclick", "handle(handle, 48); handledot(10,titulo)");
					$('.go-to').attr("onclick", "handle(handle, 60); handledot(10,titulo)");

					$("body").css("background", "#F4F3B9");
					
					$(".metade-esquerda").toggle("size", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Atividades.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("size", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/Atividades.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});				
						});

					});
						handledot(9, titulo);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#F4F3B9");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-5.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;

				case 60:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#0D0E0E");
					paragrafo = "Novo parágrafo";
					titulo = "Ensino";
					link = "#ensino";
					$('.go-top').attr("onclick", "handle(handle, 54); handledot(11,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 66:


					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#270202");
					paragrafo = "Novo parágrafo";
					titulo = "CEAD";
					link = "#cead";
					$('.go-top').attr("onclick", "handle(handle, 60); handledot(12,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 72:


				$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#0977D9");
				paragrafo = "Novo parágrafo";
				titulo = "Pesquisa";
				link = "#pesquisa";						
				$('.go-top').attr("onclick", "handle(handle, 66); handledot(13,titulo)");
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
					$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
					$('.b-desk').attr("href", link);
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
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#08775E");
					paragrafo = "Novo parágrafo";
					titulo = "Pós";
					link = "#pos";
					$('.go-top').attr("onclick", "handle(handle, 72); handledot(14, titulo)");
					$('.go-to').attr("onclick", "handle(handle, 84); handledot(14, titulo)");
					
					$("body").css("background", "#B0EBD1");

					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/pos.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/pos.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});					
						});

					});

						handledot(13,titulo);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#B0EBD1");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						
						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-6.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 84:

						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#171717");
					paragrafo = "Novo parágrafo";
					titulo = "PGS";
					link = "#pgs";
					$('.go-top').attr("onclick", "handle(handle, 78); handledot(15,titulo)");
					$('.go-to').attr("onclick", "handle(handle, 90); handledot(15,titulo)");
					$("body").css("background", "#2F9CB2");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/pgf.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
							$(".metade-esquerda").css({"background": "url(img/relatorio/pgf.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});

					});

						handledot(14,titulo);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#2F9CB2");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 90:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#0F7A81");
					paragrafo = "Novo parágrafo";
					titulo = "Hospital";
					link = "#hospital";
					$('.go-top').attr("onclick", "handle(handle, 84); handledot(16,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;
				case 96:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#114E29");
					paragrafo = "Novo parágrafo";
					titulo = "Extensão";
					link = "#extensao";
					$('.go-top').attr("onclick", "handle(handle, 90); handledot(17,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 102:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#3E5C8F");
					paragrafo = "Novo parágrafo";
					titulo = "Biblioteca";
					link = "#biblioteca";
					$('.go-top').attr("onclick", "handle(handle, 96); handledot(18,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 108:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#697137");
					paragrafo = "Novo parágrafo";
					titulo = "Editora";
					link = "#editora";
					$('.go-top').attr("onclick", "handle(handle, 102); handledot(19,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-6.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 114:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#1B5877");
					paragrafo = "Novo parágrafo";
					titulo = "Documentação";
					link = "#documentacao";
					$('.go-top').attr("onclick", "handle(handle, 108); handledot(20,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 120:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#397451");
					paragrafo = "Novo parágrafo";
					titulo = "Imprensa";
					link = "#imprensa";
					$('.go-top').attr("onclick", "handle(handle, 114); handledot(21,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;


				case 126:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#185955");
					paragrafo = "Novo parágrafo";
					titulo = "Rádio";
					link = "#radio";
					$('.go-top').attr("onclick", "handle(handle, 120); handledot(22,titulo)");
					$('.go-to').attr("onclick", "handle(handle, 132); handledot(22,titulo)");
					$("body").css("background", "#B6D3E4");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/radio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/radio.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(21,titulo);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#B6D3E4");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 132:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#496918");

					paragrafo = "Novo parágrafo";
					titulo = "Cotec";
					link = "#cotec";
					$('.go-top').attr("onclick", "handle(handle, 126); handledot(23,titulo)");
					$('.go-to').attr("onclick", "handle(handle, 138); handledot(23,titulo)");
					$("body").css("background", "#E7E076");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/cotec.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle("blind", 1000, function(){
						$(".metade-esquerda").css({"background": "url(img/relatorio/cotec.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						});
					});

						handledot(22,titulo);

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
					});		
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#E7E076");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 138:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#FCF7FF");

					paragrafo = "Novo parágrafo";
					titulo = "Intercâmbio";
					link = "#intercambio";
					$('.go-top').attr("onclick", "handle(handle, 132); handledot(24,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 144:

					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#0E520D");
					paragrafo = "Novo parágrafo";
					titulo = "IPC";
					link = "#ipc";
					$('.go-top').attr("onclick", "handle(handle, 138); handledot(25,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-4.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 150:
					$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#141514");
					paragrafo = "Novo parágrafo";
					titulo = "Jurídico";
					link = "#juridico";
					$('.go-top').attr("onclick", "handle(handle, 144); handledot(26,titulo)");
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
						$('.h1-desk, .p').fadeOut("slow", function(){
						$('.h1-desk').html(titulo);
						$('.p').html(paragrafo);
						$('.h1-desk, .p').fadeIn("slow");
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
						$('.b-desk').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

					case 156:
						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#51A4EA");
						paragrafo = "Novo parágrafo";
						titulo = "Avaliação";
						link = "#avaliacao";
						$('.go-top').attr("onclick", "handle(handle, 150); handledot(27,titulo)");
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
							$('.h1-desk, p').fadeOut("slow", function(){
								$('.h1-desk').html(titulo);
								$('.p').html(paragrafo);
								$('.h1-desk, p').fadeIn("slow");
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
							$('.b-desk').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;

					case 162:
						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#51A4EA");
						paragrafo = "Novo parágrafo";
						titulo = "Tecnologia";
						link = "#tecnologia";

						$('.go-top').attr("onclick", "handle(handle, 156); handledot(28,titulo)");
						$('.go-to').attr("onclick", "handle(handle, 168); handledot(28,titulo)");
						$("body").css("background", "#DCECF4");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/tecnologia.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/tecnologia.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

							handledot(27,titulo);
						

							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('.h1-desk, p').fadeOut("slow", function(){
								$('.h1-desk').html(titulo);
								$('.p').html(paragrafo);
								$('.h1-desk, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#DCECF4");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('.b-desk').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");
							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;

					case 168:
						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#FBFBFB");
						paragrafo = "Novo parágrafo";

						titulo = "Sustentabilidade";
						link = "#sustentabilidade";
						$('.go-top').attr("onclick", "handle(handle, 162); handledot(29, titulo)");	
						$('.go-to').attr("onclick", "handle(handle, 174); handledot(29, titulo)");	

						$(".metade-esquerda").css("background", "#52BF56");
						

						$("body").css("background", "#52BF56");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

							$(".metade-esquerda").css({"background": "url(img/relatorio/sustentabilidade.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/sustentabilidade.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

							handledot(28,titulo);


							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('.h1-desk, p').fadeOut("slow", function(){
								$('.h1-desk').html(titulo);
								$('.p').html(paragrafo);
								$('.h1-desk, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#52BF56");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('.b-desk').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;
					case 174:
						$(".fa-circle,.fa-chevron-up,.fa-chevron-down").css("color","#191D74");
						paragrafo = "Novo parágrafo";

						titulo = "Hino";
						link = "#hino";

						$('.go-top').attr("onclick", "handle(handle, 168); handledot(2,titulo)");	
						$('.go-to').attr("onclick", "handle(handle, 12); handledot(2,titulo)");	

						
						$("body").css("background", "#AC9ED1");
						
						$(".metade-esquerda").toggle("puff", 800, function(){

							$(".metade-esquerda").css({"background": "url(img/relatorio/hino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/hino.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
							});
						});	

							handledot(29,titulo);

							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('.h1-desk, p').fadeOut("slow", function(){
								$('.h1-desk').html(titulo);
								$('.p').html(paragrafo);
								$('.h1-desk, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"#AC9ED1");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('.b-desk').attr("href", link);

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

