const conteudos = [
  { nome: "Home", url: "main.html", palavras: ["home", "inicio", "principal"] },
  { nome: "História do Voleibol", url: "Historia.html", palavras: ["historia", "história", "origem", "voleibol"] },
  { nome: "Regras do Voleibol", url: "Regras.html", palavras: ["regras", "regulamento", "pontuação"] },

  { nome: "Fundamentos", url: "Fundamentos.html", palavras: ["fundamentos", "basico", "técnicas"] },

  { nome: "Recepção", url: "Fundamentos.html#Recepcao", palavras: ["recepcao", "recepção", "manchete"] },
  { nome: "Saque", url: "Fundamentos.html#Saque", palavras: ["saque", "serviço"] },
  { nome: "Levantamento", url: "Fundamentos.html#Levantamento", palavras: ["levantamento", "levantador"] },
  { nome: "Bloqueio", url: "Fundamentos.html#Bloqueio", palavras: ["bloqueio", "defesa"] },
  { nome: "Ataque", url: "Fundamentos.html#Ataque", palavras: ["ataque", "corte", "spike"] }
];

function toggleRule(ruleNumber) {
    var content = document.getElementById("rule-content-" + ruleNumber);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

const years = document.querySelectorAll(".year");

  years.forEach(year => {
      year.addEventListener("click", () => {
          years.forEach(otherYear => {
              if (otherYear !== year) {
                  otherYear.classList.remove("active");
                  otherYear.querySelector(".event-info").style.display = "none";
              }
          });

          if (!year.classList.contains("active")) {
              year.classList.add("active");
              year.querySelector(".event-info").style.display = "block";
          } else {
              year.classList.remove("active");
              year.querySelector(".event-info").style.display = "none";
          }
      });
  });


document.getElementById("textosMensage").addEventListener("click", function (event) {
    // Pega o ID do elemento que foi clicado
    var elementoClicadoUser = event.target.name;
    var elementoClicadoID = event.target.id

    // Verifique se o elemento clicado tem um ID (evita erros se não tiver)
    if (elementoClicadoUser) {
        // Exibe o ID e o conteúdo em outro espaço (por exemplo, em um div)
        document.getElementById("responde").innerHTML = "Respondendo: "
        document.getElementById("nome").innerHTML = "" + elementoClicadoUser
        document.getElementById("idresponse").value = "" + elementoClicadoID
    }
});

function toggleForm(formId) {
    // Esconder todos os formulários
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form3').style.display = 'none';

    // Mostrar o formulário específico
    document.getElementById(formId).style.display = 'block';
}

function esconderBotao(formId) {
    // Mostrar o formulário específico
    document.getElementById(formId).style.display = 'none';
}

function buscarPagina(event) {
  event.preventDefault();

  const termo = document.getElementById("searchInput").value.toLowerCase();
  const resultado = encontrarConteudo(termo);

  if (resultado) {
    window.location.href = resultado.url;
  } else {
    alert("Conteúdo não encontrado 😕");
  }
}

function encontrarConteudo(texto) {
  return conteudos.find(item =>
    item.palavras.some(p => texto.includes(p))
  );
}

function mostrarSugestoes() {
  const input = document.getElementById("searchInput");
  const lista = document.getElementById("sugestoes");
  const texto = input.value.toLowerCase();

  lista.innerHTML = "";

  if (texto.length === 0) return;

  const resultados = conteudos.filter(item =>
    item.palavras.some(p => p.includes(texto) || texto.includes(p))
  );

  resultados.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-action";
    li.textContent = item.nome;
    li.onclick = () => window.location.href = item.url;
    lista.appendChild(li);
  });
}