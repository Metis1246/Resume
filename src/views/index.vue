<template>
  <div class="relative overflow-hidden font-[Kanit]">
    <MainSection />
    <ScrollIndicator />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
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
