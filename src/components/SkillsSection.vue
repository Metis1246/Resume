<template>
  <div
    ref="skillsSection"
    class="min-h-[10vh] px-3 sm:px-5 md:px-[5%] pt-20 sm:pt-24 md:pt-32 lg:pt-44 py-12 md:py-16 text-center text-base md:text-lg opacity-0 translate-y-10 transition-all duration-1000 ease-in-out text-black dark:text-white"
  >
    <h2
      ref="skillsTitle"
      class="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 opacity-0 translate-y-5 transition-all duration-700"
    >
      {{ $t("skill.title1") }}
    </h2>

    <!-- CATEGORIES -->
    <div class="space-y-12 md:space-y-16">
      <SkillCategory
        :title="$t('skill.frontend')"
        :skills="frontendSkills"
        @category-mounted="setupCategoryRefs('frontend', $event)"
      />

      <SkillCategory
        :title="$t('skill.backend')"
        :skills="backendSkills"
        @category-mounted="setupCategoryRefs('backend', $event)"
      />

      <SkillCategory
        :title="$t('skill.database')"
        :skills="databaseSkills"
        @category-mounted="setupCategoryRefs('database', $event)"
      />

      <SkillCategory
        :title="$t('skill.server')"
        :skills="serverSkills"
        @category-mounted="setupCategoryRefs('server', $event)"
      />

      <SkillCategory
        :title="$t('skill.tools')"
        :skills="toolsSkills"
        @category-mounted="setupCategoryRefs('tools', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import SkillCategory from "./SkillCategory.vue";

const { t } = useI18n();

// Skills section refs
const skillsSection = ref(null);
const skillsTitle = ref(null);
const skillsRefs = {
  frontend: { title: null, items: [] },
  backend: { title: null, items: [] },
  database: { title: null, items: [] },
  server: { title: null, items: [] },
  tools: { title: null, items: [] },
};

// Setup category refs from child component
const setupCategoryRefs = (category, refs) => {
  skillsRefs[category].title = refs.titleRef;
  skillsRefs[category].items = refs.itemRefs;
};

// Skills data
const frontendSkills = [
  { name: "HTML", icon: "/img/html.png" },
  { name: "CSS", icon: "/img/css.png" },
  { name: "JavaScript", icon: "/img/javasc.png" },
  { name: "Tailwind", icon: "/img/tail.png" },
  { name: "Vue", icon: "/img/vue.png" },
  { name: "Nuxt", icon: "/img/nuxt.png" },
];

const backendSkills = [
  { name: "Node.js", icon: "/img/nodejs.png" },
  { name: "Laravel", icon: "/img/laravel.png" },
  { name: "PHP", icon: "/img/php.png" },
];

const databaseSkills = [
  { name: "MySQL", icon: "/img/mysql.png" },
  { name: "PostgreSQL", icon: "/img/postgre.png" },
  { name: "MongoDB", icon: "/img/mongo.png" },
];

const serverSkills = [
  { name: "Railway", icon: "/img/railway.png" },
  { name: "Vercel", icon: "/img/vercel.png" },
  { name: "Rander", icon: "/img/rander.png" },
  { name: "DigitalOcean", icon: "/img/ocean.png" },
];

const toolsSkills = [
  { name: "Github", icon: "/img/git.png" },
  { name: "VS Code", icon: "/img/vs.png" },
  { name: "Postman", icon: "/img/post.png" },
  { name: "Figma", icon: "/img/Figma.png" },
];

onMounted(() => {
  // IntersectionObserver for Skills Section
  const skillsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // เข้าสู่หน้าจอ
        skillsSection.value?.classList.add("opacity-100", "translate-y-0");
        skillsSection.value?.classList.remove("opacity-0", "translate-y-10");

        skillsTitle.value?.classList.add("opacity-100", "translate-y-0");
        skillsTitle.value?.classList.remove("opacity-0", "translate-y-5");

        // Animate all categories with delays
        const categories = [
          "frontend",
          "backend",
          "database",
          "server",
          "tools",
        ];

        categories.forEach((category, categoryIndex) => {
          setTimeout(() => {
            // Animate category title
            if (skillsRefs[category].title) {
              skillsRefs[category].title.classList.add(
                "opacity-100",
                "translate-y-0"
              );
              skillsRefs[category].title.classList.remove(
                "opacity-0",
                "translate-y-5"
              );
            }

            // Animate category items
            skillsRefs[category].items.forEach((el, i) => {
              setTimeout(() => {
                if (el) {
                  el.classList.add("opacity-100", "translate-y-0");
                  el.classList.remove("opacity-0", "translate-y-5");
                }
              }, 150 + i * 75); // Slightly faster animation for mobile
            });
          }, 250 + categoryIndex * 400); // Slightly faster delays for mobile
        });
      } else {
        // ออกจากหน้าจอ → รีเซ็ต animation
        skillsSection.value?.classList.remove("opacity-100", "translate-y-0");
        skillsSection.value?.classList.add("opacity-0", "translate-y-10");

        skillsTitle.value?.classList.remove("opacity-100", "translate-y-0");
        skillsTitle.value?.classList.add("opacity-0", "translate-y-5");

        // Reset all categories
        Object.keys(skillsRefs).forEach((category) => {
          if (skillsRefs[category].title) {
            skillsRefs[category].title.classList.remove(
              "opacity-100",
              "translate-y-0"
            );
            skillsRefs[category].title.classList.add(
              "opacity-0",
              "translate-y-5"
            );
          }

          skillsRefs[category].items.forEach((el) => {
            if (el) {
              el.classList.remove("opacity-100", "translate-y-0");
              el.classList.add("opacity-0", "translate-y-5");
            }
          });
        });
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" } // Improved observer settings
  );

  if (skillsSection.value) {
    skillsObserver.observe(skillsSection.value);
  }
});
</script>
