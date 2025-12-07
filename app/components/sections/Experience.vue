<template>
    <section id="experience" class="px-4 py-12">
        <div class="flex flex-col items-center justify-center gap-2 py-6 mx-auto mb-12">
            <h1 class="font-light uppercase text-primary-400">My Journey</h1>
            <h1 class="font-light text-black uppercase dark:text-white">Experience & Education</h1>
        </div>

        <!-- Timeline -->
        <div class="relative max-w-5xl py-16 mx-auto">
            <!-- vertical line -->
            <div class="absolute left-1/2 top-0 h-full w-[2px] bg-teal-500/50 -translate-x-1/2"></div>

            <div v-for="(item, i) in journeys" :key="item.id" class="relative mb-20">
                <!-- left or right -->
                <div :class="[
                    'w-1/2',
                    i % 2 === 0 ? 'pr-8 mr-auto' : 'pl-8 ml-auto'
                ]">
                    <div class="dark:bg-[#0E1726] bg-primary-50 p-6 rounded-2xl shadow-lg text-left">
                        <div class="flex items-center justify-center gap-3">
                            <component :is="item.icon" class="w-8 h-8 text-teal-400" />
                            <div>
                                <h3 class="text-xl font-bold">{{ item.title }}</h3>
                                <p class="text-teal-400">{{ item.Organization }}</p>
                            </div>
                        </div>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">{{ item.timestamp }}</p>
                        <p class="mt-4 text-gray-400 dark:text-gray-300">{{ item.description }}</p>
                        <ul v-if="item.list && item.list.length" class="mt-4 space-y-2">
                            <li v-for="(point, idx) in item.list" :key="idx"
                                class="text-sm text-gray-400 dark:text-gray-300">
                                • {{ point }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- dot -->
                <div class="absolute w-4 h-4 -translate-x-1/2 bg-teal-400 rounded-full left-1/2 top-2"></div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import { Briefcase, GraduationCap } from 'lucide-vue-next';

    const journeys = [
        {
            id: 1,
            title: 'Bachelor of Science in Computer Science',
            Organization: 'Royal University of Phnom Penh (RUPP)',
            icon: GraduationCap,
            timestamp: '2022-2025',
            description: 'Studying core computer science concepts, programming languages, and software engineering principles at RUPP University.',
            list: [
                'GPA: #/4.0',
                'Relevant Coursework: Year 1: Foundations Year 2: Databases & Data Structures Year 3: Data Analysis Year 4: Software Engineering (Programming languages covered in all years)',
                'Activities: Participated in university coding competitions and tech workshops, contributed to group projects using modern web technologies, and took part in CS department events and study groups'
            ]
        },
        {
            id: 2,
            title: 'Internship as Developer',
            icon: Briefcase,
            Organization: 'Digital IT Solution Company',
            timestamp: 'March 2025 - June 2025',
            description: 'Worked as a developer intern, contributing to web development projects using Vue.js and Laravel frameworks.',
            list: [
                'Collaborated with a team of developers to build and maintain web applications using Vue.js for the frontend and Laravel for the backend.',
                'Gained hands-on experience with version control systems like Git and project management tools such as Jira.'
            ]
        },
        {
            id: 3,
            title: 'Contract Developer',
            icon: Briefcase,
            Organization: 'Digital IT Solution Company',
            timestamp: 'June 2025 - Present',
            description: 'Currently working as a contract developer, focusing on full-stack web development projects.',
            list: [
                'Developing and deploying web applications, ensuring responsiveness and cross-browser compatibility.',
                'Implementing RESTful APIs and integrating third-party services to enhance application functionality.'
            ]
        }
    ]

</script>
