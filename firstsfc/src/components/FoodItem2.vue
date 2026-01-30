<template>
  <div  class="Dragon fruit ">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Dragon fruit and Mango',
      message: 'I don't like it'
    }
  }
};
</script>

<style>
  .Dragon fruit {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }  
</style>
