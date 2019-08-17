const CodeButton = {
	props: ['title', 'message', 'disabled'],
	template: '<button class="button" @click="$emit(`insert`)" :disabled="disabled">{{title}}</button>',
};

const CodeNav = {
	template: `
	<nav class="navbar is-info">
		<div class="navbar-start"><slot name="left"></slot></div>
		<div class="navbar-end"><slot name="right"></slot></div>
	</nav>
	`
};

const CodeContainer = {
	template: `
	<div class="container"><slot></slot></div>
	`
}

const CodeTable = {
	props: ['items'],
	template: `
	<table class="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Age</th>
			</tr>			
		</thead>
		<tbody>
			<tr v-for="item in items">
				<td>{{item.name}}</td>
				<td>{{item.age}}</td>
			</tr>			
		</tbody>
	</table>
	`
}