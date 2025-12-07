<template>
    <section id="skill">
        <!-- Header -->
        <div class="flex flex-col items-center justify-center gap-2 py-6 mb-12">
            <h1 class="text-base font-light uppercase text-primary-400">Expertise</h1>
            <p class="text-base font-light text-black uppercase dark:text-white">skill & technologies</p>
        </div>

        <!-- Infinite Scroll Tech Stack -->
        <div class="relative w-full overflow-hidden">
            <div class="flex animate-scroll">
                <!-- First set of logos -->
                <div class="flex items-center gap-12 px-6 shrink-0">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
                        alt="Nuxt.js" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                        alt="Next.js" class="w-16 h-16 dark:invert" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                        alt="Tailwind CSS" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        alt="TypeScript" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        alt="JavaScript" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                        alt="Laravel" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                        alt="Docker" class="w-16 h-16" />
                </div>

                <!-- Duplicate set for seamless loop -->
                <div class="flex items-center gap-12 px-6 shrink-0">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
                        alt="Nuxt.js" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                        alt="Next.js" class="w-16 h-16 dark:invert" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                        alt="Tailwind CSS" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        alt="TypeScript" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        alt="JavaScript" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                        alt="Laravel" class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"
                        class="w-16 h-16" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                        alt="Docker" class="w-16 h-16" />
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-2 mt-16 mb-16">
            <h1 class="text-base font-light text-black uppercase dark:text-white">Additional Technologies</h1>
        </div>
        <div class="px-4 mx-auto mb-16 max-w-7xl">
            <div class="flex flex-col items-center gap-3">
                <!-- Row 1: 4 items -->
                <div class="flex justify-center gap-3">
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">Rest
                        API</span>
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">Node.js</span>
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">GitHub</span>
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">Vite</span>
                </div>
                <!-- Row 2: 3 items -->
                <div class="flex justify-center gap-3">
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">Webpack</span>
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">npm</span>
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">Figma</span>
                </div>
                <!-- Row 3: 2 items -->
                <div class="flex justify-center gap-3">
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">Postman</span>
                    <span
                        class="px-4 py-2 text-sm font-light text-black transition-colors border rounded-lg dark:text-white border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">VS
                        Code</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-50%);
        }
    }

    .animate-scroll {
        animation: scroll 10s linear infinite;
    }

    .animate-scroll:hover {
        animation-play-state: paused;
    }
</style>
