# Session Hygiene Policy

## Current State
- Active sessions: 1 (this session)
- Session locks: 1 (alive, 34s old)
- Total sessions stored: 1

## Hygiene Rules

### Daily
- Review session locks on startup
- Archive important outcomes before reset
- Check for stale sessions (>1 hour inactive)

### Weekly
- Full session cleanup audit
- Archive old transcripts to markdown
- Verify no orphan processes

### Triggers for Immediate Cleanup
- Context >80% used
- Latency degradation
- Response quality drop

## Commands
```bash
# Check sessions
openclaw sessions list

# Cleanup dry-run
openclaw sessions cleanup --dry-run

# Force cleanup (if needed)
openclaw sessions cleanup
```

## Notes
- Currently minimal usage, no immediate action needed
- Will expand as system scales
