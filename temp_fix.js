const fs = require('fs');
let content = fs.readFileSync('ai-prompt-templates/index.html', 'utf8');

// Replace countdown-msg and countdown span
content = content.replace(
    '<span id="countdown-msg">Get $97 in bonuses </span><span class="countdown" id="countdown">23h 59m 59s</span> - <span style="font-size: 0.9rem;">Always included at $47</span>',
    '$97 in bonuses always included at $47'
);

fs.writeFileSync('ai-prompt-templates/index.html', content, 'utf8');
console.log('SUCCESS: Removed countdown from urgency banner');