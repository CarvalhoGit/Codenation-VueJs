<template>
  <div>
    <div
      class="card"
      v-for="(repositore, index) in repositories"
      :key="index"
      data-test="repositorio"
    >
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="repositore.owner.avatar_url" :alt="Avatar + ' ' + repositore.owner.login" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ repositore.name }}</p>
            <p class="subtitle is-6">@{{repositore.owner.login}}</p>
          </div>
        </div>

        <div class="content">
          <h4>Estrelas: {{ repositore.stargazers_count}}</h4>
          {{repositore.description}}
          <br />
          <a :href="repositore.html_url" target="_blank">Link Repositore</a>.
          <br />
          <time datetime="2016-1-1">{{repositore.created_at}}</time>
        </div>
      </div>
      <hr />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["user", "repositories", "src", "alt", "href"]
};
</script>

<style>
</style>