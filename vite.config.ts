import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation, { Shared } from "@originjs/vite-plugin-federation";

let env = 'prod';
let gameOfLifeUrl = 'https://game-of-life-react-fdad5.web.app/assets/remoteEntry.js'

if (env === 'dev') {
  gameOfLifeUrl = "http://localhost:5173/assets/remoteEntry.js";
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: 'assets/remoteEntry.js ',
  },
  plugins: [
    react(),
    federation({
      name: 'greg.solutions',
      remotes: {
        remote_app: gameOfLifeUrl,
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true }, tailwindcss: { singleton: true } } as Shared,
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
