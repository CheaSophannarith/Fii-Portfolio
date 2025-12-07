<template>
    <section id="about">
        <div class="flex flex-col items-center justify-center gap-2 py-6 mx-auto mb-12">
            <h1 class="font-light uppercase text-primary-400">Get to know me</h1>
            <h1 class="font-light text-black uppercase dark:text-white">About</h1>
        </div>
        <div
            class="flex flex-col gap-6 px-4 pt-2 pb-8 md:px-8 md:pt-4 md:pb-16 md:flex-row md:items-center md:justify-center md:gap-6 lg:gap-8 xl:gap-12">
            <!-- Image on the left -->
            <div class="flex items-center justify-center w-full md:w-1/2 lg:w-2/5 md:flex-shrink-0">
                <img src="/About_Image.png" alt="Chea Developer"
                    class="w-full h-auto max-w-xs border-4 rounded-lg sm:max-w-sm md:max-w-md border-primary-400" />
            </div>
            <!-- Text on the right -->
            <div
                class="flex flex-col items-center gap-4 mx-auto md:items-start md:mx-0 md:mr-10 lg:mr-16 md:w-1/2 lg:w-3/5">
                <div>
                    <p class="text-base font-light text-black dark:text-white">Passionate Developer & Problem Solver
                    </p>
                </div>
                <div>
                    <p class="text-sm font-light text-center text-gray-500 sm:text-base md:text-left">I'm
                        a
                        web developer
                        with 1
                        year of experience building modern web applications. I specialize in Vue.js, Nuxt.js, and
                        Laravel, and I focus on creating clean, responsive, and user-friendly digital experiences.
                    </p>
                </div>
                <div class="text-sm font-light text-center text-gray-500 sm:text-base md:text-left">
                    <p>When I'm not coding, I enjoy exploring new technologies and improving my skills through small
                        personal projects. I like staying updated with modern tools and trends in the developer
                        world,
                        and I'm always looking for ways to learn and grow.</p>
                </div>
                <div class="mt-2">
                    <p class="text-base font-light text-black dark:text-white">Education</p>
                </div>
                <div
                    class="flex items-center w-full max-w-lg gap-3 p-3 border rounded-lg sm:gap-4 sm:p-4 border-primary-400">
                    <div class="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28">
                        <nuxt-img src="/MOEYS.png" class="object-contain w-full h-full" alt="MOEYS Logo"></nuxt-img>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-sm font-light text-black sm:text-base dark:text-white">Hun Sen Serey Sophorn
                        </p>
                        <p class="text-xs font-light text-gray-500 sm:text-sm">Primary School (2009-2015)</p>
                    </div>
                </div>
                <div
                    class="flex items-center w-full max-w-lg gap-3 p-3 border rounded-lg sm:gap-4 sm:p-4 border-primary-400">
                    <div class="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28">
                        <nuxt-img src="/MOEYS.png" class="object-contain w-full h-full" alt="MOEYS Logo"></nuxt-img>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-sm font-light text-black sm:text-base dark:text-white">Hun Sen Pochentong</p>
                        <p class="text-xs font-light text-gray-500 sm:text-sm">Secondary School (2015-2019)</p>
                    </div>
                </div>
                <div
                    class="flex items-center w-full max-w-lg gap-3 p-3 border rounded-lg sm:gap-4 sm:p-4 border-primary-400">
                    <div class="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28">
                        <nuxt-img src="/MOEYS.png" class="object-contain w-full h-full" alt="MOEYS Logo"></nuxt-img>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-sm font-light text-black sm:text-base dark:text-white">Hun Sen Borey 100K</p>
                        <p class="text-xs font-light text-gray-500 sm:text-sm">High School (2019-2021)</p>
                    </div>
                </div>
                <div
                    class="flex items-center w-full max-w-lg gap-3 p-3 border rounded-lg sm:gap-4 sm:p-4 border-primary-400">
                    <div class="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28">
                        <nuxt-img src="/rupp.png" class="object-contain w-full h-full" alt="RUPP Logo"></nuxt-img>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <p class="text-sm font-light text-black sm:text-base dark:text-white">Royal University Of
                            Phnom
                            Penh</p>
                        <p class="text-xs font-light text-gray-500 sm:text-sm">Bachelor Degree of Computer Science
                            (2022-2025)</p>
                    </div>
                </div>
                <div
                    class="flex items-center w-full max-w-lg gap-3 p-3 border rounded-lg sm:gap-4 sm:p-4 border-primary-400">
                    <div class="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28">
                        <nuxt-img src="/puc.png" class="object-contain w-full h-full" alt="PUC Logo"></nuxt-img>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <p class="text-sm font-light text-black sm:text-base dark:text-white">Pannasastra University
                        </p>
                        <p class="text-xs font-light text-gray-500 sm:text-sm">Diploma of English</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
