<script setup>

</script>

<template>
  <main>
    <div class="text-2xl text-magenta ml-3"><h1>Projects</h1></div>
    <!-- CARD 1 -->
    <div
      class="flex flex-col rounded-lg my-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-h-xl md:flex-row hover:bg-darkred">
      <!-- <img
        class="h-28 p-4 w-100 rounded-t-lg object-cover md:h-50 md:!rounded-none md:!rounded-l-lg"
        :src="'src/assets/rapid-fire-screenshot.png'"
        alt="" /> -->
      <div class="flex flex-col justify-start p-3">
        <h5
          class="mb-2 text-xl font-medium text-green dark:text-neutral-50">
          Rapid Fire
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Rapid Fire is a dynamic quiz template for ecommerce and more. The quiz includes user email input and shows a dynamic results view that corresponds with the user's answers. 
        </p>
        <div class="flex mb-4">
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            Vue.js
          </button>
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            Typescript
          </button>
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            CI/CD
          </button>
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            AWS S3
          </button>
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            Cloudfront
          </button>
        </div>
      </div>
    </div>
    <!-- END CARD 1 -->
    <!-- CARD 2 -->
    <div
      class="flex flex-col rounded-lg my-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-h-xl md:flex-row hover:bg-darkred">
      <!-- <img
        class="h-28 p-4 w-100 rounded-t-lg object-cover md:h-50 md:!rounded-none md:!rounded-l-lg"
        :src="'/src/assets/rapid-fire-screenshot.png'"
        alt="" /> -->
      <div class="flex flex-col justify-start p-3">
        <h5
          class="mb-2 text-xl font-medium text-green dark:text-neutral-50">
          Electric Sauna Productions
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          One page website for Electric Sauna Productions to showcase production music composed for TV and music libraries. 
        </p>
        <div class="flex mb-4">
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            Vue.js
          </button>
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            JavaScript
          </button>
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            Tailwind CSS
          </button>
          <button class="bg-green text-black text-xs mr-4 py-2 px-4 rounded-full">
            Netlify
          </button>
        </div>
      </div>
    </div>
    <!-- END CARD 2 -->
  </main>
</template>
