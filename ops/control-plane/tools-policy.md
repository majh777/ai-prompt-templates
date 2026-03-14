# Tool Policy Matrix

## Agent Tool Surfaces

| Tool | Alice | Blade | Zephyr | Light | Kimi | Nox |
|------|-------|-------|--------|-------|------|-----|
| filesystem | R | RW | RW | - | - | R |
| exec | - | RW | - | - | - | - |
| browser | - | RW (on-demand) | R | - | - | - |
| sessions | R | RW | R | - | - | R |
| memory | RW | RW | RW | - | - | R |
| messaging | R | RW | R | - | - | - |
| subagents | - | RW | - | - | - | - |
| image | - | R | RW | - | - | - |
| web_fetch | R | RW | RW | - | - | - |
| web_search | R | RW | RW | - | - | - |

## Policy Key
- R = Read only
- RW = Read/Write
- - = No access

## Notes
- Blade has broadest surface per Triad Mode requirements
- Zephyr needs image access for IP work
- Light/Kimi inactive until activation
- Nox dormant, read-only continuity
