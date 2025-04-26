<template>
    <section class="min-h-screen bg-gradient-to-br from-blue-600 via-green-500 to-gray-800 flex items-center justify-center">
      <div class="text-center px-6 sm:px-12 max-w-4xl w-full">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-6">
          Get in Touch
        </h1>
        <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
          I'd love to hear from you! Whether you have a question or want to collaborate on a project, feel free to reach out.
        </p>
  
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <form @submit.prevent="handleSubmit">
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  class="mt-2 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  class="mt-2 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
  
            <div class="mt-6">
              <label for="message" class="block text-sm font-semibold text-gray-700">Message</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="6"
                class="mt-2 px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
  
            <div class="mt-6 text-center">
              <button
                type="submit"
                class="bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: '',
  });
  
  const handleSubmit = () => {

    alert(`Message Sent!\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`);

    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
  };
  </script>
  
  <style scoped>
  section {
    background-size: cover;
    background-position: center;
  }
  
  button {
    transition: all 0.3s ease-in-out;
  }
  
  /* Hover effect for button */
  button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  
  /* Responsiveness for various screen sizes */
  @media (max-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 640px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
  </style>
  