function contar (){
   var Resultado = document.getElementById("resultado");
   var Inicio = document.getElementById("txtinicio");
   var Fim = document.getElementById("txtfim");
   var Passo = document.getElementById("txtpasso");

   if(Inicio.value.length == 0 || Fim.value.length == 0){
        window.alert("[Erro] Preencha os dados corretamente antes de executar o programa!");
   }else if (Number(Inicio.value) > Number(Fim.value)){
    window.alert("[Erro] Preencha os dados corretamente antes de executar o programa! Início deve ser menor que o Fim");

   } else if (Passo.value.length== 0 || Number(Passo.value) <= 0){
    window.alert("[Erro] Valor inválido para Passos! Digite um valor [Maior] que [0]");
   }else{
       Inicio = Number(Inicio.value);
       Fim = Number (Fim.value);
       Passo = Number (Passo.value);

       var temp = "<p>";

        for (var i = Inicio; i <= Fim; i+= Passo){
            temp += `<strong>${i}</strong> \u{1F449} `
        }

        temp += " \u{1F3C1}</p>";

        Resultado.innerHTML = temp;

   }
    
}




