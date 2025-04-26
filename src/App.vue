<template>
  <div id="app" class="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
    <!-- Header Section -->
    <HeaderPage />

    <!-- Main Content -->
    <main class="flex-grow pt-20">
      <router-view />
    </main>

    <!-- Footer Section -->
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
  background-color: #f9fafb; /* Light elegant background */
  color: #1f2937; /* Elegant text color */
  margin: 0;
}
</style>
