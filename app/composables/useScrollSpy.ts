import { ref, onMounted, onUnmounted } from 'vue';

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
    const activeSection = ref<string>('');

    const handleScroll = () => {
        const scrollPosition = window.scrollY + offset;

        // Find the current section
        for (let i = sectionIds.length - 1; i >= 0; i--) {
            const sectionId = sectionIds[i];
            if (!sectionId) continue;

            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                if (scrollPosition >= sectionTop) {
                    activeSection.value = sectionId;
                    break;
                }
            }
        }

        // Set first section as active when at top of page
        if (window.scrollY < offset && sectionIds[0]) {
            activeSection.value = sectionIds[0];
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 100; // Height of sticky header + some padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    onMounted(() => {
        handleScroll(); // Set initial active section
        window.addEventListener('scroll', handleScroll, { passive: true });
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return {
        activeSection,
        scrollToSection
    };
};
