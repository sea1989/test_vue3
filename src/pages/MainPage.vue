<template>
  <h1>DOBRO</h1>
  <router-link to="/">Показания</router-link>

  <form @submit.prevent="submit">
    <h4>Создание поста</h4>
    <my-input
      v-model="post.title"
      type="text"
      placeholder="Показания температуры"
      required
    />
    <my-button style="margin-top: 15px">Create</my-button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      post: {
        title: "",
      },
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      this.createPost({
        title: this.post.title,
        id: Date.now(),
      });
      this.$router.push("/");
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
</style>
