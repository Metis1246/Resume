<template>
  <div class="m-4">
    <nav
      class="bg-white dark:bg-black-200 backdrop-blur-md shadow-lg rounded-3xl"
    >
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
                <router-link
                  v-for="(item, index) in navigationItems"
                  :key="index"
                  :to="item.to"
                  class="group relative py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {{ item.text }}
                </router-link>
              </div>

              <!-- Right Controls -->
              <div class="flex items-center space-x-4 ml-6">
                <!-- Theme Toggle -->
                <button
                  @click="toggleDarkMode"
                  class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  :title="darkMode ? 'Light Mode' : 'Dark Mode'"
                >
                  <svg
                    v-if="darkMode"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <svg
                    v-else
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </button>

                <!-- Language Selector -->
                <div class="relative">
                  <button
                    @click.stop="isLangMenuOpen = !isLangMenuOpen"
                    class="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group"
                  >
                    <img
                      :src="
                        currentLanguage === 'TH' ? 'img/th.png' : 'img/en.png'
                      "
                      class="w-6 h-6 rounded-sm"
                      :alt="
                        currentLanguage === 'TH' ? 'Thai flag' : 'English flag'
                      "
                    />
                    <svg
                      class="h-5 w-5 ml-1 transition-transform duration-300"
                      :class="{ 'rotate-180': isLangMenuOpen }"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <div
                      v-if="isLangMenuOpen"
                      class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
                    >
                      <div class="py-1">
                        <button
                          v-for="lang in languages"
                          :key="lang.code"
                          @click="changeLanguage(lang.code)"
                          class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          <img
                            :src="lang.flag"
                            class="w-5 h-5 mr-2 rounded-sm"
                            :alt="lang.name"
                          />
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
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                class="h-6 w-6"
                :class="{ hidden: isMobileMenuOpen, block: !isMobileMenuOpen }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="h-6 w-6"
                :class="{ hidden: !isMobileMenuOpen, block: isMobileMenuOpen }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 -translate-y-2"
        enter-to-class="transform opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden bg-white dark:bg-gray-900 rounded-b-3xl shadow-inner"
        >
          <div class="px-2 pt-2 pb-3 space-y-2 flex flex-col">
            <router-link
              v-for="(item, index) in navigationItems"
              :key="index"
              :to="item.to"
              class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              @click="isMobileMenuOpen = false"
            >
              {{ item.text }}
            </router-link>

            <div
              class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center px-4"
            >
              <!-- Theme Toggle -->
              <button
                @click="toggleDarkMode"
                class="flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  v-if="darkMode"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <svg
                  v-else
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <span>{{ darkMode ? "Light Mode" : "Dark Mode" }}</span>
              </button>

              <!-- Language Selector -->
              <div class="relative">
                <button
                  @click.stop="isLangMenuOpen = !isLangMenuOpen"
                  class="flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <img
                    :src="
                      currentLanguage === 'TH' ? 'img/th.png' : 'img/en.png'
                    "
                    class="w-5 h-5 mr-2 rounded-sm"
                    :alt="
                      currentLanguage === 'TH' ? 'Thai flag' : 'English flag'
                    "
                  />
                  <span>{{
                    currentLanguage === "TH" ? "ไทย" : "English"
                  }}</span>
                  <svg
                    class="h-5 w-5 ml-1 transition-transform duration-300"
                    :class="{ 'rotate-180': isLangMenuOpen }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div
                    v-if="isLangMenuOpen"
                    class="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
                  >
                    <div class="py-1">
                      <button
                        v-for="lang in languages"
                        :key="lang.code"
                        @click="changeLanguage(lang.code)"
                        class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <img
                          :src="lang.flag"
                          class="w-5 h-5 mr-2 rounded-sm"
                          :alt="lang.name"
                        />
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
import { ref, onMounted, onUnmounted, watch } from "vue";

export default {
  name: "Navbar",
  emits: ["dark-mode-changed"], // เพิ่ม emit เพื่อส่งค่า darkMode
  setup(props, { emit }) {
    const darkMode = ref(false);
    const isMobileMenuOpen = ref(false);
    const isLangMenuOpen = ref(false);
    const currentLanguage = ref("TH");

    const navigationItems = [
      { text: "หน้าหลัก", to: "/" },
      { text: "เกี่ยวกับ", to: "/travel" },
      { text: "ความสามารถ", to: "/skills" },
      { text: "ประสบการณ์", to: "/works" },
      { text: "โปรเจกต์", to: "/contact" },
      { text: "ติดต่อ", to: "/contact" },
    ];

    const languages = [
      { code: "TH", name: "ไทย", flag: "img/th.png" },
      { code: "EN", name: "English", flag: "img/en.png" },
    ];

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      localStorage.setItem("darkMode", darkMode.value);
      document.documentElement.classList.toggle("dark", darkMode.value);
      emit("dark-mode-changed", darkMode.value); // ส่งค่า darkMode ไปยัง App.vue
    };

    const initDarkMode = () => {
      const stored = localStorage.getItem("darkMode");
      darkMode.value =
        stored === "true" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
          stored === null);
      document.documentElement.classList.toggle("dark", darkMode.value);
      emit("dark-mode-changed", darkMode.value); // ส่งค่า darkMode เริ่มต้นไปยัง App.vue
    };

    const changeLanguage = (lang) => {
      currentLanguage.value = lang;
      isLangMenuOpen.value = false;
    };

    const closeMenus = (e) => {
      if (!e.target.closest(".relative")) isLangMenuOpen.value = false;
    };

    onMounted(() => {
      initDarkMode();
      window.addEventListener("click", closeMenus);
    });

    onUnmounted(() => {
      window.removeEventListener("click", closeMenus);
    });

    // เพิ่ม watch เพื่อส่งค่า darkMode เมื่อมีการเปลี่ยนแปลง
    watch(darkMode, (newValue) => {
      emit("dark-mode-changed", newValue);
    });

    return {
      darkMode,
      isMobileMenuOpen,
      isLangMenuOpen,
      currentLanguage,
      navigationItems,
      languages,
      toggleDarkMode,
      changeLanguage,
    };
  },
};
</script>
<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 2px;
}

.mobile-nav-link {
  display: block;
  transition: all 0.3s ease;
}

/* Dark mode styles if needed */
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
