#!/usr/bin/env node
// Build step: compose content/ into each app.
//
// Contract (to be implemented in milestone 1):
//   - Read the content spine + fragments from ../content.
//   - For apps/parent: include sections with audience in {both, parent}.
//   - For apps/kid:    include sections with audience in {both, kid} ONLY.
//     The candid (audience: 'parent') fragments must never be written into
//     apps/kid — that exclusion IS the safety boundary.
//
// Rendering itself happens client-side from URL params; this step assembles
// the content module each app ships.

console.log('build: not implemented yet (scaffold). See tools/build.mjs contract.');
