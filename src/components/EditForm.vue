<template>
  <form @submit.prevent="hideDialog">
    <h4>Редактирование поста</h4>
    <my-input
      v-model="post.title"
      type="text"
      placeholder="новое значение"
      required
    />
    <my-button style="margin-top: 15px" @click.stop="closeDialog"
      >Редактировать</my-button
    >
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["setModal", "setPostById"]),
    closeDialog() {
      this.setModal(false);
    },
  },
  computed: {
    post: {
      get() {
        return this.$store.getters.getPost.find(
          (item) => item.id === this.postId
        );
      },
      set(value) {
        this.setPostById(value);
      },
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
