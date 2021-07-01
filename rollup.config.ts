import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';
export default [
  {
    input: 'lib/index.ts',
    output: {
      name: 'libs',
      extend: true,
      file: pkg.browser,
      format: 'iife',
      globals: {
        vue: 'Vue',
      },
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      terser({
        format: {
          comments: false,
        },
      }),
    ],
  },
  {
    input: 'lib/index.ts',
    output: {
      file: pkg.module,
      extend: true,
      format: 'es',
      globals: {
        vue: 'Vue',
      },
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
    ],
  },
  {
    input: 'lib/index.ts',
    output: {
      file: pkg.types,
      format: 'es',
    },
    plugins: [dts()],
  },
];
