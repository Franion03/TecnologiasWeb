function OcultarMostrar(){
    {
        var elemento = document.getElementsByClassName("Novedades");
        var header = document.getElementById("Novedades");
        var i=0;
        if(header.style.display == "" || header.style.display == "block") {
            for (i = 0; i < elemento.length; i++){
                elemento[i].style.display = "none";
            }
          header.style.display= "none";
        }
        else {
            for (i = 0; i < elemento.length; i++){
                elemento[i].style.display = "block";
            }
          header.style.display= "block";        
        }
      }
}

window.onload = function myMove() {
  
    var aux1 = "Google";
    var aux2 = 20000;
  
    if(navigator.appCodeName == aux1)
    {
      var elem = document.getElementsByClassName("tarjeta");   
      var pos = 0;
      var id = setInterval(frame, 25);
      function frame() {
        if (pos == 1180) {
          clearInterval(id);
        } else {
          pos++;  
          elem[0].style.top = pos + "px"; 
          
        }
      }
      window.setTimeout(destruir, aux2);
    }
    else
    {
      document.getElementById("animate").style.display = "none";
    }
    
  }