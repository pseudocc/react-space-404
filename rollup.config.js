import peer from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
const { main, module } = require('./package.json');

const babel_cfg = {
  ...require('./babel.config'),
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      { corejs: 3 }
    ]
  ],
  babelHelpers: 'runtime',
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peer(),
    resolve(),
    babel(babel_cfg),
    json(),
    commonjs(),
    postcss()
  ]
};