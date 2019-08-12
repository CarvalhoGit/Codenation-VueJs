const input = document.getElementById('input-frase');
input.addEventListener('keydown', function validar(e){
  let key = e.which || e.keyCode;
  let frase = this.value;  
  if (key == 13 && frase.replace( /\s/g, "")){
  	input.value = "";
  	let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    let td_frase = document.createElement('td');
    let td_validacao = document.createElement('td');
    tr.setAttribute('class', 'my-column conteudo');
    td_frase.textContent = frase;
    tr.appendChild(td_frase);
  	if (isPalindrome(frase)) {
  		td_validacao.setAttribute('data-verificado', 'positivo');
	    td_validacao.textContent = 'Sim'
	    td_validacao.style.color = "green";
  	} else {
  		td_validacao.setAttribute('data-verificado', 'negativo');	    
	    td_validacao.textContent = 'Não';
	    td_validacao.style.color = "red";
  	}  	
  	tr.appendChild(td_validacao);
  	return tbody.insertBefore(tr, tbody.childNodes[0]);
  }});

const botao = document.getElementById("apagar");
botao.addEventListener('click', function apagar(e){
	let conteudo = document.getElementsByClassName("conteudo");
	while (conteudo[0]) {
		conteudo[0].remove();
	}
	return conteudo;
})

function invertedWord(arg1){
    let array = arg1.replace( /\s/g, "").split("");
    let invertedArray = array.reverse();
    let invertedString = invertedArray.join("");
    return invertedString;
};

function isPalindrome(arg1){
    let arg2 = arg1.toLowerCase().replace( /\s/g, "");
    return invertedWord(arg2) == arg2 && arg2;
};