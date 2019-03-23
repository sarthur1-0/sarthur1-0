list = {
  index : 0,
  textos : ["Parabéns, meu amor!!!!! Uma forma que pensei para agradecer esse primeiro ano desse nosso relacionamento lindo, por meio desse site, similar ao app em que te pedi em namoro <3 . Relacionamento esse que sabemos começou beeeeem antes do dia 23/03/2018, antes até que o dia 03/01/2018.",
  "Desde o início dessa nossa amizade, fomos criando um laço tão forte de companheirismo, que levamos até hoje. Sou muito grato por tudo o que vivemos nesse tempo, e sempre digo que foi essencial para as bases do nosso namoro.",
  "Nosso primeiro beijo foi só mais um marco daquilo que já sentíamos e falado um para o outro. Começamos a agir quase como namorados e isso foi muuuuito bom para mim. A todo momento me sentindo a pessoa mais amada do mundooooo, assim como sinto até hoje.",
  "O pedido de namoro foi realmente para selar aquilo que já víviamos e marcar o início de mais um novo ciclo. Quão feliz nós estávamos?? Queria poder reviver tudo, um dia realmente que nos marcou.",
  "Após isso, fomos andando sempre juntos, superando e aprendendo um com o outro, uma reciprocidade incrível. Esse primeiro ano, realmente, foi uma prova para nós, com todos os desafios trazidos pelo ENEM e pelo 4º ano.",
  "Mas, como eu disse, sempre superando tudoooo. Agradeço demais pelo seu cuidado e pela sua atençãoooo, sabia que tinha em você um alicerce, que podia confiar no seu apoio, assim como você sempre entendo tudo, em todos os momentos.",
  "Poréeeem, com todas as dificuldades, nós só podemos agradecer por tudo que vivemos juntos. Foram viagens, momentos em família, missassss, tudo muito bom. Sempre falamos que estamos, quase em todos os momentos, rindo, aproveitando da melhor forma. ",
  "Esse primeiro ano foi um ano para aprendermos juntos também e solidificarmos esse nosso namoro, para que ele produzir bons frutos, baseado sempre na nossa reciprocidade e em Deus.",
  "Enfim, obrigado por tudo ao longo desse ano, momô!!! Sabes que pode contar sempre comigo! Que esse seja apenas o primeiro ano de uma linda história, se Deus assim permitir!"],
  load : function(data){
    this.textos = data;
    console.log(data);
  },
  first : function(){
    this.index = 0;
    console.log("fi");
    return this.textos[0];
  },
  last : function(){
    this.index = this.textos.length - 1;
    return this.textos[this.textos.length - 1];
  },
  next : function(){
    this.index++;
    console.log(this.index);
    if(this.index == this.textos.length)
      this.index = 0;
    return this.textos[this.index];
  },
  previous : function(){
    this.index--;
    if(this.index == -1)
      this.index = this.textos.length -1;
    return this.textos[this.index];
  }
};
var sound;
$(document).ready(function(){
  $('#carouselMain').carousel({
    interval: false
  });
  $("#texto").html(list.textos[0]);
  cont(0);
});

function ant(){
  $("#texto").html(list.previous());
  console.log("ant: " + list.index);
}


function prox(){
  $("#texto").html(list.next());
  console.log("prox: " + list.index);
  cont(list.index);
}

function cont(index){
  if(index==0)
    $("#aud").html('<source src="raw/dia.mp3" type="audio/mpeg">');
  if(index==2)
    $("#aud").html('<source src="raw/eu.mp3" type="audio/mpeg">');
 if(index==4)
    $("#aud").html('<source src="raw/eu1.mp3" type="audio/mpeg">');
  if(index==6)
    $("#aud").html('<source src="raw/minha.mp3" type="audio/mpeg">');
  if(index==7)
    $("#aud").html('<source src="raw/perfect.mp3" type="audio/mpeg">');
  if(index==8)
    $("#aud").html('<source src="raw/velhainfancia.mp3" type="audio/mpeg">');
alert(index)   ;
}
