const { createApp } = Vue;

createApp({
    data() {
        return {
            imageUrl: 'https://wallpapercave.com/wp/wp8253134.jpg', // Placeholder Sukuna image
            imageAlt: 'Ryomen Sukuna',
            description: 'The King of Curses'
        }
    },
    template: `
        <div class="chrome-window">
            <div class="chrome-header">
                <div class="tab">Sukuna - Fan Page</div>
            </div>

            <div class="address-bar-container">
                <div class="address-bar">
                    https://domain-expansion.com/sukuna
                </div>
            </div>

            <div class="chrome-content">
                <img :src="imageUrl" :alt="imageAlt" class="sukuna-img" />
                <p class="caption">{{ description }}</p>
            </div>
        </div>
    `
}).mount('#app');