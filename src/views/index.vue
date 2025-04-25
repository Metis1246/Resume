<template>
  <div class="relative overflow-hidden font-[Kanit]">
    <!-- MAIN SECTION -->
    <div class="flex flex-col md:flex-row min-h-[80vh] px-5 md:px-[5%]">
      <div
        class="flex-1 flex flex-col justify-center text-black dark:text-white"
      >
        <div class="text-xl mb-4 opacity-80">สวัสดีครับ</div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">เมธีส นาเหมือง</h1>
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

    <!-- SCROLL INDICATOR -->
    <div
      class="text-center animate-pulse mt-[-30px] text-black dark:text-white"
    >
      <p class="mb-1.5 text-xs tracking-widest">SCROLL</p>
      <div
        class="mb-1 flex flex-col justify-center items-center animate-bounce-smooth"
      >
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-xl" />
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-xl" />
      </div>
    </div>

    <!-- ABOUT SECTION -->
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

    <!-- SKILLS SECTION -->
    <div
      ref="skillsSection"
      class="min-h-[10vh] px-5 md:px-[5%] pt-32 md:pt-44 py-16 text-center text-lg opacity-0 translate-y-10 transition-all duration-1000 ease-in-out text-black dark:text-white"
    >
      <h2
        ref="skillsTitle"
        class="text-3xl font-bold mb-8 opacity-0 translate-y-5 transition-all duration-700"
      >
        ทักษะ
      </h2>

      <!-- CATEGORIES -->
      <div class="space-y-16">
        <!-- Frontend Category -->
        <div class="skill-category">
          <h3
            ref="frontendTitle"
            class="text-2xl font-semibold mb-6 opacity-0 translate-y-5 transition-all duration-700"
          >
            Frontend
          </h3>
          <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            <div
              v-for="(skill, index) in frontendSkills"
              :key="index"
              :ref="(el) => (skillsRefs.frontend[index] = el)"
              class="bg-white dark:bg-black rounded-lg p-4 shadow-lg flex flex-col items-center justify-center opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white shadow-gray-300/50 dark:shadow-gray-700/50"
            >
              <img :src="skill.icon" :alt="skill.name" class="h-16 w-16 mb-3" />
              <span class="font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Backend Category -->
        <div class="skill-category">
          <h3
            ref="backendTitle"
            class="text-2xl font-semibold mb-6 opacity-0 translate-y-5 transition-all duration-700"
          >
            Backend
          </h3>
          <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            <div
              v-for="(skill, index) in backendSkills"
              :key="index"
              :ref="(el) => (skillsRefs.backend[index] = el)"
              class="bg-white dark:bg-black rounded-lg p-4 shadow-lg flex flex-col items-center justify-center opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white shadow-gray-300/50 dark:shadow-gray-700/50"
            >
              <img :src="skill.icon" :alt="skill.name" class="h-16 w-16 mb-3" />
              <span class="font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Database Category -->
        <div class="skill-category">
          <h3
            ref="databaseTitle"
            class="text-2xl font-semibold mb-6 opacity-0 translate-y-5 transition-all duration-700"
          >
            Database
          </h3>
          <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            <div
              v-for="(skill, index) in databaseSkills"
              :key="index"
              :ref="(el) => (skillsRefs.database[index] = el)"
              class="bg-white dark:bg-black rounded-lg p-4 shadow-lg flex flex-col items-center justify-center opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white shadow-gray-300/50 dark:shadow-gray-700/50"
            >
              <img :src="skill.icon" :alt="skill.name" class="h-16 w-16 mb-3" />
              <span class="font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Server Category -->
        <div class="skill-category">
          <h3
            ref="serverTitle"
            class="text-2xl font-semibold mb-6 opacity-0 translate-y-5 transition-all duration-700"
          >
            Server
          </h3>
          <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            <div
              v-for="(skill, index) in serverSkills"
              :key="index"
              :ref="(el) => (skillsRefs.server[index] = el)"
              class="bg-white dark:bg-black rounded-lg p-4 shadow-lg flex flex-col items-center justify-center opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white shadow-gray-300/50 dark:shadow-gray-700/50"
            >
              <img :src="skill.icon" :alt="skill.name" class="h-16 w-16 mb-3" />
              <span class="font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Tools Category -->
        <div class="skill-category">
          <h3
            ref="toolsTitle"
            class="text-2xl font-semibold mb-6 opacity-0 translate-y-5 transition-all duration-700"
          >
            Tools
          </h3>
          <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            <div
              v-for="(skill, index) in toolsSkills"
              :key="index"
              :ref="(el) => (skillsRefs.tools[index] = el)"
              class="bg-white dark:bg-black rounded-lg p-4 shadow-lg flex flex-col items-center justify-center opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white shadow-gray-300/50 dark:shadow-gray-700/50"
            >
              <img :src="skill.icon" :alt="skill.name" class="h-16 w-16 mb-3" />
              <span class="font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EXPERIENCE SECTION -->
    <div
      ref="experienceSection"
      class="min-h-[10vh] px-5 md:px-[5%] pt-32 md:pt-44 py-16 text-center text-lg opacity-0 translate-y-10 transition-all duration-1000 ease-in-out text-white dark:text-black"
    >
      <h2
        ref="experienceTitle"
        class="text-3xl font-bold mb-8 opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white"
      >
        ประสบการณ์
      </h2>

      <div class="max-w-3xl mx-auto">
        <!-- Experience Item -->
        <div
          class="bg-white dark:bg-black rounded-xl p-6 md:p-8 shadow-lg mb-6 text-left opacity-0 translate-y-5 transition-all duration-700 text-black dark:text-white shadow-gray-300/50 dark:shadow-gray-700/50"
          ref="experienceItem1"
        >
          <h3 class="text-2xl font-semibold mb-2">บริษัท ลานานคอม จำกัด</h3>
          <p class="text-lg opacity-80 mb-4">พฟศจิกายน 2024-กุมภาพันธ์ 2025</p>
          <p class="text-xl font-medium mb-2">Service Engineer</p>
          <p class="text-xl font-medium mb-2">ความรับผิดชอบ</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>ติดตั้ง, ซ่อมแซม, แก้ไขปัญหาระบบ</li>
            <li>ตั้งค่า Switch (Aruba, Huawei, Cisco)</li>
            <li>โปรแกรมมิ่ง</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add FontAwesome icon
library.add(faChevronDown);

// Refs
const typewriterText = ref(null);
const aboutSection = ref(null);
const aboutTitle = ref(null);
const aboutRefs = [];
const experienceSection = ref(null);
const experienceTitle = ref(null);
const experienceItem1 = ref(null);

// Skills section refs
const skillsSection = ref(null);
const skillsTitle = ref(null);
const frontendTitle = ref(null);
const backendTitle = ref(null);
const databaseTitle = ref(null);
const serverTitle = ref(null);
const toolsTitle = ref(null);
const skillsRefs = {
  frontend: [],
  backend: [],
  database: [],
  server: [],
  tools: [],
};

// Typewriter texts
const texts = ["Frontend Developer | Web Developer "];

// Skills data
const frontendSkills = [
  { name: "HTML", icon: "/img/skills/html.svg" },
  { name: "CSS", icon: "/img/skills/css.svg" },
  { name: "JavaScript", icon: "/img/skills/javascript.svg" },
  { name: "Vue", icon: "/img/skills/vue.svg" },
  { name: "React", icon: "/img/skills/react.svg" },
  { name: "Angular", icon: "/img/skills/angular.svg" },
  { name: "Tailwind", icon: "/img/skills/tailwind.svg" },
  { name: "SCSS", icon: "/img/skills/scss.svg" },
  { name: "Less", icon: "/img/skills/less.svg" },
];

const backendSkills = [
  { name: "PHP", icon: "/img/skills/php.svg" },
  { name: "Node.js", icon: "/img/skills/nodejs.svg" },
  { name: "Next.js", icon: "/img/skills/nextjs.svg" },
  { name: "Express", icon: "/img/skills/express.svg" },
];

const databaseSkills = [
  { name: "MySQL", icon: "/img/skills/mysql.svg" },
  { name: "SQL", icon: "/img/skills/sql.svg" },
  { name: "MongoDB", icon: "/img/skills/mongodb.svg" },
];

// New server skills
const serverSkills = [
  { name: "Apache", icon: "/img/skills/apache.svg" },
  { name: "Nginx", icon: "/img/skills/nginx.svg" },
  { name: "AWS", icon: "/img/skills/aws.svg" },
  { name: "Firebase", icon: "/img/skills/firebase.svg" },
  { name: "Docker", icon: "/img/skills/docker.svg" },
];

// New tools skills
const toolsSkills = [
  { name: "Git", icon: "/img/skills/git.svg" },
  { name: "VS Code", icon: "/img/skills/vscode.svg" },
  { name: "npm", icon: "/img/skills/npm.svg" },
  { name: "Webpack", icon: "/img/skills/webpack.svg" },
  { name: "Vite", icon: "/img/skills/vite.svg" },
  { name: "Figma", icon: "/img/skills/figma.svg" },
  { name: "Photoshop", icon: "/img/skills/photoshop.svg" },
];

// Typewriter Effect
onMounted(() => {
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

    setTimeout(type, speed);
  };

  setTimeout(type, 1000);
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

  // IntersectionObserver for Skills Section
  const skillsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // เข้าสู่หน้าจอ
        skillsSection.value?.classList.add("opacity-100", "translate-y-0");
        skillsSection.value?.classList.remove("opacity-0", "translate-y-10");

        skillsTitle.value?.classList.add("opacity-100", "translate-y-0");
        skillsTitle.value?.classList.remove("opacity-0", "translate-y-5");

        // Frontend category animation
        setTimeout(() => {
          frontendTitle.value?.classList.add("opacity-100", "translate-y-0");
          frontendTitle.value?.classList.remove("opacity-0", "translate-y-5");

          skillsRefs.frontend.forEach((el, i) => {
            setTimeout(() => {
              el?.classList.add("opacity-100", "translate-y-0");
              el?.classList.remove("opacity-0", "translate-y-5");
            }, 200 + i * 100);
          });
        }, 300);

        // Backend category animation
        setTimeout(() => {
          backendTitle.value?.classList.add("opacity-100", "translate-y-0");
          backendTitle.value?.classList.remove("opacity-0", "translate-y-5");

          skillsRefs.backend.forEach((el, i) => {
            setTimeout(() => {
              el?.classList.add("opacity-100", "translate-y-0");
              el?.classList.remove("opacity-0", "translate-y-5");
            }, 200 + i * 100);
          });
        }, 800);

        // Database category animation
        setTimeout(() => {
          databaseTitle.value?.classList.add("opacity-100", "translate-y-0");
          databaseTitle.value?.classList.remove("opacity-0", "translate-y-5");

          skillsRefs.database.forEach((el, i) => {
            setTimeout(() => {
              el?.classList.add("opacity-100", "translate-y-0");
              el?.classList.remove("opacity-0", "translate-y-5");
            }, 200 + i * 100);
          });
        }, 1300);

        // Server category animation
        setTimeout(() => {
          serverTitle.value?.classList.add("opacity-100", "translate-y-0");
          serverTitle.value?.classList.remove("opacity-0", "translate-y-5");

          skillsRefs.server.forEach((el, i) => {
            setTimeout(() => {
              el?.classList.add("opacity-100", "translate-y-0");
              el?.classList.remove("opacity-0", "translate-y-5");
            }, 200 + i * 100);
          });
        }, 1800);

        // Tools category animation
        setTimeout(() => {
          toolsTitle.value?.classList.add("opacity-100", "translate-y-0");
          toolsTitle.value?.classList.remove("opacity-0", "translate-y-5");

          skillsRefs.tools.forEach((el, i) => {
            setTimeout(() => {
              el?.classList.add("opacity-100", "translate-y-0");
              el?.classList.remove("opacity-0", "translate-y-5");
            }, 200 + i * 100);
          });
        }, 2300);
      } else {
        // ออกจากหน้าจอ → รีเซ็ต animation
        skillsSection.value?.classList.remove("opacity-100", "translate-y-0");
        skillsSection.value?.classList.add("opacity-0", "translate-y-10");

        skillsTitle.value?.classList.remove("opacity-100", "translate-y-0");
        skillsTitle.value?.classList.add("opacity-0", "translate-y-5");

        frontendTitle.value?.classList.remove("opacity-100", "translate-y-0");
        frontendTitle.value?.classList.add("opacity-0", "translate-y-5");

        backendTitle.value?.classList.remove("opacity-100", "translate-y-0");
        backendTitle.value?.classList.add("opacity-0", "translate-y-5");

        databaseTitle.value?.classList.remove("opacity-100", "translate-y-0");
        databaseTitle.value?.classList.add("opacity-0", "translate-y-5");

        serverTitle.value?.classList.remove("opacity-100", "translate-y-0");
        serverTitle.value?.classList.add("opacity-0", "translate-y-5");

        toolsTitle.value?.classList.remove("opacity-100", "translate-y-0");
        toolsTitle.value?.classList.add("opacity-0", "translate-y-5");

        // Reset all skills
        Object.values(skillsRefs).forEach((category) => {
          category.forEach((el) => {
            el?.classList.remove("opacity-100", "translate-y-0");
            el?.classList.add("opacity-0", "translate-y-5");
          });
        });
      }
    },
    { threshold: 0.2 }
  );

  if (skillsSection.value) {
    skillsObserver.observe(skillsSection.value);
  }
});

// Content lines
const aboutLines = [
  "สวัสดีครับผม นายกษิดิศ กาศเจริญ (กันต์) เป็น Frontend Developerสำเร็จการศึกษาระดับปริญญาตรี สาขาคอมพิวเตอร์ธุรกิจ คณะบริหารธุรกิจจากมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน ผมได้มุ่งมั่นศึกษา เรียนรู้และเพิ่มทักษะความสามารถของตัวเองอยู่เสมอเพื่อที่จะพัฒนาเว็บแอปพลิเคชั่นให้มีประสิทธิภาพและตอบโจทย์ผู้ใช้",
];
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
