const fs = require('fs');
const content = fs.readFileSync('src/app/[locale]/gallery/page.tsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('/') && !line.includes('//') && !line.includes('/*') && !line.includes('*/')) {
    if (line.match(/[^\\/]\/[^\/]*[a-z]/i)) {
      console.log('Line ' + (i+1) + ': ' + line.trim());
    }
  }
});