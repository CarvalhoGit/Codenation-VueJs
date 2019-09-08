<template>
  <Content>
    <Header :title="title"></Header>
    <Search
      :subtitle="subtitle"
      @dadSearchPlis="iamSearch($event)"
      @dadSetRepositories="setRepositories($event)"
      @dadNotFound="setNotFound"
      @dadReset="reset"
    ></Search>
    <Repositories :user="user" :repositories="repositories">
      <ResultSearch
        v-if="notFound || empty"
        :notFound="notFound"
        :empty="empty"
        :data-test="verifyDataTest ? 'nao-encontrado' : 'sem-repositorios'"
      ></ResultSearch>
    </Repositories>
  </Content>
</template>

<script>
import Header from "@/components/Header";
import Content from "@/components/Content";
import Search from "@/components/Search";

import ResultSearch from "@/views/Github/ResultSearch";
import Repositories from "@/views/Github/Repositories";

export default {
  components: {
    Header,
    Content,
    Search,
    Repositories,
    ResultSearch
  },
  data: () => {
    return {
      title: "GitHub",
      subtitle: "Pesquise por usuários e veja os seus repositórios",
      user: "",
      repositories: Array,
      notFound: false,
      empty: false
    };
  },
  computed: {
    verifyDataTest() {
      if (this.notFound) {
        return true;
      }
      return false;
    }
  },
  methods: {
    iamSearch(username) {
      this.user = username;
    },
    setRepositories(repositories) {
      this.notFound = false;
      if (repositories.data.length != 0) {
        this.repositories = repositories.data;
      } else {
        this.empty = true;
      }
    },
    setNotFound() {
      this.notFound = true;
    },
    reset() {
      this.repositories = [];
      this.notFound = false;
      this.empty = false;
      this.data_test = Boolean;
    }
  }
};
</script>