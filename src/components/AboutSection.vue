<template>
  <div
    ref="aboutSection"
    class="min-h-[10vh] px-5 md:px-[5%] pt-32 md:pt-44 py-16 text-center text-lg opacity-0 translate-y-10 transition-all duration-1000 ease-in-out text-black dark:text-white"
  >
    <h2
      ref="aboutTitle"
      class="text-3xl font-bold mb-6 opacity-0 translate-y-5 transition-all duration-700"
    >
      {{ $t("about.title1") }}
    </h2>

    <div class="leading-relaxed max-w-3xl mx-auto space-y-4 text-left">
      <p
        v-for="(line, index) in aboutLines"
        :key="index"
        :ref="(el) => (aboutRefs[index] = el)"
        class="opacity-0 translate-y-5 transition-all duration-700"
      >
        {{ line }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const aboutSection = ref(null);
const aboutTitle = ref(null);
const aboutRefs = ref([]);
const aboutLines = ref([]);

// ฟังก์ชันอัปเดตข้อความเกี่ยวกับฉันตามภาษา
const updateAboutText = () => {
  aboutLines.value = [t("about.line1")];
};

// เรียกครั้งแรกเมื่อโหลด component
updateAboutText();

// ตรวจสอบการเปลี่ยนภาษา
watch(
  () => locale.value,
  () => {
    updateAboutText();
  }
);

onMounted(() => {
  // IntersectionObserver for About Section
  const aboutObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // กำลังเข้าสู่หน้าจอ
        aboutSection.value?.classList.add("opacity-100", "translate-y-0");
        aboutSection.value?.classList.remove("opacity-0", "translate-y-10");

        aboutTitle.value?.classList.add("opacity-100", "translate-y-0");
        aboutTitle.value?.classList.remove("opacity-0", "translate-y-5");

        aboutRefs.value.forEach((el, i) => {
          setTimeout(() => {
            el?.classList.add("opacity-100", "translate-y-0");
            el?.classList.remove("opacity-0", "translate-y-5");
          }, 300 + i * 300);
        });
      } else {
        // ออกจากหน้าจอ → รีเซ็ต animation
        aboutSection.value?.classList.remove("opacity-100", "translate-y-0");
        aboutSection.value?.classList.add("opacity-0", "translate-y-10");

        aboutTitle.value?.classList.remove("opacity-100", "translate-y-0");
        aboutTitle.value?.classList.add("opacity-0", "translate-y-5");

        aboutRefs.value.forEach((el) => {
          el?.classList.remove("opacity-100", "translate-y-0");
          el?.classList.add("opacity-0", "translate-y-5");
        });
      }
    },
    { threshold: 0.3 }
  );

  if (aboutSection.value) {
    aboutObserver.observe(aboutSection.value);
  }
});
</script>
