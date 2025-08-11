let amigos = [];

const input = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");

const adicionarAmigo = () => {
  const nomeDoAmigo = input.value.trim();

  if (!nomeDoAmigo) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  if (amigos.includes(nomeDoAmigo)) {
    alert("Esse amigo já está na listar.");
    return;
  }

  amigos.push(nomeDoAmigo);
  atualizarAmigos();
  input.value = "";
};

const atualizarAmigos = () => {
  listaAmigos.innerHTML = "";
  resultado.innerHTML = "";

  amigos.forEach((amigo) => {
    const lista = document.createElement("li");
    lista.textContent = amigo;
    listaAmigos.appendChild(lista);
  });
};

const sortearAmigo = () => {
  if (amigos.length < 2) {
    alert("Por favor, insira pelo menos dois amigos na lista.");
    return;
  }
  listaAmigos.innerHTML = "";

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  resultado.textContent = amigoSecreto;
};

const reiniciarJogo = () => {
  if (amigos.length === 0) {
    return;
  }

  amigos = [];
  atualizarAmigos();
  input.value = "";
};
