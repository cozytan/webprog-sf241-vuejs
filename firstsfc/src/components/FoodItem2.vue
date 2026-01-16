FoodItem.vue
 
<template>
  <div class=Prutas Lamang>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Mango, Grapes',
      message: 'I dont like Mango, Grapes'
    }
  }
};
</script>
 
<style>
    .Prutas Lamang{
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }  
</style>