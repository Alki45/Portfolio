<template>
  <section class="min-h-screen bg-gradient-to-br from-blue-600 via-green-500 to-gray-800 py-16 px-4 sm:px-8 relative overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center filter blur-xl opacity-40" style="background-image: url('image.jpg');"></div>
    <div class="max-w-6xl mx-auto relative z-10 bg-white bg-opacity-90 shadow-xl rounded-3xl p-8 sm:p-12">

      <!-- Header Section -->
      <div class="text-center mb-16">

        <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg transition-all ease-in-out">About Me</h1>
        <p class="text-lg sm:text-xl text-gray-700 mt-2">Learn more about my journey, skills, and ambitions in technology.</p>
      </div>

      <!-- Bio Section -->
      <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-10 md:space-y-0">
        <img
          class="rounded-full w-48 h-48 object-cover shadow-xl transform transition duration-500 hover:scale-105 border-4 border-green-400"
          src="../assets/Photos/20240628_121035.jpg"
          alt="Ali Kibret Muhamed"
        />
        
        <div class="flex-1 text-center md:text-left mt-8 md:mt-0">
          <h2 class="text-3xl font-semibold text-gray-900 tracking-tight">Ali Kibret Muhamed</h2>
          <p class="mt-4 text-md sm:text-lg text-gray-800 leading-relaxed tracking-wide">
            <span v-for="(letter, index) in bioText" :key="index">{{ letter }}</span>
          </p>

          <div class="mt-6 flex justify-center md:justify-start space-x-6 text-2xl">
            <a href="mailto:alikibretmuhamed@gmail.com" class="text-gray-800 hover:text-green-500 transform transition duration-300 hover:scale-125" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/in/ali-kibret" class="text-gray-800 hover:text-green-500 transform transition duration-300 hover:scale-125" title="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Alki45" class="text-gray-800 hover:text-green-500 transform transition duration-300 hover:scale-125" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="mt-16">
        <h3 class="text-3xl font-semibold text-gray-900 mb-6 text-center">🎓 Education</h3>
        <p class="text-lg sm:text-xl text-gray-800 text-center">
          Dual Degree in Computer Science & Engineering and Electronics & Communication Engineering<br/>
          Adama Science and Technology University<br/>
          10/2019 – 06/2024<br/>
          Adama, Oromia, Ethiopia
        </p>
      </div>

      <!-- Certifications Section -->
      <div class="mt-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 shadow-lg transform transition duration-500 hover:scale-105">
        <h3 class="text-3xl font-semibold text-gray-900 mb-6 text-center">🏆 Certifications</h3>
        <ul class="list-disc list-inside text-gray-800 space-y-4 text-lg">
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">🎖️ Regional Honor Certificate – Ethiopian Collegiate Programming Contest (ETCPC)</a></li>
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">📜 Data Science – ALX</a></li>
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">💼 Soft Skills in Digital Technology – ALX</a></li>
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">📊 Data Analysis – Simplilearn</a></li>
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">🤖 Machine Learning – Kaggle & Simplilearn</a></li>
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">🧠 Problem Solving Intermediate – HackerRank</a></li>
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">🐍 Python Basic Problem Solving – HackerRank</a></li>
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">🧪 Python and Data Analysis/AI – AI Planet</a></li>
          <li><a href="https://example.com/link-to-cert" class="text-blue-600 hover:underline transform transition duration-300 hover:scale-110">🛠️ Python Backend – Upwork</a></li>
        </ul>
      </div>

      <!-- Skills Section -->
      <div class="mt-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-lg transform transition duration-500 hover:scale-105">
        <h3 class="text-3xl font-semibold text-gray-900 mb-6 text-center">🛠️ Skills & Expertise</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <div class="text-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-14 h-14 mx-auto transform transition duration-300 hover:rotate-12 hover:scale-110" />
            <p class="mt-2 text-gray-900 font-medium">Python</p>
          </div>
          <div class="text-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" class="w-14 h-14 mx-auto transform transition duration-300 hover:rotate-12 hover:scale-110" />
            <p class="mt-2 text-gray-900 font-medium">Vue.js</p>
          </div>
          <div class="text-center">
            <i class="fab fa-github text-5xl text-gray-900 transform transition duration-300 hover:scale-110 hover:rotate-12"></i>
            <p class="mt-2 text-gray-900 font-medium">GitHub</p>
          </div>
          <div class="text-center">
            <i class="fas fa-database text-5xl text-yellow-500 transform transition duration-300 hover:scale-110 hover:rotate-12"></i>
            <p class="mt-2 text-gray-900 font-medium">SQL</p>
          </div>
          <div class="text-center">
            <i class="fas fa-chart-line text-5xl text-indigo-600 transform transition duration-300 hover:scale-110 hover:rotate-12"></i>
            <p class="mt-2 text-gray-900 font-medium">Data Analysis</p>
          </div>
          <div class="text-center">
            <i class="fas fa-cogs text-5xl text-gray-700 transform transition duration-300 hover:scale-110 hover:rotate-12"></i>
            <p class="mt-2 text-gray-900 font-medium">Engineering</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="mt-16 text-center">
        <h3 class="text-3xl font-semibold text-gray-900 mb-6">📬 Contact Me</h3>
        <p class="text-lg sm:text-xl text-gray-800">
          I’m always open to new opportunities, collaborations, and challenges that allow me to leverage my skills in data science, machine learning, and Python development. Feel free to reach out via email or connect with me on LinkedIn.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      bioText: '',
      fullText:
        "With dual degrees in Computer Science & Engineering and Electronics & Communication Engineering from Adama Science and Technology University, I bring a blend of technical expertise and practical experience in data analysis, data science, machine learning, and Python development. I am currently working as an Academic Research Assistant, where I am deeply involved in advanced research projects, helping to shape the future of technology."
    };
  },
  mounted() {
    this.typeBioText();
  },
  methods: {
    typeBioText() {
      let i = 0;
      const interval = setInterval(() => {
        this.bioText += this.fullText.charAt(i);
        i++;
        if (i >= this.fullText.length) clearInterval(interval);
      }, 25);
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
