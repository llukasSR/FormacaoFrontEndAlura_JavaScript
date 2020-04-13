var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoEValido = true;
    var alturaEValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEValido = false;
        peso.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido"); //classList.add cria uma nova classe no objeto paciente. Essa class está configurada no CSS alterando o background-color
    }
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaEValida = false;
        altura.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEValida && pesoEValido) {
        var imc = peso / (altura * altura);
        console.log(imc);
        tdImc.textContent = imc.toFixed(2); // toFixed fixa o número de casas decimais
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (){
    console.log("Oi, cliquei no botão!");
});
