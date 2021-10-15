const body = document.getElementsByTagName('body')[0]
const coin = {
  state: 0,


  flip: function () {

    this.state = Math.floor(Math.random() * (this._state, 2));

    return this.state
    

    // Use "this.state" para acessar a propriedade "state".
    // Configure de forma randômica a propriedade “state” do
    // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
  },

  toString: function () {
     coin.flip()
    x = (this.state === 0) ? 'Head' : 'Tails';
    return x
    // Se o valor de "state" for 0, retorne "Heads"
    // Se o valor de "state" for 1, retorne "Tails"
  },

  toHTML: function () {
    let img = '';
    let alt = '';
    x = (this.toString() === 'Head') ? img = './euroH.jpeg' : img = './euro.jpeg';
    x = (x === './euroH.jpeg') ? alt = 'Head' : alt = 'Tails';
    const image = document.createElement("img");
    image.src = img;
    image.alt = alt;
    body.appendChild(image)
    // Colocar uma imagem correspondente a essa valor.
    // image.src = "./CAMINHO/IMAGEM.JPEG"
    // image.alt = "Heads/Tails"
    return image;
  },
};

function display20Flips() {
  const results = [];
  body.innerHTML = ''
  for(let i = 0; i < 20; i++){
  
    let node = document.createTextNode(coin.toString() + ' ')
    body.appendChild(node)
    results.push(node.textContent)
  }
  
  return results
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
}

function display20Images() {
  const results = [];
  body.innerHTML = '';

  for(let i = 0; i < 20; i++){
  coin.toHTML()
    
  x = (coin.state === 0) ? results.push('Heads') : results.push('Tails')
    
  }
  
  return results
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
}


