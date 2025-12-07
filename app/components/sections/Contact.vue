<template>
    <section id="contact" class="px-4 py-12">
        <div class="w-full">
            <!-- Header -->
            <div class="flex flex-col items-center justify-center gap-2 py-6 mb-12">
                <h1 class="text-base font-light uppercase text-primary-400">Get in touch</h1>
                <p class="text-base font-light text-black uppercase dark:text-white">Contact</p>
                <p class="font-light text-center text-gray-500 px-4 max-w-2xl">
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
                </p>
            </div>
            <div class="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 py-6 px-4 md:px-8 lg:px-16 xl:px-28">
                <div class="w-full lg:w-1/2">
                    <p class="py-6 text-lg font-light">Reach Me</p>
                    <div class="flex flex-col w-full gap-4">
                        <div
                            class="flex items-center w-full gap-4 px-4 md:px-8 py-6 shadow-lg bg-primary-50 rounded-2xl dark:bg-gray-800/70">
                            <Mail class="w-6 h-6 text-primary-400" />
                            <p class="text-base font-light text-gray-400 dark:text-white">
                                lafiikhai38@gmail.com
                            </p>
                        </div>
                        <div
                            class="flex items-center w-full gap-4 px-4 md:px-8 py-6 shadow-lg bg-primary-50 rounded-2xl dark:bg-gray-800/70">
                            <Phone class="w-6 h-6 text-primary-400" />
                            <p class="text-base font-light text-gray-400 dark:text-white">
                                +855 99 86 46 93
                            </p>
                        </div>
                        <div
                            class="flex items-center w-full gap-4 px-4 md:px-8 py-6 shadow-lg bg-primary-50 rounded-2xl dark:bg-gray-800/70">
                            <MapPin class="w-6 h-6 text-primary-400" />
                            <p class="text-base font-light text-gray-400 dark:text-white">
                                Khan Po Senchey, Phnom Penh, Cambodia
                            </p>
                        </div>
                    </div>
                    <p class="py-6 text-lg font-light">Follow Me</p>
                    <div class="flex flex-wrap items-center gap-4">
                        <nuxt-link to="https://github.com/CheaSophannarith">
                            <Github
                                class="p-2 text-gray-400 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800/70 hover:text-primary-400 bg-primary-50 transition-all duration-300 hover:shadow-[0_15px_30px_-8px_rgba(45,212,191,0.6)]"
                                size="50" />
                        </nuxt-link>
                        <nuxt-link to="https://t.me/FiiKhai">
                            <Send
                                class="p-2 text-gray-400 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800/70 hover:text-primary-400 bg-primary-50 transition-all duration-300 hover:shadow-[0_15px_30px_-8px_rgba(45,212,191,0.6)]"
                                size="50" />
                        </nuxt-link>
                        <nuxt-link to="https://www.facebook.com/rith.rith.582103/">
                            <Facebook
                                class="p-2 text-gray-400 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800/70 hover:text-primary-400 bg-primary-50 transition-all duration-300 hover:shadow-[0_15px_30px_-8px_rgba(45,212,191,0.6)]"
                                size="50" />
                        </nuxt-link>
                        <nuxt-link to="https://www.instagram.com/lafiikhai2_/">
                            <Instagram
                                class="p-2 text-gray-400 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800/70 hover:text-primary-400 bg-primary-50 transition-all duration-300 hover:shadow-[0_15px_30px_-8px_rgba(45,212,191,0.6)]"
                                size="50" />
                        </nuxt-link>
                    </div>
                    <div
                        class="py-16 md:py-24 mt-12 shadow-lg px-4 bg-gradient-to-br from-teal-600/60 via-teal-500/60 to-teal-600/60 rounded-2xl dark:from-teal-700/70 dark:via-teal-600/70 dark:to-teal-700/70">
                        <p class="mb-2 text-lg font-light text-center text-white">Open to opportunities</p>
                        <p class="text-base font-light text-center text-gray-200">Available for freelance projects</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="px-4 md:px-8 pt-8 pb-12 rounded-2xl bg-gray-800/50 dark:bg-gray-800/70">
                        <form class="flex flex-col gap-6">
                            <!-- Name Field -->
                            <div class="flex flex-col gap-2">
                                <label class="text-base font-light text-gray-300">Your Name</label>
                                <input type="text" placeholder="Fii"
                                    class="px-4 md:px-6 py-4 text-base font-light text-gray-400 transition-all duration-300 bg-gray-900 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 placeholder:text-gray-600" />
                            </div>

                            <!-- Email Field -->
                            <div class="flex flex-col gap-2">
                                <label class="text-base font-light text-gray-300">Your Email</label>
                                <input type="email" placeholder="fii@example.com"
                                    class="px-4 md:px-6 py-4 text-base font-light text-gray-400 transition-all duration-300 bg-gray-900 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 placeholder:text-gray-600" />
                            </div>

                            <!-- Phone Field -->
                            <div class="flex flex-col gap-2">
                                <label class="text-base font-light text-gray-300">Your Phone</label>
                                <input type="tel" placeholder="012 99 88 99"
                                    class="px-4 md:px-6 py-4 text-base font-light text-gray-400 transition-all duration-300 bg-gray-900 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 placeholder:text-gray-600" />
                            </div>

                            <!-- Message Field -->
                            <div class="flex flex-col gap-2">
                                <label class="text-base font-light text-gray-300">Message</label>
                                <textarea placeholder="Tell me about your project..." rows="6"
                                    class="px-4 md:px-6 py-4 text-base font-light text-gray-400 transition-all duration-300 bg-gray-900 border-2 border-gray-700 resize-none rounded-xl focus:outline-none focus:border-teal-500 placeholder:text-gray-600"></textarea>
                            </div>

                            <!-- Send Button -->
                            <button type="submit"
                                class="flex items-center justify-center gap-2 py-4 mt-4 md:mt-8 text-base font-light text-white transition-all duration-300 bg-teal-600 rounded-xl hover:bg-teal-500 hover:shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { Mail, Phone, MapPin, Github, Send, Facebook, Instagram } from 'lucide-vue-next';
</script>