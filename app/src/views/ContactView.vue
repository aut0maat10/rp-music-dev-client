<template>
    <div class="lg:min-h-screen pt-7 lg:flex flex-col justify-center lg:pt-0">
        <h2 class="text-2xl text-magenta pb-4">Let's build something!</h2>
        <p class="mb-8">Need a website or landing page for your business? Could you use a web developer for some contract work? Let me know how I can help you reach your goals and present your services and products in the best way possible.<br/><br/>Shoot me an email – let's discuss!</p>

        <!-- <a class="text-green hover:text-white" :href="'mailto:robin.pahlman@gmail.com'"> -->
        <button @click="sendEmail" class="w-32 bg-magenta hover:bg-green text-white text-base mr-4 py-2 px-4 rounded-full">
            Send Email
        </button>
        <!-- </a> -->
    </div>
</template>

<script setup>
    const sendEmail = () => location.href = 'mailto:robin.pahlman@gmail.com'
</script>
  
  <style>
  </style>