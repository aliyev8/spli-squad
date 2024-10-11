export default function manifest() {
    return {
    name: 'Split Squads',
    short_name: 'sqs',
    description: 'split squads',
    start_url: '/',
    display: 'standalone',
    background_color: '#0099e5',
    theme_color: '#0099e5',
    icons: [
        {
            src: '/48.png',
            sizes: '48x48',
            type: 'image/png',
        },
        {
            src: '/72.png',
            sizes: '72x72',
            type: 'image/png',
        },
        {
            src: '/96.png',
            sizes: '96x96',
            type: 'image/png',
        },
        {
            src: '/144.png',
            sizes: '144x144',
            type: 'image/png',
        },
        {
            src: '/192.png',
            sizes: '192x192',
            type: 'image/png',
        },
    ],
};
}
