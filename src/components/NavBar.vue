<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg border-b border-gray-700">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
      <!-- Logo Section -->
      <router-link to="/" class="flex items-center space-x-4 group">
        <i class="fas fa-code text-green-400 text-3xl group-hover:scale-110 transition-transform"></i>
        <h1 class="text-2xl md:text-3xl font-extrabold text-white group-hover:text-green-400 transition duration-300">
          Ali Kibret
        </h1>
      </router-link>

      <!-- Center Menu Links -->
      <ul class="hidden md:flex items-center space-x-12 text-lg font-semibold tracking-wide">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link
            :to="item.path"
            class="relative text-white hover:text-green-400 transition duration-300 group"
          >
            {{ item.label }}
            <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
          </router-link>
        </li>
      </ul>

      <!-- Social Icons + Hamburger Menu -->
      <div class="flex items-center space-x-6">
        <!-- Social Icons Desktop -->
        <div class="hidden md:flex items-center space-x-5 text-white text-2xl">
          <a href="https://linkedin.com/in/ali-kibret" target="_blank" class="hover:text-blue-400 hover:scale-110 transition">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Alki45" target="_blank" class="hover:text-gray-400 hover:scale-110 transition">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:alikibretmuhamed@gmail.com" class="hover:text-red-400 hover:scale-110 transition">
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <!-- Hamburger -->
        <button @click="toggleMenu" class="md:hidden text-white text-3xl focus:outline-none transition-transform hover:scale-110">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-show="isMenuOpen"
        class="md:hidden bg-gray-900/95 text-white text-center px-8 pt-6 pb-8 space-y-8 rounded-b-3xl shadow-xl"
      >
        <ul class="space-y-6">
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link
              :to="item.path"
              class="block text-xl font-semibold hover:text-green-400 transition"
              @click="closeMenuOnMobile"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <div class="flex justify-center space-x-8 pt-8 text-2xl border-t border-gray-700">
          <a href="https://linkedin.com/in/ali-kibret" target="_blank" class="hover:text-blue-400 hover:scale-110 transition">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Alki45" target="_blank" class="hover:text-gray-400 hover:scale-110 transition">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:alikibretmuhamed@gmail.com" class="hover:text-red-400 hover:scale-110 transition">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </transition>
  </nav>
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
/* Slide-Fade Animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Underline hover effect */
.group:hover span {
  width: 100%;
}
</style>
