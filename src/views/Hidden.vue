<template>
    <div class="hello">
        <p><u>Secret</u></p>
        <p>But this is</p>
<!--        Code belowo this line -->
  </div>
</template>

<script>
export default {
  name: 'Hidden',
  props: {
    msg: String
  }
}
</script>

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
