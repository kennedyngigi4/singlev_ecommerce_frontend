module.exports = {
    apps: [
        {
            name: "quza-web",
            script: "node_modules/next/dist/bin/next",
            args: ["start", "-p", "3000", "-H", "127.0.0.1"],
            cwd: "/home/quza.co.ke/public_html",
            instances: 1,
            exec_mode: "fork",
            interpreter: "node",
            max_memory_restart: "500M",
            env: {
                NODE_ENV: "production",
                AUTH_SECRET: "D1t3xqOOkwh/eq43es1/y632HvAotajjhhQcBia2Hoc=",
                AUTH_TRUST_HOST: "true",
                AUTH_URL: "https://quza.co.ke",
                NEXTAUTH_URL: "https://quza.co.ke",
                APIURL: "/v1",
                NEXT_PUBLIC_BASEURL: "https://api.quza.co.ke",
                NEXT_PUBLIC_APIURL: "/v1",
            },
        },
    ],
};
