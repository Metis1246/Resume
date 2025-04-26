<template>
  <div
    id="experience-section"
    ref="experienceSection"
    class="min-h-[10vh] px-5 md:px-[5%] pt-32 md:pt-44 py-16 text-center text-lg opacity-0 translate-y-10 transition-all duration-1000 ease-in-out text-white dark:text-black"
  >
    <h2
      ref="experienceTitle"
      class="text-3xl font-bold mb-8 opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white"
    >
      {{ $t("experience.title") }}
    </h2>

    <div class="max-w-3xl mx-auto">
      <!-- Experience Item -->
      <div
        class="bg-white dark:bg-black rounded-xl p-6 md:p-8 shadow-lg mb-6 text-left opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white shadow-gray-300/50 dark:shadow-gray-700/50"
        ref="experienceItem1"
      >
        <h3 class="text-2xl font-semibold mb-2">
          {{ $t("experience.company1.name") }}
        </h3>
        <p class="text-lg opacity-80 mb-4">
          {{ $t("experience.company1.period") }}
        </p>
        <p class="text-xl font-medium mb-2">
          {{ $t("experience.company1.position") }}
        </p>
        <p class="text-xl font-medium mb-2">
          {{ $t("experience.responsibilities") }}
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li>{{ $t("experience.company1.responsibility1") }}</li>
          <li>{{ $t("experience.company1.responsibility2") }}</li>
          <li>{{ $t("experience.company1.responsibility3") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const experienceSection = ref(null);
const experienceTitle = ref(null);
const experienceItem1 = ref(null);

onMounted(() => {
  const experienceObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        experienceSection.value?.classList.add("opacity-100", "translate-y-0");
        experienceSection.value?.classList.remove(
          "opacity-0",
          "translate-y-10"
        );

        setTimeout(() => {
          experienceTitle.value?.classList.add("opacity-100", "translate-y-0");
          experienceTitle.value?.classList.remove("opacity-0", "translate-y-5");
        }, 300);

        setTimeout(() => {
          experienceItem1.value?.classList.add("opacity-100", "translate-y-0");
          experienceItem1.value?.classList.remove("opacity-0", "translate-y-5");
        }, 600);
      } else {
        experienceSection.value?.classList.remove(
          "opacity-100",
          "translate-y-0"
        );
        experienceSection.value?.classList.add("opacity-0", "translate-y-10");

        experienceTitle.value?.classList.remove("opacity-100", "translate-y-0");
        experienceTitle.value?.classList.add("opacity-0", "translate-y-5");

        experienceItem1.value?.classList.remove("opacity-100", "translate-y-0");
        experienceItem1.value?.classList.add("opacity-0", "translate-y-5");
      }
    },
    { threshold: 0.2 }
  );

  if (experienceSection.value) {
    experienceObserver.observe(experienceSection.value);
  }
});
</script>
