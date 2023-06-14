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
    ]
  },
  publicAssets: [
    {
      dir: 'public',
      baseURL: '/public',
    },
  ],
  esbuild: {
    options: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      loaders: {
        '.js': 'jsx',
      },
    },
  },
  rollupConfig: {
    plugins: [
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
      preactIslandPlugins({
        rootDir: '.',
        atomic: true,
        hash: false,
        baseURL: '/public',
        bundleClient: {
          outDir: 'public',
        },
      }),
    ],
  },
});
