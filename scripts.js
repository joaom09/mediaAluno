function media() {
    var nomeAluno = document.getElementById("Nome").value;
    var numeroMatricula = document.getElementById("Matricula").value;
    
    var nota1 = parseFloat(document.getElementById("N1").value); 
    if (nota1 >=0 && nota1<=10) {
       console.log("Nota válida");
    } else{
        console.log("Nota inválida");
        alert("Insira uma nota entre 0 a 10");
        nota1 = undefined;
    }
    
    var nota2 = parseFloat(document.getElementById("N2").value);
    if (nota2 >=0 && nota2<=10) {
        console.log("Nota válida");
     } else{
         console.log("Nota inválida");
         alert("Insira uma nota entre 0 a 10");
         nota2 = undefined;
     }
    var notaFinal = (nota1 + nota2) / 2;

    document.getElementById("apresentaNotas").textContent = "O aluno " + nomeAluno + ", matrícula " + numeroMatricula + ", obteve a média final " + notaFinal;

    console.log("O aluno " + nomeAluno + ", matrícula " + numeroMatricula + ", obteve a média final " + notaFinal);

}
