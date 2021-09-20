var media, nota1, nota2, nota3;

var nome=prompt("DIgite o nome do aluno")

nota1 = prompt("Informe a Nota 1: ");
nota1 = eval (nota1);

nota2 = prompt("Informe a Nota 2: ");
nota2 = eval (nota2);

nota3 = prompt("Informe a Nota 3: ");
nota3 = eval (nota3);

media = (nota1 + nota2 + nota3)/3;

{
    document.write ("Aluno ", nome +", ");
    document.write ("\n");
    document.write ("sua média é: ", media);
}