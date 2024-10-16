const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    display: 'standalone'
})

module.exports = withPWA()
