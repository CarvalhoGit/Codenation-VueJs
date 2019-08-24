	let app = new Vue({
	el: "#app",
	data: {
		title: "Verificador de Palíndromo",
		button: {
			class: "btn btn-primary",
		},
		input: {
			placeholder: "Palíndromo",
			style: {
				'width': "100%",
				'text-align': "center",
			}
		},
		table: ['Frases', 'Palíndromo'],
		frases: ['ladams', 'ndfjnsfds', 'ndfsjnf', 'nfdjsn'],
	},
	components: {CodeButton, CodeInput, CodeThead, CodeTbody},
	template: `
	<div class="container">
		<hr>
		<div class="d-flex justify-content-between align-items-center">
			<label>{{title}}</label>
			<code-button :class="button.class" title='Apagar Histórico'></code-button>
		</div>
		<hr>
		<div class="d-flex justify-content-center">
			<code-input :placeholder="input.placeholder" :style="input.style"></code-input>
		</div>
		<div>
			<table class="table">
				<code-thead>
					<th scope="col" v-for="column in table">{{column}}</th>
				</code-thead>
				<code-tbody>
					<tr v-for="frase in frases">
						<td>{{frase}}</td>
						
					</tr>					
				</code-tbody>
			</table>
		</div>
	</div>
	`,
})