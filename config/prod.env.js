'use strict'

// CESIUM_TOKEN comes from the build environment (Vercel -> Environment
// Variables). Webpack's DefinePlugin replaces the whole `process.env` object
// with this one, so anything the app reads at runtime has to be listed here.
//
// The token is deliberately not hardcoded: this repository is public, and the
// token upstream ships with was revoked (the ion API answers 401 for it), which
// is why the globe never loaded.
module.exports = {
  NODE_ENV: '"production"',
  CESIUM_TOKEN: JSON.stringify(process.env.CESIUM_TOKEN || '')
}
