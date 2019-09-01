<template>
  <div>
    <div
      v-for="(question, index_question
    ) in questions"
      data-test="pergunta"
      :data-resposta="question.correto === true ? 'correta' : 'errada'"
    >
      <div class="div-question" :key="index_question
      ">
        <h2 class="subtitle">{{question.pergunta}}</h2>
      </div>
      <hr />
      <template v-for="opcao in question.opcoes">
        <div :key="index_question" class="field">
          <input
            class="input"
            :class="{'is-success': opcao.correct === true, 'is-danger': opcao.correct === false}"
            type="button"
            :value="opcao.data"
            data-test="opcao"
            @click="isCorrect(index_question
            , opcao, question.resposta)"
          />
        </div>
      </template>
      <hr />
    </div>
    <hr />
    <article class="message is-success level" v-show="isDone" :data-resultado="acertos">
      <div class="message-header">
        <p>Resultado</p>
      </div>
      <div class="message-body">
        Você acertou
        <strong>{{ acertos }}</strong> de
        <strong>{{ total_perguntas }}</strong> perguntas!
      </div>
      <div class="level-right">
        <div class="level-item">
          <button class="button is-danger" @click="resetQuiz" data-test="refazer">Refazer Quiz!</button>
        </div>
      </div>
      <hr />
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_correct: Boolean,
      total_perguntas: 0,
      acertos: 0,
      respondidas: [],
      questions: [
        {
          pergunta: "Em quanto tempo de jogo nasce o arongueijo?",
          opcoes: [
            { data: "2:20 min", correct: this.data_correct },
            { data: "3:20 min", correct: this.data_correct },
            { data: "4:20 min", correct: this.data_correct },
            { data: "3:15 min", correct: this.data_correct }
          ],
          resposta: "3:15 min",
          correto: Boolean
        },
        {
          pergunta: "Atualmente, qual é o dragão que possui o buff mais forte?",
          opcoes: [
            { data: "Infernal", correct: this.data_correct },
            { data: "Água", correct: this.data_correct },
            { data: "Vento", correct: this.data_correct },
            { data: "Montanha", correct: this.data_correct }
          ],
          resposta: "Vento",
          correto: Boolean
        },
        {
          pergunta: "Em quanto tempo de jogo as barricadas caem?",
          opcoes: [
            { data: "14:00 min", correct: this.data_correct },
            { data: "14:20 min", correct: this.data_correct },
            { data: "14:40 min", correct: this.data_correct },
            { data: "15:00 min", correct: this.data_correct }
          ],
          resposta: "14:00 min",
          correto: Boolean
        },
        {
          pergunta: "Qual foi o último campeão lançado pela riot?",
          opcoes: [
            { data: "Zoe", correct: this.data_correct },
            { data: "Yuumi", correct: this.data_correct },
            { data: "Pantheon", correct: this.data_correct },
            { data: "Qiyana", correct: this.data_correct }
          ],
          resposta: "Qiyana",
          correto: Boolean
        },
        {
          pergunta: "O que é Riot Points?",
          opcoes: [
            { data: "Pontuação de Rankeada", correct: this.data_correct },
            { data: "Moeda virtual paga", correct: this.data_correct },
            { data: "Moeda virtual grátis", correct: this.data_correct },
            { data: "Experiência de nível", correct: this.data_correct }
          ],
          resposta: "Moeda virtual paga",
          correto: Boolean
        }
      ]
    };
  },
  created() {
    this.total_perguntas = this.questions.length;
  },
  computed: {
    isDone() {
      return this.respondidas.length === this.total_perguntas ? true : false;
    }
  },
  methods: {
    resetQuiz() {
      location.reload();
    },

    isCorrect(index_question, opcao, resposta) {
      if (!this.respondidas.includes(index_question)) {
        opcao.data === resposta
          ? ((opcao.correct = true),
            this.acertos++,
            (this.questions[index_question].correto = true))
          : ((opcao.correct = false),
            (this.questions[index_question].correto = false));
        this.respondidas.push(index_question);
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
