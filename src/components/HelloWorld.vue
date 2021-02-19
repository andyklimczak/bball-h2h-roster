<template>
  <div class="hello">
    <div v-for="player in $store.state.players" :key="player.name">
      <div>
        {{player.name}}
      </div>
    </div>
    <button @click="addPlayer">Add player</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    addPlayer() {
      console.log('Add player')
      this.$store.commit('addPlayer', {name: 'Lebron James'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
