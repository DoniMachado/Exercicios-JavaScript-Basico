function verificar(){
    var Data = new Date();
    var Ano = Data.getFullYear();
    var Resultado = document.getElementById("resultado");
    var fAno = document.getElementById("txtano");
    
    if(fAno.value.length == 0 || Number(fAno.value) > Ano){
        Resultado.innerHTML = "<p><strong>[Erro]</strong>. Verifique os dados e tente novamente!</p>"
    }else{

        var RadSex = document.getElementsByName("radSex");
        var Idade = Ano - Number(fAno.value);
        var Genero = '';
        var Img = document.createElement('img');
        Img.setAttribute('id','foto')
        Img.style.width = "350px";
        Img.style.height = "350px";
        Img.style.borderRadius = "50%";
        Img.style.display = "block";
        Img.style.marginLeft = "auto";
        Img.style.marginRight = "auto";
        

        if(RadSex[0].checked){
            Genero = "Masculino";

            if(Idade >= 0 && Idade < 10){
                //Criança
                Img.setAttribute('src',"./assets/foto-bebe-h.jpg")
                //Img.src="./assets/foto-bebe-h.jpg";
                
            }else if ( Idade < 21){
                //Jovem
                Img.setAttribute('src',"./assets/foto-jovem-h.jpg")
                
            }else if (Idade < 50){
                //Adulto
                Img.setAttribute('src',"./assets/foto-adulto-h.jpg")
                
            }else{
                //Idoso
                Img.setAttribute('src',"./assets/foto-idoso-h.jpg")            
                
            }



        }else if (RadSex[1].checked){
            Genero = "Feminino";

            if(Idade >= 0 && Idade < 10){
                //Criança
                Img.setAttribute('src',"./assets/foto-bebe-m.jpg")
                
            }else if ( Idade < 21){
                //Jovem
                Img.setAttribute('src',"./assets/foto-jovem-m.jpg")
                
            }else if (Idade < 50){
                //Adulto
                Img.setAttribute('src',"./assets/foto-adulto-m.jpg")
                
            }else{
                //Idoso
                Img.setAttribute('src',"./assets/foto-idoso-m.jpg")            
                
            }

        }


        

        Resultado.innerHTML = `<p>Sua idade atual é de <strong>${Idade} anos</strong></p>`

        Resultado.innerHTML += `<p>Sexo informado: <strong>${Genero}</strong></p>`

        Resultado.appendChild(Img)
    }

   
}