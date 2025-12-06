<template>
    <section id="home">
        <div
            class="flex flex-col gap-6 px-4 py-8 md:px-8 md:py-16 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
            <div
                class="flex flex-col items-center gap-6 mx-auto md:items-start md:mx-0 md:w-1/2 lg:max-w-3xl lg:ml-32">
                <div>
                    <p class="text-base font-normal">Hi, I'm <span class="text-primary-400">Chea Developer</span>
                    </p>
                </div>
                <div>
                    <p class="text-base text-center text-gray-500 md:text-left">Developer creating beautiful, fast,
                        and
                        user-friendly web
                        experiences.
                        Passionate about clean code and crafting seamless digital interactions. Always eager to
                        learn and
                        take
                        on projects that challenge me to grow.</p>
                </div>
                <div class="flex gap-4">
                    <Button class="px-8 py-6 text-white" @click="scrollToSection('project')">
                        Projects
                    </Button>
                    <Button class="px-8 py-6 text-white" @click="scrollToSection('contact')">
                        Contact
                    </Button>
                </div>
            </div>
            <div class="flex items-center justify-center w-full md:w-1/2 md:flex-shrink-0">
                <picture class="block w-full max-w-md">
                    <!-- Desktop: 1200x800 -->
                    <source media="(min-width: 1024px)" srcset="/Profile_1200x800.jpg" />
                    <!-- Tablet: 800x600 -->
                    <source media="(min-width: 768px)" srcset="/Profile_800x600.jpg" />
                    <!-- Mobile: 600x400 -->
                    <img src="/Profile_600x400.jpg" alt="Chea Developer"
                        class="w-full h-auto border-4 rounded-lg border-primary-400" />
                </picture>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const sectionIds = ['home', 'about', 'skill', 'project', 'experience', 'contact'];
const { scrollToSection } = useScrollSpy(sectionIds);
</script>
