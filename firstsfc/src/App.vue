<template>
  <personal-profile />
  <food-item />
  
  <hr>

  <h1>Instruments</h1>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">
      {{ instrument.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

// Declare the instruments array to store fetched data
const instruments = ref([])

// Fetch data from the "instruments" table in Supabase
async function getInstruments() {
  const { data, error } = await supabase.from('instruments').select()
  if (error) {
    console.error(error)
  }
  instruments.value = data
}

// Call the function when the component is mounted
onMounted(() => {
  getInstruments()
})
</script>
