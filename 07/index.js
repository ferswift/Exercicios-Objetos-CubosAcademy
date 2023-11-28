/* 
1. Abaixo, temos a lista de capítulos do livro `O poder do hábito`. Sua tarefa é numerar, **em ordem crescente**, cada capítulo do livro adicionando uma propriedade `numero` em cada objeto da lista de capítulos.
Obs.: a ordem deverá seguir a mesma existente.

Lembre-se que existe uma estrutura de repetição que nos ajuda em questão das posições dos elementos contidos no array. Portanto, o resultado final para o exemplo acima, deverá ser como ilustrado abaixo:
*/

const livro = {
  nome: "O poder do hábito",
  capitulos: [
    {
      nome: "O loop do hábito",
    },
    {
      nome: "O cérebro ansioso",
    },
    {
      nome: "A regra de ouro da mudança de hábito",
    },
    {
      nome: "Hábitos angulares, ou a balada de Paul O`neill",
    },
    {
      nome: "Starbucks e o hábito do sucesso",
    },
    {
      nome: "O poder de uma crise",
    },
    {
      nome: "Como a target sabe o que você quer antes que você saiba",
    },
    {
      nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
    },
    {
      nome: "A neorologia do livre-arbítrio",
    },
  ],
};

// Adiciona a propriedade 'numero' a cada objeto na lista de capitulos
for (let i = 0; i < livro.capitulos.length; i++) {
  livro.capitulos[i].numero = i + 1;
}

console.log(livro);
