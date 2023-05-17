function media() {
    var nomeAluno = document.getElementById("Nome").value;
    var numeroMatricula = document.getElementById("Matricula").value;

    var nota1 = parseFloat(document.getElementById("N1").value);
    var nota2 = parseFloat(document.getElementById("N2").value);

    var notaFinal = (nota1 + nota2) / 2;

    document.getElementById("apresentaNotas").textContent = "O aluno " + nomeAluno + ", matrícula " + numeroMatricula + ", obteve a média final " + notaFinal;

    console.log("O aluno " + nomeAluno + ", matrícula " + numeroMatricula + ", obteve a média final " + notaFinal);

}
