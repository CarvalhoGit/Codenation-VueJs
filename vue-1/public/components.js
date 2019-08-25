const Table = {
  props: ["frases", "columns", "isPalindrome"],
  data() {
    return {
      stylepalindrome: {
        color: "green"
      },
      stylenotpalindrome: {
        color: "red"
      }
    };
  },
  template: `
	<table class="table">
		<thead>
			<tr class="d-flex justify-content-between">
				<th v-for="column in columns">{{column}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="frase in frases.slice().reverse()" class="d-flex justify-content-between">
				<td style="width: 100%;">{{frase}}</td>
				<td v-if="isPalindrome(frase)" :style="stylepalindrome">Sim</td>
				<td v-else :style="stylenotpalindrome">Não</td>
			</tr>
		</tbody>
	</table>
	`
};
