import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json'
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'urlToFile',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      json()
    ]
  },
  {
    input: 'src/main.js',
    external: ['mime-types'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
