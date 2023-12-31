import { Hono } from 'hono';
import { logger } from 'hono/logger'
import { route } from '~/route';

const app = new Hono();

app.use('*', logger())
app.route('/api', route);

export default app;
