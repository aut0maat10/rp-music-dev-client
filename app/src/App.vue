<script setup>
// import { onBeforeMount } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
// import Posts from './components/Posts.vue'

// let blogView;
// onBeforeMount(() => {
  const route = useRoute();
//   console.log(route.name)
//   blogView = false
// })
</script>

<template>
  <!-- <Transition name="fade" mode="out-in"> -->
  <div v-if="route.meta.layout === 'AppLayout'" class="app-wrapper p-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:py-0 lg:px-8">
    <header class="max-h-screen lg:flex lg:place-items-center lg:justify-center">
    <div class="outer">
      <div class="container">
        <h3 class="text-green text-xl">Hi, my name is</h3>
        <h1 class="text-6xl text-magenta py-3 font-bold">Robin Pahlman.</h1>
        <h3 class="text-4xl pb-3 font-normal text-white">I'm a freelance web developer.</h3>
        <p class="">I build web solutions for clients big and small.</p>
      </div>
    
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="wrapper lg:flex lg:flex-wrap lg:place-items-start ">
        <nav class="w-100 mt-8 flex gap-4 text-xl">
          <RouterLink to="/" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/', 'text-green': $route.path != '/' }">About</RouterLink>
          <RouterLink to="/projects" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/projects', 'text-green': $route.path != '/projects' }">Projects</RouterLink>
          <RouterLink to="/contact" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/contact', 'text-green': $route.path != '/contact' }">Contact</RouterLink>
          <!-- <RouterLink to="/posts" class="hover:text-magenta" :class="{ 'text-white underline': $route.path === '/posts', 'text-green': $route.path != '/posts' }">Blog</RouterLink> -->
        </nav>
      </div>
    </div>
    </header>  
    <RouterView />
  </div>
  
    <div v-else-if="route.meta.layout === 'BlogLayout'" class="blog-wrapper">
      <nav class="w-100 mt-8 flex gap-4 text-xl">
        <RouterLink to="/" class="hover:text-magenta" :class="{ 'text-white underline': $route.path === '/', 'text-green': $route.path != '/' }">About</RouterLink>
        <RouterLink to="/projects" class="hover:text-magenta" :class="{ 'text-white underline': $route.path === '/projects', 'text-green': $route.path != '/projects' }">Projects</RouterLink>
        <RouterLink to="/posts" class="hover:text-magenta" :class="{ 'text-white underline': $route.path === '/posts', 'text-green': $route.path != '/posts' }">Blog</RouterLink>
      </nav>
      <Transition name="fade" mode="out-in">
        <RouterView />
      </Transition>
    </div>
  <!-- </Transition> -->
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
