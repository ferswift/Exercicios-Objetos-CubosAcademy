/*
1. Abaixo, temos uma lista de pessoas que representa os participantes de uma festa. O `Carlos` se perdeu dos seus amigos e sua tarefa é encontrá-lo. O lugar onde o Carlos se encontra é representado pela posição do objeto que contém seu nome na lista. Quando encontrar o Carlos, caso ele esteja na posição `123`, deverá imprimir `Galera... O Carlos está na posição 123, corre lá!`.

Lembre-se o array inicia na posição zero, porém, em uma fila iniciamos a contagem a partir do um. Portanto, o resultado final para o exemplo acima, deverá ser como ilustrado abaixo:
*/

const participantes = [
  { nome: "João" },
  { nome: "Ana" },
  { nome: "Beatriz" },
  { nome: "Maria" },
  { nome: "Ana Clara" },
  { nome: "Joana" },
  { nome: "Augusto" },
  { nome: "Renan" },
  { nome: "Patricia" },
  { nome: "Carlos" },
  { nome: "Renato" },
  { nome: "José" },
  { nome: "Roberto" },
  { nome: "Sara" },
  { nome: "Junior" },
  { nome: "Pedro" },
  { nome: "Vitor" },
  { nome: "Antonio" },
];

for (let indice = 0; indice < participantes.length; indice++) {
  if (
    participantes[indice].nome === "Carlos" ||
    participantes[indice].nome === "carlos"
  ) {
    console.log(`Galera... O Carlos está na posição ${indice + 1}, corre lá!`); // i + 1 para retirar o indice do zero e adiciona-lo a 10
    break;
  }
}
