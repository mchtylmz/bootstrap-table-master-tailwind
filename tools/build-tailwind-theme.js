import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const files = [
  [
    'src/themes/tailwind/bootstrap-table-tailwind.css',
    'dist/themes/tailwind/bootstrap-table-tailwind.css'
  ]
]

for (const [src, dest] of files) {
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(src, dest)
}
