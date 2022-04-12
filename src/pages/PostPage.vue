<template>
  <div>
    <h1>Страница с показаниями</h1>
    <my-button style="margin: 15px 0"
      ><router-link to="/store">Создать показание</router-link></my-button
    >
    <post-list :posts="getPost" />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";

// import { mapStore, mapGetters, mapActions, mapMutations } from "vuex";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    PostList,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["setModal"]),
    showDialog() {
      this.setModal(true);
    },
  },
  computed: mapGetters(["getPost", "getModal"]),
};
</script>

<style></style>
