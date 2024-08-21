const texto_encriptar = document.querySelector(".texto_encriptar");
const texto_desencriptar = document.querySelector(".texto_desencriptar");
const copiador = document.querySelector(".boton_copiar");

const resultadoInformacion = document.querySelector(".resultado__informacion");




function btnencriptar(){
    const textoEncriptado=encriptar(texto_encriptar.value);
    texto_desencriptar.value=textoEncriptado;
    texto_desencriptar.style.background="none";
    copiador.style.display = 'block';
    resultadoInformacion.style.display = "none";

}

function btnDesencriptar(){
    const textoDesencriptado=Desencriptar(texto_encriptar.value);
    texto_desencriptar.value=textoDesencriptado;
    copiador.style.display = 'block';
    texto_desencriptar.style.background="none";
    resultadoInformacion.style.display = "none";
}

function btncopiar() {
    if(texto_desencriptar.value !== ""){
      navigator.clipboard.writeText(texto_desencriptar.value)
      copiador.style.display = 'block';
      texto_desencriptar.value="";
      texto_desencriptar.style.backgroundImage="";
      texto_desencriptar.style.backgroundRepeat="no-repeat"
      resultadoInformacion.style.display = "";


    }else{
      alert('El campo esta vacio, no hay texto que copiar.')
    }

}

function encriptar (stringEncriptado) {
    let letraEncriptadas=["e", "i", "a", "o", "u"];
    let letraDesencriptada=["enter", "imes", "ai", "ober","ufat"];

    for (let i = 0; i < letraEncriptadas.length; i++) {
        const regex = new RegExp(letraEncriptadas[i], 'g');
        stringEncriptado = stringEncriptado.replace(regex, letraDesencriptada[i]);
    }
    return stringEncriptado;

}


function Desencriptar (stringEncriptado) {
    let letraEncriptadas=["e", "i", "a", "o", "u"];
    let letraDesencriptada=["enter", "imes", "ai", "ober","ufat"];

    for (let i = 0; i < letraDesencriptada.length; i++) {
        const regex = new RegExp(letraDesencriptada[i], 'g');
        stringEncriptado = stringEncriptado.replace(regex, letraEncriptadas[i]);
    }
    return stringEncriptado;
    
}
