var n1, n2, soma, sub, prod, div, resto;

n1 = prompt("Informe o Primeiro numero: ");
n1 = eval (n1);

n2 = prompt("Informe o Segundo numero: ");
n2 = eval (n2);

soma = n1 + n2;
sub = n1 - n2;
prod = n1 * n2;
div = n1 / n2;
resto = n1 % n2;

{
    document.write ("Soma = ", soma);
    document.write (" | Subtração = ", sub);
    document.write (" | Produto = ", prod);
    document.write (" | Divisão = ", div);
    document.write (" | Resto = ", resto);
}