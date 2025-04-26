<template>
  <div>
    <!-- NavBar -->
    <nav class="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-700">
      <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <router-link to="/" class="text-3xl font-bold text-green-400 hover:text-green-300 transition duration-300">
          Ali Kibret
        </router-link>

        <ul class="hidden md:flex items-center space-x-8 text-lg font-medium">
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link
              :to="item.path"
              class="text-white hover:text-blue-400 transition duration-300"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>

        <div class="hidden md:flex items-center space-x-4 text-white text-xl">
          <a href="https://linkedin.com/in/ali-kibret" target="_blank" class="hover:text-blue-400 transition">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Alki45" target="_blank" class="hover:text-gray-400 transition">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:alikibretmuhamed@gmail.com" class="hover:text-red-400 transition">
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <button @click="toggleMenu" class="md:hidden text-white text-2xl ml-4">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div
          v-show="isMenuOpen"
          class="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4 border-t border-gray-700 shadow-xl"
        >
          <ul class="space-y-2 text-center">
            <li v-for="(item, index) in menuItems" :key="index">
              <router-link
                :to="item.path"
                class="block text-lg font-medium hover:text-blue-400 transition"
                @click="closeMenuOnMobile"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>

          <div class="flex justify-center space-x-6 pt-4 border-t border-gray-700 text-xl">
            <a href="https://linkedin.com/in/ali-kibret" target="_blank" class="hover:text-blue-400">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Alki45" target="_blank" class="hover:text-gray-400">
              <i class="fab fa-github"></i>
            </a>
            <a href="mailto:alikibretmuhamed@gmail.com" class="hover:text-red-400">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </transition>
    </nav>

      <!-- Hero Section -->
      <section class="pt-32 pb-16 px-6 bg-gray-50 min-h-screen text-center">
        <h1 class="text-5xl font-extrabold text-gray-900">Hi, I'm <span class="text-green-500">Ali Kibret</span></h1>
        <p class="mt-4 text-xl text-gray-600 max-w-xl mx-auto">
          Academic Research Assistant | Data Analyst | Full Stack Developer
        </p>
        <div class="mt-6 flex justify-center space-x-4">
          <router-link
            to="/projects"
            class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            View My Projects
          </router-link>
          <a
            href="/Ali_Kibret_CV.pdf" 
            download 
            class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Download CV
          </a>
        </div>
      </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenuOnMobile = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
