<template>
    <header class="container flex items-center justify-between mx-auto max-w-7xl">
        <div>
            <h1 class="text-3xl font-bold">
                <nuxt-link to="/">
                    <nuxt-img src="/logo.png" alt="Logo" width="90" height="90" class="inline-block mr-2" />
                </nuxt-link>
            </h1>
        </div>
        <div class="flex items-center gap-2">
            <nuxt-link to="/" class="px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400"
                active-class="bg-primary-100 text-primary-400">Home</nuxt-link>
            <nuxt-link to="/about" class="px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400"
                active-class="bg-primary-100 text-primary-400">About</nuxt-link>
            <nuxt-link to="/skill" class="px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400"
                active-class="bg-primary-100 text-primary-400">Skills</nuxt-link>
            <nuxt-link to="/project"
                class="px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400"
                active-class="bg-primary-100 text-primary-400">Projects</nuxt-link>
            <nuxt-link to="/experience"
                class="px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400"
                active-class="bg-primary-100 text-primary-400">Experience</nuxt-link>
            <nuxt-link to="/contact"
                class="px-6 py-2 text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-400"
                active-class="bg-primary-100 text-primary-400">Contact</nuxt-link>
        </div>
        <div class="flex items-center gap-2">
            <div>
                <DropdownMenu align="end">
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline"
                            class="px-6 py-2 text-gray-500 border-gray-300 rounded-lg hover:bg-primary-50 hover:text-primary-400 border-2 hover:border-primary-400">
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
                <Button variant="outline" size="icon" aria-label="Submit"
                    class="px-2 py-2 text-gray-500 bg-gray-200 rounded-3xl hover:bg-primary-50 hover:text-primary-400 hover:border-primary-400"
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
    </header>
</template>

<script setup lang="ts">
    import { Moon, Sun, Linkedin, Facebook, Instagram, Send } from 'lucide-vue-next';

    const colorMode = useColorMode();

    const toggleLightMode = () => {
        colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
    };
</script>