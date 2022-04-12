export const postModule = {
  state: {
    posts: [
      { id: 1, title: "+25" },
      { id: 2, title: "-2" },
      { id: 3, title: "+84" },
    ],
    dialogVisible: false,
  },
  getters: {
    getPost: (state) => state.posts,
    getModal: (state) => state.dialogVisible,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setModal(state, value) {
      state.dialogVisible = value;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
    removePost(state, post) {
      state.posts = state.posts.filter((p) => p.id !== post.id);
    },
    setPostById(state, newPost) {
      const post = state.posts.find((item) => item.id === newPost.id);
      post.title = newPost.title;
    },
  },
  actions: {},
  // namespaced: true,
};
