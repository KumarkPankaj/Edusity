// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "Edusity",
//   plugins: [react()],
// })

import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "react-scroll": "react-scroll/dist/react-scroll.js",
    },
  },
});
