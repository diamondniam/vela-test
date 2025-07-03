const fs = require('fs')
const path = require('path')

const inputArg = process.argv[2]
if (!inputArg) {
  console.error('❌ Missing input argument')
  process.exit(1)
}
const iconsDir = path.resolve(process.cwd(), `src/${inputArg}`)
const outFile = path.join(iconsDir, 'index.js')

if (!fs.existsSync(iconsDir)) {
  console.error('❌ Folder not found:', iconsDir)
  process.exit(1)
}

const vueFiles = fs
  .readdirSync(iconsDir)
  .filter((f) => f.endsWith('.vue') && !f.startsWith('index'))

const lines = vueFiles.map((file) => {
  const name = path.basename(file, '.vue')
  return `export { default as ${name} } from './${name}.vue'`
})

fs.writeFileSync(outFile, lines.join('\n') + '\n')

console.log(`✅ index.js generated with ${vueFiles.length} exports.`)
