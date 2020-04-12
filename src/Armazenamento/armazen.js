import {armazen} from './Aperuntas'

export var per = [],
  alternativa1 = [],
  alternativa2 = [],
  alternativa3 = [],
  alternativa4 = [],
  resposta = [],
  dificuldade = [];
export var entrei;
var a,b = [];
export function newvalues() {
    entrei = 0;
  //sorteio das perguntas
  for (var i = 0; b.length < 10; i++) {
    a = Math.round(Math.random() *((armazen.length)-1));
    const found = b.find((element) => element == a);
    if (found === undefined) {
      b.push(a);
    }
  }
  //passando as perguntas para as coisas certas
  //e enbaralhando as alternativas
  for (var i = 0; i < 10; i++) {
    per[i] = armazen[b[i]].pergunta;
    resposta[i] = armazen[b[i]].resposta;
    dificuldade[i] = armazen[b[i]].dificuldade;
    //sortear onde estão as respostas
    a = Math.round(Math.random() * 3) + 1;
    switch (a) {
      case 1:
        alternativa1[i] = armazen[b[i]].resposta;
        alternativa2[i] = armazen[b[i]].alternativa1;
        alternativa3[i] = armazen[b[i]].alternativa2;
        alternativa4[i] = armazen[b[i]].alternativa3;
        break;
      case 2:
        alternativa2[i] = armazen[b[i]].resposta;
        alternativa1[i] = armazen[b[i]].alternativa1;
        alternativa3[i] = armazen[b[i]].alternativa2;
        alternativa4[i] = armazen[b[i]].alternativa3;
        break;
      case 3:
        alternativa3[i] = armazen[b[i]].resposta;
        alternativa2[i] = armazen[b[i]].alternativa1;
        alternativa1[i] = armazen[b[i]].alternativa2;
        alternativa4[i] = armazen[b[i]].alternativa3;
        break;
      case 4:
        alternativa4[i] = armazen[b[i]].resposta;
        alternativa2[i] = armazen[b[i]].alternativa1;
        alternativa3[i] = armazen[b[i]].alternativa2;
        alternativa1[i] = armazen[b[i]].alternativa3;
    }
  }
  entrei = 1;
 // alert("Vamos começar");
//   console.log(
//     per.length,
//     alternativa1.length,
//     alternativa2.length,
//     alternativa3.length,
//     alternativa4.length,
//     resposta.length,
//     dificuldade.length
//   );
}
