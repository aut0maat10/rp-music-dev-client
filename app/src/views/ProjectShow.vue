<script setup>
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const project = projects.find((p) => p.slug === route.params.slug)
</script>

<template>
  <div v-if="project" class="pt-4 lg:p-6 w-full mx-auto">
    <h1 class="text-4xl font-bold text-green mb-4">{{ project.title }}</h1>
    <p class="text-neutral-400 mb-8">{{ project.longDescription }}</p>

    <!-- Role Section -->
    <div v-if="project.role && project.role.length" class="mb-6">
      <h2 class="text-2xl font-semibold text-magenta mb-2">My Role</h2>
      <ul class="list-disc pl-6 text-neutral-400">
        <li v-for="(item, index) in project.role" :key="index">{{ item }}</li>
      </ul>
    </div>

    <!-- Collaboration Section -->
    <div v-if="project.collaboration && project.collaboration.length" class="mb-6">
      <h2 class="text-2xl font-semibold text-magenta mb-2">Collaboration</h2>
      <ul class="list-disc pl-6 text-neutral-400">
        <li v-for="(item, index) in project.collaboration" :key="index">{{ item }}</li>
      </ul>
    </div>

    <!-- Outcome Section -->
    <div v-if="project.outcome && project.outcome.length" class="mb-6">
      <h2 class="text-2xl font-semibold text-magenta mb-2">Outcome</h2>
      <ul class="list-disc pl-6 text-neutral-400">
        <li v-for="(item, index) in project.outcome" :key="index">{{ item }}</li>
      </ul>
    </div>

    <!-- Stack Section -->
    <div class="flex flex-wrap gap-2 mb-8">
      <span
        v-for="tech in project.stack"
        :key="tech"
        class="bg-green text-black text-xs py-1 px-3 rounded-full"
      >
        {{ tech }}
      </span>
    </div>

    <!-- Live Project Link -->
    <a :href="project.url" target="_blank" class="text-magenta underline text-lg">
      View Live Project
    </a>

    <!-- Note Section -->
    <div v-if="project.note" class="mt-8 text-neutral-500 text-sm">
      <p><strong>💡 Note:</strong> {{ project.note }}</p>
    </div>
  </div>

  <div v-else class="p-6 text-center text-neutral-400">Project not found.</div>
</template>

<style scoped>
main > div:hover {
  transform: translateY(-2px);
}
</style>
