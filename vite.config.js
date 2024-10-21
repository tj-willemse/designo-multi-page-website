import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        location: "locations.html",
        contact: "contact.html",
        appDesign: "app-design.html",
        graphicDesign: "graphic-design.html",
        webDesign: "web-design.html",
      },
    },
  },
});
