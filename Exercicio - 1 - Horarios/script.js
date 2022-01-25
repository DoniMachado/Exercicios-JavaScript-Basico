function carregar (){
    var Mensagem = document.getElementById("mensagem");
    var Foto = document.getElementById("imagem");
    var Body = document.querySelector("body");

    var Data = new Date();
    var Hora = Data.getHours();
    
    
    Mensagem.innerHTML = `<p>Agora são ${Hora} horas!</p>`
    
   
    if( (Hora >= 0)&&(Hora < 12)){
        //Bom dia - Manhã
        Mensagem.innerHTML += `<p>Bom Dia!!</p>`
        Foto.src  = "./assets/pexels - manhã.jpg"
        Body.style.backgroundColor = "rgb(202, 195, 96)";

    }else if (Hora >= 12 && Hora < 18){
        //Boa tarde - Tarde
        Mensagem.innerHTML += `<p>Boa Tarde!!</p>`
        Foto.src = "./assets/pexels - tarde.jpg"
        Body.style.backgroundColor = "orange"
    } else{  
        //Boa noite - Noite
        Mensagem.innerHTML += `<p>Boa Noite!!</p>`
        Foto.src = "./assets/pexels - noite.jpg"
        Body.style.backgroundColor = "gray"
    }

    
}




