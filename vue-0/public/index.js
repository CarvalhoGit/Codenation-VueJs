const input = document.querySelector('#input-frase');
const botao = document.querySelector('#apagar');
const tbody = document.querySelector("tbody");

var frases = JSON.parse(localStorage.getItem('frases')) || [];

botao.onclick = apagar;
input.onkeydown = add;

renderizar(frases);

function renderizar(frases) {
	tbody.innerHTML = '';
  for (frase of frases) {
    let tr = document.createElement('tr');
    let td_frase = document.createElement('td');
    let td_validacao = document.createElement('td');
    tr.setAttribute('class', 'my-column conteudo');
    td_frase.textContent = frase;
    tr.appendChild(td_frase);
  	if (isPalindrome(frase)) {
  		td_validacao.setAttribute('data-verificado', 'positivo');
	    td_validacao.textContent = 'Sim';
	    td_validacao.style.color = "green";
  	} else {
  		td_validacao.setAttribute('data-verificado', 'negativo');	    
	    td_validacao.textContent = 'Não';
	    td_validacao.style.color = "red";
  	}  	
	tr.appendChild(td_validacao);
	tbody.insertBefore(tr, tbody.childNodes[0]);
  }};

function add(e) {
	let key = e.which || e.keyCode;
	let frase = input.value.trim();
	if (key == 13 && frase) {
		frases.push(input.value);
		input.value = "";
		renderizar(frases);
		save();
	}
}
	
function apagar() {	
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}
	return localStorage.removeItem('frases') || [];
};

function save() {
	return localStorage.setItem('frases', JSON.stringify(frases));
}

function invertedWord(arg1) {
    let array = arg1.replace( /\s/g, "").split("");
    let invertedArray = array.reverse();
    let invertedString = invertedArray.join("");
    return invertedString;
};

function isPalindrome(arg1) {
    let arg2 = arg1.toLowerCase().replace( /\s/g, "");
    return invertedWord(arg2) == arg2 && arg2;
};
