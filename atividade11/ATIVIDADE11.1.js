
class Conta{
    constructor(nConta){
        this.nConta = nConta;
        this.saldo = 0;
    }

    set setnCorrentista(nomeCorrentista){
        this.nomeCorrentista = nomeCorrentista;
    }

    set setBanco(banco){
        this.banco = banco;
    }

    set saldo (saldo){
       saldo += saldo;
    }

    get getnCorrentista(nomeCorrentista){
        return(nomeCorrentista);
    }

    get getnBanco(Banco){
        return(Banco);
    }

    get getnBanco(Banco){
        return(Banco);
    }

}

class contaCorrente extends Conta{
    constructor(){
        
    }
}