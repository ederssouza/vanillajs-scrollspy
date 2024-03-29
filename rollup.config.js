import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'

export default {
  plugins: [del({ targets: 'dist/*' })],
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
