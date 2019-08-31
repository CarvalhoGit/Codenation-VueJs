<template>
  <div>
    <template v-for="(question, index_q) in questions">
      <div class="div-question" :key="index_q">
        <h2 class="subtitle">{{question.pergunta}}</h2>
      </div>
      <hr />
      <div class="field" v-for="(opcao, index_p) in question.opcoes">
        <div class="control">
          <input
            class="input"
            :class="{'is-success': opcao.correct === true, 'is-danger': opcao.correct === false}"
            type="button"
            :value="opcao.data"
            :key="index_p"
            @click="isCorrect(index_q, index_p, question.resposta, opcao)"
          />
        </div>
      </div>
      <hr />
    </template>
  </div>
</template>
    
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          pergunta: "Em quanto tempo de jogo nasce o arongueijo?",
          opcoes: [
            { data: "2:20 min", correct: Boolean },
            { data: "3:20 min", correct: Boolean },
            { data: "4:20 min", correct: Boolean },
            { data: "3:15 min", correct: Boolean }
          ],
          resposta: 3
        },
        {
          pergunta: "Atualmente, qual é o dragão que possui o buff mais forte?",
          opcoes: [
            { data: "Infernal", correct: Boolean },
            { data: "Água", correct: Boolean },
            { data: "Vento", correct: Boolean },
            { data: "Montanha", correct: Boolean }
          ],
          resposta: 2
        },
        {
          pergunta: "Em quanto tempo de jogo as barricadas caem?",
          opcoes: [
            { data: "14:00 min", correct: Boolean },
            { data: "14:20 min", correct: Boolean },
            { data: "14:40 min", correct: Boolean },
            { data: "15:00 min", correct: Boolean }
          ],
          resposta: 0
        },
        {
          pergunta: "Qual foi o último campeão lançado pela riot?",
          opcoes: [
            { data: "Zoe", correct: Boolean },
            { data: "Yuumi", correct: Boolean },
            { data: "Pantheon", correct: Boolean },
            { data: "Qiyana", correct: Boolean }
          ],
          resposta: 3
        },
        {
          pergunta: "O que é Riot Points?",
          opcoes: [
            { data: "Pontuação de Rankeada", correct: Boolean },
            { data: "Moeda virtual paga", correct: Boolean },
            { data: "Moeda virtual grátis", correct: Boolean },
            { data: "Experiência de nível", correct: Boolean }
          ],
          resposta: 1
        }
      ]
    };
  },
  methods: {
    isCorrect(index_q, index_p, resposta, opcao) {
      let total_perguntas = this.questions.length;
      let respondidas = [];
      if (!(respondidas.indexOf(index_q) > -1)) {
        index_p === resposta ? (opcao.correct = true) : (opcao.correct = false);
        respondidas.push(index_q);
        console.log(respondidas);
      }
    }
  }
};
</script>

<style scoped>
.div-question {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  height: 250px;
  background-image: url("https://backgroundcheckall.com/wp-content/uploads/2017/12/summoner.png");
}

h2 {
  text-align: center;
  color: white;
  padding-right: 40px;
  padding-left: 40px;
}
</style>
