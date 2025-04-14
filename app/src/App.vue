<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed, provide } from 'vue'

const route = useRoute()

// Dynamically determine if the sidebar should be collapsed
const isSidebarCollapsed = computed(() => route.name === 'project-show')

// Provide a toggleSidebar function for child components
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
provide('toggleSidebar', toggleSidebar)
</script>

<template>
  <div
    v-if="route.meta.layout === 'AppLayout'"
    class="app-wrapper p-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:py-0 lg:px-8"
    :class="{
      'lg:grid-cols-[1fr_1fr]': !isSidebarCollapsed,
      'lg:grid-cols-[1fr_2fr]': isSidebarCollapsed
    }"
  >
    <header
      class="max-h-screen lg:flex lg:place-items-center lg:justify-center transition-all duration-300 lg-w-full"
    >
      <div class="outer">
        <div class="container">
          <h3 class="text-green text-xl">Hi, my name is</h3>
          <h1 class="text-6xl text-magenta py-3 font-bold">Robin Pahlman.</h1>
          <h3 class="text-4xl pb-3 font-normal text-white">I'm a freelance web developer.</h3>
          <p class="">I build web solutions for clients big and small.</p>
        </div>

        <div class="wrapper lg:flex lg:flex-wrap lg:place-items-start">
          <nav class="w-100 mt-8 flex gap-4 text-xl">
            <RouterLink
              to="/"
              class="hover:text-magenta"
              :class="{
                'text-magenta underline': $route.path === '/',
                'text-green': $route.path != '/'
              }"
            >
              About
            </RouterLink>
            <RouterLink
              to="/projects"
              class="hover:text-magenta"
              :class="{
                'text-magenta underline': $route.path === '/projects',
                'text-green': $route.path != '/projects'
              }"
            >
              Projects
            </RouterLink>
            <RouterLink
              to="/contact"
              class="hover:text-magenta"
              :class="{
                'text-magenta underline': $route.path === '/contact',
                'text-green': $route.path != '/contact'
              }"
            >
              Contact
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>
    <RouterView />
  </div>

  <div v-else-if="route.meta.layout === 'BlogLayout'" class="blog-wrapper">
    <nav class="w-100 mt-8 flex gap-4 text-xl">
      <RouterLink
        to="/"
        class="hover:text-magenta"
        :class="{ 'text-white underline': $route.path === '/', 'text-green': $route.path != '/' }"
      >
        About
      </RouterLink>
      <RouterLink
        to="/projects"
        class="hover:text-magenta"
        :class="{
          'text-white underline': $route.path === '/projects',
          'text-green': $route.path != '/projects'
        }"
      >
        Projects
      </RouterLink>
      <RouterLink
        to="/posts"
        class="hover:text-magenta"
        :class="{
          'text-white underline': $route.path === '/posts',
          'text-green': $route.path != '/posts'
        }"
      >
        Blog
      </RouterLink>
    </nav>
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Add smooth transition for sidebar width */
header {
  transition: width 0.9s ease;
}

header.lg\:w-1\/4 {
  width: 35%;
}

header.lg\:w-1\/6 {
  width: 20%;
}
</style>
