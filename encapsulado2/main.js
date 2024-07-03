let textoEncriptado=[];
let letter="";
let validar = false;
//let nuevoTexto = "";


function encriptar(){
    var encriptarText = document.getElementById('encriptarText').value;
    if(validarTexto(encriptarText)==false){
        for(var i=0; i<encriptarText.length; i++){
         letter = encriptarText.charAt(i)
         if(letter == "e"){
                textoEncriptado.splice(i, 1, "enter");
            }else{
                if(letter == "i"){
                    textoEncriptado.splice(i, 1, "imes");
                }else{
                    if(letter == "a"){
                        textoEncriptado.splice(i, 1, "ai");
                    }else{
                        if(letter == "o"){
                            textoEncriptado.splice(i, 1, "ober");
                        }else{
                            if(letter == "u"){
                                textoEncriptado.splice(i, 1, "ufat");
                            }else{
                                textoEncriptado.splice(i, 1, letter);
                            }
                        }
                    }
                }
            }
        }
    }
    var destino = document.getElementById('desencriptar');
    var contenido = textoEncriptado.join('');
    destino.value = contenido;
    textoEncriptado =[];
    return;
    
}

function desencriptar(){
    var encriptarText = document.getElementById('desencriptar').value;
    //console.log(encriptarText);
    if(validarTexto(encriptarText)==false){
        for(var i=0; i<encriptarText.length; i++){
            letter = encriptarText.charAt(i)
            //console.log(letter);
            if(letter == "e"){
                textoEncriptado.splice(i, 1, "e");
                i=i+4;
            }else{
                if(letter == "i"){
                    textoEncriptado.splice(i, 1, "i");
                    i=i+3;
                }else{
                    if(letter == "a"){
                        textoEncriptado.splice(i, 1, "a");
                        i=i+1;
                    }else{
                        if(letter == "o"){
                            textoEncriptado.splice(i, 1, "o");
                            i=i+3;
                        }else{
                            if(letter == "u"){
                                textoEncriptado.splice(i, 1, "u");
                                i=i+3;
                            }else{
                                textoEncriptado.splice(i, 1, letter);
                            }
                        }
                    }
                }
            }
        }
        var destino = document.getElementById('encriptarText');
        var contenido = textoEncriptado.join('');
        destino.value = contenido;
        textoEncriptado =[];
    }
}

function validarTexto(texto){
    console.log(texto);
    let text = texto;
    for (var i = 0; i < texto.length; i++) {
        let letra = text.charAt(i);
        console.log(letra);
        if(letra == " "){

           
        }else{
            if (letra == letra.toUpperCase()) {
            alert(`No se permite mayusculas -- ${letra} --`);
            validar = true;
            break;
        }

        }   
    }
    return validar;
}
