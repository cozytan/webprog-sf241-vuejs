import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import personalprofile from './components/personalprofile.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item', FoodItem2)
app.component('personal-profile', personalprofile)
app.mount('#app')
