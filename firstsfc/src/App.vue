<template>
  <main class="container">
    <section v-if="currentPage === 'home'" id="home-page" class="page">
      <img src="@/assets/a2.jpg" alt="Klein Vincent De Guzman" class="profile-img">
      <h1>
        I am, Klein Vincent De Guzman 
        <span>a Computer Science Student at Asia Pacific College</span>
      </h1>
      <button class="btn" @click="currentPage = 'gallery'">Explore My Work</button>
    </section>

    <section v-else id="gallery-page" class="page">
      <div class="gallery-wrapper">
        <div class="image-card">
          <img src="@/assets/a3.jpg" alt="Klein Vincent Image 1">
          <p>Still young.... Don't wanna count it..</p>
        </div>

        <div class="image-card">
          <img src="@/assets/a1.jpg" alt="Klein Vincent Image 2">
          <p>Always curious, always learning at APC. 🫡</p>
        </div>
      </div>
      <button class="btn back-btn" @click="currentPage = 'home'">← Back Home</button>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PersonalProfile',
  data() {
    return {
      // Vue handles the "page switching" automatically with this variable
      currentPage: 'home' 
    }
  }
}
</script>

<style scoped>
/* Scoped ensures these styles don't "leak" to your food components */
:root {
  --bg-gradient: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  --accent-color: #4a90e2;
  --text-main: #2d3436;
  --glass-bg: rgba(255, 255, 255, 0.7);
  --shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

.container {
  width: 90%;
  max-width: 900px;
  min-height: 500px;
  background: rgba(255, 255, 255, 0.7); /* Hardcoded variable for compatibility */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  padding: 40px;
  margin: 20px auto;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 20px;
  color: #2d3436;
}

h1 span {
  color: #4a90e2;
  display: block;
  font-weight: 300;
}

.btn {
  background: #2d3436;
  color: white;
  padding: 15px 35px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
  background: #4a90e2;
}

.gallery-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}

.image-card img {
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.back-btn {
  margin-top: 20px;
  background: transparent;
  color: #2d3436;
  border: 2px solid #2d3436;
}
</style>
