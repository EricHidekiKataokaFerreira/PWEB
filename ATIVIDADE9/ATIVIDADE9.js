
var menor;

var n1 = prompt("Digite o primeiro número");
var n2 = prompt("Digite o segundo número");
var n3 = prompt("Digite o Terceiro número");

function maior(N1 , N2, N3){
    if(((N1 > N2) && (N1 > N3)) || (N1 == N2) && (N2 == N3)){
        return(N1);
    }else if((N2 > N1) && (N2 > N3)){
        return(N2);
    }
    else{
       return(N3); 
    }
}

function orden(N1, N2, N3){
    var aux;
    for(i = 0; i < 2; i++){
        for(j = 1; j < 3; j++){
            if(arguments[i] > arguments[j]){
                aux = arguments[j];
                arguments[j] = arguments[i];
                arguments[i] = aux;
            }
        } 
    }
    return(arguments[0] +" < "+ arguments[1] + " < " + arguments[2]);
}

var maior = maior(n1, n2, n3);
// alert("Maior número = "+ maior);
document.write ("Maior número = ", maior);

var orden = orden(n1,n2,n3);
// alert("Orden = "+ orden);
document.write ("         Orden = ", orden);
