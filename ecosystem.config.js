module.exports = {
    apps: [
        {
            name: "quza-web",
            script: "node_modules/next/dist/bin/next",
            args: ["start", "-p", "3000"],
            cwd: "/home/quza.co.ke/public_html",
            instances: 1,
            exec_mode: "fork",
            interpreter: "node",
            max_memory_restart: "500M",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};


