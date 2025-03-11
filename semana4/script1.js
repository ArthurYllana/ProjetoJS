// Classe Pessoa
function Pessoa(nome, email, telefoneFixo, telefoneCelular, matricula) {
    this.nome = nome;
    this.email = email;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
    this.matricula = matricula;
}

Pessoa.prototype.setNome = function(nome) {
    this.nome = nome;
};

Pessoa.prototype.getNome = function() {
    return this.nome;
};

// Classe Professor
function Professor(nome, email, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes) {
    Pessoa.call(this, nome, email, telefoneFixo, telefoneCelular, matricula);
    this.areaAtuacao = areaAtuacao;
    this.lattes = lattes;
}
Professor.prototype = Object.create(Pessoa.prototype);
Professor.prototype.constructor = Professor;

// Classe Aluno
function Aluno(nome, email, telefoneFixo, telefoneCelular, matricula, curso) {
    Pessoa.call(this, nome, email, telefoneFixo, telefoneCelular, matricula);
    this.curso = curso;
}
Aluno.prototype = Object.create(Pessoa.prototype);
Aluno.prototype.constructor = Aluno;

// Função para criar campos dinâmicos
function criarCamposDinamicos(tipo) {
    var campoDinamico = document.getElementById("campoDinamico");
    campoDinamico.innerHTML = "";
    
    if (tipo === "Professor") {
        campoDinamico.innerHTML = `
            <label>Área de Atuação:</label>
            <input type="text" id="areaAtuacao" placeholder="Digite sua área de atuação">
            
            <label>Lattes:</label>
            <input type="text" id="lattes" placeholder="Digite o link do seu Lattes">
        `;
    } else if (tipo === "Aluno") {
        campoDinamico.innerHTML = `
            <label>Curso:</label>
            <input type="text" id="curso" placeholder="Digite seu curso">
        `;
    }
}

// Evento para monitorar a seleção de Professor ou Aluno
document.querySelectorAll('input[name="tipo"]').forEach(function(radio) {
    radio.addEventListener("change", function(event) {
        criarCamposDinamicos(event.target.value);
    });
});

// Evento para enviar o formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefoneFixo = document.getElementById("telefoneFixo").value;
    var telefoneCelular = document.getElementById("telefoneCelular").value;
    var matricula = document.getElementById("matricula").value;
    var tipoSelecionado = document.querySelector('input[name="tipo"]:checked').value;
    
    if (tipoSelecionado === "Professor") {
        var areaAtuacao = document.getElementById("areaAtuacao").value;
        var lattes = document.getElementById("lattes").value;
        var professor = new Professor(nome, email, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes);
        console.log("Professor cadastrado:", professor);
    } else if (tipoSelecionado === "Aluno") {
        var curso = document.getElementById("curso").value;
        var aluno = new Aluno(nome, email, telefoneFixo, telefoneCelular, matricula, curso);
        console.log("Aluno cadastrado:", aluno);
    }
    
    alert("Cadastro realizado com sucesso!");
});