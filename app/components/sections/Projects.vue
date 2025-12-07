<template>
    <section id="project" class="px-4 py-12">
        <div class="flex flex-col items-center justify-center gap-2 py-6 mx-auto mb-12">
            <h1 class="font-light uppercase text-primary-400">My Works</h1>
            <h1 class="font-light text-black uppercase dark:text-white">Feature Projects</h1>
        </div>

        <!-- Filter Buttons -->
        <div class="flex items-center justify-center gap-6 mx-auto mb-12">
            <div v-for="item in filters" :key="item">
                <Button
                    variant="outline"
                    @click="projectsStore.setFilter(item)"
                    :class="[
                        'px-8 py-4 font-light border border-primary-400 capitalize transition-colors',
                        projectsStore.activeFilter === item
                            ? 'bg-primary-400 text-white hover:bg-primary-500'
                            : 'hover:bg-primary-50 dark:hover:bg-primary-900/20'
                    ]"
                >
                    {{ item }}
                </Button>
            </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
            <div
                v-for="project in projectsStore.filteredProjects"
                :key="project.id"
                class="overflow-hidden transition-transform duration-300 bg-white border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1"
            >
                <!-- Image with Hover Effect -->
                <div class="relative overflow-hidden group h-60 bg-gray-200 dark:bg-gray-700">
                    <img
                        :src="project.image"
                        :alt="project.title"
                        class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        @error="(e) => handleImageError(e, project.image)"
                        @load="() => console.log('Image loaded:', project.image)"
                    />
                    <!-- Overlay with Icons -->
                    <div class="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                        <a
                            v-if="project.link"
                            :href="project.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-white rounded-full hover:scale-110"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <a
                            :href="project.github"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-white rounded-full hover:scale-110"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Project Details -->
                <div class="p-6">
                    <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                        {{ project.title }}
                    </h3>
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {{ project.description }}
                    </p>
                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="tech in project.technologies"
                            :key="tech"
                            class="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                        >
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useProjectsStore } from '@/stores/projects';
import { onMounted } from 'vue';

const projectsStore = useProjectsStore();
const filters = ['all', 'fullstack', 'frontend'];

onMounted(() => {
    console.log('Projects loaded:', projectsStore.filteredProjects);
});

const handleImageError = (event, imagePath) => {
    console.error('Image failed to load:', imagePath, 'Attempted URL:', event.target.src);
    event.target.src = '/favicon.ico'; // Fallback image
};
</script>