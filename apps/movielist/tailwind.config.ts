import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['luxury'],
  },
};
