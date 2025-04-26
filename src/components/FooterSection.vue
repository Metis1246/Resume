<template>
  <footer
    class="bg-white dark:bg-gray-900 text-black dark:text-white py-8 border-t border-gray-200 dark:border-gray-800"
  >
    <div class="container mx-auto px-4">
      <!-- Navigation Menu -->
      <div class="flex flex-col md:flex-row justify-between items-center py-4">
        <!-- Logo -->
        <div class="mb-6 md:mb-0">
          <a href="#" class="text-2xl font-bold">MTE</a>
        </div>

        <!-- Menu Items -->
        <nav
          class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0"
        >
          <a
            v-for="(item, index) in menuItems"
            :key="index"
            href="#"
            class="relative group py-2"
            @mouseover="activeItem = index"
            @mouseleave="activeItem = null"
          >
            {{ $t(`footer.menu.${item.key}`) }}
            <span
              class="absolute bottom-0 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300"
              :class="activeItem === index ? 'w-full' : 'w-0'"
            ></span>
          </a>
        </nav>

        <!-- Contact Info -->
        <div class="flex flex-col space-y-2">
          <h3 class="font-semibold mb-2">{{ $t("footer.contactTitle") }}</h3>
          <!-- Phone -->
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:0987568205" class="hover:text-blue-500">0822942983</a>
          </div>

          <!-- Email -->
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:metis0987568205@gmail.com"
              class="hover:text-blue-500"
            >
              metis0987568205@gmail.com
            </a>
          </div>

          <!-- Social Media -->
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
            <a
              href="https://github.com/Metis1246"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-blue-500"
            >
              Metis_12
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} MTE.
          {{ $t("footer.copyright") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const menuItems = [
  { key: "home" },
  { key: "about" },
  { key: "skills" },
  { key: "experience" },
  { key: "projects" },
];

const activeItem = ref(null);
</script>

<style scoped>
/* เพิ่มเอฟเฟกต์ animation สำหรับเมนู */
a {
  transition: all 0.3s ease;
}
</style>
