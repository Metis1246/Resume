<template>
  <div
    ref="aboutSection"
    class="min-h-[10vh] px-5 md:px-[5%] pt-32 md:pt-44 py-16 text-center text-lg opacity-0 translate-y-10 transition-all duration-1000 ease-in-out text-black dark:text-white"
  >
    <h2
      ref="aboutTitle"
      class="text-3xl font-bold mb-6 opacity-0 translate-y-5 transition-all duration-700"
    >
      เกี่ยวกับฉัน
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
import { ref, onMounted } from "vue";

const aboutSection = ref(null);
const aboutTitle = ref(null);
const aboutRefs = [];

// Content lines
const aboutLines = [
  "สวัสดีครับผม นายเมธีส นาเหมือง สนใจตำแหน่ง Frontend Developer และ Web Developer สำเร็จการศึกษาระดับปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์ คณะเทคโนโลยีอุตสาหกรรมจากมหาวิทยาลัยราชภัฏลำปาง ผมได้มุ่งมั่นศึกษา เรียนรู้และเพิ่มทักษะความสามารถของตัวเองอยู่เสมอและมีความละเอียดรอบคอบ สามารถคิดแบบตรรกะ สามารถทำงานภายใต้แรงกัดดันได้และสามรถทำงานเเบบทีมได้ดี",
];

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

        aboutRefs.forEach((el, i) => {
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

        aboutRefs.forEach((el) => {
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
