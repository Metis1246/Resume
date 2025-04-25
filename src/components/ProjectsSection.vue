<template>
  <div
    ref="projectsSection"
    class="min-h-[100vh] px-5 md:px-[5%] pt-32 md:pt-44 py-16 text-center text-lg opacity-0 translate-y-10 transition-all duration-1000 ease-in-out text-black dark:text-white"
  >
    <h2
      ref="projectsTitle"
      class="text-3xl font-bold mb-16 opacity-0 translate-y-5 transition-all duration-700"
    >
      โปรเจกต์ของฉัน
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <!-- Project Card 1 -->
      <div
        ref="projectCard1"
        class="bg-white dark:bg-black rounded-lg overflow-hidden shadow-lg opacity-0 translate-y-10 transition-all duration-700 hover:shadow-xl transform hover:-translate-y-2 transition-all border border-gray-200 dark:border-gray-700 shadow-gray-300/50 dark:shadow-gray-700/50"
      >
        <div class="relative">
          <img
            src="/img/dev1.png"
            alt="ผลิตภัณฑ์อัจฉริยะ"
            class="w-full h-64 object-cover"
          />
          <span
            class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md font-semibold"
          >
            nuxt
          </span>
        </div>

        <div class="p-6 text-left">
          <h3 class="text-xl font-bold mb-4">
            เว็บไซต์ขายบัญชีเกมและบัญชีสรีมมิ่ง
          </h3>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            เว็บไซต์ขายบัญชีเกมและบัญชีสรีมมิ่ง ที่สามารถซื้อได้ตลอด 24 ชั่วโมง
            พัฒนาด้วย Nuxt 3, Node.js และ MongoDB
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 px-3 py-1 rounded-md text-sm"
            >
              Vue
            </span>
            <span
              class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 px-3 py-1 rounded-md text-sm"
            >
              Node Express
            </span>
            <span
              class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-3 py-1 rounded-md text-sm"
            >
              MongoDB
            </span>
          </div>
        </div>
      </div>

      <!-- Project Card 2 -->
      <div
        ref="projectCard2"
        class="bg-white dark:bg-black rounded-lg overflow-hidden shadow-lg opacity-0 translate-y-10 transition-all duration-700 hover:shadow-xl transform hover:-translate-y-2 transition-all border border-gray-200 dark:border-gray-700 shadow-gray-300/50 dark:shadow-gray-700/50"
      >
        <div class="relative">
          <img
            src="/img/dev2.png"
            alt="อุปกรณ์สายเคเบิล"
            class="w-full h-64 object-cover"
          />
          <span
            class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md font-semibold"
          >
            Vue
          </span>
        </div>

        <div class="p-6 text-left">
          <h3 class="text-xl font-bold mb-4">เว็บไซต์เรซูเม่</h3>
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            เว็บไซต์เรซูเม่ พัฒนาด้วย Vue 3, Vite
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 px-3 py-1 rounded-md text-sm"
            >
              Vue
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Projects section refs
const projectsSection = ref(null);
const projectsTitle = ref(null);
const projectCard1 = ref(null);
const projectCard2 = ref(null);

onMounted(() => {
  // IntersectionObserver for Projects Section
  const projectsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // เข้าสู่หน้าจอ
        projectsSection.value?.classList.add("opacity-100", "translate-y-0");
        projectsSection.value?.classList.remove("opacity-0", "translate-y-10");

        projectsTitle.value?.classList.add("opacity-100", "translate-y-0");
        projectsTitle.value?.classList.remove("opacity-0", "translate-y-5");

        // Card animations with delay
        setTimeout(() => {
          projectCard1.value?.classList.add("opacity-100", "translate-y-0");
          projectCard1.value?.classList.remove("opacity-0", "translate-y-10");
        }, 300);

        setTimeout(() => {
          projectCard2.value?.classList.add("opacity-100", "translate-y-0");
          projectCard2.value?.classList.remove("opacity-0", "translate-y-10");
        }, 500);
      } else {
        // ออกจากหน้าจอ → รีเซ็ต animation
        projectsSection.value?.classList.remove("opacity-100", "translate-y-0");
        projectsSection.value?.classList.add("opacity-0", "translate-y-10");

        projectsTitle.value?.classList.remove("opacity-100", "translate-y-0");
        projectsTitle.value?.classList.add("opacity-0", "translate-y-5");

        projectCard1.value?.classList.remove("opacity-100", "translate-y-0");
        projectCard1.value?.classList.add("opacity-0", "translate-y-10");

        projectCard2.value?.classList.remove("opacity-100", "translate-y-0");
        projectCard2.value?.classList.add("opacity-0", "translate-y-10");
      }
    },
    { threshold: 0.2 }
  );

  if (projectsSection.value) {
    projectsObserver.observe(projectsSection.value);
  }
});
</script>
