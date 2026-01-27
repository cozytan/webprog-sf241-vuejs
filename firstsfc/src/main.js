import { createApp } from 'vue'
import App from './App.vue'

import FoodItem from './FoodItem.vue' 
import personalprofile from './personalprofile.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('personal-profile', personalprofile)
app.mount('#app')