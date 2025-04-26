<template>
  <div class="relative overflow-hidden font-[Kanit]">
    <!-- Navbar is now fixed, so add padding to prevent content from going under it -->
    <div class="pt-28">
      <MainSection />
      <ScrollIndicator />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
</template>
<script setup>
import MainSection from "../components/MainSection.vue";
import ScrollIndicator from "../components/ScrollIndicator.vue";
import AboutSection from "../components/AboutSection.vue";
import SkillsSection from "../components/SkillsSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ContactSection from "../components/ContactSection.vue";
import FooterSection from "../components/FooterSection.vue";
</script>
<style>
/* เพิ่ม padding ด้านบนสำหรับทุกเซ็กชันที่เป็น anchor */
[id] {
  scroll-margin-top: 100px; /* ปรับตามความสูงของ navbar */
}
</style>
