<script setup>
const props = defineProps({
  countries: Array
});

const getFlag = (code) => `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`;

</script>

<template>
<div class="col-5" style="max-height: 90vh; overflow: scroll">
 <div class="list-group">
    <router-link class="list-group-item list-group-item-action" v-for="country in countries" :to="'/' + country.alpha3Code">
      <img :src="getFlag(country.alpha2Code)" :alt="country.name.common + ' flag'">
      <p>{{country.name.common}}</p>
    </router-link>
  </div>  
</div>
</template>

<style scoped>

</style>
