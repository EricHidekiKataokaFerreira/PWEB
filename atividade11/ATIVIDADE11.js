var ba = prompt("Digite o valor da base");
var al = prompt("Digite o valor da altura");


function Retangulo(b , a){
    this.base = b;
    this.altura = a;
}

const retangulo1 = new Retangulo(ba, al);

areaR(ba, al);

function areaR(b, a){
    alert(b*a);
}