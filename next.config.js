const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    sw: '/sw.js',
    register: true,
    skipWaiting: true,
    exclude: [
        // add buildExcludes here
        ({ asset, compilation }) => {
            if (asset.name.startsWith('server/') || asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)) {
                return true
            }
            if (isDev && !asset.name.startsWith('static/runtime/')) {
                return true
            }
            return false
        }
    ]
})

module.exports = withPWA()
