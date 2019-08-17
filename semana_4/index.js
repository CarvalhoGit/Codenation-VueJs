new Vue({
	el: '#app',
	components: {CodeButton, CodeNav, CodeContainer, CodeTable},
	data() {
		return {
			items: [],
			form: {
				name: '',
				age: ''
			}
		};
	},
	created() {
		this.loadItems();
	},
	template: `
	<div>
		<code-nav>
			<a class="navbar-item" slot="left"><b>Listagem de itens</b></a>
			<a class="navbar-item" slot="right">Luis Carvalho</a>
		</code-nav>
		<code-container class="box">
			<div class="field">
			  <label class="label">Name</label>
			  <div class="control">
			    <input class="input" :class="{ 'is-danger' : !form.name}" type="text" v-model="form.name" placeholder="Digite seu nome">
			  </div>
			  <p v-if="!form.name" class="help is-danger">Nome inválido</p>
			</div>
			<div class="field">
			  <label class="label">Idade</label>
			  <div class="control">
			    <input class="input" :class="{ 'is-danger' : !form.age}" type="number" min="0" v-model="form.age" placeholder="Digite sua idade">
			  </div>
			  <p v-if="!form.age" class="help is-danger">Idade inválida</p>
			</div>
			<code-button :disabled="!form.name || !form.age" title='Incluir' @insert="addItem(form)" message="Incluído com sucesso!"></code-button>		
			<span v-if="isNotValidSize">Texto com mais de 15 caracteres</span>
			<code-table :items="items"></code-table>
		</code-container>
	</div>
	`,
	computed: {
		isNotValidSize() {
			return this.form.name.length > 15;
		}
	},
	methods: {
		loadItems() {
			axios.get('http://172.28.8.98:3000/users').then(({data}) => {
			this.items = data;
		}).catch(() => {
			window.alert('Ocorreu um erro ao buscar os dados');
		});
		},

		addItem(form) {
			if (form) {
				axios.post('http://172.28.8.98:3000/users', {...form,
					id: Date.now() + Math.round(Math.random() * 100)}).then(() => {
						this.form.name = '';
						this.form.age = '';
						this.loadItems();
					}).catch(() => {
						window.alert('Ocorreu um erro ao inserir os dados')
					});
			}
		}
	},
});