import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import path from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: "src/views",
      extensions: ["vue"],
    }),
    VueI18nPlugin({
      include: path.resolve(__dirname, "./src/i18n/**"), // ระบุ path ไปยังไฟล์ภาษา
      runtimeOnly: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600, // เพิ่มขนาด chunk สูงสุด
  },
});
