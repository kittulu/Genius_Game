	var sequencia = []; //sequencia
	var coresdestaque = ['','RED', 'BLUE', '#40FF00', 'YELLOW'];//Cores
	var cores = ['','darkred', 'darkblue', 'darkgreen', '#baae00'];//Cores
	var n=0;
	var rodada = 0;//rodada que esta
	var game_over = false;
	var score = 0;
	var high_score = 0;
	
	function reset(){
		sequencia = [];
		rodada = 0;
		game_over = false;
		score = 0;
		n=0;
	}
	
	
	
	/*
	//MUDA A COR
	//E FUNCIONA YEY
	function mudaCores() {
       window.document.getElementById(sequencia[rodada-1]).style.background = '#000';
        window.document.getElementById(sequencia[rodada-1]).style.color = '#FF0';
    }
	*/
	
	//Sorteia o NUMERO/COR e incrementa a rodada
	function proximaRodada(){
	var sorteio = Math.floor(Math.random()*4)+1;//Aleatory de 1-4
	sequencia[rodada]=sorteio;
	rodada= rodada+1;
	}
	
	function atualizarPlacar(){
		window.document.getElementById('placar').innerHTML = ('LEVEL: '+rodada);
		window.document.getElementById('score').innerHTML = ('SCORE: '+score);
		window.document.getElementById('high_score').innerHTML = ('HIGH SCORE: '+high_score);
	}

function reproduzirSequencia(){
		var i=0;
		var tempo = 300;
				
		//console.log(i);
		//console.log(rodada);
		
		//window.document.getElementById(sequencia[i]).style.background = cores[sequencia[i]];//MUDA colorindo
  		var time = window.setInterval( function () { 
		window.document.getElementById(sequencia[i]).style.background = coresdestaque[sequencia[i]];//MUDA colorindo

		window.setTimeout( function () { 
			window.document.getElementById(sequencia[i]).style.background = cores[sequencia[i]]; 
			i++;
		if(i>=rodada){
		clearInterval(time);
		
        }
			}, 100 );//rever DELAY
		}, 1000 );
        //window.document.getElementById(sequencia[i]).style.background = "#6f6f6f"; 
     
	}
	
	/*function reproduzirSequencia(){
		var i=0;
		var tempo = 300;
		do{
		//window.document.getElementById(sequencia[i]).style.background = cores[sequencia[i]];//MUDA colorindo
        window.setTimeout( function () { window.document.getElementById(sequencia[i]).style.background = cores[sequencia[i]];//MUDA colorindo
		;}, tempo*i );
        window.setTimeout( function () { window.document.getElementById(sequencia[i]).style.background = "#6f6f6f"; 
        ;
		}, (tempo*i)+100 );
        
		//window.document.getElementById(sequencia[i]).style.background = "#6f6f6f"; 
        i++;
		}while(i<rodada);
	}*/

	/*function reproduzirSequencia(){
		

		for(var i=0; i<rodada; i++){
		//outro laço interno? j?
		//document.write(sequencia[i]);

		window.document.getElementById(sequencia[i]).style.background = cores[sequencia[i]];//MUDA colorindo
        
		//window.document.getElementById(sequencia[rodada-1]).style.color = '#FF0';	
		setTimeout(function cornormal(){window.document.getElementById(sequencia[i-1]).style.background = "#6f6f6f";//MUDA para  cor nula
		},500);
		//setTimeout(function a(){};,500);	
		//naofunfa
		//var botao = document.getElementById(sequencia[rodada-1]);
		//window.document.getElementById(sequencia[rodada-1]).style.color = 'red';
		//ANIMAR OS BOTOES
		}
		}	
	
	*/
	
	function aperta(botaoID){
	
		if (game_over==true) {//TESTA SE A PESSOA J[A PERDEU O JOGO ANTERIORMENTE
			//reset();
			alert('game_over');
		}else if(botaoID == sequencia[n]){   //TESTA SE A PESSOA ACERTOU O BOTAO ATUAL
			n++;
			score = score+1;
			
			if(high_score<=score){//Incrementa high_score
			high_score = score;
			}
			
			atualizarPlacar();
			console.log(botaoID);
			
			if(n>=rodada){
				n=0;
				proximaRodada();
				atualizarPlacar();
				reproduzirSequencia();
			}
			
		}else{//SE ELA ERROU O BOTAO PASSA O PARAMETRO QUE PERDEU O JOGO
			game_over=true;
			alert("GAME OVER");
		}
	}

	
	/*
	
	//NAO SEI COMO IMPLEMENTAR ISSO DIREITO HEHE
	//SERIA NO INICIO DA FUNÇAO APERTA, MAS AÍ ELA NAO IA RODAR APENAS O PRIMEIRO IF
	
	function gameOver(){
	if (game_over==true) {
		//reset();
		alert('gameover');
	}
	}
	*/
	
	
	function start(){
	reset();
	proximaRodada();
	atualizarPlacar();
	reproduzirSequencia();
	}