# Platform

| | |
|---|---|
| Minecraft | 1.21.1 |
| Loader | NeoForge **21.1.248** (pin this version, do not auto-update) |
| Java | 21 (Temurin; 22 also works) |
| Fabric compat | Sinytra Connector 2.0.0-beta.9 |

## Why NeoForge is pinned
- Season 2025 ran on NeoForge 21.1.215 with `endrem-1.21.X-6.0.2`.
- NeoForge 21.1.248+ crashes at startup with `endrem 6.0.2`
  (`IllegalStateException: Adding duplicate value ... LootInjectorModifier`).
- `endrem 6.3.0` requires NeoForge >= 21.1.243 and fixes it.
- Verified 2026-10-09 on a local dedicated server: 2025 mod set + `endrem 6.3.0` on NeoForge 21.1.248 starts (`Done`) with the same number of errors as the 2025 baseline.
