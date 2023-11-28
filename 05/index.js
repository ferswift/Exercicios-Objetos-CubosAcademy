/*
1. Um novo curso foi criado e suas aulas precisam ser cadastradas. Abaixo temos o objeto `curso`, que possui uma propriedade chamada `aulas`. Sua tarefa é adicionar a lista de aulas abaixo na propriedade `aulas` do objeto `curso`.
*/

const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [
    {
      identificador: 1,
      nome_da_aula: "Introdução a programação",
    },
    {
      identificador: 2,
      nome_da_aula: "Variáveis",
    },
    {
      identificador: 3,
      nome_da_aula: "Condicionais",
    },
    {
      identificador: 4,
      nome_da_aula: "Arrays",
    },
  ],
};

console.log(curso);
