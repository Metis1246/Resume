<template>
  <div
    class="relative min-h-screen w-full overflow-hidden"
    :class="darkMode ? 'bg-white' : 'bg-black'"
  >
    <!-- พื้นหลังเส้น (สีตรงข้ามกับพื้นหลัง) -->
    <canvas
      ref="canvas"
      class="absolute top-0 left-0 w-full h-full opacity-80"
    ></canvas>

    <!-- Navbar -->
    <Navbar class="relative z-20" @dark-mode-changed="updateDarkMode" />

    <!-- เนื้อหาหลัก -->
    <div class="relative z-10">
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from "vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  setup() {
    const canvas = ref(null);
    const darkMode = ref(false);
    let ctx = null;
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let lines = [];
    let animationFrameId = null;

    // กำหนดพารามิเตอร์ของเส้น
    const LINE_COUNT = 100;
    const LINE_SPEED = 1.5;
    const MOUSE_SENSITIVITY = 0.2;

    class Line {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.length = Math.random() * 50 + 20;
        this.speed = Math.random() * LINE_SPEED + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (
          this.x < -this.length ||
          this.x > width + this.length ||
          this.y < -this.length ||
          this.y > height + this.length
        ) {
          this.reset();
          if (Math.random() > 0.5) {
            this.x = Math.random() > 0.5 ? -this.length : width + this.length;
            this.y = Math.random() * height;
          } else {
            this.y = Math.random() > 0.5 ? -this.length : height + this.length;
            this.x = Math.random() * width;
          }
        }

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) * 0.001 * MOUSE_SENSITIVITY;
          this.angle = Math.atan2(dy, dx) + Math.PI;
          this.x += Math.cos(this.angle) * force * 10;
          this.y += Math.sin(this.angle) * force * 10;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;
        ctx.lineTo(endX, endY);
        // เปลี่ยนสีเส้นตาม darkMode
        const lineColor = darkMode.value
          ? "rgba(0, 0, 0, "
          : "rgba(255, 255, 255, ";
        ctx.strokeStyle = `${lineColor}${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const initCanvas = () => {
      const canvasEl = canvas.value;
      width = canvasEl.width = window.innerWidth;
      height = canvasEl.height = window.innerHeight;
      ctx = canvasEl.getContext("2d");
      lines = Array.from({ length: LINE_COUNT }, () => new Line());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line) => {
        line.update();
        line.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      const canvasEl = canvas.value;
      width = canvasEl.width = window.innerWidth;
      height = canvasEl.height = window.innerHeight;
    };

    // เพิ่มฟังก์ชันรับค่า darkMode จาก Navbar
    const updateDarkMode = (isDark) => {
      darkMode.value = isDark;
    };

    // อ่านค่า darkMode จาก localStorage เมื่อเริ่มต้น
    const initDarkMode = () => {
      const stored = localStorage.getItem("darkMode");
      darkMode.value =
        stored === "true" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
          stored === null);
    };

    onMounted(() => {
      initDarkMode();
      initCanvas();
      animate();
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    });

    return {
      canvas,
      darkMode,
      updateDarkMode,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
