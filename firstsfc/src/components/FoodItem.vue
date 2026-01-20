FoodItem.vue
 
<template>
  <div class=Mansanas>
    <h2>{{ name }}</h2>
    <
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Santol, Ampalaya, Manok',
      message: 'I like santol, Ampalaya, Manok'
    }
  }
};
</script>
 
<style>
  .Mansanas {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }  
</style>
