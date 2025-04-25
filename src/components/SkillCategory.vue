<template>
  <div class="skill-category">
    <h3
      ref="titleRef"
      class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 opacity-0 translate-y-5 transition-all duration-700"
    >
      {{ title }}
    </h3>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        :ref="
          (el) => {
            if (el) itemRefs[index] = el;
          }
        "
        class="bg-white dark:bg-black rounded-lg p-3 sm:p-4 md:p-6 shadow-lg flex flex-col items-center justify-center opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white shadow-gray-300/50 dark:shadow-gray-700/50 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
      >
        <!-- White background container for dark mode -->
        <div
          class="bg-white dark:bg-white/90 p-5 rounded-lg mb-2 sm:mb-3 md:mb-4"
        >
          <img
            :src="skill.icon"
            :alt="skill.name"
            class="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
          />
        </div>
        <span class="font-medium text-sm sm:text-base">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["category-mounted"]);

const titleRef = ref(null);
const itemRefs = ref([]);

// Responsive adjustments based on screen size
const handleResize = () => {
  // You could add additional responsive behavior here if needed
  // This function will run whenever the window is resized
};

onMounted(() => {
  // Send refs back to parent component
  emit("category-mounted", {
    titleRef: titleRef.value,
    itemRefs: itemRefs.value,
  });

  // Add resize event listener for responsive behaviors
  window.addEventListener("resize", handleResize);
  // Initial call
  handleResize();
});

onBeforeUnmount(() => {
  // Clean up event listener
  window.removeEventListener("resize", handleResize);
});
</script>
