const Table = {
	template: `
	<table class="table">
		<thead>
			<slot name="tr-th"></slot>
		</thead>
		<tbody>
			<slot name="tr-td"></slot>
		</tbody>
	</table>
	`
}