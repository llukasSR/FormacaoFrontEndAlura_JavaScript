var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    //var pacientes = pacientes[i];
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var tdImc = pacientes[i].querySelector(".info-imc");
    var pesoEValido = true;
    var alturaEValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEValido = false;
        peso.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido"); //classList.add cria uma nova classe no objeto paciente. Essa class está configurada no CSS alterando o background-color
    }
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaEValida = false;
        altura.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    }
    if (alturaEValida && pesoEValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; 
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); // toFixed fixa o número de casas decimais
}

