function tabuada(){
    let Resultado = document.getElementById('retorno');
    let Valor = document.getElementById('txtNumber');

    if (Valor.value.length == 0){
        window.alert("[Erro]. Digite um número antes de gerar a tabuada")
    }
    else{
        Valor = Number(Valor.value);

        let temp= ""; 

        for(let i = 1; i<= 10; i++){
            let res = Valor*i ;
            temp += `${Valor} X ${i} = ${res}\n`
        }

        Resultado.value = temp;
    }
}


