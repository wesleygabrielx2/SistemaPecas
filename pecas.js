var listaDePecas = ["filtro do ar", "motor", "amortecedor"]

if (listaDePecas.length < 10) {
    // E possivel cadastrar peças  
    console.log("É possivel cadastrar mais peças");
} else {
    console.log("Não tem espaço nessa lista,impossivel cadastrar");
}
let peso = 150;
if (peso < 100) {
    console.log(" A peça deve pesar no mínimo 100g")
} else {
    console.log("a peça possui peso adequado")
}
let nomePeca = "disco de freio";
if (nomePeca.length > 3) {
    console.log("Nome de peça está adequado para o cadastro!!")
} else if (nomePeca.length==0){
    console.log("O nome da peça não pode ser vazio")
}else {
    console.log(" O nome deve ter mais de 3 caracteres.")

}

switch (nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequadoi")
        break;

        
    default: 
    console,log("Nome de peça esta adequado para o cadastro!!")
}