export class Conta{
    constructor(cliente, agencia, numero, saldo){
        this._cliente = cliente;
        this._agencia = agencia;
        this._numero = numero;
        this._saldo = saldo;
    }

    set cliente(novoCliente){
        this._cliente = novoCliente;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
}