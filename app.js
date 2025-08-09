let amigos = [];

const input = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");

const adicionarAmigo = () => {
  const nomeDoAmigo = input.value.trim();

  if (nomeDoAmigo) {
    // Verificar se o amigo já está na lista
    if (!amigos.includes(nomeDoAmigo)) {
      amigos.push(nomeDoAmigo);
      atualizarAmigos();
    } else {
      alert("Esse amigo já está na lista.");
    }
    input.value = "";
  } else {
    alert("Por favor, insira um nome válido.");
  }
};

const atualizarAmigos = () => {
  listaAmigos.innerHTML = "";
  resultado.textContent = "";

  amigos.forEach((amigo) => {
    const lista = document.createElement("li");
    lista.textContent = amigo;
    listaAmigos.appendChild(lista);
  });
};

const sortearAmigo = () => {
  if (amigos.length === 0) {
    alert("Por favor, insira pelo menos um amigo na lista.");
    return;
  }

  listaAmigos.innerHTML = "";

  const numeroAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[numeroAleatorio];

  resultado.textContent = amigoSecreto;
};
