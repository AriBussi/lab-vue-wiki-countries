<template>
  <div class="app">
    <Navbar />

    <div className="container">
      <div className="row">
        <CountriesList :countries="countries" />
        <!-- <router-view> -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import Navbar from './components/NavBar.vue';
  import CountriesList from './components/CountriesList.vue';
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  text-align: center;
}
</style>
