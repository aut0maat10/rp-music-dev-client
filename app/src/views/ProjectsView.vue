<script setup>
import { projects } from '@/data/projects'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const toggleSidebar = inject('toggleSidebar') // Access the toggleSidebar function

const goToProject = (slug) => {
  toggleSidebar() // Collapse the sidebar
  router.push(`/project/${slug}`) // Navigate to the project route
}
</script>

<template>
  <main class="p-0 lg:p-6 flex flex-col gap-6">
    <div
      v-for="project in projects"
      :key="project.slug"
      @click="goToProject(project.slug)"
      class="cursor-pointer flex flex-col justify-between rounded-lg shadow-lg hover:bg-darkred px-2 py-4 transition-all"
    >
      <h3 class="text-xl font-semibold text-green">{{ project.title }}</h3>
      <p class="text-neutral-400 my-3">{{ project.shortDescription }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="bg-green text-black text-xs py-1 px-3 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </main>
</template>
