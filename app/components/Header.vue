<template>
    <header
        :class="[
            'sticky top-0 z-50 transition-all duration-300 w-full',
            isScrolled
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
                : 'bg-transparent'
        ]">
        <div class="container flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
            <div>
                <h1 class="text-3xl font-bold">
                    <a href="#home" @click.prevent="scrollToSection('home')">
                        <nuxt-img src="/Logo.png" alt="Logo" width="90" height="90"
                            class="inline-block mr-2 w-16 h-16 md:w-[90px] md:h-[90px]" />
                    </a>
                </h1>
            </div>

            <nav class="items-center hidden gap-2 lg:flex">
            <a href="#home" @click.prevent="scrollToSection('home')"
                :class="['px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400 transition-colors', activeSection === 'home' ? 'bg-primary-100 text-primary-400' : '']">
                Home
            </a>
            <a href="#about" @click.prevent="scrollToSection('about')"
                :class="['px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400 transition-colors', activeSection === 'about' ? 'bg-primary-100 text-primary-400' : '']">
                About
            </a>
            <a href="#skill" @click.prevent="scrollToSection('skill')"
                :class="['px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400 transition-colors', activeSection === 'skill' ? 'bg-primary-100 text-primary-400' : '']">
                Skills
            </a>
            <a href="#project" @click.prevent="scrollToSection('project')"
                :class="['px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400 transition-colors', activeSection === 'project' ? 'bg-primary-100 text-primary-400' : '']">
                Projects
            </a>
            <a href="#experience" @click.prevent="scrollToSection('experience')"
                :class="['px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400 transition-colors', activeSection === 'experience' ? 'bg-primary-100 text-primary-400' : '']">
                Experience
            </a>
            <a href="#contact" @click.prevent="scrollToSection('contact')"
                :class="['px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400 transition-colors', activeSection === 'contact' ? 'bg-primary-100 text-primary-400' : '']">
                Contact
            </a>
            </nav>

            <div class="items-center hidden gap-2 lg:flex">
            <div>
                <DropdownMenu align="end">
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline"
                            class="px-6 py-2 text-gray-500 border-2 border-gray-300 rounded-lg hover:bg-primary-50 hover:text-primary-400 hover:border-primary-400 dark:bg-none">
                            Socials
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="bg-white dark:bg-gray-800">
                        <DropdownMenuGroup>
                            <DropdownMenuItem
                                class="hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400">
                                <a href="https://www.linkedin.com/in/chea-sophannarith-b21511239/" target="_blank"
                                    class="flex items-center gap-2">
                                    <Linkedin class="w-4 h-4" />
                                    LinkedIn
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                class="hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400">
                                <a href="https://t.me/FiiKhai" target="_blank" class="flex items-center gap-2">
                                    <Send class="w-4 h-4" />
                                    Telegram
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                class="hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400">
                                <a href="https://www.facebook.com/rith.rith.582103/" target="_blank"
                                    class="flex items-center gap-2">
                                    <Facebook class="w-4 h-4" />
                                    Facebook
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                class="hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400">
                                <a href="https://www.instagram.com/lafiikhai2_/" target="_blank"
                                    class="flex items-center gap-2">
                                    <Instagram class="w-4 h-4" />
                                    Instagram
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div>
                <Button variant="outline" size="icon" aria-label="Toggle theme"
                    class="px-2 py-2 text-gray-500 bg-gray-200 rounded-3xl hover:bg-primary-50 hover:text-primary-400 hover:border-primary-400 dark:bg-transparent dark:border-2 dark:border-gray-300 dark:hover:border-primary-400"
                    @click="toggleLightMode">
                    <div v-if="colorMode.preference === 'light'">
                        <Sun />
                    </div>
                    <div v-else>
                        <Moon />
                    </div>
                </Button>
            </div>
            </div>

            <!-- Mobile Menu -->
            <div class="flex items-center gap-2 lg:hidden">
            <!-- Theme Toggle (Mobile) -->
            <Button variant="outline" size="icon" aria-label="Toggle theme"
                class="px-2 py-2 text-gray-500 bg-gray-200 rounded-3xl hover:bg-primary-50 hover:text-primary-400 hover:border-primary-400 dark:bg-transparent dark:border-2 dark:border-gray-300 dark:hover:border-primary-400"
                @click="toggleLightMode">
                <div v-if="colorMode.preference === 'light'">
                    <Sun class="w-5 h-5" />
                </div>
                <div v-else>
                    <Moon class="w-5 h-5" />
                </div>
            </Button>

            <!-- Mobile Menu Dropdown -->
            <DropdownMenu v-model:open="mobileMenuOpen">
                <DropdownMenuTrigger as-child>
                    <Button variant="outline" size="icon" aria-label="Menu"
                        class="px-2 py-2 text-gray-500 border-2 border-gray-300 rounded-lg hover:bg-primary-50 hover:text-primary-400 hover:border-primary-400">
                        <Menu class="w-6 h-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-56 bg-white dark:bg-gray-800">
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            :class="['hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400 cursor-pointer', activeSection === 'home' ? 'bg-primary-100 text-primary-400' : '']"
                            @click="handleMobileNavClick('home')">
                            <Home class="w-4 h-4 mr-2" />
                            Home
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            :class="['hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400 cursor-pointer', activeSection === 'about' ? 'bg-primary-100 text-primary-400' : '']"
                            @click="handleMobileNavClick('about')">
                            <User class="w-4 h-4 mr-2" />
                            About
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            :class="['hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400 cursor-pointer', activeSection === 'skill' ? 'bg-primary-100 text-primary-400' : '']"
                            @click="handleMobileNavClick('skill')">
                            <Sparkles class="w-4 h-4 mr-2" />
                            Skills
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            :class="['hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400 cursor-pointer', activeSection === 'project' ? 'bg-primary-100 text-primary-400' : '']"
                            @click="handleMobileNavClick('project')">
                            <Folder class="w-4 h-4 mr-2" />
                            Projects
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            :class="['hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400 cursor-pointer', activeSection === 'experience' ? 'bg-primary-100 text-primary-400' : '']"
                            @click="handleMobileNavClick('experience')">
                            <Briefcase class="w-4 h-4 mr-2" />
                            Experience
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            :class="['hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400 cursor-pointer', activeSection === 'contact' ? 'bg-primary-100 text-primary-400' : '']"
                            @click="handleMobileNavClick('contact')">
                            <Mail class="w-4 h-4 mr-2" />
                            Contact
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Socials</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            class="hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400">
                            <a href="https://www.linkedin.com/in/chea-sophannarith-b21511239/" target="_blank"
                                class="flex items-center w-full gap-2">
                                <Linkedin class="w-4 h-4" />
                                LinkedIn
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            class="hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400">
                            <a href="https://t.me/FiiKhai" target="_blank" class="flex items-center w-full gap-2">
                                <Send class="w-4 h-4" />
                                Telegram
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            class="hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400">
                            <a href="https://www.facebook.com/rith.rith.582103/" target="_blank"
                                class="flex items-center w-full gap-2">
                                <Facebook class="w-4 h-4" />
                                Facebook
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            class="hover:bg-primary-50 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400">
                            <a href="https://www.instagram.com/lafiikhai2_/" target="_blank"
                                class="flex items-center w-full gap-2">
                                <Instagram class="w-4 h-4" />
                                Instagram
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Moon, Sun, Linkedin, Facebook, Instagram, Send, Menu, Home, User, Sparkles, Folder, Briefcase, Mail } from 'lucide-vue-next';

const colorMode = useColorMode();

const toggleLightMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};

// Scroll spy
const sectionIds = ['home', 'about', 'skill', 'project', 'experience', 'contact'];
const { activeSection, scrollToSection } = useScrollSpy(sectionIds, 150);

// Header scroll state
const isScrolled = ref(false);

const handleHeaderScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

// Mobile menu state
const mobileMenuOpen = ref(false);

const handleMobileNavClick = (sectionId: string) => {
    // Close the menu first, then scroll after a small delay
    mobileMenuOpen.value = false;
    setTimeout(() => {
        scrollToSection(sectionId);
    }, 100);
};

onMounted(() => {
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll(); // Check initial state
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleHeaderScroll);
});
</script>
