	let app = new Vue({
	el: "#app",
	data: {
		title: "Verificador de Palíndromo",
		button: {
			title: "Apagar histórico",
			class: "btn btn-primary",
		},
		input: {
			placeholder: "Palíndromo",
			style: {
				'width': "100%",
				'text-align': "center",
			}
		},
		columns: ['Frases', 'Palíndromo'],
		rows: [
		['Arara', 'Sim'],
		['Teste', 'Não'],
		]
	},
	components: {Table},
	template: `
	<div class="container">
		<hr>
		<div class="d-flex justify-content-between align-items-center">
			<label>{{title}}</label>
			<button :class="button.class">{{button.title}}</button>
		</div>
		<hr>
		<div class="d-flex justify-content-center">
			<input :placeholder="input.placeholder" :style="input.style"></input>
		</div>
		<div>
			<Table>
				<template v-slot:tr-th>
					<tr class="d-flex justify-content-between">
						<th v-for="column in columns">{{column}}</th>
					</tr>
				</template>
				<template v-slot:tr-td>
					<tr v-for="row in rows" class="d-flex justify-content-between">
						<td v-for="item in row">{{item}}</td>
					</tr>
				</template>
			</Table>
		</div>
	</div>
	`,
})