<template>
  <div class="hello">
<<<<<<< HEAD
    <h1>{{ info }}</h1>
=======
    <h1>{{ msg }}</h1>
>>>>>>> Frontend
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data: function() {
    return {
      info: null
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => (this.info = response))
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
