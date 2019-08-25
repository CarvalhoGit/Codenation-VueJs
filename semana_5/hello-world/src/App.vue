<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="level">
        <div class="level-right">
          <div class="level-item">
            <button class="button is-primary">Novo Animal</button>
          </div>
        </div>        
      </div>
      <Table class="is-fullwidth" :columns="columns" :rows="rows">
      </Table>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table';
import Navbar from '@/components/Navbar';

export default {
  name: "app",
  components: {
    Table, Navbar,
  },
  data() {
    return {
      columns: ["ID", "Nome", "Patas", "Tipo"],
      rows: [
        [0, "Gato", 4, "Felino"],
        [1, "Cobra", 0, "Réptil"],
        [2, "Peixe", 0, "Marinho"],
      ]
    };
  }
};

</script>

<style lang="scss">
@import "@/theme/bulma.scss"; //@ padrao para tudo que esta dentro de "src"
</style>
