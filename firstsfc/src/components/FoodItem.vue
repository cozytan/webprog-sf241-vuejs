<template>
  <div class="Apple">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Apple, Durian',
      message: 'I like Apple , and  durian'
    }
  }
};
</script>

<style>
 .Apple {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgba(165, 42, 42, 0.384);
  }

</style>