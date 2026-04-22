import { readFileSync, writeFileSync } from 'fs';

const html = readFileSync('index.html', 'utf8');
const escaped = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const worker = `const html = \`${escaped}\`;

export default {
  async fetch(request) {
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};
`;

writeFileSync('worker.js', worker);
console.log('worker.js built');
