<template>
  <div>
    <h1>Страница с показаниями</h1>
    <my-button @click="showDialog" style="margin: 15px 0"
      >Создать показание</my-button
    >
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [
        { id: 1, title: "js1", body: "description" },
        { id: 2, title: "js2", body: "description 2" },
        { id: 3, title: "js3", body: "description 3" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style></style>
