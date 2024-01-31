import type { Config } from "drizzle-kit";

export default {
    schema: "./src/models/*.ts",
    out: "./migrations",
    driver: "d1",
    dbCredentials: {
        wranglerConfigPath: "./wrangler.toml",
        dbName: "alc-dict",
    },
} satisfies Config;
