const CodeButton = {
	props: ['title'],
	template: '<button>{{title}}</button>',
};

const CodeInput = {
	template: '<input/>'
};

const CodeThead = {
	template: `
	<thead>
		<tr>
			<slot></slot>
		</tr>
	</thead>
	`
};

const CodeTbody = {
	template: `
	<tbody>
		<slot></slot>
	</tbody>
	`
};