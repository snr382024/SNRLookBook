import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vercel()],
  server:{
    host: '0.0.0.0',
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        shirell: './shirell.html',
        olivia: './olivia.html',
        aliah: './aliah.html',
        gavin: './gavin.html',
        sera: './sera.html',
        caitlin: './caitlin.html',
        annika: './annika.html',
        alyssa: './alyssa.html',
        emma: './emma.html',
        shannon: './shannon.html',
        madisyn: './madisyn.html',
        deanna: './deanna.html',
        francesca: './francesca.html',
        eva: './eva.html',
        david: './david.html',
        natalie: './natalie.html',
        nicole: './nicole.html',
        mo: './mo.html',
        sierra: './sierra.html',

      }
    }
  },
})