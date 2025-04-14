<template>
  <div class="lg:min-h-screen pt-7 lg:flex flex-col justify-center lg:pt-0">
    <h2 class="text-2xl text-magenta pb-4">Let's build something!</h2>
    <p class="mb-8">
      Need a website or landing page for your business? Could you use a web developer for some
      contract work? Let me know how I can help you reach your goals and present your services and
      products in the best way possible.<br /><br />Shoot me an email – let's discuss!
    </p>

    <!-- Mailto Link -->
    <a
      href="mailto:robin.pahlman@gmail.com"
      class="w-32 bg-magenta hover:bg-green text-white text-base mr-4 py-2 px-4 rounded-full inline-block text-center"
    >
      Send Email
    </a>

    <!-- Fallback Section -->
    <div class="mt-6">
      <p class="text-neutral-400">Or copy my email address:</p>
      <div class="flex items-center gap-2 mt-2">
        <input
          type="text"
          readonly
          value="robin.pahlman@gmail.com"
          class="bg-neutral-800 text-white px-4 py-2 rounded-lg w-full max-w-md"
        />
        <button
          @click="copyEmail"
          class="bg-green hover:bg-magenta text-white px-4 py-2 rounded-lg"
        >
          Copy
        </button>
      </div>
      <p v-if="copied" class="text-green mt-2">Email address copied to clipboard!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText('robin.pahlman@gmail.com').then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000) // Reset the message after 2 seconds
  })
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
