import { Hono } from 'hono';
import { healthCheck } from '~/api/health';

const route = new Hono();

route.get('/', (c) => c.text('Hello 🔥\n'));
route.get('/healthcheck', (c) => healthCheck(c));

export { route };
