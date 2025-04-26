<template>
  <section id="events" class="py-20 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">
        🎉 Events & Competitions
      </h2>

      <div class="grid md:grid-cols-2 gap-10">
        <div
          v-for="event in events"
          :key="event.title"
          class="bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <!-- Event Image -->
          <img v-if="event.image" :src="event.image" alt="Event Image" class="w-full h-64 object-cover rounded-lg mb-6" />

          <div class="mb-4">
            <h3 class="text-2xl font-bold text-green-400 flex items-center gap-2">
              <i class="lucide lucide-trophy" /> {{ event.title }}
            </h3>
            <p class="text-gray-400 text-sm">{{ event.date }}</p>
          </div>

          <p class="text-gray-300 mb-4">{{ event.description }}</p>

          <ul class="list-disc ml-5 text-gray-300 space-y-1 mb-4">
            <li><strong class="text-blue-400">Role:</strong> {{ event.role }}</li>
            <li><strong class="text-blue-400">Achievement:</strong> {{ event.achievement }}</li>
            <li><strong class="text-blue-400">Impact:</strong> {{ event.impact }}</li>
          </ul>

          <div class="text-sm text-gray-400 italic">Organized by: {{ event.organizer }}</div>

          <!-- Certifications Section -->
          <div v-if="event.certifications" class="mt-6">
            <h4 class="text-xl font-semibold text-green-400 mb-4">Certifications</h4>
            <div class="grid grid-cols-2 gap-6">
              <div v-for="certificate in event.certifications" :key="certificate.title" class="text-center">
                <img :src="certificate.image" alt="Certificate Image" class="w-32 h-32 mx-auto mb-4 rounded-md shadow-lg transition-all duration-200 ease-in-out hover:scale-110" />
                <p class="text-gray-300">{{ certificate.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    title: 'ETCPC City Cup Contest 2023',
    date: 'March 18 2023',
    role: 'Team Leader - Competitive Programmer',
    achievement: '🏅 Secured 3rd Place Nationally among top university teams.',
    description: 'The Ethiopian Collegiate Programming Contest (ETCPC) is the most prestigious university-level programming competition in Ethiopia.',
    impact: 'Strengthened my problem-solving under pressure, led strategic thinking during timed challenges, and represented ASTU at the national level.',
    organizer: 'ETCPC and ALX-Ethiopia',
    image: '../assets/Photos/photo_2024-01-14_12-14-48.jpg',
    certifications: [
      {
        title: 'ETCPC National Certificate',
        image: 'path_to_certification_image.jpg',
      },
    ],
  },
  {
    title: 'ETCPC Regional Contest 2023',
    date: 'September 2023',
    role: 'Team Member - Algorithm Developer',
    achievement: '🏅 Awarded Honor Certificate for Excellent Performance Regionally.',
    description: 'Regional qualifier contest for the National ETCPC, featuring top teams from regional universities.',
    impact: 'Built foundational experience in algorithmic problem-solving, team collaboration, and logic optimization.',
    organizer: 'ETCPC Ethiopia & ACPC Ethiopia',
    image: '../assets/Photos/photo_2024-01-14_12-14-48.jpg',
    certifications: [
      {
        title: 'ETCPC Regional Certificate',
        image: 'certification_image_2.jpg',
      },
    ],
  },
];
</script>

<style scoped>
@import url('https://unpkg.com/lucide@latest');

section {
  scroll-margin-top: 80px;
}

.grid {
  gap: 20px;
}

.shadow-lg {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Hover effect for scaling images */
img:hover {
  transform: scale(1.05);
}

/* Transition for event containers */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
