import { Hono } from 'hono';
import { healthCheck } from '~/controllers/health';
import { getWhiskyCtrl } from './controllers/getWhiskyCtrl';

const route = new Hono();

route.get('/', (c) => c.text('Hello 🔥\n'));
route.get('/healthcheck', (c) => healthCheck(c));
route.get('/whisky', (c) => getWhiskyCtrl(c));

export { route };
