// let date = new Date()
// console.log(date.getHours(),":",date.getMinutes())


// CONDICAO
// let numero = 10
// console.log(numero % 2 == 0)


// CONCATENACAO STRING
// let nome = 'Eu'
// let sobrenome = 'Eu de novo'
// let nomecompleto = `${nome} lalal ${sobrenome}`
// console.log(nomecompleto)

// console.log(!!'teste')


// FUNCOES
// function teste () {}
// var teste = function () {};
// var teste = () >= {};

// function teste(){
// 	this.teste = 0;
// 	console.log(this.teste);
// 	this.funcao = () => {
// 		console.log(this.teste); // heranca, esse this é o mesmo this
// 								// do pai
// 	}
// }

// function teste ({ sobrenome }){
// 	console.log(sobrenome);
// }

// function teste(valor){
// 	valor = valor || 'teste'; // default 'teste'
// 	console.log(valor);
// }

// teste();

// let sobrenome = {'sobrenome' : 'Carvalho'}
// teste(sobrenome);

// let numero = 11;


// CONDICOES
// if (numero === 10) {	
// 	console.log("É 10")	
// } else{
// 	console.log("Não é 10")
// }

// if (typeof teste === 'number'){
// 	console.log('OI')
// } else if (typeof teste === 'string') {
// 	console.log('Tchau')
// } else {
// 	console.log('Adeus')
// }


// ARRAY
// function manipulaArray(array) {
// 	// body...
// 	let newArray = [...array];
// 	newArray.push(); //adiciona no fim do array
//  newArray.shift(); //remove o primeiro item do array
//  newArray.unshift(); //adiciona no inicio do array
//  newArray.pop(); //remove o ultimo item do array
//  newArray.splice(); //remove com base no range especificado
//  newArray.concat(); //concatena o array especificado dentro de newArray
//  newArray.reverse(); //inverte o array
// 	return newArray
// }

// let novoArray = ['mesas', 'caderias'];

// let array = manipulaArray(novoArray);
// console.log(array)


// FOR
// for (i=0; i<10; i++){
// 	console.log(i);
// }

// for (var item in novoArray){
// 	console.log(item); //retorna o indice do array
// }

// for (var item of novoArray){
// 	console.log(item); //retorna o valor do array
// }


// WHILE
// var i=0;
// while (i<10){
// 	console.log('oi');
// 	i++;
// }

// var i=0;
// do {
// 	console.log('oi');
// 	i++;
// } while (i<10);


// novoArray.forEach(({nome}) => {
// 	console.log(nome);
// });

// const { nome } = novoArray.find(({idade}) => idade >= 24);
// console.log(nome)
