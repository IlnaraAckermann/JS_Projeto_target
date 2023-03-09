function exibirResolverCodigo(){
    document.getElementById('respostaPseudoCodigo').style.display = 'block';
}

function fibonacci(){
    var termo = parseInt(document.getElementById('numeroFibonacci').value);
    var respostaFibonacci = document.getElementById('respostaFibonacci');
    
    var penultimo=0, ultimo=1;
    var numero;

    if (termo === 0 || termo === 1) {
        respostaFibonacci.innerHTML= "o numero " + termo + "faz parte da sequencia Fibonacci";
    } else if (termo > 1){
       while(ultimo<termo){
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
       }
       if (ultimo===termo) {
        respostaFibonacci.innerHTML= "O numero " + termo + " faz parte da sequencia Fibonacci";
       } 
       else {
        respostaFibonacci.innerHTML= "O numero " + termo + " não faz parte da sequencia Fibonacci";
       }
    }
    else{
        respostaFibonacci.innerHTML= "O numero " + termo + " não faz parte da sequencia Fibonacci";
    }
}


function resolverLogica(){
        document.getElementById('respostaLogica').style.display = 'block';
    }

function resolverVeiculo(){
    document.getElementById('respostaDistancia').style.display = 'block';
}

function inverterString(){
    var stringRecebida = document.getElementById('stringRecebida').value;
    var respostaStringInvertida = document.getElementById('respostaStringInvertida');

    let arrayStrigRecebida = stringRecebida.split('');
    let newString = "";

    for (let i = arrayStrigRecebida.length - 1; i >= 0; i--) { 
        newString += arrayStrigRecebida[i];
    }

    respostaStringInvertida.innerHTML= "A string invertida é: <b>"+ newString +"</b>"

}
