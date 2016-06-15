$(document).ready(function(){
$('.Panel').hide();
$('#BInicio').click(function(){
        $('.Panel').slideToggle('slow');
   });
});

var Alternancia =1;
var b1="b1",
    b2="b2",
    b3="b3",
    b4="b4",
    b5="b5",
    b6="b6",
    b7="b7",
    b8="b8",
    b9="b9";
    
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
  }else{
 }
}
function asignation(text,boton){
       if(b1==boton.name){
        b1=text;
       }
       else if(b2==boton.name){
        b2=text;
       }
       else if(b3==boton.name){
        b3=text;
       }
       else if(b4==boton.name){
        b4=text;
       }
       else if(b5==boton.name){
        b5=text;
       }
       else if(b6==boton.name){
        b6=text;
       }
       else if(b7==boton.name){
        b7=text;
       }
       else if(b8==boton.name){
        b8=text;
       }
       else if(b9==boton.name){
        b9=text;
       }
 validation(text);
}
function validation(text){
 if((b1==b2 && b2==b3)||(b1==b5 && b5==b9)
  ||(b3==b5 && b5==b7)||(b4==b5 && b5==b6)
  ||(b7==b8 && b8==b9)||(b1==b4 && b4==b7)
  ||(b2==b5 && b5==b8)||(b3==b6 && b6==b9)){
      var Alternancia=confirm("Felicidades! Has ganado! Da clic para volver a comenzar");
      if(Alternancia==true){
       window.location.reload();
      }
   }
  if(Alternancia==true){
    alert("Dds");
  } 
}

