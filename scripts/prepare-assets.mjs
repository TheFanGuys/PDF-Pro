import { mkdir, copyFile, readdir, unlink } from 'node:fs/promises';
await mkdir('public/vendor/ocr',{recursive:true});
// Vite now emits one deduplicated PDFium asset from the viewer import.
await copyFile('node_modules/tesseract.js/dist/worker.min.js','public/vendor/ocr/worker.min.js');
for(const f of await readdir('public/vendor/ocr')) if(f.startsWith('tesseract-core')) await unlink('public/vendor/ocr/'+f);
for(const f of ['tesseract-core-lstm.wasm.js','tesseract-core-simd-lstm.wasm.js','tesseract-core-relaxedsimd-lstm.wasm.js']) await copyFile('node_modules/tesseract.js-core/'+f,'public/vendor/ocr/'+f);
console.log('Local OCR assets prepared; PDFium is bundled once by Vite.');
