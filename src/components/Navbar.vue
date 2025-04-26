//navbar.vue
<template>
  <div class="navbar-wrapper" :class="{ 'navbar-scrolled': isScrolled }">
    <nav
      class="bg-white dark:bg-black-200 backdrop-blur-md shadow-lg rounded-3xl shadow-gray-300/50 dark:shadow-gray-700/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo Section -->
          <div class="flex-shrink-0 flex items-center">
            <div class="font-bold text-xl text-gray-900 dark:text-white">
              Portfolio
            </div>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-8">
              <!-- Main Navigation -->
              <div class="flex space-x-6 relative">
                <router-link v-for="(item, index) in navigationItems" :key="index" :to="item.to"
                  class="group relative py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  {{ item.text }}
                </a>
              </div>

              <!-- Right Controls -->
              <div class="flex items-center space-x-4 ml-6">
                <!-- Theme Toggle -->
                <button @click="toggleDarkMode"
                  class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  :title="darkMode ? $t('navbar.lightMode') : $t('navbar.darkMode')
                    ">
                  <svg v-if="darkMode" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </button>

                <!-- Language Selector -->
                <div class="relative">
                  <button @click.stop="isLangMenuOpen = !isLangMenuOpen"
                    class="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
                    <img :src="currentLanguage === 'TH' ? 'img/th.png' : 'img/en.png'
                      " class="w-6 h-6 rounded-sm" :alt="currentLanguage === 'TH' ? 'Thai flag' : 'English flag'
                        " />
                    <svg class="h-5 w-5 ml-1 transition-transform duration-300"
                      :class="{ 'rotate-180': isLangMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <transition enter-active-class="transition ease-out duration-200"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <div v-if="isLangMenuOpen"
                      class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                      <div class="py-1">
                        <button v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)"
                          class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                          <img :src="lang.flag" class="w-5 h-5 mr-2 rounded-sm" :alt="lang.name" />
                          {{ lang.name }}
                        </button>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <svg class="h-6 w-6" :class="{ hidden: isMobileMenuOpen, block: !isMobileMenuOpen }" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6" :class="{ hidden: !isMobileMenuOpen, block: isMobileMenuOpen }" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 -translate-y-2" enter-to-class="transform opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150" leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 -translate-y-2">
        <div v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-gray-900 rounded-b-3xl shadow-inner">
          <div class="px-2 pt-2 pb-3 space-y-2 flex flex-col">
            <router-link v-for="(item, index) in navigationItems" :key="index" :to="item.to"
              class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              @click="isMobileMenuOpen = false">
              {{ item.text }}
            </a>

            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center px-4">
              <!-- Theme Toggle -->
              <button @click="toggleDarkMode"
                class="flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                <svg v-if="darkMode" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg v-else class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>{{
                  darkMode ? $t("navbar.lightMode") : $t("navbar.darkMode")
                }}</span>
              </button>

              <!-- Language Selector -->
              <div class="relative">
                <button @click.stop="isLangMenuOpen = !isLangMenuOpen"
                  class="flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                  <img :src="currentLanguage === 'TH' ? 'img/th.png' : 'img/en.png'
                    " class="w-5 h-5 mr-2 rounded-sm" :alt="currentLanguage === 'TH' ? 'Thai flag' : 'English flag'
                      " />
                  <span>{{
                    currentLanguage === "TH" ? "ไทย" : "English"
                  }}</span>
                  <svg class="h-5 w-5 ml-1 transition-transform duration-300" :class="{ 'rotate-180': isLangMenuOpen }"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <transition enter-active-class="transition ease-out duration-200"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <div v-if="isLangMenuOpen"
                    class="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                    <div class="py-1">
                      <button v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)"
                        class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <img :src="lang.flag" class="w-5 h-5 mr-2 rounded-sm" :alt="lang.name" />
                        {{ lang.name }}
                      </button>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "Navbar",
  emits: ["dark-mode-changed"],
  setup(props, { emit }) {
    const darkMode = ref(false);
    const isMobileMenuOpen = ref(false);
    const isLangMenuOpen = ref(false);
    const { t, locale } = useI18n();

    // ใช้ locale ปัจจุบัน
    const currentLanguage = computed(() => locale.value);

    // รายการเมนูตามภาษา
    const navigationItems = ref([]);

    const updateNavigationItems = () => {
      navigationItems.value = [
        { text: t("navbar.home"), to: "/" },
        { text: t("navbar.about"), to: "/travel" },
        { text: t("navbar.skills"), to: "/skills" },
        { text: t("navbar.experience"), to: "/works" },
        { text: t("navbar.projects"), to: "/projects" },
        { text: t("navbar.contact"), to: "/contact" },
      ];
    };

    watch(locale, updateNavigationItems, { immediate: true });


    // รายชื่อภาษา ใช้ lowercase
    const languages = [
      { code: "th", name: "ไทย", flag: "img/th.png" },
      { code: "en", name: "English", flag: "img/en.png" },
    ];

    // toggle dark mode
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      localStorage.setItem("darkMode", darkMode.value);
      document.documentElement.classList.toggle("dark", darkMode.value);
      emit("dark-mode-changed", darkMode.value);
    };

    // ตั้งค่า dark mode ตอน mount
    const initDarkMode = () => {
      const stored = localStorage.getItem("darkMode");
      darkMode.value =
        stored === "true" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches && stored === null);
      document.documentElement.classList.toggle("dark", darkMode.value);
      emit("dark-mode-changed", darkMode.value);
    };

    // เปลี่ยนภาษา (force lowercase)
    const changeLanguage = (lang) => {
      const lowerLang = lang.toLowerCase();
      locale.value = lowerLang;
      localStorage.setItem("locale", lowerLang);
      isLangMenuOpen.value = false;
    };

    // ปิดเมนูเมื่อคลิกนอก
    const closeMenus = (e) => {
      if (!e.target.closest(".relative")) isLangMenuOpen.value = false;
    };
    // Add this function to handle scrolling
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    // Add this function to handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
      const el = document.querySelector(sectionId);
      if (el) {
        // คำนวณ offset โดยหักความสูงของ navbar ออก (ประมาณ 80px)
        const navbarHeight = 80;
        const yOffset =
          el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
      isMobileMenuOpen.value = false;
    };
    onMounted(() => {
      initDarkMode();
      window.addEventListener("click", closeMenus);
      window.addEventListener("scroll", handleScroll); // Add scroll listener
    });

    onUnmounted(() => {
      window.removeEventListener("click", closeMenus);
      window.removeEventListener("scroll", handleScroll); // Remove scroll listener
    });

    // ติดตาม darkMode
    watch(darkMode, (newValue) => {
      emit("dark-mode-changed", newValue);
    });

    return {
      darkMode,
      isMobileMenuOpen,
      isLangMenuOpen,
      isScrolled, // Expose isScrolled to template
      currentLanguage,
      navigationItems,
      languages,
      toggleDarkMode,
      changeLanguage,
      scrollToSection, // Expose the new function
    };
  },
};
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 1rem;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  padding: 0.5rem 4rem;
}

.navbar-shrink {
  transform: scale(0.97);
}

/* Rest of your styles remain the same */
.nav-link {
  position: relative;
  padding-bottom: 2px;
}

.mobile-nav-link {
  display: block;
  transition: all 0.3s ease;
}

/* Dark mode styles */
:root.dark .bg-white {
  background-color: #1e1e2e;
}

:root.dark .text-gray-700 {
  color: #e5e7eb;
}

:root.dark .text-gray-900 {
  color: #f3f4f6;
}

:root.dark .border-gray-200 {
  border-color: #374151;
}

:root.dark .hover\:bg-gray-200:hover {
  background-color: #374151;
}

:root.dark .hover\:text-black:hover {
  color: #f3f4f6;
}
</style>
