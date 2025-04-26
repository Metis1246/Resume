<template>
  <div class="text-center animate-pulse mt-[-30px] text-black dark:text-white">
    <p class="mb-1.5 text-xs tracking-widest">SCROLL</p>
    <div
      class="mb-1 flex flex-col justify-center items-center animate-bounce-smooth"
    >
      <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-xl" />
      <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-xl" />
    </div>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add FontAwesome icon
library.add(faChevronDown);
</script>

<style scoped>
@keyframes bounce-smooth {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.animate-bounce-smooth {
  animation: bounce-smooth 2.5s ease-in-out infinite;
}
</style>
