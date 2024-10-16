    let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
    let peso = parseFloat(prompt("Digite seu peso em quilogramas (ex: 70):"));

    let imc = peso / (altura * altura);

    if (imc >= 18.5 && imc <= 24.9) {
        alert("Seu IMC é " + imc.toFixed(2) + ". Está dentro do intervalo saudável.");
    } else {
        alert("Seu IMC é " + imc.toFixed(2) + ". Não está dentro do intervalo saudável.");
    }



calcularIMC();
