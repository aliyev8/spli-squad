const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = withPWA({
    // Diğer Next.js yapılandırma seçenekleriniz burada olabilir
});
