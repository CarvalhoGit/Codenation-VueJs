<template>
  <div class="field has-text-centered">
    <h2 class="subtitle">{{ subtitle }}</h2>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input"
        :class="{'is-danger': !isValid(form.username)}"
        type="text"
        placeholder="Usuário"
        @keydown.enter="dadSearchPlis(form.username)"
        v-model="form.username"
        data-test="entrada"
      />
      <span class="icon is-small is-left">
        <ion-icon name="person"></ion-icon>
      </span>
      <span class="my-icon-checkmark icon is-small is-right"></span>
    </div>
  </div>
</template>

<script>
import githubUsernameRegex from "github-username-regex";

export default {
  props: ["subtitle"],
  data() {
    return {
      form: {
        username: ""
      }
    };
  },
  methods: {
    isValid(username) {
      return githubUsernameRegex.test(username) ? true : false;
    },
    dadSearchPlis(username) {
      if (this.isValid(username)) {
        this.$emit("dadSearchPlis", username);
        this.dadGetRepositories(username);
        this.username = "";
        this.dadReset();
      }
    },
    dadGetRepositories(username) {
      this.$http
        .get(`https://api.github.com/users/${username}/repos`)
        .then(dic => {
          this.$emit("dadSetRepositories", dic);
        })
        .catch(() => {
          this.$emit("dadNotFound");
        });
    },
    dadReset() {
      this.$emit("dadReset");
    }
  }
};
</script>

<style scoped>
.my-icon-checkmark {
  color: green !important;
}
.my-icon-close {
  color: red !important;
}
</style>