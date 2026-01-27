import { createApp } from 'vue'
import App from './App.vue'

// Fix: Remove "/components/" because the files are in the same folder as main.js
import FoodItem from './FoodItem.vue' 
import personalprofile from './personalprofile.vue'

const app = createApp(App)

// Register components globally so you can use them in any template
app.component('food-item', FoodItem)
app.component('personal-profile', personalprofile)

app.mount('#app')