module.exports = {
    apps: [
        {
            name: 'icon-website',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            cwd: '/home/icontraining/htdocs/www.icontraining.app/Icon-website-vercel',
            instances: 1,
            exec_mode: 'fork',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
            // Restart settings
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',

            // Logging
            error_file: '/home/icontraining/logs/icon-website-error.log',
            out_file: '/home/icontraining/logs/icon-website-out.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
            merge_logs: true,

            // Graceful shutdown
            kill_timeout: 5000,
            wait_ready: true,
            listen_timeout: 10000,
        },
    ],
};
