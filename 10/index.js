// clientes
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 };
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 };
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 };
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 };
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 };
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 };
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 };

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(cliente, item, quantidade) {
  const itemNoCarrinho = {
    item: {
      nome: item.nome,
      valorEmCentavos: item.valorEmCentavos,
    },
    quantidade: quantidade,
  };

  cliente.carrinho.push(itemNoCarrinho);
}

// Adicionando produtos aos carrinhos conforme as instruções
adicionarAoCarrinho(jose, tv, 1);
adicionarAoCarrinho(jose, caboUsb, 2);
adicionarAoCarrinho(jose, webcam, 1);

adicionarAoCarrinho(carlos, notebook, 2);

adicionarAoCarrinho(patricia, teclado, 1);
adicionarAoCarrinho(patricia, caboUsb, 2);
adicionarAoCarrinho(patricia, carregador, 1);
adicionarAoCarrinho(patricia, mouse, 1);
adicionarAoCarrinho(patricia, monitor, 1);

adicionarAoCarrinho(renato, webcam, 5);

adicionarAoCarrinho(roberto, webcam, 1);
adicionarAoCarrinho(roberto, caboUsb, 2);
adicionarAoCarrinho(roberto, monitor, 1);

// Exibindo os carrinhos dos clientes
console.log("Carrinho de Patricia:", patricia.carrinho);
console.log("Carrinho de Carlos:", carlos.carrinho);
console.log("Carrinho de Renato:", renato.carrinho);
console.log("Carrinho de José:", jose.carrinho);
console.log("Carrinho de Roberto:", roberto.carrinho);
