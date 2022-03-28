class Cliente {
    constructor (nome , cpf , endereco , cel){
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.cel = cel;
    }

    

    validaCPF = function () {
        if (this.cpf.length != 11) {
            console.log("CPF inválido");
            this.cpf = "";
        } else { console.log("CPF válido"); };
    }


}
