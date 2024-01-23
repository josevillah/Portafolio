// astro.config.mjs
import tailwind from '@astrojs/tailwind';

export default {
  integrations: [
    tailwind(),
    // Otros plugins si los tienes
  ],
  buildOptions: {
    baseUrl: '/portafolio/'
  }
};