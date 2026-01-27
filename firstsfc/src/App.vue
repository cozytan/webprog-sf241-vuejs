<template>
  <personal-profile />
  <food-item />
  
  <hr>
  
  <h3>Database Records:</h3>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">
      {{ instrument.name }}
    </li>
  </ul>
</template>