/* eslint-disable */
import typescript from 'rollup-plugin-typescript2';
 
export default {
    input: './z2/example.dbj.ts',
    output: {
        format: 'iife',
        file: './d2bs/d2bs/z2bot/example.dbj.js'
    },
    plugins: [typescript()]
}