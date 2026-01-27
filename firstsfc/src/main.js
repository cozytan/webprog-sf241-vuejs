import { createApp } from 'vue'
import App from './App.vue'

// Make sure the paths match the actual location of the components
import FoodItem from './components/FoodItem.vue' 
import personalprofile from './components/personalprofile.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('personal-profile', personalprofile)

app.mount('#app')
