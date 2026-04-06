import re

with open('ai-prompt-templates/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old = '''<!-- Urgency Banner -->
            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 12px; padding: 16px 24px; margin: 20px auto; max-width: 500px; text-align: center; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);">
                <div style="font-weight: 700; color: #92400e; font-size: 1.05rem; margin-bottom: 6px;">🎁 Special Launch Bonus</div>
                <div style="font-size: 1.5rem; font-weight: 800; color: #b45309;">⏰ <span class="countdown-timer">--h --m --s</span></div>
                <div style="font-size: 0.85rem; color: #78350f; margin-top: 6px;">All bonuses included at $47</div>
            </div>'''

new = '''<!-- Benefits Banner -->
            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 12px; padding: 16px 24px; margin: 20px auto; max-width: 500px; text-align: center; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);">
                <div style="font-weight: 700; color: #92400e; font-size: 1.05rem; margin-bottom: 6px;">🎁 Complete Bundle</div>
                <div style="font-size: 1.5rem; font-weight: 800; color: #b45309;">50+ templates + $97 in bonuses</div>
                <div style="font-size: 0.85rem; color: #78350f; margin-top: 6px;">One-time $47 - yours forever</div>
            </div>'''

if old in content:
    content = content.replace(old, new)
    with open('ai-prompt-templates/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS')
else:
    print('NOT FOUND')