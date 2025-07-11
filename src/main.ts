// Tarefa: Treinando Arrays

// Seu colega de trabalho precisou sair urgente e pediu para você completar o código dele na entrega que ele precisa fazer hoje. Como um bom amigo, você concordou. Mas ele não passou muitas instruções. O código abaixo está incompleto. Encontre os locais que precisam de ajuste para cumprir com as demandas abaixfunctiono. Não altere as estruturas textuais.
// Utilize o comando: `npm test` para validar a resposta.

// Requisitos da entrega:
// 1. Criar um array de números. ✅
// 2. Criar uma função para exibir o array e seu tamanho. ❌
// 3. Adicionar elementos 60 e 70 ao array. ❌
// 4. Exibir o array usando a função mostrarArray. ❌
// 5. Remover o último elemento do array usando o método pop. ❌
// 6. Exibir o array usando a função mostrarArray. ❌
// 7. Mostrar o elemento excluído. ❌
// 8. Mostrar cada elemento do array em uma linha usando o método forEach. ❌
// 9. Criar um novo array com os valores dobrados usando o método map. ❌
// 10. Calcular a soma de todos os elementos do array usando o método reduce. ❌

const numeros: number[] = [10, 20, 30, 40, 50];

// 2. Criar uma função para exibir o array e seu tamanho.
function mostrarArray(arr: number[]) {
  console.log(`Array: [${arr.join(", ")}]`);
  console.log(`Tamanho: ${arr.length}`);
}

// 3. Adicionar elementos 60 e 70 ao array.
numeros.push(60, 70);

// 4. Exibir o array usando a função mostrarArray.
mostrarArray(numeros);

// 5. Remover o último elemento do array usando o método pop.
const elementoRemovido = numeros.pop();

// 6. Exibir o array usando a função mostrarArray.
mostrarArray(numeros);

// 7. Mostrar o elemento excluído.
console.log(`Elemento removido: ${elementoRemovido}`);

// 8. Mostrar cada elemento do array em uma linha usando o método forEach.
numeros.forEach((numero) => {
  console.log(numero);
});

// 9. Criar um novo array com os valores dobrados usando o método map.
const numerosDobro = numeros.map((numero) => numero * 2);
console.log(`Números dobrados: [${numerosDobro.join(", ")}]`);

// 10. Calcular a soma de todos os elementos do array usando o método reduce.
const soma = numeros.reduce((acc, numero) => acc + numero, 0);
console.log(`Soma de todos os elementos: ${soma}`);


// para rodar o código, use o comando:
// npm run build
