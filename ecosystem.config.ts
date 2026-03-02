module.exports = {
    apps: [
        {
            name: "quza-app",
            script: "node_modules/next/dist/bin/next",
            args: "start",
            env: {
                PORT: 3000,
                NODE_ENV: "production",
            },

            
            instances: 1, 
            exec_mode: "fork", 
            max_memory_restart: "500M",
            autorestart: true,
            watch: false,
        },
    ],
};