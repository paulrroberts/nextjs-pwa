/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    sw: '/sw.js'
})

module.exports = withPWA()