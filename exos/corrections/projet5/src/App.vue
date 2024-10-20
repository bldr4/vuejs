<template>
  <nav>
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" to="/basket">Shopping card ({{this.productsInBag.length}})</router-link>
  </nav>
  <router-view/>
</template>
<script>

  export default {

  computed: {
        productsInBag() {
      return this.$store.state.productsInBags || [];
    }, 
    
  },
    created(){
     this.$store.dispatch('loadProducts');
     this.$store.dispatch('loadBag'); 
    },
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-link{

  margin-left:  10px;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
