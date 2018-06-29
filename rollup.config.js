import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    {
      name: 'mwpUserProfile',
      file: pkg.browser,
      format: 'umd',
    },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    postcss({
      extract: 'dist/mwp-user-profile.css',
      modules: {
        generateScopedName: '[hash:base64:5]',
      },
      plugins: [
        autoprefixer(),
        cssnano({
          preset: 'default',
        }),
      ],
    }),
    resolve({ extensions: ['.mjs', '.js', '.jsx', '.json'] }),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    terser(),
    filesize(),
  ],
};
