<template>
  <div class="post">
    <div>
      <div><strong>ID:</strong>{{ post.id }}</div>
      <div><strong>Температура:</strong>{{ post.title }}</div>
    </div>

    <div class="post__btns">
      <my-button @click="showDialog">Редактирование</my-button>
    </div>

    <div class="post__btns">
      <my-button @click="remove">Удалить</my-button>
    </div>
    <my-dialog v-if="getModal == post.id">
      <edit-form :postId="post.id" />
    </my-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import EditForm from "@/components/EditForm.vue";

export default {
  components: {
    EditForm,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["removePost", "setModal"]),
    remove() {
      this.removePost(this.post);
    },
    showDialog() {
      this.setModal(this.post.id);
      console.log(this.post.id);
    },
  },
  computed: mapGetters(["getModal"]),
};
</script>

<style scope>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
  position: flex;
}
</style>
