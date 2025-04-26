<template>
  <section id="projects" class="py-20 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">
        🛠️ Projects
      </h2>

      <div class="grid md:grid-cols-2 gap-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-700 hover:shadow-xl transition-all"
        >
          <!-- Project Image -->
          <img
            v-if="project.image"
            :src="project.image"
            alt="Project Image"
            class="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div>
            <h3 class="text-2xl font-bold text-green-400 flex items-center gap-2">
              <i class="lucide lucide-clipboard" /> {{ project.title }}
            </h3>
            <p class="text-gray-400 text-sm">{{ project.date }}</p>
          </div>

          <p class="text-gray-300 mt-4 mb-6">{{ project.description }}</p>

          <!-- Insights about the Project -->
          <div class="space-y-4 text-gray-300">
            <h4 class="font-semibold text-blue-400">What I Did:</h4>
            <p>{{ project.whatIDid }}</p>

            <h4 class="font-semibold text-blue-400">How I Did It:</h4>
            <p>{{ project.howIDidIt }}</p>

            <h4 class="font-semibold text-blue-400">Impact:</h4>
            <p>{{ project.impact }}</p>
          </div>

          <!-- GitHub Link -->
          <div class="mt-4 text-center">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="text-blue-400 hover:text-blue-300 font-semibold"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Amharic Sign Language Transcription System',
    date: 'October 2023 - June 2024',
    description: 'Developed a real-time transcription system for Amharic sign language using deep learning in Python.',
    whatIDid: 'I built the deep learning models, trained them with a dataset of sign language gestures, and integrated it with a web interface.',
    howIDidIt: 'I used TensorFlow for model training and implemented a React-based web application for real-time use.',
    impact: 'Improved accessibility for the hearing impaired in Ethiopia by providing a tool for translating Amharic sign language into text.',
    github: 'https://github.com/Alki45/amharic-sign-language-transcription',
    image: 'image_1.jpg', 
  },
  {
    title: 'Online Culture Clothing Store',
    date: 'May 2024 - June 2024',
    description: 'Created an e-commerce platform using React and Firebase for an online clothing store with user authentication and order management.',
    whatIDid: 'Developed the user interface, integrated payment systems, and built the backend with Firebase for data management.',
    howIDidIt: 'Used Firebase for real-time data storage and authentication, and React for front-end development.',
    impact: 'Enabled users to shop for culturally significant clothing items with a smooth user experience and secure transaction system.',
    github: 'https://github.com/Alki45/culture-clothing-store',
    image: 'mage_2.jpg', 
  },
  {
    title: 'LabSync — Smart Lab Resource Management System',
    date: 'October 2024 - Present',
    description: 'LabSync is a modern web-based dashboard for managing lab assistants, courses, lecturers, rooms, and schedules at universities.',
    whatIDid: 'Developed the frontend using Vue.js and Tailwind CSS, implemented conflict-free scheduling, and created real-time visualizations for lab schedules.',
    howIDidIt: 'Utilized Vue.js for a dynamic frontend, integrated smart algorithms to detect scheduling conflicts, and ensured seamless data flow with MySQL for backend data management.',
    impact: 'Optimized scheduling and resource allocation for university labs, reducing administrative workload and preventing resource conflicts, leading to a smoother operation of academic schedules.',
    github: 'https://alki45.github.io/Lab_schedule/',
    image: 'image_4.jpg', 
  },
  {
    title: 'Book Rental System',
    date: 'October 2024 - Present',
    description: 'Developing a book rental system using Vue.js for the frontend and Go for the backend to manage book inventory and rentals.',
    whatIDid: 'I designed the database schema, implemented book search functionality, and created the rental system UI.',
    howIDidIt: 'Utilized Vue.js for the frontend and Go with MySQL for the backend to ensure efficient performance.',
    impact: 'Streamlined the book rental process for libraries and educational institutions, allowing users to quickly search and rent books.',
    github: 'https://alki45.github.io/book_family/',
    image: 'image_5.jpg',
  },
];
</script>

<style scoped>
@import url('https://unpkg.com/lucide@latest');

section {
  scroll-margin-top: 80px;
}
</style>
