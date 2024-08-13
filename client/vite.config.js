import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  server:{
    proxy: {
      '/api' : {
=======
  server: {
    proxy: {
      '/api': {
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  plugins: [react()],
<<<<<<< HEAD
=======
  build: { commonjsOptions: { transformMixedEsModules: true } },

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
})
