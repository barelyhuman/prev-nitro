import { defineNitroConfig } from 'nitropack/config';
import preactIslandPlugins from '@barelyhuman/preact-island-plugins/rollup';
import babel from '@rollup/plugin-babel';

export default defineNitroConfig({
  imports: {
    imports: [
      {
        name: 'renderToString',
        as: 'renderComponent',
        from: 'preact-render-to-string',
      },
    ],
  },
  publicAssets: [
    {
      dir: 'public',
      baseURL: '/public',
    },
    {
      dir: '.islands',
      baseURL: '/.islands',
    },
  ],
  esbuild: {
    options: {
      loaders: {
        '.js': 'jsx',
      },
    },
  },
  rollupConfig: {
    plugins: [
      preactIslandPlugins({
        rootDir: '.',
        baseURL: '/.islands',
        client: {
          output: '.islands',
        },
      }),
      babel({
        babelHelpers: 'bundled',
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
              importSource: 'preact',
            },
          ],
        ],
      }),
    ],
  },
});
