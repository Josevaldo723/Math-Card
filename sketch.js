/*
Aluno: Francisco Josevaldo da Silva
Matrícula: 20200073908
Turma: 05C

// O Jogo se basea em um jogo de cartas onde o usuário ira calcular mentalmente as operações matematicas básicas de adição e subtração, referente ao seu nível escolar( futuramente irei colocar outros níveis no jogos referente as series do 1º ao 9º ano) e direcionar as cartas com os respectivos resultados para os locais indicados. Ao resolver todas as tarefas do quadro ele ira se renovar. Assi, quando o usuario alcançar 10 pontos ira passar para uma nova fazer almentando o nível do jogo.

*/
//variaveis do jogo
var tela=1, xMenu1=15, xMenu2=210, xMenu3=410, yMenu=296, larg=180, alt=40, xVoltar=520, yVoltar=430, largVoltar=60, altVoltar=30, nivel=1, pontuação=1;

//variaveis das imagens
var largFig, altFig, imgEditor, rFig=300, imgFundo=[], imgCard=[]
var xCard00=505
var yCard00=200
var xCard01=300
var yCard01=100
var largCard=50
var altCard=100;


//variaveis para os numeros aleatorios
var vectNumAleatorio=[]

//variaveis para a barreira de pontos
var pontos=0, nivel=1, sobNivel=10

//função para carreagar as imagens
function preload() {
  imgEditor = loadImage('imgEditor.png');
  imgFundo[0] = loadImage('tela00.jpg');
  imgFundo[1] = loadImage('tela01.jpg');
  imgFundo[2] = loadImage('tela02.jpg');
  imgFundo[3] = loadImage('tela03.jpg');
  imgFundo[4] = loadImage('tela04.jpg');
  imgCard[0] = loadImage('card02.jpg');
  imgCard[1] = loadImage('card02.jpg');
  
  
}



function setup() {
  createCanvas(600, 500);
}



function draw() {
  
  
  textStyle(NORMAL)
  textAlign(CENTER)//alinhamento de texto
  
    if(tela==1){

      background(imgFundo[0])

      
      textSize(30)//tamanho do texto

      
      
      //menu jogar
      if(mouseX>xMenu1 && mouseX<xMenu1+larg && mouseY>yMenu && mouseY<yMenu+alt){
        stroke(200)//cor da borda do retangulo
        fill(250)//preenchimento
        rect(xMenu1, yMenu, larg, alt, 5)//retangulo
          if (mouseIsPressed) {
            tela=2
          }
      }
      fill(50)//cor da texto
      noStroke()//borda da texto
      text("Jogar", 100, 325)//texto

      
      
      //menu creditos
      if(mouseX>xMenu2 && mouseX<xMenu2+larg && mouseY>yMenu && mouseY<yMenu+alt){
        stroke(200)
        fill(250)
        rect(xMenu2, yMenu, larg, alt, 5)
        if (mouseIsPressed) {
            tela=3
          }
      }
      fill(50)
      noStroke()
      text("Créditos", 300, 325)

      
      
        //menu Descrição
      if(mouseX>xMenu3 && mouseX<xMenu3+larg && mouseY>yMenu && mouseY<yMenu+alt){
          stroke(200)
          fill(250)
          rect(xMenu3, yMenu, larg, alt, 5)
        if (mouseIsPressed) {
            tela=4
          }
        }
        fill(50)
        noStroke()
        text("Descrição", 500, 325)
    } 
    
  //tela fundo do Jogo
    else if(tela==2){
  
      background(imgFundo[1])
                
      //botao voltar
        if(mouseX>xVoltar && mouseX<xVoltar+largVoltar && mouseY>yVoltar && mouseY<yVoltar+altVoltar){
          stroke(200)
          fill('#90EE90')
          rect(xVoltar, yVoltar, largVoltar, altVoltar, 5)
             
          if (mouseIsPressed) {
            tela=1
          }
        }
      
      textAlign(CENTER)//alinhamento de texto
          textSize(15)//tamanho do texto
          fill(50)
          noStroke()
          text("Voltar", 550, 450)
      
       // movendo a carta
      
      
      
     
      
      if(mouseIsPressed && dist( mouseX, mouseY, xCard00, yCard00)<altCard){
      xCard00=mouseX;
      yCard00=mouseY;
      
        
      }
      ellipse(xCard00+25, yCard00+50, altCard-50, altCard)
      image(imgCard[0],xCard00,yCard00)
      
      
      
      
      
      
      /*
      ellipse(xCard[1]+25, yCard[1]+50, altCard-50, altCard)
      image(imgCard[1],xCard[1]=505,yCard[1]=200) 
      
      ellipse(xCard[2]+25, yCard[2]+50, altCard-50, altCard)
      image(imgCard[1],xCard[2]=505,yCard[2]=200)  
      
      ellipse(xCard[3]+25, yCard[3]+50, altCard-50, altCard)
      image(imgCard[1],xCard[3]=505,yCard[3]=200) 
      
      ellipse(xCard[4]+25, yCard[4]+50, altCard-50, altCard)
      image(imgCard[1],xCard[4]=505,yCard[4]=200)
      
      ellipse(xCard[5]+25, yCard[5]+50, altCard-50, altCard)
      image(imgCard[1],xCard[4]=505,yCard[4]=200)
      
      */
        //mudança de nivel do jogo
        
        textSize(70)
        fill(50)
        text(nivel, 560,90)
        textSize(40)
        fill(50)
        text(pontos, 270,50)
        pontos=pontos+1
             
              /*if(pontos>sobNivel){
              nivel=nivel+1
              sobNivel=sobNivel+1
              tela=5
              }*/
         
        // Ainda estou montando o código para mudança de nível. Todavia ira funcionar assim: a cada 10 pontos o usuario ira almentar o nível do Jogo. Com isso, irar mudar para paginas futuras com operações mais complexas, claro que sera de acordo com o nível do usuário
      
      // para cada operação irei colocar um numero aleatorio nos retangulos e depois soma-los, imprimindo o resultado nas cartas. Quando o usuario colidir as cartas com os retangulos correto tra um acerto. montarei o cógido de números aleatorios a seguir.
      
      vectNumAleatorio[0]=random(1,9)
      vectNumAleatorio[1]=random(1,9)
      vectNumAleatorio[2]=random(1,9)
      vectNumAleatorio[3]=random(1,9)
      vectNumAleatorio[4]=random(1,9)
      vectNumAleatorio[5]=random(1,9)
      vectNumAleatorio[6]=random(1,9)
      vectNumAleatorio[7]=random(1,9)
      vectNumAleatorio[8]=random(1,9)
      vectNumAleatorio[9]=random(1,9)
      vectNumAleatorio[10]=random(1,9)
      vectNumAleatorio[11]=random(1,9)
      vectNumAleatorio[12]=vectNumAleatorio[0]+vectNumAleatorio[3]
      vectNumAleatorio[13]=vectNumAleatorio[1]+vectNumAleatorio[4]
      vectNumAleatorio[14]=vectNumAleatorio[2]+vectNumAleatorio[5]
      vectNumAleatorio[15]=vectNumAleatorio[6]+vectNumAleatorio[9]
      vectNumAleatorio[16]=vectNumAleatorio[7]+vectNumAleatorio[10]
      vectNumAleatorio[17]=vectNumAleatorio[8]+vectNumAleatorio[11]
      
      
      textSize(40)
      fill(50)
      text(vectNumAleatorio[0].toFixed(0),40,205)
      text(vectNumAleatorio[1].toFixed(0),40,315)
      text(vectNumAleatorio[2].toFixed(0),40,425)
      text(vectNumAleatorio[3].toFixed(0),115,205)
      text(vectNumAleatorio[4].toFixed(0),115,315)
      text(vectNumAleatorio[5].toFixed(0),115,425)
      text(vectNumAleatorio[6].toFixed(0),265,205)
      text(vectNumAleatorio[7].toFixed(0),265,315)
      text(vectNumAleatorio[8].toFixed(0),265,425)
      text(vectNumAleatorio[9].toFixed(0),335,205)
      text(vectNumAleatorio[10].toFixed(0),335,315)
      text(vectNumAleatorio[11].toFixed(0),335,425)
      text(vectNumAleatorio[12].toFixed(0),xCard00+25,yCard00+65)
      //text(vectNumAleatorio[13].toFixed(0),xCard01+25,yCard01+65)
      
    }
    
  //tela de Créditos
    else if(tela==3){
  
    background(imgFundo[4])
      {push()
      scale(0.3)
      image(imgEditor,330,600)
      pop()}
      
      textAlign()
        textSize(30)
        fill(20)
        noStroke()
        text("FRANCISCO JOSEVALDO DA SILVA", 300, 330)
        textAlign(LEFT)
        textSize(15)
        text("É discente do curso de Bacharel em Ciências e Tecnologia da Universidade ", 50, 350)
        text("Federal do Rio Grande do Norte.", 50, 370)
         
        text("josevaldo.silva.060@ufrn.edu.br", 50, 400)
      
      //botao voltar
        if(mouseX>xVoltar && mouseX<xVoltar+largVoltar && mouseY>yVoltar && mouseY<yVoltar+altVoltar){
          stroke(200)
          fill("#90EE90")
          rect(xVoltar, yVoltar, largVoltar, altVoltar, 5)
            if (mouseIsPressed) {
            tela=1
          }
        }
          textAlign(CENTER)//alinhamento de texto
          textSize(15)//tamanho do texto
          fill(50)
          noStroke()
          text("Voltar", 550, 450)
    }
  
  // Descrição
  else if(tela==4){
  
    background(imgFundo[4])
        textAlign(CENTER)
        textSize(30)
        fill(50)
        noStroke()
        text("Como Jogar", 300, 80)
        textAlign(LEFT)
        textSize(20)
        text("Utilize o mouse para direcionar os cartão do deck para. ", 50, 100)
        text("o resulta. ", 50, 120)
        
        textAlign(CENTER)
        textSize(30)
        text("Descrição", 300, 160)
        textAlign(LEFT)
        textSize(20)
        text("Math Card é um jodo de cartas educativo que tem por",50 ,180)
        text("objetivo abordar as operações matemáticas de adição e",50,200)
        text("subtação por meio de cálculo mental, destinado a",50,220)
        text("alunos do 1º ano de ensino fundamental.", 50, 240)
        
        textAlign(CENTER)
        textSize(30)
        text("Habilidades", 300, 300)
        textAlign(LEFT)
        textSize(20)
        text("(EF01MA06) Construir fatos básicos da adição e utilizá-los ",50 ,320)
        text("em procedimentos de cálculo para resolver problemas",50,340)
              
    
    
    
    //botao voltar
        if(mouseX>xVoltar && mouseX<xVoltar+largVoltar && mouseY>yVoltar && mouseY<yVoltar+altVoltar){
          stroke(200)
          fill("#90EE90")
          rect(xVoltar, yVoltar, largVoltar, altVoltar, 5)
            if (mouseIsPressed) {
            tela=1
          }
        }
          textAlign(CENTER)//alinhamento de texto
          textSize(15)//tamanho do texto
          fill(50)
          noStroke()
          text("Voltar", 550, 450)
    }
}