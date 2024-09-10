// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///D:/work/buzz/node_modules/vite/dist/node/index.js";
import dts from "file:///D:/work/buzz/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\work\\buzz";
var vite_config_default = defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      formats: ["es", "cjs", "iife", "umd"],
      entry: "./src/index.ts",
      name: "buzzs",
      fileName: "index"
    }
  },
  plugins: [dts({ rollupTypes: true })],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrXFxcXGJ1enpcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtcXFxcYnV6elxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29yay9idXp6L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRidWlsZDoge1xuXHRcdGVtcHR5T3V0RGlyOiB0cnVlLFxuXHRcdGxpYjoge1xuXHRcdFx0Zm9ybWF0czogWydlcycsICdjanMnLCAnaWlmZScsICd1bWQnXSxcblx0XHRcdGVudHJ5OiAnLi9zcmMvaW5kZXgudHMnLFxuXHRcdFx0bmFtZTogJ2J1enpzJyxcblx0XHRcdGZpbGVOYW1lOiAnaW5kZXgnXG5cdFx0fVxuXHR9LFxuXHRwbHVnaW5zOiBbZHRzKHsgcm9sbHVwVHlwZXM6IHRydWUgfSldLFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdCdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJylcblx0XHR9XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0TixPQUFPLFVBQVU7QUFDN08sU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBRmhCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE9BQU87QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNKLFNBQVMsQ0FBQyxNQUFNLE9BQU8sUUFBUSxLQUFLO0FBQUEsTUFDcEMsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxFQUFFLGFBQWEsS0FBSyxDQUFDLENBQUM7QUFBQSxFQUNwQyxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDckM7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
