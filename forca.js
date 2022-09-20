let table = document.getElementById('forca').getContext('2d');
let words = [
  'ALURA', 
  'FORCA', 
  'HTML', 
  'ORACLE', 
  'JAVASCRIPT', 
  'LOGICA', 
  'PROGRAMA', 
  'DESAFIO'
];
let secretWord = "";

function chooseSecretWord() {
  let word = words[Math.floor(Math.random() * words.length)];
  secretWord = word;
  console.log(word);
  return word;
};

function iniciaJogo() {
  document.getElementById("div-desaparece").style.display = 'none';
  chooseSecretWord();
  drawCanvas();
  drawLines();
};