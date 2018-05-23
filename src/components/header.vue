<template>
  <button @click="onClick" class="Button">
    <slot>Button</slot>
  </button>
</template>
​
<script>
  export default {
    props: {
      onClick: {
        type: Function,
        required: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
