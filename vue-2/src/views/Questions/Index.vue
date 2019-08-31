<template>
  <container>
    <Header></Header>
    <Form></Form>
  </container>
</template>

<script>
import Container from "@/components/Container";
import Header from "@/components/Header";
import Form from "@/views/Questions/Form";

export default {
  name: "app",
  components: { Container, Header, Form }
};
</script>