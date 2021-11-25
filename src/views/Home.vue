<template>
    <div class="hello">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <p>Now it's time to learn some Vue by improving the given exercises:</p>
        <router-link to="exercises/01">
            <span>First exercise - Avatar</span>
        </router-link>
        <router-link to="exercises/02">
            <span>Second exercise - Routing</span>
        </router-link>
        <router-link to="exercises/03">
            <span>Third exercise - Lists</span>
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
span {
    display: block;
    text-align: left;
    margin-left: calc(30% + 20px);
    margin-bottom: .5rem;
}
</style>
