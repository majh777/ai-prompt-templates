const fs = require('fs');
let content = fs.readFileSync('ai-prompt-templates/index.html', 'utf8');

// Find and mark the fake social proof elements
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('recent-purchase')) {
        console.log('Line ' + (i+1) + ': ' + lines[i].substring(0, 100));
    }
}