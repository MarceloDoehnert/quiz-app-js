let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 //pontos para o placar
let placar = 0 //placar 

//PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

//article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas 
let alternativas = document.querySelector('#alternativas')

const q0 = {
  numQuestao: 0,
  pergunta: 'Pergunta',
  alternativaA: 'Alternativa A',
  alternativaB: 'Alternativa B',
  alternativaC: 'Alternativa C',
  correta: '0',
}

const q1 = {
  numQuestao: 1,
  pergunta: 'De onde é a invenção do chuveiro elétrico?',
  alternativaA: 'França',
  alternativaB: 'Inglaterra',
  alternativaC: 'Brasil',
  correta: 'Brasil',
}

const q2 = {
  numQuestao: 2,
  pergunta: 'Quais o menor e o maior país do mundo?',
  alternativaA: 'Vaticano e Rússia',
  alternativaB: 'Mônaco e Canadá',
  alternativaC: 'São Marino e Índia',
  correta: 'Vaticano e Rússia',
}

const q3 = {
  numQuestao: 3,
  pergunta: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
  alternativaA: 'O Senhor dos Anéis',
  alternativaB: 'Dom Quixote',
  alternativaC: 'O Pequeno Príncipe',
  correta: 'Dom Quixote',
}

const q4 = {
  numQuestao: 4,
  pergunta: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
  alternativaA: '12 minutos',
  alternativaB: '8 minutos',
  alternativaC: 'segundos',
  correta: '8 minutos',
}

const q5 = {
  numQuestao: 5,
  pergunta: 'Qual o maior animal terrestre?',
  alternativaA: 'Girafa',
  alternativaB: 'Dinossauro',
  alternativaC: 'Elefante africano',
  correta: 'Elefante africano',
}

//CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES

const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalQuestoes = (questoes.length)-1
console.log('Total de questões' + totalQuestoes)
total.textContent = totalQuestoes

//MONTAR A 1a QUESTAO COMPLETA, para iniciar o quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

//CONFIGURA O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

//PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao
  numQuestao.textContent = questoes[nQuestao].numQuestao
  pergunta.textContent = questoes[nQuestao].pergunta
  a.textContent = questoes[nQuestao].alternativaA
  b.textContent = questoes[nQuestao].alternativaB
  c.textContent = questoes[nQuestao].alternativaC
  a.setAttribute('value', nQuestao+'A')
  b.setAttribute('value', nQuestao+'B')
  c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativa() {
  a.classList.add('bloqueado')
  b.classList.add('bloqueado')
  c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
  a.classList.remove('bloqueado')
  b.classList.remove('bloqueado')
  c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

  let numeroDaQuestao = nQuestao.value
  console.log('Questão' + numeroDaQuestao)

  let respostaEscolhida = resposta.textContent
  console.log('RespU' + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta
  console.log('RespC' + certa)

  if(respostaEscolhida == certa) {

    pontos += 10
  } else {

  }

  //atualizar placar
  placar = pontos
  instrucoes.textContent = 'Pontos ' + placar

  //bloquear a escolha de opções

  bloquearAlternativa()

  setTimeout(function () {
    proxima = numeroDaQuestao+1

    if(proxima > totalQuestoes) {

      fimDoJogo()
    } else {

      proximaQuestao(proxima)
    }
  })
}

function fimDoJogo() {
  instrucoes.textContent = 'Fim de Jogo!'
  numQuestao.textContent = ''

  let pont = ''
  pontos == 0 ? pont = ' ponto' : pont = ' pontos'

  pergunta.textContent = 'Você conseguiu ' + pontos + '' + pont

  aviso.textContent = 'Você conseguiu ' + pontos + '' + pont

  a.textContent = ''
  b.textContent = ''
  c.textContent = ''

  a.setAttribute('value', '0')
  b.setAttribute('value', '0')
  c.setAttribute('value', '0')

  //OCULTAR O ARTICLE DA QUESTAO

  articleQuestoes.style.display = 'none'

  setTimeout(function() {
    pontos = 0 //zerar placar
    location.reload()
  }, 4000)
}