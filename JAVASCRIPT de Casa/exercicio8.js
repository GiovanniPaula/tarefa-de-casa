let valorOriginal = 900.00;


let codigoPromocional = prompt("Digite o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):");


let valorComDesconto;

switch (codigoPromocional) {
    case "DESC1":
        valorComDesconto = valorOriginal * 0.95; 
        console.log("Você ganhou 5% de desconto.");
        break;
    case "DESC2":
        valorComDesconto = valorOriginal * 0.90;
        console.log("Você ganhou 10% de desconto.");
        break;
    case "DESC3":
        valorComDesconto = valorOriginal * 0.85; 
        console.log("Você ganhou 15% de desconto.");
        break;
    case "DESC4":
        valorComDesconto = valorOriginal * 0.80; 
        console.log("Você ganhou 20% de desconto.");
        break;
    case "DESC5":
        valorComDesconto = valorOriginal * 0.75; 
        console.log("Você ganhou 25% de desconto.");
        break;
    default:
        console.log("Erro: Código promocional inválido.");
        valorComDesconto = valorOriginal; 
        break;
}

alert("Valor original do produto: R$ " + valorOriginal.toFixed(2));
alert("Valor com desconto: R$ " + valorComDesconto.toFixed(2));
