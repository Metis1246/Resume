<template>
  <div class="flex flex-col md:flex-row min-h-[80vh] px-5 md:px-[5%]">
    <div class="flex-1 flex flex-col justify-center text-black dark:text-white">
      <div class="text-xl mb-4 opacity-80">{{ $t("main.greeting") }}</div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ $t("main.name") }}</h1>
      <p class="text-2xl md:text-3xl mb-8 opacity-90 h-[48px]">
        <span ref="typewriterText"></span><span class="animate-blink">|</span>
      </p>
    </div>
    <div class="flex-1 flex justify-center items-center mt-8 md:mt-0">
      <img
        src="/img/profile.png"
        alt="Profile Picture"
        class="max-w-[80%] max-h-[80vh] rounded-lg"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const typewriterText = ref(null);
const { t, locale } = useI18n();

// ตรวจสอบการเปลี่ยนภาษาและรีเซ็ต
let typewriterInterval = null;

const startTypewriter = () => {
  if (typewriterInterval) {
    clearTimeout(typewriterInterval);
    typewriterInterval = null;
  }

  const texts = [t("main.profession")];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentText = texts[textIndex];
    if (!typewriterText.value) return;

    if (isDeleting) {
      typewriterText.value.textContent = currentText.substring(0, charIndex--);
    } else {
      typewriterText.value.textContent = currentText.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      speed = 1200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 300;
    }

    typewriterInterval = setTimeout(type, speed);
  };

  setTimeout(type, 1000);
};

onMounted(() => {
  startTypewriter();
});

// เมื่อภาษาเปลี่ยน ให้รีเซ็ต typewriter
watch(
  () => locale.value,
  () => {
    if (typewriterText.value) {
      startTypewriter();
    }
  }
);
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}
</style>
