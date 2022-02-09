var Numeros = [];

function Add(){
    let Num = document.getElementById("txtNumber");
    let Retorno = document.getElementById("retorno");
    let Resultado = document.getElementById("resultado");

    if(Num.value.length == 0){
        window.alert("[Erro]. Por favor, digite um número!");
    }else{
        Num = Number(Num.value);

        if(Num <= 0 || Num > 100){
            window.alert("[Erro]. Por favor, digite um número VÁLIDO, um número entre [1] e [100]!");
        }else if(Numeros.indexOf(Num) != -1){
            window.alert("[Erro]. Por favor, digite um número ÚNICO, que NÃO esteja na LISTA!");
        }else{
            Numeros.push(Num);
            Numeros.sort(function(a, b){return a - b}); //precisa disso, pois o metodo sort() da problema com numeros
    
            Resultado.innerHTML = '';
            Retorno.value += `O número [${Num}] foi adicionado à lista.\n`
            Retorno.value += `Lista: [${Numeros}] \n`
        }
      

    }

    document.getElementById("txtNumber").value = '';
    document.getElementById("txtNumber").focus();

}


function Finalizar(){
   if(Numeros.length == 0){

    window.alert("[Erro]. É necessário pelo menos [1] elemento na lista para analisá-la.");

   }else{

   
    let Resultado = document.getElementById("resultado");

    Resultado.innerHTML = `<p>Ao todo, existem ${Numeros.length} elementos cadastrados</p>`

    Resultado.innerHTML += `<p>O MAIOR valor informado foi de ${Numeros[Numeros.length - 1]} </p>`

    Resultado.innerHTML += `<p>O MENOR valor informado foi de ${Numeros[0]} </p>`

    let Sum = 0;
    Numeros.forEach(function(item,indice,array){
        Sum += item;
    });

    Resultado.innerHTML += `<p>Somando todo os valores, temos ${Sum} </p>`

    Resultado.innerHTML += `<p>A média dos valores digitados, é ${Sum/Numeros.length} </p>`

   }

}


function Limpar(){
    Numeros = [];

    let Resultado = document.getElementById("resultado");
    Resultado.innerHTML = "";

    let Retorno = document.getElementById("retorno");
    Retorno.value = "";

    let Num = document.getElementById("txtNumber");
    Num.value="";
    
}
