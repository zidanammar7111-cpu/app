import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ملاحظة مهمة: الـ base لازم يطابق اسم الـ repo بالضبط
// رابط الموقع رح يصير: https://zidanammar7111-cpu.github.io/app/
export default defineConfig({
  plugins: [react()],
  base: "/app/",
});
