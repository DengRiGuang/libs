import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
export default [
  {
    input: 'lib/index.ts',
    output: {
      name: 'libs',
      extend: true,
      file: pkg.browser,
      format: 'iife',
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            emitDeclarationOnly: false,
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
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            emitDeclarationOnly: false,
          },
        },
      }),
    ],
  },
];
