
var tam = 2;
var idade = Array(tam);
var sexo = Array(tam);
var opiniao = Array(tam);
var total = 0;
var maisVelho = 0;
var maisNovo = 100000;
var nPessimo = 0;
var nBomOtimo = 0;
var nMulher = 0;
var nHomem = 0;

for(i = 0; i < tam; i++){
    idade[i] =parseFloat(prompt("Digite sua idade: "));
    sexo[i] = prompt("Digite seu sexo F(Feminino) ou M(Masculino) : ");
    opiniao[i] = prompt("Digite sua Opinião 1(Péssimo), 2(Regular), 3(Bom), 4(Ótimo): ");
}

for(i = 0; i < tam; i++){
    if(idade[i] > maisVelho){
        maisVelho = idade[i];
    }
    if(idade[i] < maisNovo){
        maisNovo = idade[i];
    }
    total += idade[i];

    if(opiniao[i] == 1){
        nPessimo++;
    }

    if((opiniao[i] == 3) || (opiniao[i] == 4)){
        nBomOtimo++;
    }

    if((sexo[i] == "f") || (sexo[i] == "F")){
        nMulher++;
    }

    if((sexo[i] == "m") || (sexo[i] == "M")){
        nHomem++;
    }
}
alert("Media das idades = " + (total/tam));
alert("Mais Velha = " + maisVelho);
alert("Mais Novo = " + maisNovo);
alert("Quantidade de Péssimo = " + nPessimo);
alert("porcentagem de Bom e Ótimo = " + ((nBomOtimo/tam) * 100) + "%" )
alert("Quantidade de Mulheres = " + nMulher);
alert("Quantidade de Homens = " + nHomem);

