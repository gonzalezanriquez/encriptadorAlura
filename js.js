
function Encriptar(){
    
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    var textEncrypt = texto.replace(/e/igm,"enter");
    var textEncrypt = textEncrypt.replace(/o/igm,"ober");
    var textEncrypt = textEncrypt.replace(/i/igm,"imes");
    var textEncrypt = textEncrypt.replace(/a/igm,"ai");
    var textEncrypt = textEncrypt.replace(/u/igm,"ufat");

    document.getElementById("imgMunieco").style.display = "none";
     document.getElementById("texto").style.display = "none";
     document.getElementById("text").style.display = "none";
    document.getElementById("texto2").style.display = "flex";
    document.getElementById("texto2").innerHTML = textEncrypt;
    document.getElementById("copiar").style.display="block";
    document.getElementById("copiar").style.display="inherit";
    
    inputTexto.value="";
    

}


function Desencriptar(){
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    var textEncrypt = texto.replace(/enter/igm,"e");
    var textEncrypt = textEncrypt.replace(/ober/igm,"o");
    var textEncrypt = textEncrypt.replace(/imes/igm,"i");
    var textEncrypt = textEncrypt.replace(/ai/igm,"a");
    var textEncrypt = textEncrypt.replace(/ufat/igm,"u");

    
    document.getElementById("texto2").innerHTML = textEncrypt;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

    inputTexto.value="";
}

function Copiar() {

    var content = document.getElementById('texto2');
    
    content.select();
    document.execCommand('copy');

    alert("Copiado a la Papelera!");
}
  


