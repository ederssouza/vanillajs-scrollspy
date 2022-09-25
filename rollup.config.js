import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/VanillaScrollspy/index.js',
  output: [
    {
      file: 'dist/vanillajs-scrollspy.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vanillajs-scrollspy.es.js',
      format: 'es'
    },
    {
      file: 'dist/vanillajs-scrollspy.min.js',
      format: 'iife',
      name: 'VanillaScrollspy',
      plugins: [terser()]
    }
  ]
}
