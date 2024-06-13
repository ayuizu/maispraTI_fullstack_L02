//*--------------------Exercicio 01--------------------

// const prompt = require("prompt-sync")();
// console.log("Calculadora de redução do tempo de vida de um fumante.");

// function reducaoTempoVida(quantidadeCigarro, anosFumando) {
//   let reducaoMinutos = quantidadeCigarro * anosFumando * 365 * 10;
//   let reducaoDias = reducaoMinutos / (24 * 60);
//   return reducaoDias.toFixed(2);
// }
// let quantidadeCigarro = parseFloat(prompt(
//   "Digite a quantidade de cigarros fumados por dia: ",
// ));
// let anosFumando = parseFloat(prompt("Digite a quantidade de anos fumando: "));
// console.log(
//   "A redução do tempo de vida desse fumante é de",
//   reducaoTempoVida(quantidadeCigarro, anosFumando),
//   "dias.",
// );

//*--------------------Exercicio 02--------------------

// const prompt = require("prompt-sync")();
// console.log("Pardal - Limite 80 km/h");
// function pardal80(velocidade) {
//   if (velocidade > 80) {
//     let multa = (velocidade - 80) * 5;
//     console.log("Você foi multado em R$ ", multa.toFixed(2), ".");
//   } else {
//     console.log("Você não foi multado.");
//   }
// }

// let velocidade = parseFloat(prompt("Insira a sua velocidade em km/h: "));
// pardal80(velocidade);

//*--------------------Exercicio 03--------------------

// const prompt = require("prompt-sync")();
// console.log("Calculadora de preço de passagem");
// function precoPassagem(distancia) {
//   let preco = 0.0;
//   if (distancia > 0 && distancia <= 200) {
//     preco = distancia * 0.5;
//     console.log("O preço da passagem será de R$ ", preco.toFixed(2), ".");
//   } else if (distancia > 200) {
//     preco = distancia * 0.45;
//     console.log("O preço da passagem será de R$ ", preco.toFixed(2), ".");
//   }
// }

// let distancia = parseFloat(prompt("Digite a distância a percorrer: "));
// precoPassagem(distancia);

//*--------------------Exercicio 04--------------------

// const prompt = require("prompt-sync")();
// console.log("Essas medidas formam um triângulo?");

// function formaTriangulo(A, B, C) {
//   if (A < 0 || B < 0 || C < 0 || isNaN(A) || isNaN(B) || isNaN(C))
//     return "Medidas inválidas.";
//   else if (A < B + C && B < A + C && C < A + B)
//     return "As medidas fornecidas formam um triângulo.";
//   else return "As medidas fornecidas NÃO formam um triângulo.";
// }

// let ladoA = parseFloat(prompt("Informe a 1ª medida: "));
// let ladoB = parseFloat(prompt("Informe a 2ª medida: "));
// let ladoC = parseFloat(prompt("Informe a 3ª medida: "));
// console.log(formaTriangulo(ladoA, ladoB, ladoC));

//*--------------------Exercicio 05--------------------

// const prompt = require("prompt-sync")();
// console.log(
//   "Jogo de JoKenPo \n\nDigite 1 para PEDRA, 2 para PAPEL ou 3 para TESOURA\n",
// );

// function joKenPo(jogador) {
//   let computador = Math.floor(Math.random() * 3 + 1);
//   switch (computador) {
//     case 1:
//       console.log("\nComputador: PEDRA");
//       break;
//     case 2:
//       console.log("\nComputador: PAPEL");
//       break;
//     case 3:
//       console.log("\nComputador: TESOURA");
//       break;
//   }
//   switch (jogador) {
//     case 1:
//       console.log("Jogador: PEDRA");
//       break;
//     case 2:
//       console.log("Jogador: PAPEL");
//       break;
//     case 3:
//       console.log("Jogador: TESOURA");
//       break;
//   }
//   if (computador == jogador) return "Empate!";
//   else if (
//     (computador == 1 && jogador == 2) ||
//     (computador == 2 && jogador == 3) ||
//     (computador == 3 && jogador == 1)
//   )
//     return "\nVocê venceu!";
//   else return "\nVocê perdeu!";
// }
// let jogador = 0;
// do {
//   jogador = parseInt(prompt("Escolha sua jogada: "));
// } while (jogador != 1 && jogador != 2 && jogador != 3);
// console.log(joKenPo(jogador));

//*--------------------Exercicio 06--------------------

// const prompt = require("prompt-sync")();
// console.log("Adivinhe um número de 1 a 5");

// function sorteadorNumero() {
//   let numeroSorteado = Math.floor(Math.random() * 5 + 1);
//   console.log(numeroSorteado);
//   let chute = 0;
//   do {
//     chute = parseInt(prompt("Digite seu palpite: "));
//     if (chute == numeroSorteado) console.log("Você acertou!");
//     else if (chute <= 5 && chute > numeroSorteado)
//       console.log("O número é menor!");
//     else if (chute >= 1 && chute < numeroSorteado)
//       console.log("O número é maior!");
//     else console.log("Palpite inválido!");
//   } while (chute != numeroSorteado);
// }
// sorteadorNumero();

//*--------------------Exercicio 07--------------------

// const prompt = require("prompt-sync")();
// console.log("Valor do aluguel de carros");
// console.log(
//   "\nValores para carros populares:\n- Diária: R$ 90,00;\n- Valor por km (até 100km): R$ 0,20;\n- Valor por km (acima de 100km): R$ 0,10;\nValores para carros de luxo:\n- Diária: R$ 150,00;\n- Valor por km (até 200km): R$ 0,30;\n- Valor por km (acima de 200km): R$ 0,25;\n",
// );

// function valorAluguelCarro(categoria, dias, distancia) {
//   let valorPopular0 = 90;
//   let valorPopular1 = 0.2;
//   let valorPopular2 = 0.1;
//   let valorLuxo0 = 150;
//   let valorLuxo1 = 0.3;
//   let valorLuxo2 = 0.25;
//   let valorAluguel = 0.0;
//   if (
//     (categoria == "P" ||
//       categoria == "p" ||
//       categoria == "L" ||
//       categoria == "l") &&
//     distancia > 0 &&
//     dias > 0
//   ) {
//     if (categoria == "P" || categoria == "p") {
//       if (distancia <= 100) {
//         valorAluguel = dias * valorPopular0 + distancia * valorPopular1;
//       } else if (distancia > 100) {
//         valorAluguel =
//           dias * valorPopular0 +
//           100 * valorPopular1 +
//           (distancia - 100) * valorPopular2;
//       }
//     } else if (categoria == "L" || categoria == "l") {
//       if (distancia <= 200) {
//         valorAluguel = dias * valorLuxo0 + distancia * valorLuxo1;
//       } else if (distancia > 200) {
//         valorAluguel =
//           dias * valorLuxo0 + 200 * valorLuxo1 + (distancia - 200) * valorLuxo2;
//       }
//     }
//     if (valorAluguel > 0) {
//       console.log(
//         "O valor do aluguel do carro é de R$",
//         valorAluguel.toFixed(2),
//       );
//     }
//   } else {
//     console.log("Dados inválidos");
//   }
// }

// let categoriaCarro = prompt("Digite a categoria do carro [L] ou [P]: ");
// let dias = parseInt(prompt("Digite o número de diárias: "));
// let distanciaCarro = parseFloat(prompt("Digite a distância percorrida (km): "));
// valorAluguelCarro(categoriaCarro, dias, distanciaCarro);

//*--------------------Exercicio 08--------------------

// const prompt = require("prompt-sync")();
// console.log("Se exercite e ganhe pontos!");
// console.log(
//   "\nRegras:\n- Até 10h: 2 pontos/hora;\n- De 10h a 20h: 5 pontos/hora;\n- Acima de 20h: 10 pontos/hora.\nA cada ponto acumulado, ganhe R$ 0,05!\n",
// );

// function exerciciosParaPontos(horas) {
//   let somaPontos = 0;
//   let pontos10 = 2;
//   let pontos20 = 5;
//   let pontos30 = 10;
//   let reaisPorPonto = 0.05;
//   if (horas <= 10) {
//     somaPontos = horas * pontos10;
//   } else if (horas <= 20) {
//     somaPontos = 10 * pontos10 + (horas - 10) * pontos20;
//   } else if (horas > 20 && horas <= 720) {
//     somaPontos = 10 * pontos10 + 10 * pontos20 + (horas - 20) * pontos30;
//   } else {
//     console.log("Valor inválido.");
//   }
//   if (somaPontos > 0) {
//     let reaisGanhos = somaPontos * reaisPorPonto;
//     console.log(
//       "Você fez",
//       somaPontos,
//       "pontos e ganhou R$",
//       reaisGanhos.toFixed(2),
//       ".",
//     );
//   }
// }
// horasExercicios = 0;
// do {
//   horasExercicios = parseFloat(prompt("Digite as horas de exerícios do mês: "));
// } while (horasExercicios < 0 || horasExercicios > 720);
// exerciciosParaPontos(horasExercicios);

//*--------------------Exercicio 09--------------------

// const prompt = require("prompt-sync")();
// console.log("Salários por gênero\n");

// function salarioPorGenero() {
//   let somaSalarioMasculino = 0;
//   let somaSalarioFeminino = 0;
//   let contadorMasculino = 0;
//   let contadorFeminino = 0;
//   let mediaMasculino = 0;
//   let mediaFeminino = 0;
//   let genero = null;
//   let salario = 0;
//   let finalizar = null;
//   do {
//     salario = parseFloat(prompt("Digite o salário do(a) funcionário(a): "));
//     genero = prompt("Digite o gênero do(a) funcionário(a) [F] ou [M]: ");
//     finalizar = prompt("Deseja finalizar [S] ou [N]? ");
//     if ((genero == "M" || genero == "m") && salario > 0) {
//       somaSalarioMasculino += salario;
//       contadorMasculino += 1;
//     } else if ((genero == "F" || genero == "f") && salario > 0) {
//       somaSalarioFeminino += salario;
//       contadorFeminino += 1;
//     } else {
//       console.log("--Valores inválidos e desconsiderados.");
//     }
//     console.log("-----------------------------------------");
//   } while (finalizar != "S" && finalizar != "s");
//   if (contadorMasculino > 0) {
//     mediaMasculino = somaSalarioMasculino / contadorMasculino;
//   }
//   if (contadorFeminino > 0) {
//     mediaFeminino = somaSalarioFeminino / contadorFeminino;
//   }
//   console.log(
//     "\nSalário de funcionários do gênero masculino:\n- Soma: R$",
//     somaSalarioMasculino.toFixed(2),
//     "\n- Total funcionários:",
//     contadorMasculino,
//     "\n-  Média: R$",
//     mediaMasculino.toFixed(2),
//     "\nSalário de funcionários do gênero feminino:\n- Soma: R$",
//     somaSalarioFeminino.toFixed(2),
//     "\n- Total funcionárias:",
//     contadorFeminino,
//     "\n- Média: R$",
//     mediaFeminino.toFixed(2),
//   );
// }
// salarioPorGenero();

//*--------------------Exercicio 10--------------------

// const prompt = require("prompt-sync")();
// console.log("Soma, menor, média e pares\n");

// let numeroDigitado = 0;
// let somaNumeros = 0;
// let contadorNumeros = 0;
// let mediaNumeros = 0;
// let contadorPares = 0;
// let menorNumero = null;
// let continuar = null;
// do {
//   numeroDigitado = parseInt(prompt("Digite um número: "));
//   continuar = prompt("Deseja continuar [S] ou [N]? ");
//   if (numeroDigitado > 0 && !isNaN(numeroDigitado)) {
//     somaNumeros += numeroDigitado;
//     contadorNumeros += 1;
//     if (numeroDigitado % 2 == 0) {
//       contadorPares += 1;
//     }
//     if (menorNumero == null) {
//       menorNumero = numeroDigitado;
//     } else if (numeroDigitado < menorNumero) {
//       menorNumero = numeroDigitado;
//     }
//   } else {
//     console.log("Valor inválido e desconsiderado.");
//   }
// } while (continuar == "S" || continuar == "s");
// mediaNumeros = somaNumeros / contadorNumeros;
// console.log(
//   "----------------------------------\nSoma dos valores:",
//   somaNumeros,
//   "\nMédia dos valores:",
//   mediaNumeros,
//   "\nMenor valor:",
//   menorNumero,
//   "\nContagem de números pares:",
//   contadorPares,
// );

//*--------------------Exercicio 11--------------------

// const prompt = require("prompt-sync")();
// console.log("Progressão Aritmética\n");

// function progressaoAritmetica() {
//   let primeiroTermo = 0;
//   let razao = 0;
//   do {
//     primeiroTermo = parseFloat(prompt("Digite o valor do primeiro termo: "));
//     razao = parseFloat(prompt("Digite a razão: "));
//     console.log("--------------------------------");
//   } while (isNaN(primeiroTermo) || isNaN(razao));
//   let termoN = 0;
//   let somaPA = 0;
//   for (let n = 1; n <= 10; n++) {
//     termoN = primeiroTermo + (n - 1) * razao;
//     console.log("O " + n + "º termo é", termoN);
//     somaPA += termoN;
//   }
//   console.log("A soma dos termos acima é igual a", somaPA);
// }

// progressaoAritmetica();

//*--------------------Exercicio 12--------------------

// console.log("Sequencia de Fibonacci: 10 termos só com função");

// function fibonacci(numeroTermo) {
//   let termoN = 0;
//   if (numeroTermo > 0) {
//     for (let n = 1; n <= numeroTermo; n++) {
//       if (n == 1 || n == 2) {
//         termoN = 1;
//       } else if (n > 2) {
//         termoN = fibonacci(n - 1) + fibonacci(n - 2);
//       }
//     }
//     return termoN;
//   }
// }
// for (i = 1; i <= 10; i++) {
//   console.log(fibonacci(i));
// }

//*--------------------Exercicio 13--------------------

// console.log("Sequencia de Fibonacci - 15 termos com vetor");

// let sequenciaFibonacci = [];
// function fibonacci(numeroTermo) {
//   let termoN = 0;
//   if (numeroTermo > 0) {
//     for (let n = 1; n <= numeroTermo; n++) {
//       if (n == 1 || n == 2) {
//         termoN = 1;
//       } else if (n > 2) {
//         termoN = fibonacci(n - 1) + fibonacci(n - 2);
//       }
//       sequenciaFibonacci[n - 1] = termoN;
//     }
//     return termoN;
//   }
// }
// fibonacci(15);
// console.log(sequenciaFibonacci);

//*--------------------Exercicio 14--------------------

// const prompt = require("prompt-sync")();
// console.log("Lista de Nomes - Ordem invertida");

// let nomes = [];
// nomes.length = 7;
// for (let i = nomes.length; i > 0; i--) {
//   let nome = prompt("Digite um nome: ");
//   nomes[i - 1] = nome;
// }
// console.log(nomes);

//*--------------------Exercicio 15--------------------

// const prompt = require("prompt-sync")();
// console.log("Vetor de inteiros - quais são pares?");

// let numeros = [];
// let numero = 0;
// numeros.length = 10;
// for (let i = 0; i < numeros.length; i++) {
//   do {
//     console.log("Digite o número inteiro de posição", i, ":");
//     numero = parseInt(prompt());
//     if (isNaN(numero)) {
//       console.log("---Valor inválido. Digite novamente.");
//     }
//   } while (isNaN(numero));
//   numeros[i] = numero;
// }
// console.log("Números pares e sua posição (0 a", numeros.length - 1, "):");
// for (let j = 0; j < numeros.length; j++) {
//   if (numeros[j] % 2 == 0) {
//     console.log("Número", numeros[j], "na posição", j);
//   }
// }

//*--------------------Exercicio 16--------------------

// console.log("Ordenar em ordem crescente um vetor de 20 inteiros aleatórios");

// let vetorAleatorio = [];
// vetorAleatorio.length = 10;

// for (i = 0; i < vetorAleatorio.length; i++) {
//   vetorAleatorio[i] = Math.floor(Math.random() * 100);
// }
// console.log("Vetor aleatório:\n", vetorAleatorio);

// for (j = 0; j < vetorAleatorio.length; j++) {
//   //Posição do menor = 1º analisado para não deixar de comparar ningupem
//   let posicaoMenor = j;
//   //Comparar todos os elementos seguintes com o 1º, e trocar a posição guardada se encontrar um número menor
//   for (k = j + 1; k < vetorAleatorio.length; k++) {
//     if (vetorAleatorio[k] < vetorAleatorio[posicaoMenor]) {
//       posicaoMenor = k;
//     }
//   }
//   //Guardar o elemento j
//   let temp = vetorAleatorio[j];
//   //Na posição j colocar o menor elemento
//   vetorAleatorio[j] = vetorAleatorio[posicaoMenor];
//   //Onde estava o menor, colocar o elemento j
//   vetorAleatorio[posicaoMenor] = temp;
// }
// console.log("Vetor ordenado:\n", vetorAleatorio);

//*--------------------Exercicio 17--------------------

// const prompt = require("prompt-sync")();
// console.log("Cadastro Nome + Idade: Listar maiores de idade");
// let vetorNome = [];
// let vetorIdade = [];
// vetorNome.length = 9;

// for (let i = 0; i < vetorNome.length; i++) {
//   console.log("Dados da pessoa nº", i + 1);
//   do {
//     vetorNome[i] = prompt("- Digite o nome: ");
//     vetorIdade[i] = parseInt(prompt("- Digite a idade: "));
//     if (isNaN(vetorIdade[i])) {
//       console.log("Dados inválidos, Digite novamente.");
//     }
//   } while (isNaN(vetorIdade[i]));
// }
// console.log("----------------------------------\nPessoas maiores de idade:");
// for (let i = 0; i < vetorNome.length; i++) {
//   if (vetorIdade[i] >= 18) {
//     console.log(vetorNome[i], "-", vetorIdade[i], "anos");
//   }
// }

//*--------------------Exercicio 18--------------------

// console.log("Cadastro de funcionários");
// const prompt = require("prompt-sync")();

// const funcionario = {
//   nome: null,
//   cargo: null,
//   salario: 0.0,
// };

// console.log("Digite as informações do funcionário:");
// funcionario.nome = prompt("- Nome: ");
// funcionario.cargo = prompt("- Cargo: ");
// do {
//   funcionario.salario = parseFloat(prompt("- Salário (R$): "));
//   if (isNaN(funcionario.salario)) {
//     console.log("Salário inválido. Digite novamente.");
//   }
// } while (isNaN(funcionario.salario));

// console.log(funcionario);

//*--------------------Exercicio 19--------------------

// console.log("Validador de horários");
// const prompt = require("prompt-sync")();

// let horas = 0;
// let minutos = 0;
// let segundos = 0;
// let horarios = [];

// for (i = 0; i < 5; i++) {
//   console.log("Horário", i + 1, ":");
//   do {
//     horas = parseInt(prompt("- Digite as horas: "));
//     if (isNaN(horas) || horas < 0 || horas > 24) {
//       console.log("---Erro: tente novamente.");
//     }
//   } while (isNaN(horas) || horas < 0 || horas > 24);
//   do {
//     minutos = parseInt(prompt("- Digite os minutos: "));
//     if (isNaN(minutos) || minutos < 0 || minutos > 60) {
//       console.log("---Erro: tente novamente.");
//     }
//   } while (isNaN(minutos) || minutos < 0 || minutos > 60);

//   do {
//     segundos = parseInt(prompt("- Digite os segundos: "));
//     if (isNaN(segundos) || segundos < 0 || segundos > 60) {
//       console.log("---Erro: tente novamente.");
//     }
//   } while (isNaN(segundos) || segundos < 0 || segundos > 60);
//   horarios[i] = horas + "." + minutos + "." + segundos;
// }

// console.log("-------------------\nHorários validados [HH.MM.SS]: ");
// console.log(horarios);

//*--------------------Exercicio 20--------------------

// console.log("Folha mensal de uma indústria");
// const prompt = require("prompt-sync")();

// const funcionario = [];
// let numeroFuncionarios = 80;

// for (i = 0; i < numeroFuncionarios; i++) {
//   funcionario[i] = {
//     matricula: null,
//     nome: null,
//     salarioBruto: 0.0,
//   };
// }
// console.log("\n-----------Cadastro de funcionários-----------");
// for (i = 0; i < numeroFuncionarios; i++) {
//   console.log("\n-----Funcionário", i + 1, "-----");
//   funcionario[i].matricula = 1001 + i;
//   console.log("Número da matrícula:", funcionario[i].matricula);
//   funcionario[i].nome = prompt("Nome: ");
//   do {
//     funcionario[i].salarioBruto = parseFloat(prompt("Salário bruto: "));
//     if (isNaN(funcionario[i].salarioBruto)) {
//       console.log("Salário inválido. Tente novamente.");
//     }
//   } while (isNaN(funcionario[i].salarioBruto));
// }

// console.log("\n-------------Contracheque-------------");
// for (i = 0; i < numeroFuncionarios; i++) {
//   console.log("\n----- Funcionário", i + 1, "-----");
//   console.log("Matrícula: ", funcionario[i].matricula);
//   console.log("Nome: ", funcionario[i].nome);
//   console.log("Salário bruto: R$", funcionario[i].salarioBruto.toFixed(2));
//   let descontoINSS = funcionario[i].salarioBruto * 0.12;
//   let salarioLiquido = funcionario[i].salarioBruto - descontoINSS;
//   console.log("Desconto INSS: R$", descontoINSS.toFixed(2));
//   console.log("Salário líquido: R$", salarioLiquido.toFixed(2));
// }

//*--------------------Exercicio 21--------------------

// console.log("-----Peso Ideal-----\n");
// const prompt = require("prompt-sync")();

// function pesoIdeal(altura, sexo) {
//   if (sexo == "F" || sexo == "f") {
//     return 62.1 * altura - 44.7;
//   } else if (sexo == "M" || sexo == "m") {
//     return 72.7 * altura - 58;
//   } else {
//     return "Valor inválido";
//   }
// }
// let alt = 0;
// let sexo = null;
// do {
//   alt = parseFloat(prompt("Digite sua altura em metros: "));
// } while (isNaN(alt));
// do {
//   sexo = prompt("Digite seu gêner [M] ou [F]: ");
// } while (sexo != "M" && sexo != "F" && sexo != "m" && sexo != "f");

// console.log("\nSeu peso ideal é", pesoIdeal(alt, sexo), "kg.");

//*--------------------Exercicio 22--------------------

// console.log("-----Pesquisa de renda familiar-----\n");
// const prompt = require("prompt-sync")();

// function rendaFamiliar() {
//   let continuar = "s";
//   let salario = 0;
//   let numFilhos = 0;
//   let cont = 0;
//   let cont350 = 0;
//   let somaSalario = 0;
//   let somaFilhos = 0;
//   let maiorSalario = 0;
//   let mediaSalario = 0;
//   let mediaFilhos = 0;
//   let porcent350 = 0;
//   do {
//     console.log("Habitante nº", cont + 1);
//     do {
//       salario = parseFloat(prompt("- Salário: "));
//       if (isNaN(salario)) {
//         console.log("Valor inválido. Tente novamente.");
//       }
//     } while (isNaN(salario));

//     do {
//       numFilhos = parseInt(prompt("- Número de filhos: "));
//       if (isNaN(numFilhos)) {
//         console.log("Valor inválido. Tente novamente.");
//       }
//     } while (isNaN(numFilhos));
//     do {
//       continuar = prompt("- Deseja adicionar mais dados [S] ou [N]?");
//       if (
//         continuar != "S" &&
//         continuar != "s" &&
//         continuar != "N" &&
//         continuar != "n"
//       ) {
//         console.log("Resposta inválida. Tente novamente.");
//       }
//     } while (
//       continuar != "S" &&
//       continuar != "s" &&
//       continuar != "N" &&
//       continuar != "n"
//     );

//     if (salario > maiorSalario) {
//       maiorSalario = salario;
//     }
//     if (salario <= 350) {
//       cont350 += 1;
//     }
//     somaSalario += salario;
//     somaFilhos += numFilhos;
//     cont += 1;
//   } while (continuar == "s" || continuar == "S");

//   mediaSalario = somaSalario / cont;
//   mediaFilhos = somaFilhos / cont;
//   porcent350 = (cont350 / cont) * 100;

//   console.log(
//     "\nMédia de salário: R$ " +
//       mediaSalario.toFixed(2) +
//       "\nMédia do número de filhos: " +
//       mediaFilhos.toFixed(2) +
//       "\nMaior salário: R$" +
//       maiorSalario.toFixed(2) +
//       "\nPercentual de habitantes com salário até R$ 350,00: " +
//       porcent350.toFixed(2) +
//       "%"
//   );
// }
// rendaFamiliar();

//*--------------------Exercicio 23--------------------

// console.log("-----Matriz Identidade 7x7-----\n");

// function matrizIdentidade(tamanho) {
//   let matriz = Array();
//   for (let i = 0; i < tamanho; i++) {
//     matriz[i] = Array();
//     for (let j = 0; j < tamanho; j++) {
//       if (i == j) {
//         matriz[i][j] = 1;
//       } else {
//         matriz[i][j] = 0;
//       }
//     }
//   }
//   return matriz;
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "";
//     for (let j = 0; j < matriz.length; j++) {
//       linha += matriz[i][j] + " ";
//     }
//     console.log(linha);
//   }
// }

// imprimirMatriz(matrizIdentidade(7));

//*--------------------Exercicio 24--------------------

// console.log("-----Numeros negativos numa matriz 6x8-----\n");

// function gerarMatriz(numLin, numCol) {
//   let matriz = Array();
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = Array();
//     for (let j = 0; j < numCol; j++) {
//       if (Math.floor(Math.random() * 10) % 2 == 0) {
//         matriz[i][j] = Math.floor(Math.random() * 100);
//       } else {
//         matriz[i][j] = Math.floor(Math.random() * 100) * -1;
//       }
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(3, " ");
//   // Adiciona " " à esquerda se precisar ficar com 3 dig
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       linha += formatarNumero(matriz[i][j]) + " ";
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function vetorNegativosMatriz(matriz) {
//   let vetorNegativos = Array();
//   for (let i = 0; i < matriz.length; i++) {
//     vetorNegativos[i] = Array();
//     let contNegativos = 0;
//     for (let j = 0; j < matriz[i].length; j++) {
//       if (matriz[i][j] < 0) {
//         contNegativos += 1;
//       }
//     }
//     vetorNegativos[i][0] = contNegativos;
//   }
//   return vetorNegativos;
// }

// let matrizFinal = gerarMatriz(6, 8);

// console.log("Matriz gerada");
// imprimirMatriz(matrizFinal);

// console.log("Array com números negativos por linha:");
// imprimirMatriz(vetorNegativosMatriz(matrizFinal));

//*--------------------Exercicio 25--------------------

// console.log("-----Soma das colunas de uma matriz-----\n");

// function gerarMatriz(numLin, numCol) {
//   let matriz = Array();
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = Array();
//     for (let j = 0; j < numCol; j++) {
//       matriz[i][j] = Math.floor(Math.random() * 100);
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(3, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       linha += formatarNumero(matriz[i][j]) + " ";
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function imprimirArray(array) {
//   let linha = "| ";
//   for (let i = 0; i < array.length; i++) {
//     linha += formatarNumero(array[i]) + " ";
//   }
//   linha += "|";
//   console.log(linha);
// }

// function somarColunasMatriz(matriz) {
//   let somaColunaMatriz = [];
//   for (let j = 0; j < matriz[0].length; j++) {
//     let somaColuna = 0;
//     for (let i = 0; i < matriz.length; i++) {
//       somaColuna += matriz[i][j];
//     }
//     somaColunaMatriz[j] = somaColuna;
//   }

//   return somaColunaMatriz;
// }

// let matrizFinal = gerarMatriz(6, 8);

// console.log("Matriz gerada: ");
// imprimirMatriz(matrizFinal);

// console.log("Soma das colunas da matriz: ");
// imprimirArray(somarColunasMatriz(matrizFinal));

//*--------------------Exercicio 26--------------------

// console.log("-----Produto de duas matrizes-----\n");

// function gerarMatriz(numLin, numCol) {
//   let matriz = Array();
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = Array();
//     for (let j = 0; j < numCol; j++) {
//       matriz[i][j] = Math.floor(Math.random() * 10);
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(3, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       linha += formatarNumero(matriz[i][j]) + " ";
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function produtoMatriz(matrizA, matrizB) {
//   if (matrizA[0].length == matrizB.length) {
//     let matrizP = [];
//     // i = linhas P = linhas A
//     for (let i = 0; i < matrizA.length; i++) {
//       matrizP[i] = [];
//       for (let j = 0; j < matrizB[0].length; j++) {
//         let elemento = 0;
//         // j = columas P = colunas B
//         for (let k = 0; k < matrizA[0].length; k++) {
//           //k = nº col A = nº lin B
//           elemento += matrizA[i][k] * matrizB[k][j];
//         }
//         matrizP[i][j] = elemento;
//       }
//     }
//     return matrizP;
//   } else {
//     return "As matrizes não podem ser multiplicadas";
//   }
// }

// let matrizA = gerarMatriz(3, 5);
// console.log("Matriz A [3x5]: ");
// imprimirMatriz(matrizA);

// let matrizB = gerarMatriz(5, 3);
// console.log("Matriz B [5x3]: ");
// imprimirMatriz(matrizB);

// console.log("Produto entre as matrizes A e B [3x3]: ");
// imprimirMatriz(produtoMatriz(matrizA, matrizB));

//*--------------------Exercicio 27--------------------

// const prompt = require("prompt-sync")();
// console.log(
//   "-----Multiplicando matriz M com valor A e imprimir resultado em vetor-----\n"
// );

// function lerMatriz(numLin, numCol) {
//   let matriz = [];
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = [];
//     for (let j = 0; j < numCol; j++) {
//       let elemento = 0;
//       do {
//         console.log("Digite o elemento M[", i, "][", j, "]");
//         elemento = parseInt(prompt());
//         if (isNaN(elemento)) {
//           console.log("Valor inválido. Tente novamente.");
//         }
//       } while (isNaN(elemento));
//       matriz[i][j] = elemento;
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(3, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       linha += formatarNumero(matriz[i][j]) + " ";
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function imprimirArray(array) {
//   let linha = "| ";
//   for (let i = 0; i < array.length; i++) {
//     linha += formatarNumero(array[i]) + " ";
//   }
//   linha += "|";
//   console.log(linha);
// }

// function produtoMatrizNumero(matriz, num) {
//   let novaMatriz = [];
//   for (let i = 0; i < matriz.length; i++) {
//     novaMatriz[i] = [];
//     for (j = 0; j < matriz[0].length; j++) {
//       novaMatriz[i][j] = matriz[i][j] * num;
//     }
//   }
//   return novaMatriz;
// }

// function matrizParaVetor(matriz) {
//   let arrayMatriz = [];
//   let numLin = matriz.length;
//   let numCol = matriz[0].length;
//   let numElemento = 0;
//   for (let i = 0; i < numLin; i++) {
//     for (let j = 0; j < numCol; j++) {
//       arrayMatriz[numElemento] = matriz[i][j];
//       numElemento += 1;
//     }
//   }
//   return arrayMatriz;
// }

// let matrizM = lerMatriz(6, 6);
// console.log("Matriz M [6x6]: ");
// imprimirMatriz(matrizM);

// let num = 0;
// do {
//   num = parseInt(prompt("Digite um valor para A: "));
//   if (isNaN(num)) {
//     console.log("Valor inválido. Tente novamente.");
//   }
// } while (isNaN(num));
// console.log("Matriz M vezes nº A");
// imprimirMatriz(produtoMatrizNumero(matrizM, num));

// console.log("Matriz M x valor A em vetor: ");
// imprimirArray(matrizParaVetor(produtoMatrizNumero(matrizM, num)));

//*--------------------Exercicio 28--------------------

// console.log(
//   "-----Matriz 10x10 e a soma das diagonais acima e abaixo da principal-----\n"
// );

// function gerarMatriz(numLin, numCol) {
//   let matriz = Array();
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = Array();
//     for (let j = 0; j < numCol; j++) {
//       matriz[i][j] = Math.floor(Math.random() * 10);
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(2, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       linha += formatarNumero(matriz[i][j]) + " ";
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function somaDiagonalPrincipalAcima(matriz) {
//   let somaAcima = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     for (j = 0; j < matriz[0].length; j++) {
//       if (i + 1 == j) {
//         somaAcima += matriz[i][j];
//       }
//     }
//   }
//   return somaAcima;
// }

// function somaDiagonalPrincipalAbaixo(matriz) {
//   let somaAbaixo = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     for (j = 0; j < matriz[0].length; j++) {
//       if (i == j + 1) {
//         somaAbaixo += matriz[i][j];
//       }
//     }
//   }
//   return somaAbaixo;
// }

// let matrizM = gerarMatriz(10, 10);
// console.log("Matriz M [10x10]: ");
// imprimirMatriz(matrizM);

// console.log("Soma da diagonal acima da principal:");
// console.log(somaDiagonalPrincipalAcima(matrizM));

// console.log("Soma da diagonal abaixo da principal:");
// console.log(somaDiagonalPrincipalAbaixo(matrizM));

//*--------------------Exercicio 29--------------------

// console.log("-----Matriz 5x5 vetores com soma das linhas e das colunas-----\n");

// function gerarMatriz(numLin, numCol) {
//   let matriz = Array();
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = Array();
//     for (let j = 0; j < numCol; j++) {
//       matriz[i][j] = Math.floor(Math.random() * 10);
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(3, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       linha += formatarNumero(matriz[i][j]) + " ";
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function somarDiagonalPrincipal(matriz) {
//   let somaPrincipal = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     for (j = 0; j < matriz[0].length; j++) {
//       if (i == j) {
//         somaPrincipal += matriz[i][j];
//       }
//     }
//   }
//   return somaPrincipal;
// }
// function somarLinha(matriz, numLin) {
//   let somaLinha = 0;
//   for (j = 0; j < matriz[0].length; j++) {
//     somaLinha += matriz[numLin - 1][j];
//   }
//   return somaLinha;
// }

// function somarColuna(matriz, numCol) {
//   let somaColuna = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     somaColuna += matriz[i][numCol - 1];
//   }
//   return somaColuna;
// }

// function somarElementosMatriz(matriz) {
//   let somaElementos = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     for (j = 0; j < matriz[0].length; j++) {
//       somaElementos += matriz[i][j];
//     }
//   }
//   return somaElementos;
// }

// let matrizM = gerarMatriz(5, 5);
// console.log("Matriz M [5x5]: ");
// imprimirMatriz(matrizM);

// console.log("a) Soma da linha 4:");
// console.log(somarLinha(matrizM, 4));

// console.log("b) Soma da coluna 2:");
// console.log(somarColuna(matrizM, 2));

// console.log("c) Soma da diagonal principal:");
// console.log(somarDiagonalPrincipal(matrizM));

// console.log("d) Soma da coluna 2:");
// console.log(somarElementosMatriz(matrizM));

//*--------------------Exercicio 30--------------------

// const prompt = require("prompt-sync")();

// console.log("-----Matriz 5x5 e algumas somas-----\n");

// function lerMatriz(numLin, numCol) {
//   let matriz = [];
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = [];
//     for (let j = 0; j < numCol; j++) {
//       let elemento = 0;
//       do {
//         console.log("Digite o elemento M[", i, "][", j, "]");
//         elemento = parseInt(prompt());
//         if (isNaN(elemento)) {
//           console.log("Valor inválido. Tente novamente.");
//         }
//       } while (isNaN(elemento));
//       matriz[i][j] = elemento;
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(3, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       linha += formatarNumero(matriz[i][j]) + " ";
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function imprimirArray(array) {
//   let linha = "| ";
//   for (let i = 0; i < array.length; i++) {
//     linha += formatarNumero(array[i]) + " ";
//   }
//   linha += "|";
//   console.log(linha);
// }

// function somarColunasMatriz(matriz) {
//   let somaColunasMatriz = [];
//   for (let j = 0; j < matriz[0].length; j++) {
//     let somaColuna = 0;
//     for (let i = 0; i < matriz.length; i++) {
//       somaColuna += matriz[i][j];
//     }
//     somaColunasMatriz[j] = somaColuna;
//   }

//   return somaColunasMatriz;
// }
// function somarLinhasMatriz(matriz) {
//   let somaLinhasMatriz = [];
//   for (let i = 0; i < matriz.length; i++) {
//     let somaLinha = 0;
//     for (let j = 0; j < matriz[0].length; j++) {
//       somaLinha += matriz[i][j];
//     }
//     somaLinhasMatriz[i] = somaLinha;
//   }

//   return somaLinhasMatriz;
// }

// let matrizM = lerMatriz(5, 5);
// console.log("Matriz M [5x5]: ");
// imprimirMatriz(matrizM);

// console.log("Vetor SL: soma das linhas");
// imprimirArray(somarLinhasMatriz(matrizM));

// console.log("Vetor SC: soma das colunas");
// imprimirArray(somarColunasMatriz(matrizM));

//*--------------------Exercicio 31--------------------

// const prompt = require("prompt-sync")();

// console.log("-----Matriz 30x30 e valor A-----\n");

// function lerMatriz(numLin, numCol) {
//   let matriz = [];
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = [];
//     for (let j = 0; j < numCol; j++) {
//       let elemento = 0;
//       do {
//         console.log("Digite o elemento M[", i, "][", j, "]");
//         elemento = parseInt(prompt());
//         if (isNaN(elemento)) {
//           console.log("Valor inválido. Tente novamente.");
//         }
//       } while (isNaN(elemento));
//       matriz[i][j] = elemento;
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(3, " ");
//   // Adiciona " " à esquerda se precisar ficar com 2 dig
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       linha += formatarNumero(matriz[i][j]) + " ";
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function contarValorAMatriz(matriz, valorA) {
//   let contarValorA = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[0].length; j++) {
//       if (matriz[i][j] == valorA) {
//         contarValorA += 1;
//       }
//     }
//   }
//   return contarValorA;
// }

// function gerarMatrizSemValorA(matriz, valorA) {
//   for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[0].length; j++) {
//       if (matriz[i][j] == valorA) {
//         matriz[i].splice(j, 1);
//       }
//     }
//   }
//   return matriz;
// }

// let matrizM = lerMatriz(30, 30);
// console.log("Matriz M [30x30]: ");
// imprimirMatriz(matrizM);

// let valorA = 0;
// do {
//   valorA = parseInt(prompt("Digite um valor inteiro para A: "));
//   if (isNaN(valorA)) {
//     console.log("Valor inválido. Tente novamente!");
//   }
// } while (isNaN(valorA));

// console.log("Quantidade de elementos iguais a valor A:");
// console.log(contarValorAMatriz(matrizM, valorA));

// console.log("Matriz X: matriz M sem o valor A");
// imprimirMatriz(gerarMatrizSemValorA(matrizM, valorA));

//*--------------------Exercicio 32--------------------

// const prompt = require("prompt-sync")();

// console.log(
//   "-----Matriz 12x13 com linhas divididas pelo maior elemento da linha em módulo-----\n"
// );

// function lerMatriz(numLin, numCol) {
//   let matriz = [];
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = [];
//     for (let j = 0; j < numCol; j++) {
//       let elemento = 0;
//       do {
//         console.log("Digite o elemento M[", i, "][", j, "]");
//         elemento = parseInt(prompt());
//         if (isNaN(elemento)) {
//           console.log("Valor inválido. Tente novamente.");
//         }
//       } while (isNaN(elemento));
//       matriz[i][j] = elemento;
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(5, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       if (Math.abs(matriz[i][j]) >= 1 || Math.abs(matriz[i][j]) == 0) {
//         linha += formatarNumero(matriz[i][j]) + " ";
//       } else {
//         linha += formatarNumero(matriz[i][j].toFixed(2)) + " ";
//       }
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function dividirMaiorElementoLinha(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let maiorElementoLinha = Math.abs(matriz[i][0]);
//     for (let j = 0; j < matriz[0].length; j++) {
//       if (Math.abs(matriz[i][j]) > maiorElementoLinha) {
//         maiorElementoLinha = Math.abs(matriz[i][j]);
//       }
//     }
//     for (let j = 0; j < matriz[0].length; j++) {
//       matriz[i][j] = matriz[i][j] / maiorElementoLinha;
//     }
//   }
//   return matriz;
// }

// let matrizM = lerMatriz(12, 13);
// console.log("Matriz M [12x13]: ");
// imprimirMatriz(matrizM);

// console.log(
//   "Matriz com cada linha dividida pelo seu maior elemento em módulo:"
// );
// imprimirMatriz(dividirMaiorElementoLinha(matrizM));

//*--------------------Exercicio 33--------------------

// const prompt = require("prompt-sync")();

// console.log(
//   "\n-----Matriz 3x3 e sua diagonal principal multiplicada pela média da diagonal secundária-----\n"
// );

// function lerMatriz(numLin, numCol) {
//   let matriz = [];
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = [];
//     for (let j = 0; j < numCol; j++) {
//       let elemento = 0;
//       do {
//         console.log("Digite o elemento M[", i, "][", j, "]");
//         elemento = parseInt(prompt());
//         if (isNaN(elemento)) {
//           console.log("Valor inválido. Tente novamente.");
//         }
//       } while (isNaN(elemento));
//       matriz[i][j] = elemento;
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(4, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       if (Math.round(matriz[i][j]) == matriz[i][j]) {
//         linha += formatarNumero(matriz[i][j]) + " ";
//       } else {
//         linha += formatarNumero(matriz[i][j].toFixed(2)) + " ";
//       }
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function mediaDiagonalSecundaria(matriz) {
//   let somaDiagonalSecundaria = 0;
//   let numLin = matriz.length - 1;
//   let numCol = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     somaDiagonalSecundaria += matriz[numLin][numCol];
//     numLin -= 1;
//     numCol += 1;
//   }
//   let mediaDiagonalSecundaria = somaDiagonalSecundaria / matriz.length;
//   return mediaDiagonalSecundaria;
// }

// function dividirDiagonalPrincipal(matriz, num) {
//   for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[0].length; j++) {
//       if (i == j) {
//         matriz[i][j] = matriz[i][j] / num;
//       }
//     }
//   }
//   return matriz;
// }

// let matrizM = lerMatriz(3, 3);
// console.log("Matriz M [3x3]: ");
// imprimirMatriz(matrizM);

// let mediaDiagonalSec = mediaDiagonalSecundaria(matrizM);
// console.log(
//   "\nMédia da diagonal secundária: ",
//   mediaDiagonalSec.toFixed(2),
//   "\n"
// );

// console.log(
//   "Matriz M com sua diagonal principal dividida pela média da diagonal secundária:"
// );
// imprimirMatriz(dividirDiagonalPrincipal(matrizM, mediaDiagonalSec));

//*--------------------Exercicio 34--------------------

// const prompt = require("prompt-sync")();

// console.log(
//   "\n-----Matriz 50x50 e suas linhas divididas pelo seu elemento da diagonal principal-----\n"
// );

// function lerMatriz(numLin, numCol) {
//   let matriz = [];
//   for (let i = 0; i < numLin; i++) {
//     matriz[i] = [];
//     for (let j = 0; j < numCol; j++) {
//       let elemento = 0;
//       do {
//         console.log("Digite o elemento M[", i, "][", j, "]");
//         elemento = parseInt(prompt());
//         if (isNaN(elemento) || elemento == 0) {
//           console.log("Valor inválido. Tente novamente.");
//         }
//       } while (isNaN(elemento) || elemento == 0);
//       matriz[i][j] = elemento;
//     }
//   }
//   return matriz;
// }

// function formatarNumero(numero) {
//   return numero.toString().padStart(4, " ");
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let linha = "| ";
//     for (let j = 0; j < matriz[i].length; j++) {
//       if (Math.round(matriz[i][j]) == matriz[i][j]) {
//         linha += formatarNumero(matriz[i][j]) + " ";
//       } else {
//         linha += formatarNumero(matriz[i][j].toFixed(2)) + " ";
//       }
//     }
//     linha += "|";
//     console.log(linha);
//   }
// }

// function dividirLinhaElementoDiagonal(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let elementoDiagonal = matriz[i][i];
//     for (let j = 0; j < matriz[0].length; j++) {
//       matriz[i][j] = matriz[i][j] / elementoDiagonal;
//     }
//   }
//   return matriz;
// }

// let matrizM = lerMatriz(50, 50);
// console.log("Matriz M [50x50]: ");
// imprimirMatriz(matrizM);

// console.log(
//   "Matriz M com suas linhas divididas pelo seu elemento da diagonal principal: "
// );
// imprimirMatriz(dividirLinhaElementoDiagonal(matrizM));

//*--------------------Exercicio 35--------------------

// console.log("--Vetores de números pares e ímpares--");
// const prompt = require("prompt-sync")();

// let numeroValores = 30;
// let maxLength = 5;
// let arrayPar = Array(maxLength);
// let countPar = 0;
// let arrayImpar = Array(maxLength);
// let countImpar = 0;
// let num;

// for (let i = 0; i < numeroValores; i++) {
//   if (countPar == maxLength) {
//     console.log(
//       "---O vetor par está cheio: [" + arrayPar + "]\n---Reiniciando vetor..."
//     );
//     for (let j = 0; j < maxLength; j++) {
//       arrayPar[j] = null;
//     }
//     countPar = 0;
//   } else if (countImpar == maxLength) {
//     console.log(
//       "---O vetor ímpar está cheio: [" +
//         arrayImpar +
//         "]\n---Reiniciando vetor..."
//     );
//     for (let j = 0; j < maxLength; j++) {
//       arrayImpar[j] = null;
//     }
//     countImpar = 0;
//   }
//   do {
//     console.log("Digite o ", i + 1, "º número:");
//     num = parseInt(prompt());
//     if (isNaN(num)) {
//       console.log("Número inválido. Tente novamente.");
//     }
//   } while (isNaN(num));

//   if (num % 2 != 0) {
//     if (countImpar < maxLength) {
//       arrayImpar[countImpar] = num;
//       countImpar++;
//     } else {
//       arrayImpar[0] = num;
//       countImpar++;
//     }
//   } else if (num % 2 == 0) {
//     if (countPar < maxLength) {
//       arrayPar[countPar] = num;
//       countPar++;
//     } else {
//       arrayPar[0] = num;
//       countPar++;
//     }
//   }
// }
// console.log("---Vetor par final: [" + arrayPar + "]");
// console.log("---Vetor ímpar final: [" + arrayImpar + "]");

//*--------------------Exercicio 36--------------------

// console.log("--Loteria Esportiva--");
// const prompt = require("prompt-sync")();

// //? Definindo nº de apostas e nº de dezenas sorteadas
// let jogadas = [];
// let qtdApostas = 100;
// let qtdNumerosSorteados = 13;
// //! Obs: Foi testado com 10 apostas de 6 números. Acima disso fica muito lento.

// //?Função para gerar números aleatórios
// function gerarNumAleatorio(min, max) {
//   let num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return num;
// }

// //? Função para ordenar Array
// function ordenarArray(vetorAleatorio) {
//   for (j = 0; j < vetorAleatorio.length; j++) {
//     //Posição do menor = 1º analisado para não deixar de comparar ningupem
//     let posicaoMenor = j;
//     //Comparar todos os elementos seguintes com o 1º, e trocar a posição guardada se encontrar um número menor
//     for (k = j + 1; k < vetorAleatorio.length; k++) {
//       if (vetorAleatorio[k] < vetorAleatorio[posicaoMenor]) {
//         posicaoMenor = k;
//       }
//     }
//     //Guardar o elemento j
//     let temp = vetorAleatorio[j];
//     //Na posição j colocar o menor elemento
//     vetorAleatorio[j] = vetorAleatorio[posicaoMenor];
//     //Onde estava o menor, colocar o elemento j
//     vetorAleatorio[posicaoMenor] = temp;
//   }
//   return vetorAleatorio;
// }

// //? Função para gerar apostas
// function gerarAposta(qtdNum) {
//   let apostaLoteria = [];
//   let numeroAposta = 0;
//   for (let i = 0; i < qtdNum; i++) {
//     let incluir = true;
//     if (i == 0) {
//       numeroAposta = gerarNumAleatorio(1, 60);
//       apostaLoteria[0] = numeroAposta;
//     } else if (i > 0) {
//       do {
//         numeroAposta = gerarNumAleatorio(1, 60);
//         for (let j = 0; j < i; j++) {
//           if (apostaLoteria[j] == numeroAposta) {
//             incluir = false;
//             break;
//           }
//         }
//       } while (!incluir);
//       if (incluir) {
//         apostaLoteria[i] = numeroAposta;
//       }
//     }
//   }
//   return ordenarArray(apostaLoteria);
// }

// //? Gerar objetos com nº cartão + aposta
// for (let k = 0; k < qtdApostas; k++) {
//   let aposta = gerarAposta(qtdNumerosSorteados);
//   let numeroCartao = 1000 + k;
//   jogadas[k] = { id: numeroCartao, jogo: aposta };
// }
// for (let k = 0; k < qtdApostas; k++) {
//   console.log(jogadas[k]);
// }

// //? Ler gabarito (números sorteados)

// let numerosSorteados = [];
// let num;
// for (let n = 0; n < qtdNumerosSorteados; n++) {
//   let incluir = true;
//   do {
//     incluir = true;
//     num = parseInt(
//       prompt("Digite o " + (n + 1) + "º número sorteado na loteria [1 a 60]: ")
//     );
//     if (isNaN(num) || num < 1 || num > 100) {
//       console.log("Número inválido. Digite novamente.");
//       incluir = false;
//     } else {
//       for (let j = 0; j < n; j++) {
//         if (numerosSorteados[j] == num) {
//           incluir = false;
//           break;
//         }
//       }
//     }
//   } while (!incluir);
//   if (incluir) {
//     numerosSorteados[n] = num;
//   }
// }
// numerosSorteados = ordenarArray(numerosSorteados);
// console.log("O jogo sorteado é [" + numerosSorteados + "]");

// //? Comparar jogo sorteado com apostas
// let vitoria = false;
// let vencedor = null;
// for (let k = 0; k < qtdApostas; k++) {
//   let contadorAcertos = 0;
//   let jogoObjeto = jogadas[k].jogo;
//   let numeroCartao = jogadas[k].id;
//   for (let i = 0; i < qtdNumerosSorteados; i++) {
//     for (let j = 0; j < qtdNumerosSorteados; j++) {
//       if (jogoObjeto[i] == numerosSorteados[j]) {
//         contadorAcertos++;
//       }
//     }
//   }
//   if (contadorAcertos == qtdNumerosSorteados) {
//     console.log(
//       "Nº cartão: " +
//         numeroCartao +
//         " --- Jogo: [" +
//         jogoObjeto +
//         "] --- Nº acertos: " +
//         contadorAcertos +
//         " --- PARABÉNS! Você ganhou!"
//     );
//   } else {
//     console.log(
//       "Nº cartão: " +
//         numeroCartao +
//         " --- Jogo: [" +
//         jogoObjeto +
//         "] --- Nº acertos: " +
//         contadorAcertos
//     );
//   }
// }

//*--------------------Exercicio 37--------------------

// console.log("--Correção de Prova - Verdadeiro ou Falso--");
// console.log("---------Média para aprovação: 6.0---------");
// const prompt = require("prompt-sync")();

// //? Definindo nº de apostas e nº de dezenas sorteadas
// let gabarito = [];
// let qtdRespostas = 20;
// let qtdAlunos = 50;
// let mediaAprovacao = 6;

// //?Função para gerar respostas aleatórias [F ou V]
// function gerarResposta() {
//   let num = Math.floor(Math.random() * 10) + 1;
//   if (num % 2 == 0) {
//     return "V";
//   } else {
//     return "F";
//   }
// }
// // for (let i = 0; i < qtdRespostas; i++) {
// //   console.log(gerarResposta());
// // }

// //? Função para GERAR gabarito
// function gerarGabarito(qtdResp) {
//   let gabarito = [];
//   for (let i = 0; i < qtdResp; i++) {
//     gabarito[i] = gerarResposta();
//   }
//   return gabarito;
// }

// //? Função para LER gabarito
// function lerGabarito(qtdResp) {
//   let gabarito = [];
//   let resp;
//   for (let n = 0; n < qtdRespostas; n++) {
//     do {
//       console.log("Digite a resposta da questão " + (n + 1) + ": ");
//       resp = prompt();
//       if (resp == "v" || resp == "V" || resp == "F" || resp == "f") {
//         gabarito[n] = resp.toUpperCase();
//       } else {
//         console.log("Resposta inválida. Digite novamente.");
//       }
//     } while (resp != "v" && resp != "V" && resp != "F" && resp != "f");
//   }
//   return gabarito;
// }

// //? Ler gabarito Professor (números sorteados)
// console.log("---Gabarito do Professor---");
// let gabaritoProf = lerGabarito(qtdRespostas);
// console.log("Gabarito final: [" + gabaritoProf + "]");

// //? Gerar objetos com nº aluno + gabarito
// console.log("---Respostas dos Alunos---");
// let provas = { aluno: null, respostas: [] };
// for (let i = 0; i < qtdAlunos; i++) {
//   let numeroAluno = 1 + i;
//   console.log("---Aluno nº + " + numeroAluno + "---");
//   let gabarito = lerGabarito(qtdRespostas);
//   provas[i] = { aluno: numeroAluno, respostas: gabarito };
// }

// for (let k = 0; k < qtdAlunos; k++) {
//   console.log(provas[k]);
// }

// //? Comparar respostas dos alunos com gabarito final
// for (let k = 0; k < qtdAlunos; k++) {
//   let contadorAcertos = 0;
//   let notaAluno = 0;
//   let gabaritoAluno = provas[k].respostas;
//   let numeroAluno = provas[k].aluno;
//   for (let i = 0; i < qtdRespostas; i++) {
//     if (gabaritoProf[i] == gabaritoAluno[i]) {
//       contadorAcertos++;
//     }
//   }
//   notaAluno = (contadorAcertos / qtdRespostas) * 10;
//   if (notaAluno >= mediaAprovacao) {
//     console.log(
//       "Nº Aluno: " +
//         numeroAluno +
//         " --- Respostas: [" +
//         gabaritoAluno +
//         "] --- Nº acertos: " +
//         contadorAcertos +
//         " --- Nota: " +
//         notaAluno.toFixed(2) +
//         "--- APROVADO"
//     );
//   } else {
//     console.log(
//       "Nº Aluno: " +
//         numeroAluno +
//         " --- Respostas: [" +
//         gabaritoAluno +
//         "] --- Nº acertos: " +
//         contadorAcertos +
//         " --- Nota: " +
//         notaAluno.toFixed(2) +
//         "--- REPROVADO"
//     );
//   }
// }


//* -------------------Exercicio 38--------------------

// console.log("----Operações com vetores----");
// console.log("Operações disponíveis: \n1- soma dos elementos; \n2- produto dos elementos; \n3- média dos elementos;\n4- ordene os elementos em ordem crescente; \n5- mostre o vetor.")
// const prompt = require('prompt-sync')();

// //? Ler vetor 
// function lerVetor(numElementos){
//     let vetor = [];
//     let elemento;
//     for(let i = 0; i<numElementos;i++){
//         elemento=null;
//             do{
//             console.log("Digite o " + (i+1) +" número: ");
//             elemento = parseInt(prompt());
//             if(isNaN(elemento)){
//                 console.log("Valor inválido. Tente novamente.");
//             }
//             }while(isNaN(elemento));
//             vetor[i]=elemento;

//         }
//         return vetor;
//     }

// //?Ler Operação
// function lerOperacao(){
//     let operacao=null;
//     do{
//         console.log("Digite a operação desejada [1, 2, 3, 4 ou 5]: ");
//         operacao = parseInt(prompt());
//         if(operacao!=1 && operacao!=2 && operacao!=3 && operacao!=4 && operacao!=5){
//             console.log("Operação inválida. Tente novamente.");
//         }
//     }while(operacao!=1 && operacao!=2 && operacao!=3 && operacao!=4 && operacao!=5)
//     return operacao;
// }

// //? Aplicar operação no vetor
// function operacaoVetor(vetor, operacao){
//     let numElementos = vetor.length;
//     switch (operacao){
//         case 1: //soma
//             let soma=0;
//             for(let i=0; i<numElementos; i++){
//                 soma+=vetor[i];
//             }
//             return "A soma dos elementos é igual a " + soma;
//             break;
//         case 2: //produto
//             let produto=1;
//             for(let i=0; i<numElementos; i++){
//                 produto*=vetor[i];
//             }
//             return "O produto dos elementos é igual a " + produto;
//             break;
//         case 3: //média
//             let media=0;
//             let somaMedia = 0;
//             for(let i=0; i<numElementos; i++){
//                 somaMedia+=vetor[i];
//             }
//             media=somaMedia/numElementos;
//             return "A média dos elementos é igual a " + media.toFixed(2);
//             break;
//         case 4: //ordem crescente
//             let menorElemento=null;
//             for(let i = 0; i<numElementos; i++){
//                 menorElemento=vetor[i];
//                 for(let j = i+1; j<numElementos; j++){ 
//                     if(vetor[j] < menorElemento){
//                         let temporario = menorElemento;
//                         menorElemento=vetor[j];
//                         vetor[j] = temporario;
//                         vetor[i]=menorElemento;
//                     }
//                 }
//             }
//             return "O vetor com os elementos digitados em ordem crescente é ["+vetor +"]";
//             break;
//         case 5: //mostrar vetor
//             let texto = "[ ";
//             for(let j = 0; j<numElementos-1; j++){
//                 texto += vetor[j] + ", ";
//             }
//             return "O vetor com os elementos digitados é " + texto + vetor[numElementos-1] + "]";
//             break;

//         default:
//             return "Algo deu errado.";
//             break;

//     }
// }

// let vetor = lerVetor(6);
// let op = lerOperacao();
// console.log(operacaoVetor(vetor,op));

//* --------------------Exercicio 39-------------------

// console.log("Filtrando números nulos ou negativos de vetor");
// const prompt = require('prompt-sync')();

// //? Ler vetor
// function lerVetor(numElementos){
//     let vetorA = [];
//     let elemento;
//     for(let i = 0; i<numElementos;i++){
//         elemento=null;
//             do{
//             console.log("Digite o " + (i+1) +" número: ");
//             elemento = parseInt(prompt());
//             if(isNaN(elemento)){
//                 console.log("Valor inválido. Tente novamente.");
//             }
//             }while(isNaN(elemento));
//             vetorA[i]=elemento;
//         }
//         return vetorA;
//     }

// //?Filtrar números <0 do vetor
// function filtrarVetor(vetorA){
//     let vetorB=[];
//     for(let i =0; i<vetorA.length; i++){
//         if(vetorA[i]>0){
//             vetorB.push(vetorA[i]);
//         }
//     }
//     return vetorB;
// }

// console.log("----Vetor A----")
// let vetorA = lerVetor(100);
// console.log("----Vetor B----")
// console.log(filtrarVetor(vetorA));


//*--------------------Exercicio 40--------------------

// console.log("-------Loto Quina-------");
// const prompt = require("prompt-sync")();

// let qtdJogadas = 50;
// let qtdNumerosSorteados = 5;
//?Foi testado para 10 jogos com 5 números sortados. Mais que isso pode travar.

// function gerarNumAleatorio(min, max) {
//   let num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return num;
// }

// function ordenarArray(vetorAleatorio) {
//   for (j = 0; j < vetorAleatorio.length; j++) {
//     //Posição do menor = 1º analisado para não deixar de comparar ningupem
//     let posicaoMenor = j;
//     //Comparar todos os elementos seguintes com o 1º, e trocar a posição guardada se encontrar um número menor
//     for (k = j + 1; k < vetorAleatorio.length; k++) {
//       if (vetorAleatorio[k] < vetorAleatorio[posicaoMenor]) {
//         posicaoMenor = k;
//       }
//     }
//     //Guardar o elemento j
//     let temp = vetorAleatorio[j];
//     //Na posição j colocar o menor elemento
//     vetorAleatorio[j] = vetorAleatorio[posicaoMenor];
//     //Onde estava o menor, colocar o elemento j
//     vetorAleatorio[posicaoMenor] = temp;
//   }
//   return vetorAleatorio;
// }

// function gerarJogoLoteria(qtdNum,min,max) {
//   let jogoLoteria = [];
//   let numLoteria = 0;
//   for (let i = 0; i < qtdNum; i++) {
//     let incluir = true;
//     if (i == 0) {
//       numLoteria = gerarNumAleatorio(min, max);
//       jogoLoteria[0] = numLoteria;
//     } else if (i > 0) {
//       do {
//         numLoteria = gerarNumAleatorio(min, max);
//         for (let j = 0; j < i; j++) {
//           if (jogoLoteria[j] == numLoteria) {
//             incluir = false;
//             break;
//           }
//         }
//       } while (!incluir);
//       if (incluir) {
//         jogoLoteria[i] = numLoteria;
//       }
//     }
//   }
//   return ordenarArray(jogoLoteria);
// }


// let apostas = [];
// for (let k = 0; k < qtdJogadas; k++) {
//   let aposta = gerarJogoLoteria(qtdNumerosSorteados,1,60);
//   let idAposta = 1000+k;
//   apostas[k] = {id: idAposta, jogo: aposta};
// }
// for (let k = 0; k < qtdJogadas; k++) {
//   console.log(apostas[k]);
// }

// let numerosSorteados = [];
// let num;
// for (let n = 0; n < qtdNumerosSorteados; n++) {
//   let incluir = true;
//   do {
//     incluir = true;
//     num = parseInt(
//       prompt("Digite o " + (n + 1) + "º número sorteado na loteria: ")
//     );
//     if (isNaN(num) || num < 1 || num > 60) {
//       console.log("Número inválido. Digite novamente.");
//       incluir = false;
//     } else {
//       for (let j = 0; j < n; j++) {
//         if (numerosSorteados[j] == num) {
//           incluir = false;
//           break;
//         }
//       }
//     }
//   } while (!incluir);
//   if (incluir) {
//     numerosSorteados[n] = num;
//   }
// }
// numerosSorteados = ordenarArray(numerosSorteados);
// console.log("\n\nO jogo sorteado é [" + numerosSorteados + "]");
// console.log("\nResultado:");
// let vitoria = false;
// let vencedor = null;
// for (let k = 0; k < qtdJogadas; k++) {
//   let jogoObjeto = apostas[k].jogo;
//   //Comparar os jogos como Strings para facilitar
//   if (JSON.stringify(jogoObjeto) == JSON.stringify(numerosSorteados)) {
//     console.log(apostas[k], "GANHADOR!");

//   }else{
//     console.log(apostas[k]);
//   }
//   }


//* --------------------Exercicio 41---------------------

// console.log("\n----Manipulando o objeto Pessoa----");
// const prompt = require('prompt-sync')();

// const Pessoa = {
//     nome: null,
//     idade: null
// }

// Pessoa.nome="João";
// Pessoa.idade=29;
// console.log("Objeto pessoa:");
// console.log(Pessoa);

// console.log("Imprimindo idade do objeto pessoa: ");
// console.log(Pessoa.idade);

// console.log("Adicionando propriedade e-mail ao objeto pessoa: ");
// Pessoa.email = "teste@gmail.com"
// console.log(Pessoa);

//* -----------------Exercicio 42------------------------

// console.log("\n----Filtrando propriedades do tipo Array em um objeto----");

// const Livro = {
//     titulo: "O Gigante Enterrado",
//     autor: "Kazuo Ishiguro",
//     ano: 2015,
//     editora: "Companhia das Letras",
//     paginas: 400,
//     pais: "Inglaterra",
//     isbn: "978-8535925975",
//     avaliacao: 4.4,
//     genero: ["Romance", "Fantasia", "Literatura fantástica", "Ficção histórica", "Alta fantasia", "Ficção de aventura"]

// }

// function filtrarObjeto(objeto){
//     let objetoFiltrado = {};
//     for(propriedade in objeto){
//         if(Array.isArray(objeto[propriedade])){
//             objetoFiltrado[propriedade]=objeto[propriedade];
//         }
//     }
//     return objetoFiltrado;
// }
// console.log("Objeto original:");
// console.log(Livro);

// console.log("Objeto filtrado:");
// console.log(filtrarObjeto(Livro));


// console.log("Objeto só com propriedades do tipo Array: ");

//* -------------------Exercicio 43----------------------

// console.log("\n----Combinando dois objetos----");

// let ListaCompras1 = {
//     farmacia: ["remedio", 'escova'],
//     vestuario: ["meias"],
//      mercado: ["alface", "leite"],
//     ferragem: ['parafusos', "porcas"]    
// }

// let ListaCompras2 = {
//     farmacia: ["remedio", "escova", "creme"],
//     mercado: ["rucula", "queijo", "manteiga"],
//     ferragem: ["parafusos", "chaves"],
//     padaria: ["pão","bolo"]
//  }

//  let ListaComprasFinal = { ...ListaCompras1, ...ListaCompras2};
//  console.log("Objeto 1:")
//  console.log(ListaCompras1);
//  console.log("Objeto 2:")
//  console.log(ListaCompras2);
//  console.log("Combinação dos dois objetos, com precedência do Objeto 2 em caso de conflito:")
//  console.log(ListaComprasFinal);

//* --------------------Exercicio 44-------------------

// console.log("\n----Contando propriedades do tipo String em um objeto----");

// const Livro = {
//     titulo: "O Gigante Enterrado",
//     autor: "Kazuo Ishiguro",
//     ano: 2015,
//     editora: "Companhia das Letras",
//     paginas: 400,
//     pais: "Inglaterra",
//     isbn: "978-8535925975",
//     avaliacao: 4.4,
//     genero: "Literatura fantástica"
// }

// function isString(texto){
//     if(typeof texto === "string")
//         return true;
//     else
//         return false;
// }

// function filtrarPropriedadeString(objeto){
//     let objetoFiltrado={};
//     let contadorString=0;
//     for(propriedade in objeto){
//         if(isString(objeto[propriedade])){
//             objetoFiltrado[propriedade]=objeto[propriedade];
//             contadorString++;
//         }
//     }
//     objetoFiltrado.numeroStrings=contadorString;
//     return objetoFiltrado;
// }

// function contarPropriedadeString(objeto){
//     let contadorString=0;
//     for(propriedade in objeto){
//         if(isString(objeto[propriedade])){
//             contadorString++;
//         }
//     }
//     return contadorString;
// }

// console.log("Objeto original:");
// console.log(Livro);

// console.log("Nº de propriedades do tipo String:");
// console.log(contarPropriedadeString(Livro));

//* --------------------Exercicio 45-------------------


// console.log("\n----Transformando array em objeto----");

// let pedido = ["skate", "patins", "skate", "patins", "skate", "patins", "camiseta", "calca", "camiseta", "skate", "patinete", "skate", "camiseta", "skate", "calca", "skate", "patins", "skate", "patins", "patinete", "skate", "camiseta", "skate", "calca","skate", "patins", "skate", "patins", "patinete", "skate", "camiseta", "skate", "calca"];

// //Listando elementos diferentes do Array

// function listarElementosDiferentes(array){
//     let elementosDiferentes = [];
//     elementosDiferentes[0]=array[0];
//     let diferente;
//     for(let i=0; i<array.length; i++){
//         diferente = false;
//         for(let j=0; j< elementosDiferentes.length; j++){
//             if(array[i]==elementosDiferentes[j]){
//                 diferente = false;
//                 break;
//             }else{
//                 diferente = true;
//             }
//         }
//         if(diferente==true){
//             elementosDiferentes.push(array[i]);
//         }
//     }
//     return elementosDiferentes;
// }

// //Contar repetições de cada elemento diferente
// function contarRepeticao(arrayOriginal, arrayElementos){
//     let arrayContador=[];
//     let contador = null;
//     for(let i =0; i<arrayElementos.length;i++){
//         contador = 0;
//         for(let j = 0; j<arrayOriginal.length;j++){
//             if(arrayElementos[i]==arrayOriginal[j]){
//                 contador++;
//             }
//         }
//         arrayContador.push(contador);
//     }
//     return arrayContador;
// }

// //Criar objeto com elementos diferentes e seu nº de repetição

// function criarObjeto(arrayElementos, arrayContador){
//     let objeto = {};
//     for(let i=0; i<arrayElementos.length;i++){
//         objeto[arrayElementos[i]]=arrayContador[i];
//     }

//     return objeto;
// }

// console.log("Vetor original");
// console.log(pedido);

// console.log("Vetor de elementos diferentes no original:");
// let listaElementos = listarElementosDiferentes(pedido);
// console.log(listaElementos);

// console.log("Vetor do nº de repetições de cada elemento diferente no original:");
// let contador = contarRepeticao(pedido,listaElementos);
// console.log(contador);

// console.log("Objeto com elementos diferentes e nº de repetições");
// let objeto = criarObjeto(listaElementos,contador);
// console.log(objeto);

//* -------------------Exercicio 46--------------------

// console.log("\n----Sumarizar vendas em array de objetos----");

// //Listando vendedores diferentes

// function listarVendedores(array){
//     let vendedoresDiferentes = [];
//     vendedoresDiferentes[0]=array[0].vendedor;
//     let diferente;
//     for(let i=0; i<array.length; i++){
//         diferente = false;
//         for(let j=0; j< vendedoresDiferentes.length; j++){
//             if(array[i].vendedor==vendedoresDiferentes[j]){
//                 diferente = false;
//                 break;
//             }else{
//                 diferente = true;
//             }
//         }
//         if(diferente==true){
//             vendedoresDiferentes.push(array[i].vendedor);
//         }
//     }
//     return vendedoresDiferentes;
// }

// //Contar repetições de cada elemento diferente
// function somarVendasVendedor(arrayOriginal, arrayElementos){
//     let somaVendas=[];
//     let soma = null;
//     for(let i =0; i<arrayElementos.length;i++){
//         soma = 0;
//         for(let j = 0; j<arrayOriginal.length;j++){
//             if(arrayElementos[i]==arrayOriginal[j].vendedor){
//                 soma+=arrayOriginal[j].valor;
//             }
//         }
//         somaVendas.push(soma);
//     }
//     return somaVendas;
// }

// //Criar objeto com elementos diferentes e seu nº de repetição

// function criarObjeto(arrayVendedores, arraySoma){
//     let objeto = [];
//     for(let i=0; i<arrayVendedores.length;i++){
//         objeto[i]={vendedor: arrayVendedores[i], totalVendas:arraySoma[i]};
//     }

//     return objeto;
// }

// let Vendas = [
//     {
//         vendedor: "Marcos",
//         valor: 3989.90
//     },
//     {
//         vendedor: "Rodrigo",
//         valor: 4780.00
//     },
//     {
//         vendedor: "Gabriela",
//         valor: 8780.20
//     },
//     {
//         vendedor: "Amanda",
//         valor: 1287.30
//     },
//     {
//         vendedor: "Luis",
//         valor: 4480.80
//     },
//     {
//         vendedor: "Rebeca",
//         valor: 3180.60
//     },
//     {
//         vendedor: "Marcos",
//         valor: 3989.90
//     },
//     {
//         vendedor: "Rodrigo",
//         valor: 4780.00
//     },
//     {
//         vendedor: "Gabriela",
//         valor: 8780.20
//     },
//     {
//         vendedor: "Amanda",
//         valor: 1287.30
//     },
//     {
//         vendedor: "Luis",
//         valor: 4480.80
//     },
//     {
//         vendedor: "Rebeca",
//         valor: 3180.60
//     },
//     {
//         vendedor: "Rodrigo",
//         valor: 4780.00
//     },
//     {
//         vendedor: "Gabriela",
//         valor: 8780.20
//     },
//     {
//         vendedor: "Amanda",
//         valor: 1287.30
//     },
//     {
//         vendedor: "Luis",
//         valor: 4480.80
//     },
//     {
//         vendedor: "Rebeca",
//         valor: 3180.60
//     },
//     {
//         vendedor: "Gabriela",
//         valor: 8780.20
//     },
//     {
//         vendedor: "Amanda",
//         valor: 1287.30
//     },
//     {
//         vendedor: "Luis",
//         valor: 4480.80
//     },
//     {
//         vendedor: "Rafael",
//         valor: 9480.80
//     }
//     ]

// console.log("\nArray de objetos em que cada objeto representa uma venda com vendedor e valor:");
// console.log(Vendas);

// let vendedores = listarVendedores(Vendas);
// let soma = somarVendasVendedor(Vendas,vendedores);
// let objeto = criarObjeto(vendedores,soma);

// console.log("\nArray de objetos que sumariza o total de vendas por vendedor:");
// console.log(objeto);

//* -------------------Exercicio 47--------------------

// console.log("\n----Aplicar uma função para cada propriedade do objeto----");
// console.log("\nO gerente enlouqueceu! Liberado desconto de \n- 15% nos skates a partir de R$ 1500,00; \n- 20% nos patins a partir de R$ 2000,00; \n- 10% no vestuário a partir de R$ 500,00");


// function descontoSkates(array){
//     let fatorDesconto=(1-0.15);
//     let valorMinimoDesconto = 1500;
//     for(let i=0; i<array.length; i++){
//         if(array[i].skate >= valorMinimoDesconto){
//             array[i].skate*=fatorDesconto;
//         }
//     }
//     return array;
// }

// function descontoPatins(array){
//     let fatorDesconto=(1-0.2);
//     let valorMinimoDesconto = 2000;
//     for(let i=0; i<array.length; i++){
//         if(array[i].patins >= valorMinimoDesconto){
//             array[i].patins*=fatorDesconto;
//         }
//     }
//     return array;
// }

// function descontoVestuario(array){
//     let fatorDesconto=(1-0.1);
//     let valorMinimoDesconto = 500;
//     for(let i=0; i<array.length; i++){
//         if(array[i].vestuario >= valorMinimoDesconto){
//             array[i].vestuario*=fatorDesconto;
//         }
//     }
//     return array;
// }

// function calcularTotal(array){
//     for(let i=0; i<array.length; i++){
//         array[i].total=array[i].skate+array[i].patins+array[i].vestuario;
//     }
//     return array;
// }

// let Vendas = [
//     {
//         skate:1800.9,
//         patins:5009.7,
//         vestuario:1800.4,
//         total:8611
//         },
//         {
//         skate:1980.9,
//         patins:4508.7,
//         vestuario:2160.4,
//         total:8650
//         },
//         {
//         skate:1440.7,
//         patins:2524.2,
//         vestuario:1260.2,
//         total:5225.1
//         },
//         {
//         skate:1584.7,
//         patins:11271.8,
//         vestuario:1512.3,
//         total:14368.8
//         },
//         {
//         skate:1152.5,
//         patins:1310.6,
//         vestuario:882.1,
//         total:3345.2
//         },
//         {
//         skate:1267.8,
//         patins:2879.5,
//         vestuario:1058.6,
//         total:5205.9
//         },
//         {
//         skate:922,
//         patins:7876.5,
//         vestuario:617.5,
//         total:9416
//         },
//         {
//         skate:1014.2,
//         patins:7448.9,
//         vestuario:741,
//         total:9204.1
//         },
//         {
//         skate:737.6,
//         patins:1691.4,
//         vestuario:432.2,
//         total:2861.2
//         },
//         {
//         skate:811.4,
//         patins:7122.2,
//         vestuario:518.7,
//         total:8452.3
//         },
//         {
//         skate:590.1,
//         patins:4228.5,
//         vestuario:302.5,
//         total:5121.1
//         }
        
//     ]

//     console.log("\nArray de objetos, cada um representando uma venda com seu valor dividido em categorias:");
//     console.log(Vendas);

//     let vendas2 = descontoSkates(Vendas);
//     let vendas3 = descontoPatins(vendas2);
//     let vendas4 = descontoVestuario(vendas3);
//     let vendas5 = calcularTotal(vendas4);

//     console.log("\nArray de objetos com os descontos aplicados:");
//     console.log(vendas5);

//* -------------------Exercicio 48----------------------

// console.log("\n----Combinação entre dois objetos---");

// //The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it)(developer.mozilla.org/)
// function combinarObjetos(obj1,obj2){
//     let obj3 = {};
//     for(chave in obj1){
//         if(obj2.hasOwnProperty(chave)){ //se obj2 tem como propriedade a chave do obj1, somar as duas qtd pro obj3
//             obj3[chave] = obj1[chave] + obj2[chave];
//         }else{ //se obj2 não tem como propriedade a chave do obj1, só acrescentar chave do obj1 ao obj3
//             obj3[chave]=obj1[chave];
//         }    
//     }
//     for(chave in obj2){ //se obj1 não tem uma chave do obj2, adicionar chave do obj2 no obj3
//         if(!obj1.hasOwnProperty(chave)){
//             obj3[chave]=obj2[chave];
//         }
//     }
//     return obj3;
// }

// let inventarioLojaA = {
//     camisaM: 4,
//     camisaG: 1,
//     camisetaP: 40,
//     camisetaM: 60,
//     camisetaG: 40,
//     calcaP: 30,
//     calcaM: 30,
//     calcaG: 30,
//     casacoP: 10,
//     casacoM: 15,
//     casacoG: 10,
//     bolsa: 10,
//     bone: 15,
// }

// let inventarioLojaB = {
//     camisetaP: 10,
//     camisetaM: 20,
//     camisetaG: 20,
//     calcaP: 10,
//     calcaM: 15,
//     calcaG: 10,
//     casacoP: 7,
//     casacoM: 9,
//     casacoG: 5,
//     moletomP: 5,
//     moletomM: 7,
//     moletomG: 6,
//     cinto: 5,
// }

//     console.log("\nInventário da Loja A:");
//     console.log(inventarioLojaA);
//     console.log("\nInventário da Loja B:");
//     console.log(inventarioLojaB);
//     console.log("\nInventários combinados:");
//     console.log(combinarObjetos(inventarioLojaA,inventarioLojaB));

//* --------------------Exercicio 49-------------------


// console.log("\n----Alterando chave de objeto---");


// function listarCategorias(array){
//     let categorias = [];
//     categorias[0]=array[0].categoria;
//     let diferente;
//     for(let i=0; i<array.length; i++){
//         diferente = false;
//         for(let j=0; j< categorias.length; j++){
//             if(array[i].categoria==categorias[j]){
//                 diferente = false;
//                 break;
//             }else{
//                 diferente = true;
//             }
//         }
//         if(diferente==true){
//             categorias.push(array[i].categoria);
//         }
//     }
//     return categorias;
// }

// function objetoCategorias(transacoes,categorias){
//     let novo = {};
//     for(let i = 0; i<categorias.length; i++){
//         let somaValor=0;
//         let arrayValores=[];
//         for(let j = 0; j<transacoes.length;j++){
//             if(categorias[i]==transacoes[j].categoria){
//                 somaValor+=transacoes[j].valor;
//                 arrayValores.push(transacoes[j].valor);
//                 novo[categorias[i]]={valores:arrayValores, total: somaValor};
//             }
//         }
//     }        
//     return novo;
// }
    

// let transacoes = [
//     {
//     id:1,
//     valor:540.9,
//     data:"03/06/2024",
//     categoria:"transferenciaSaida",
//     },
//     {
//     id:2,
//     valor:811.35,
//     data:"03/06/2024",
//     categoria:"transferenciaEntrada",
//     },
//     {
//     id:3,
//     valor:1682.4,
//     data:"04/06/2024",
//     categoria:"pagamentoBoleto",
//     },
//     {
//     id:4,
//     valor:950.00,
//     data:"05/06/2024",
//     categoria:"deposito",
//     },
//     {
//     id:5,
//     valor:1345.9,
//     data:"05/06/2024",
//     categoria:"transferenciaSaida",
//     },
//     {
//     id:6,
//     valor:1160.00,
//     data:"07/06/2024",
//     categoria:"saque",
//     },
//     {
//     id:7,
//     valor:2018.8,
//     data:"07/06/2024",
//     categoria:"transferenciaEntrada",
//     },
//     {
//     id:8,
//     valor:1402.3,
//     data:"07/06/2024",
//     categoria:"transferenciaEntrada",
//     },
//     {
//     id:9,
//     valor:1121.6,
//     data:"10/06/2024",
//     categoria:"transferenciaSaida",
//     },
//     {
//     id:10,
//     valor:649.1,
//     data:"11/06/2024",
//     categoria:"transferenciaEntrada",
//     },
//     {
//     id:11,
//     valor:778.8,
//     data:"11/06/2024",
//     categoria:"pagamentoBoleto",
//     },
//     {
//     id:12,
//     valor:934.6,
//     data:"13/06/2024",
//     categoria:"transferenciaSaida",
//     },
//     {
//     id:13,
//     valor:1615.00,
//     data:"13/06/2024",
//     categoria:"deposito",
//     },
//     {
//     id:14,
//     valor:1682.4,
//     data:"13/06/2024",
//     categoria:"pagamentoBoleto",
//     },
//     {
//     id:15,
//     valor:950.00,
//     data:"14/06/2024",
//     categoria:"deposito",
//     },
//     {
//     id:16,
//     valor:1345.9,
//     data:"14/06/2024",
//     categoria:"transferenciaSaida",
//     },
//     {
//     id:17,
//     valor:1100.00,
//     data:"17/06/2024",
//     categoria:"saque",
//     },
//     {
//     id:18,
//     valor:2018.8,
//     data:"17/06/2024",
//     categoria:"transferenciaEntrada",
//     },
//     {
//     id:19,
//     valor:1402.3,
//     data:"17/06/2024",
//     categoria:"transferenciaEntrada",
//     },
//     {
//     id:20,
//     valor:1121.6,
//     data:"17/06/2024",
//     categoria:"transferenciaSaida",
//     },
//     {
//     id:21,
//     valor:649.1,
//     data:"18/06/2024",
//     categoria:"transferenciaEntrada",
//     },
//     {
//     id:22,
//     valor:778.8,
//     data:"18/06/2024",
//     categoria:"pagamentoBoleto",
//     },
//     {
//     id:23,
//     valor:934.6,
//     data:"19/06/2024",
//     categoria:"transferenciaSaida",
//     },
//     {
//     id:24,
//     valor:600.00,
//     data:"19/06/2024",
//     categoria:"deposito",
//     }
// ]    

//     console.log("Array de objetos de transações:");
//     console.log(transacoes);
 
//     let categorias = listarCategorias(transacoes);
   
//     console.log("\nObjeto com categorias de transações, valores e totais: ");
//     console.log(objetoCategorias(transacoes,categorias));

//* --------------------Exercicio 50-------------------

// const prompt = require('prompt-sync')();
// console.log("\n--------Gerenciador de Hoteis--------");

// const Hotel = [{
//     id: 101,
//     nome: "Bella Serra",
//     cidade: "Canela",
//     quartosTotais:20,
//     quartosDisponiveis: 4,
// },
// {
//     id: 102,
//     nome: "Serra Verde",
//     cidade: "Gramado",
//     quartosTotais: 52,
//     quartosDisponiveis: 7,
// },
// {
//     id: 103,
//     nome: "Grande Hotel",
//     cidade: "Gramado",
//     quartosTotais: 61,
//     quartosDisponiveis: 5,
// }]

// const Reserva = [{
//     idInterno:1,
//     idReserva: 101001,
//     idHotel: 101,
//     nomeCliente: "Ana",
// },
// {
//     idInterno:2,
//     idReserva: 101002,
//     idHotel: 102,
//     nomeCliente: "Pedro",
// },
// {
//     idInterno:3,
//     idReserva: 101003,
//     idHotel: 101,
//     nomeCliente: "Luiza",
// },
// ]

// console.log(Hotel[1].cidade);
// function adicionarHotel(){
//     //Permitir que o usuário adicione novos hotéis ao sistema.
//     console.log("\n-----Cadastro de Hotéis-----");
//     let idHotel = Hotel[Hotel.length-1].id + 1;
//     let nomeHotel=prompt("Nome do hotel: ");
//     let cidadeHotel=prompt("Cidade: ");
//     let quartosTot=parseInt(prompt("Número de quartos totais: "));
//     let quartosFree=parseInt(prompt("Número de quartos disponpíveis: "));
//     let novoHotel = {id: idHotel, nome: nomeHotel, cidade: cidadeHotel, quartosTotais: quartosTot, quartosDisponiveis: quartosFree};
//     console.log(novoHotel);
//     Hotel.push(novoHotel);
//     return Hotel;
// }

// function buscarHotelCidade(){
//     let contador = 0;
//     let cidade = prompt("Digite o nome da cidade: ");
//     //Permitir que o usuário liste todos os hotéis     disponíveis em uma cidade específica
//     for(let i = 0; i<Hotel.length; i++){
//         if(Hotel[i].cidade === cidade){
//             console.log(Hotel[i].nome);
//             contador++;
//         }
//     }    
//     if(contador==0){
//         console.log("Não foram localizados hoteis na cidade buscada.");
//     }
// }

// function fazerReserva(){
//     //Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
//     //Um hotel só pode aceitar reservas se houver quartos disponíveis
//     // As reservas devem ser identificadas por um ID único e associadas a um único hotel.
//     console.log("\n-----Fazer Reserva-----");
//     console.log("Hoteis disponíveis para reserva:")
//     let contador = 0;
//     for(let i =0; i<Hotel.length; i++){
//         if(Hotel[i].quartosDisponiveis>0){
//             console.log("- " + Hotel[i].id + " " + Hotel[i].nome);
//             contador++;
//         }
//     }
//     if(contador>0){
//         let idHotel = parseInt(prompt("\nDigite o ID do Hotel: "));
//         let nomeReserv = prompt("Digite seu nome: ");
//         let idInt = Reserva[Reserva.length-1].idInterno + 1
//         let idReserv = idHotel + "00" + idInt;
//         let novaReserva = {idInterno: idInt, idReserva: idReserv, idHotel: idHotel, nomeCliente: nomeReserv };
//         Reserva.push(novaReserva);
//         let nomeHotel;
//         for(let i = 0; i<Hotel.length; i++){
//             if(Hotel[i].id==idHotel){
//                 Hotel[i].quartosDisponiveis-=1;
//                 nomeHotel=Hotel[i].nome;
//             }
//         }
//         console.log("\nReserva realizada! Confira os dados abaixo:" + "\nID Reserva: " + idReserv + "\nHotel: " + nomeHotel + "\nReserva no nome de: " + nomeReserv);
//     }
//     if(contador==0){
//         console.log("Não há Hoteis disponíveis no momento");
//     }
// }

// function cancelarReserva(){
//     let idReservaCancelada=parseInt(prompt("Digite o ID da reserva a ser cancelada: "));
//     let idHotelCancelado;
//     for(let i =0; i<Reserva.length; i++){
//         if(Reserva[i].idReserva==idReservaCancelada){
//             Reserva[i].nomeCliente="CANCELADO";
//             idHotelCancelado = Reserva[i].idHotel;
//             Reserva[i].idHotel=0;
//             Reserva[i].idReserva=0;
//         }
//     }
//     for(let j = 0; j<Hotel.length;j++){
//         if(Hotel[j].id==idHotelCancelado){
//             Hotel[j].quartosDisponiveis+=1;
//         }
//     }
//     console.log("Reserva cancelada com sucesso.");
//     //Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente
// }

// function listarReservas(){
//     // Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
//     console.log("\nHoteis cadastrados:");
//     console.log(Hotel);
//     console.log("\nReservas realizadas:");
//     console.log(Reserva);

// }

// let continuar;
// do{
//     console.log("Menu de opções\n[1]Cadastrar Hotel;\n[2]Buscar Hotel por Cidade;\n[3]Fazer Reserva;\n[4]Cancelar Reserva\n[5]Listar Informações\n[6]Sair");
//     let opcao;
//     do{
//         opcao = parseInt(prompt("Digite sua opção: "));
//         if(opcao!=1 && opcao!=2&& opcao!=3&& opcao!=4&& opcao!=5 && opcao!=6){
//             console.log("Opção inválida. Tente novamente");
//         }
//     }while(opcao!=1 && opcao!=2&& opcao!=3&& opcao!=4&& opcao!=5 && opcao!=6);

//     switch(opcao){
//         case 1: 
//             adicionarHotel();
//             console.log(Hotel);
//             break;
//         case 2:
//             buscarHotelCidade();
//             break;
//         case 3:
//             fazerReserva();
//             console.log(Reserva);
//             break;
//         case 4:
//             cancelarReserva();
//             break;
//         case 5:
//             listarReservas();
//             break;
//         case 6:   
//     }
//     console.log("\n");
//     continuar=prompt("Deseja realizar outra operação [S] ou [N]?");
//     if(continuar!='s' && continuar!='S'){
//         console.log("Agradecemos pela preferência. Volte sempre!");
//     }
// }while(continuar=='s' || continuar=='S');


