$(document).ready(function(){
  $('#BInicio').click(function(){
      window.location.reload();  
   });
});

var Alternancia =1;
var casilla1="casilla1",
    casilla2="casilla2",
    casilla3="casilla3",
    casilla4="casilla4",
    casilla5="casilla5",
    casilla6="casilla6",
    casilla7="casilla7",
    casilla8="casilla8",
    casilla9="casilla9";

function actions(boton){
 if(boton.className=="buttons"){
  boton.className="clicked";
  var text;
  if(Alternancia%2==0){
        text="G";
  }else{
        text="N";
  }
  boton.value=text;
  boton.appendChild(document.createTextNode(text));
  Alternancia++;
  asignation(text,boton);
  }
}
var empate = 0;
function asignation(text,boton){
       if(casilla1==boton.name){
        casilla1=text;
        empate++;
       }
       else if(casilla2==boton.name){
        casilla2=text;
        empate++;
       }
       else if(casilla3==boton.name){
        casilla3=text;
        empate++;
       }
       else if(casilla4==boton.name){
        casilla4=text;
        empate++;
       }
       else if(casilla5==boton.name){
        casilla5=text;
        empate++;
       }
       else if(casilla6==boton.name){
        casilla6=text;
        empate++;
       }
       else if(casilla7==boton.name){
        casilla7=text;
        empate++;
       }
       else if(casilla8==boton.name){
        casilla8=text;
        empate++;
       }
       else if(casilla9==boton.name){
        casilla9=text;
        empate++;
       }
 validation(text);
}

function validation(text){
 if((casilla1==casilla2 && casilla2==casilla3)||(casilla1==casilla5 && casilla5==casilla9)
  ||(casilla3==casilla5 && casilla5==casilla7)||(casilla4==casilla5 && casilla5==casilla6)
  ||(casilla7==casilla8 && casilla8==casilla9)||(casilla1==casilla4 && casilla4==casilla7)
  ||(casilla2==casilla5 && casilla5==casilla8)||(casilla3==casilla6 && casilla6==casilla9)){
      var Alternancia=confirm("Felicidades! Has ganado! Da clic para volver a comenzar");
      if(Alternancia==true){
       window.location.reload();
      }
   }
   else if(empate==9){
    alert("ESTO FUE UN EMPATE. Volvamos a empezar");
    window.location.reload();
   }
}

