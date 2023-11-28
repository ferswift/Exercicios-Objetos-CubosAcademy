const usuario = {
  nome: "João",
  idade: 25,
  profissao: "programador",
  cor_preferida: "verde",
};

const { nome, idade, profissao, cor_preferida } = usuario; //Desestruturando o objeto.

console.log(
  `Olá... Eu sou ${nome} e tenho ${idade} de idade. Sou ${profissao} e minha cor preferida é ${cor_preferida} !`
);
