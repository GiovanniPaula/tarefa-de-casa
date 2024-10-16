let idade = parseInt(prompt("Digite a sua idade:"));
    if (idade < 18) {
        alert("Você é menor de idade.");
    } else if (idade >= 18 && idade < 60) {
        alert("Você é adulto.");
    } else if (idade >= 60) {
        alert("Você é idoso.");
    } else {
        alert("Idade inválida.");
    }
