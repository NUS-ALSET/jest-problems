import Vue from "vue";

var template = `
	<h3>{{title}}</h3>
`;

var app = new Vue({
  template: template,
  data: {
    todos: [],
    title: "Vuejs Test sample"
  },
  watch: {
    todos: {
      handler: function(data) {
        console.log(data);
      },
      deep: true
    }
  },

  methods: {
    add: function(a, b) {
      return a;
    }
  }
});

app.$mount("#app");

export default app;
