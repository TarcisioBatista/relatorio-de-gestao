

	$(document).ready(function(){
		$('.metade-esquerda, .metade-direita').height($( window ).height());


		//Efeitos da timeline ao passar o cursor do mouse

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


	//Função que aplica efeito de transição na logomarca da unimontes no centro da página
	function EfeitoLogo(efeito,img){
		$("#logocentral").toggle(efeito, 800, function(){
						$('#logocentral').attr("src", "img/"+img+".png");
						$("#logocentral").toggle(efeito, 400, function(){
							$('#logocentral').attr("src", "img/"+img+".png");
						});	
					});
	}


	//Função que aplica os efeitos de transições, mudança de cores
	function EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground,corbody){

		
		$(".fa-circle").css("color", cortexto);
		$("body").css("background", corbody);
		

		$(".metade-esquerda").toggle(efeito, 800, function(){
						
						$('.encapsulador-conteudo').css("margin-top", margin+"px");					
						$(".metade-esquerda").css({"background": "url(img/relatorio/"+ img +".jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle(efeito, 400, function(){	
							
							//$(".metade-esquerda").css({"background": coricone, "background-repeat": "no-repeat", backgroundSize: "cover"});
							$(".metade-esquerda").css({"background": "url(img/relatorio/"+ img +".jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});
						//$("#foto6").attr("src", "img/" + retangulo + ".png");	

						
					});


		// MUDA O BACKGRDOUND DA METADE DIREITA						
		$( ".metade-direita" ).animate({opacity: 0.1 }, 800, function(){
				
				$('.encapsulador-conteudo').css("color", cortexto);
				$('.icone1').css("color", coricone);
				$(".metade-direita").css({"background": "url(img/relatorio/"+ imgbackground +".jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
			});
		$( ".metade-direita" ).animate({opacity: 1}, 800);



	}


	//Função que muda os títulos, parágrafos e links dos botões na metade direita
	function MudaConteudo(titulo,paragrafo,link){

		//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
		$('.h1-desk, .p').fadeOut("slow", function(){
			$('.h1-desk').html(titulo);
			$('.p').html(paragrafo);
			$('.h1-desk, .p').fadeIn("slow");
		})
		// MUDA O LINK DOS BOTOES
		$('.b-desk').attr("href", link);

	}

	//MUDA CORES DOS BOTÕES DE VOLTAR AO TOPO E VOLTAR AO INÍCIO
	function MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover){

		$(".voltarInicio").css("color", textoinicio);
		$(".voltarTopo").css("color", textoinicio);

		$(".voltarInicio").hover(
					function(){
						$(this).css("background-color", backgroundhover);
						$(this).css("color", textohover);
					}, 
					function(){
						$(this).css("background-color", backgroundinicio);
						$(this).css("color", textoinicio);
					}
			);


		$(".voltarTopo").hover(
					function(){
						$(this).css("background-color", backgroundhover);
						$(this).css("color", textohover);
					}, 
					function(){
						$(this).css("background-color", backgroundinicio);
						$(this).css("color", textoinicio);
					}
			);

	}


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

		    //A partir daqui é a identificação do que acontece em cada item do relatório. 
		    //Transição de imagens e background, mudança de textos e modal
			switch (posicao) {

				case 0:	

					posicao = 161;			
					break;
						
				case 12:
										
					paragrafo = "Testando novo parágrafo";
					titulo = "Atividades Institucionais";
					link = "#atividades";

					handledot(2,titulo);

				    $('.go-to').attr("onclick", "handle(handle, 18);");
				    $('.go-top').attr("onclick", "location.reload();");				    
				    $('.go-top').css("visibility", "visible");
				    $('.go-to i').css("font-size", "2em");
				    $('.voltarTopo').css("visibility", "visible");
				    $('.time-line').css("visibility", "visible");				    
				    
			
					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground)
					EfeitoMetade("puff", "Atividades", "180", "rgba(0, 197, 244, 0.2);", "#000", "atividades_d", "ret-2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-5");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;



				case 18:					

					paragrafo = "Novo parágrafo";
					titulo = "Ensino superior, profissional e tecnológico";
					link = "#ensino";

					handledot(3,titulo);

					$('.go-top').attr("onclick", "handle(handle, 12);");
					$('.go-to').attr("onclick", "handle(handle, 24);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("blind","Ensino","100","rgba(238, 212, 57, 0.49)", "#000","ensino_d", "rgb(238, 212, 57)");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-6");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);
					

					break;


				case 24:

					paragrafo = "Novo parágrafo";
					titulo = "Educação à Distância";
					link = "#cead";

					handledot(4,titulo);

					$('.go-top').attr("onclick", "handle(handle, 18);");
					$('.go-to').attr("onclick", "handle(handle, 30);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("size","cead","120","rgba(98, 144, 224, 0.29)", "#fff","cead_d", "rgb(98, 144, 225)");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-7");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
					MudaConteudo(titulo,paragrafo,link);
						
					break;

				case 30:

					paragrafo = "Novo parágrafo";
					titulo = "Programas de Pós-Graduação";
					link = "#pos";

					handledot(5,titulo);

					$('.go-top').attr("onclick", "handle(handle, 24);");		
					$('.go-to').attr("onclick", "handle(handle, 36);");	

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("blind","pos","100", "rgba(64, 182, 149, 0.09)", "#000","pos_d", "#40B695");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-3");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;


				case 36:

					paragrafo = "Novo parágrafo";
					titulo = "Extensão";
					link = "#extensao";

					handledot(6,titulo);

					$('.go-top').attr("onclick", "handle(handle, 30);");
					$('.go-to').attr("onclick", "handle(handle, 42);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("size","extensao","200","rgba(217, 153, 28, 0.19)", "#000","extensao_d", "#F0D339");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-6");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;


				case 42:

					paragrafo = "Novo parágrafo";
					titulo = "Pesquisa";
					link = "#pesquisa";

					handledot(7,titulo);

					$('.go-top').attr("onclick", "handle(handle, 36);");
					$('.go-to').attr("onclick", "handle(handle, 48);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("puff","pesquisa","200","rgba(0, 136, 204, 0.11)","#fff", "pesquisa_d", "#9DB2C5");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-1");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
					MudaConteudo(titulo,paragrafo,link);	

					break;


				case 48:

					paragrafo = "Novo parágrafo";
					titulo = "Sistema de Bibliotecas";
					link = "#biblioteca";

					handledot(8,titulo);

					$('.go-top').attr("onclick", "handle(handle, 42);");
					$('.go-to').attr("onclick", "handle(handle, 54);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, cordoby)
					EfeitoMetade("blind","biblioteca","150","rgba(236, 124, 38, 0.15)", "#000","biblioteca_d", "#E5C51A");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-6");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);			
						
					break;

				case 54: 
	
					paragrafo = "Novo parágrafo";
					titulo = "Processos Seletivos";
					link = "#processosseletivos";

					handledot(9, titulo);

					$('.go-top').attr("onclick", "handle(handle, 48);");
					$('.go-to').attr("onclick", "handle(handle, 60);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("blind","processos_seletivos","150","rgba(33, 37, 163, 0.06)","#fff","processos_seletivos_d", "#5389DC");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-1");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
					MudaConteudo(titulo,paragrafo,link);			

					break;

				case 60:

					paragrafo = "Novo parágrafo";
					titulo = "Hospital Universitário Clemente de Faria";
					link = "#hospital";

					handledot(10,titulo);

					$('.go-top').attr("onclick", "handle(handle, 54);");
					$('.go-to').attr("onclick", "handle(handle, 66);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("size","hospital","80","rgba(51, 103, 46, 0.12)","#000","hospital_d", "#A1E4AF");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-3");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");	 
					MudaConteudo(titulo,paragrafo,link);		

					break;


				case 66:

					paragrafo = "Novo parágrafo";
					titulo = "Cepedor";
					link = "#cepedor";
					$('.go-top').attr("onclick", "handle(handle, 60);");
					$('.go-to').attr("onclick", "handle(handle, 72);");

					handledot(11,titulo);

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("blind","cepedor","200","rgba(197, 184, 72, 0.22)","#270202","cepedor_d", "#E2C636");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-6");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 72:

					paragrafo = "Novo parágrafo";
					titulo = "Editora Unimontes";
					link = "#editora";

					handledot(12,titulo);

					$('.go-top').attr("onclick", "handle(handle, 66);");
					$('.go-to').attr("onclick", "handle(handle, 78);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("puff","editora","160","rgba(122, 211, 255, 0.36)","#000","editora_d", "#5EC5FF");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-5");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 78:

					paragrafo = "Novo parágrafo";
					titulo = "Índice de Preços ao Consumidor";
					link = "#ipc";

					handledot(13,titulo);

					$('.go-top').attr("onclick", "handle(handle, 74)");
					$('.go-to').attr("onclick", "handle(handle, 84)");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("size","ipc","100","rgba(65, 143, 181, 0.22)","#000","ipc_d", "#ABB0CD");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-8");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 84:

					paragrafo = "Novo parágrafo";
					titulo = "SAJ Itinerante";
					link = "#saj";

					handledot(14,titulo);

					$('.go-top').attr("onclick", "handle(handle, 78);");
					$('.go-to').attr("onclick", "handle(handle, 90);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("puff","saj","200","rgba(75, 31, 67, 0.09)","#000","saj_d", "#C8A0A0");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-9");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 90:

					paragrafo = "Novo parágrafo";
					titulo = "Intercâmbio e Cooperação Interinstitucional";
					link = "#intercambio";

					handledot(15,titulo);

					$('.go-top').attr("onclick", "handle(handle, 84);");
					$('.go-to').attr("onclick", "handle(handle, 96);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("blind","intercambio","100","rgba(72, 94, 131, 0.13)","#fff","intercambio_d", "#AFBCC2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-1");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 96:

					paragrafo = "Novo parágrafo";
					titulo = "Museu Histórico Regional";
					link = "#museu";

					handledot(16,titulo);

					$('.go-top').attr("onclick", "handle(handle, 90);");
					$('.go-to').attr("onclick", "handle(handle, 102);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("size","museu","120","rgba(85, 159, 254, 0.17)","#000","museu_d", "#559FFE");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-5");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 102:

					paragrafo = "Novo parágrafo";
					titulo = "Comunicação organizacional (Ascom)";
					link = "#ascom";

					handledot(17,titulo);

					$('.go-top').attr("onclick", "handle(handle, 96);");
					$('.go-to').attr("onclick", "handle(handle, 108);");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("puff","ascom","120","rgba(83, 85, 161, 0.23)","#000","ascom_d", "#9870A2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-8");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 108:

					paragrafo = "Novo parágrafo";
					titulo = "Mídias Sociais";
					link = "#midiassociais";

					handledot(18,titulo);

					$('.go-top').attr("onclick", "handle(handle, 102)");
					$('.go-to').attr("onclick", "handle(handle, 114)");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("blind","midias_sociais","200","rgba(30, 136, 224, 0.16)", "#000","midias_sociais_d", "#7ED5FF");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-5");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 114:

					paragrafo = "Novo parágrafo";
					titulo = "Publicidade";
					link = "#publicidade";

					handledot(19,titulo);

					$('.go-top').attr("onclick", "handle(handle, 108)");
					$('.go-to').attr("onclick", "handle(handle, 120)");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("size","publicidade","200","#fff","#1B5877","publicidade_d");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-4");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 120:

					paragrafo = "Novo parágrafo";
					titulo = "Rádio Unimontes";
					link = "#radio";

					$('.go-top').attr("onclick", "handle(handle, 114)");
					$('.go-to').attr("onclick", "handle(handle, 126)");

					handledot(20,titulo);

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("blind","radio","200","rgba(52, 41, 57, 0.17)","#fff","radio_d", "#8D6297");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-8");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
					MudaConteudo(titulo,paragrafo,link);

					break;


				case 126:

					paragrafo = "Novo parágrafo";
					titulo = "Imprensa Universitária";
					link = "#imprensa";

					handledot(21,titulo);

					$('.go-top').attr("onclick", "handle(handle, 120)");
					$('.go-to').attr("onclick", "handle(handle, 132)");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("puff","imprensa","200","rgba(223, 127, 77, 0.18)","#000","imprensa_d", "#D8A644");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-6");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);
					
					break;

				case 132:
	
					paragrafo = "Novo parágrafo";
					titulo = "Infraestrutura (obras, TI)";
					link = "#infraestrutura";

					handledot(22,titulo);

					$('.go-top').attr("onclick", "handle(handle, 126)");
					$('.go-to').attr("onclick", "handle(handle, 138)");

					//EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
					EfeitoMetade("blind","infraestrutura","200","rgba(144, 186, 237, 0.14)","#000","infraestrutura_d", "#ADFEFF");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-5");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 138:

					paragrafo = "Novo parágrafo";
					titulo = "Orçamento e Finanças";
					link = "#orcamentoefinancas";

					handledot(23,titulo);

					$('.go-top').attr("onclick", "handle(handle, 132)");
					$('.go-to').attr("onclick", "location.reload()");
					
					
					//EfeitoMetade(efeito,img,margin,cor,imgbackground, corbody)
					EfeitoMetade("puff","orcamento_financas","180","rgba(95, 118, 198, 0.18)","#fff","orcamento_financas_d", "#849FD4");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-8");
					//MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
					MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
					MudaConteudo(titulo,paragrafo,link);
					
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

