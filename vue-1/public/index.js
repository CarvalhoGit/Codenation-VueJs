let app = new Vue({
  el: "#app",

  components: { Table },

  data() {
    return {
      title: "Verificador de Palíndromo",

      button: {
        title: "Apagar histórico",
        class: "btn btn-primary"
      },

      input: {
        placeholder: "Palíndromo",
        style: {
          width: "100%",
          "text-align": "center"
        }
      },
      frase: "",

      columns: ["Frases", "Palíndromo"],

      frases: []
    };
  },

  methods: {
    invertedWord(arg1) {
      let array = arg1.replace(/\s/g, "").split("");
      let invertedArray = array.reverse();
      let invertedString = invertedArray.join("");
      return invertedString;
    },

    isPalindrome(arg1) {
      let arg2 = arg1.toLowerCase().replace(/\s/g, "");
      return this.invertedWord(arg2) === arg2 && arg2;
    },

    addWord(arg1) {
      arg1 = arg1.trim();
      if (arg1) {
        this.frases.push(arg1);
        this.frase = "";
      }
    }
  },

  template: `
	<div class="container">
		<hr>
		<div class="d-flex justify-content-between align-items-center">
			<label>{{title}}</label>
			<button :class="button.class">{{button.title}}</button>
		</div>
		<hr>
		<div class="d-flex justify-content-center">
			<input v-model="frase" @keydown.enter="addWord(frase)" :placeholder="input.placeholder" :style="input.style"></input>
		</div>
		<div>
			<Table :frases="frases" :columns="columns" :isPalindrome="isPalindrome">
			</Table>
		</div>
	</div>
	`
});
