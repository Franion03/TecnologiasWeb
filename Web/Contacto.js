function ValidarDni() {
    var vector = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var dniJunto = document.getElementById("DNI").value;
    var dniJuntoMayuscula ="";
    var comprobar = 0;
    var numerosDNI = 0;
    var letra = "";
    var residuo;
    var contador = 0;
    var dniSeparado = dniJunto.split("");

    for (contador=0;contador<dniSeparado.length;contador++)
    {
        //los primeros caracteres tienen que ser numeros
        if(contador<=7)
        {
            if(isNaN(dniSeparado[contador]))
            {
                comprobar=1;
            }
        }
        //comprobar que el noveno caracter en una letra
        else{
            if(isNaN(dniSeparado[8]))
            {
                dniSeparado[8] = dniSeparado[8].toUpperCase();
            }
            else{
                comprobar = 1;
            }
        }
    }

    if(contador != 9)
    {
        comprobar = 1;
    }
    else{
        dniJuntoMayuscula = dniSeparado.join("");
        numerosDNI = dniJuntoMayuscula.substring(0,8);
        letra = dniJuntoMayuscula.substring(8,9);
        residuo = numerosDNI % 23;
        if(vector[residuo] != letra)
        {
            comprobar = 2;
        }
    }

    if(comprobar == 0)
    {
        return true;
    }
    else if(comprobar == 1)
    {
        /* dni mal puesto */
        document.getElementById("DNI").setCustomValidity("DNI mal puesto");
        return false;
       
    }
    else if(comprobar == 2)
    {
        /* letra del dni mal puesto */ 
        document.getElementById("DNI").setCustomValidity("letra DNI mal puesta");
        return false;
       
    }
     
}

function ValidarFecha(){
    var hoy = new Date();
    var fecha = (hoy.getFullYear()-16)+'-'+hoy.getMonth()+'-'+hoy.getDate();
    
    var cumple = document.getElementById('Nacimiento').value;
    console.log(fecha);
    if(cumple>fecha)
    {
        document.getElementById("Nacimiento").setCustomValidity("No cumple la edad");
        return false;
    }
}


function ValidarCategorias(formu, obj) {
    limite=2; //limite de checks a seleccionar
    num=0;
    if (obj.checked) {
      for (i=0; ele=document.getElementById(formu).children[i]; i++)
        if (ele.checked) num++;
    if (num>limite){
      obj.checked=false;
    }
  }
}


function Provincias(){
    var Comunidad=document.getElementById("Comunidad").value;
    switch(Comunidad){
        case 'Andalucia':
            document.getElementById("Andalucias").style.display="inline";
            document.getElementById("Andalucias").required="True";
            break;
        case 'Aragon':
            document.getElementById("Aragons").style.display="inline";
            document.getElementById("Aragons").required="True";
            break;
        case 'Asturias':
            document.getElementById("Asturiass").style.display="inline";
            document.getElementById("Asturiass").required="True";
            break;
        case 'Cantabria':
            document.getElementById("Cantabrias").style.display="inline";
            document.getElementById("Cantabrias").required="True";
            break;
        case 'Castilla-LaMancha':
            document.getElementById("Castilla-LaManchas").style.display="inline";
            document.getElementById("Castilla-LaManchas").required="True";
            break;
        case 'CastillayLeon':
            document.getElementById("CastillayLeons").style.display="inline";
            document.getElementById("CastillayLeons").required="True";
            break;
        case 'Cataluña':
            document.getElementById("Cataluñas").style.display="inline";
            document.getElementById("Cataluñas").required="True";
            break;
        case 'Extremadura':
            document.getElementById("Extremaduras").style.display="inline";
            document.getElementById("Extremaduras").required="True";
            break;
        case 'Galicia':
            document.getElementById("Galicias").style.display="inline";
            document.getElementById("Galicias").required="True";
            break;
        case 'IslasBaleares':
            document.getElementById("IslasBalearess").style.display="inline";
            document.getElementById("IslasBalearess").required="True";
            break;
        case 'Canarias':
            document.getElementById("Canariass").style.display="inline";
            document.getElementById("Canariass").required="True";
            break;
        case 'LaRioja':
            document.getElementById("LaRiojas").style.display="inline";
            document.getElementById("LaRiojas").required="True";
            break;
        case 'Madrid':
            document.getElementById("Madrids").style.display="inline";
            document.getElementById("Madrids").required="True";
            break;
        case 'Murcia':
            document.getElementById("Murcias").style.display="inline";
            document.getElementById("Murcias").required="True";
            break;
        case 'Navarra':
            document.getElementById("Navarras").style.display="inline";
            document.getElementById("Navarras").required="True";
            break;
        case 'PaisVasco':
            document.getElementById("PaisVascos").style.display="inline";
            document.getElementById("PaisVascos").required="True";
            break;
        case 'Valencia':
            document.getElementById("Valencias").style.display="inline";
            document.getElementById("Valencias").required="True";
            break;
        default:

            break;
    }
}