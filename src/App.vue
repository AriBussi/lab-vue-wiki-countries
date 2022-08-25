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
  import { ref, onMounted } from 'vue';

  import Navbar from './components/NavBar.vue';
  import CountriesList from './components/CountriesList.vue';

  const countries = ref(null);

  onMounted(async () => {
    const response = await fetch("https://ih-countries-api.herokuapp.com/countries");
    const data = await response.json();
    countries.value = data;
  })

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
