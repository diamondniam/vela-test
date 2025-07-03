const fs = require('fs')
const path = require('path')

const inputDir = './public/images'
const outputDir = './src/components/icons'

fs.readdirSync(inputDir).forEach((file) => {
  if (file.endsWith('.svg')) {
    const svg = fs.readFileSync(path.join(inputDir, file), 'utf8')

    const component = `
<template>
  ${svg.replace(/(fill|stroke)="[^"]+"/g, '$1="currentColor"')}
</template>
    `.trim()

    const name = path.basename(file[0].toUpperCase() + file.slice(1), '.svg')
    fs.writeFileSync(path.join(outputDir, `${name}.vue`), component)
  }
})
