function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  const date = new Date();

class Transacoes {
    constructor (conta , valorDaTransacao , numeroDaConta){
        this.conta = conta;
        this.valorDaTransacao = valorDaTransacao;
        this.idDeTransferencia = uuidv4();
        this.numeroDaConta = numeroDaConta;
        this.data = date.toDateString(); 
        }

        get transferencia(){
                console.log(`Você transferiu R$${this.valorDaTransacao},00 da conta ${this.conta} para a conta ${this.numeroDaConta}`)
                return this.valorDaTransacao;
            }

        get deposito(){
            console.log(`Você depositou R$${this.valorDaTransacao},00 para a conta ${this.conta}`)
            return this.valorDaTransacao;
        }

        
}

