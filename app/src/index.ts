import { Hono } from "hono";
import { healthCheck } from "~/health"

const app = new Hono();
app.get("/api", (c) => c.text("Hello 🔥\n"));
app.get("/api/healthcheck", (c) => healthCheck(c))

export default app;
