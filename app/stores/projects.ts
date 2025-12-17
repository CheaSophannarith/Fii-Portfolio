import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProjectsStore = defineStore('projects', () => {

    const projects = ref([
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A personal portfolio website to showcase my projects and skills.',
            link: 'https://fii-portfolio.vercel.app/',
            github: 'https://github.com/CheaSophannarith/Fii-Portfolio.git',
            image: '/portfolio.png',
            technologies: ['NuxtJs', 'Pinia', 'Vite', 'Tailwind CSS'],
            tags: ['all', 'frontend'],
        },
        {
            id: 2,
            title: 'Cinema Booking System',
            description: 'A web application for booking movie tickets online.',
            link: '',
            github: 'https://github.com/CheaSophannarith/Cinema-Booking-Systems.git',
            image: '/cinema.png',
            technologies: ['VueJs', 'Lavarel', 'MySQL', 'Tailwind CSS'],
            tags: ['all', 'fullstack'],
        },
        {
            id: 3,
            title: 'Funiture E-commerce',
            description: 'An e-commerce platform for buying and selling furniture online.',
            link: '',
            github: 'https://github.com/CheaSophannarith/vuejs-project-semester1.git',
            image: '/funiture.png',
            technologies: ['VueJs', 'Pinia', 'Vuetify'],
            tags: ['all', 'frontend'],
        },
        {
            id: 4,
            title: 'Cambodia Board Jobs',
            description: 'A job board website for job seekers and employers in Cambodia.',
            link: 'https://cambodia-board-jobs-26f1.vercel.app/',
            github: 'https://github.com/CheaSophannarith/cambodia-board-jobs.git',
            image: '/boardjobs.png',
            technologies: ['NextJs', 'Supabase', 'Tailwind CSS'],
            tags: ['all', 'fullstack'],
        }
    ]);

    const activeFilter = ref<'all' | string>('all');

    const filteredProjects = computed(() => {
        if (activeFilter.value === 'all') {
            return projects.value;
        } else {
            return projects.value.filter(project =>
                project.tags.map(tag => tag.toLowerCase()).includes(activeFilter.value)
            );
        }
    });

    function setFilter(tag: 'all' | string) {
        activeFilter.value = tag;
    }

    function initFromStorage() {
        const storedFilter = localStorage.getItem('activeProjectFilter');
        if (storedFilter) {
            activeFilter.value = storedFilter;
        }
    }

    return {
        projects,
        activeFilter,
        filteredProjects,
        setFilter,
        initFromStorage,
    };

});