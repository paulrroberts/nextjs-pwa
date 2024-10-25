/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    sw: '/sw.js',
    register: true,
    skipWaiting: true
})

module.exports = withPWA()
