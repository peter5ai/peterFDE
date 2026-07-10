## OPEN — waiting-on-external-condition — UD-CODE-002 scanner scope includes third-party cache

- **Date**: 2025-07-10
- **Source**: Governance scan UD-CODE-002 (hardcoded colors detection)
- **Open item**: Scanner flagged 24+ CSS files under `AppData/Local/Doubao/User Data/gecko_cache/.../flow-doubao/doubao/web/static/css/` for containing hardcoded colors. These files belong to the Doubao (豆包) desktop application cache and are not part of the peter-personal-website project.
- **Related constraints**: Scanner appears to run system-wide or broad-directory scans without excluding third-party application cache directories. Files are minified generated assets using the Semi Design system (`--semi-` prefixed variables). Project directory has no scanner configuration file (no `.scannerrc`, `.udconfig`, or similar).
- **Current leaning**: These are false positives. The scanner scope should be restricted to the project's own source tree (`src/`, `public/`, etc.). Cache and third-party application directories should be excluded.
- **Blocked by**: Scanner configuration is external to this project. No scanner config file exists in the project directory that could be edited. Requires action from the UD-CODE-002 scanner owner/team.
- **Resolves when**: Scanner is reconfigured to exclude at least: `AppData/Local/Doubao/**`, `**/gecko_cache/**`, `**/flow-doubao/**`. Alternatively, scan scope should be limited to `C:\Users\Administrator\Desktop\共享\peter-personal-website\**`.
- **Recommended action for scanner team**: Add path exclusions for common third-party cache directories: `AppData/Local/**`, `AppData/Roaming/**`, `**/node_modules/**`, `**/*.cache/**`, or equivalent.
