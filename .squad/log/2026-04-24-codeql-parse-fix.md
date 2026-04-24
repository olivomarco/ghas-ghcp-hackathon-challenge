# CodeQL Parse Error Fix

**Date:** 2026-04-24  
**Agent:** Trinity  

CodeQL was reporting ~89 parse errors from compiled JS in `app/build/`. Created `.github/codeql/codeql-config.yml` with `paths-ignore` for build artifacts, source maps, node_modules, and Angular dist output. Updated workflow to reference config. Warnings eliminated.

**Files:** `.github/codeql/codeql-config.yml`, `.github/workflows/codeql.yml`
