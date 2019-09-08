<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          v-if="notFound"
          src="https://image.freepik.com/vetores-gratis/glitch-error-404-page-background_23-2148090003.jpg"
          alt="Not Found"
        />
        <img
          v-if="empty"
          src="https://uploads.spiritfanfiction.com/fanfics/historias/201710/vazio-10691600-191020171644.jpg"
          alt="Empty"
        />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: ["notFound", "empty"]
};
</script>