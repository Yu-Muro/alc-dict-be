import { Context } from 'hono';

function healthCheck(c: Context) {
	return c.json({
		message: 'Health check OK',
	});
}

export { healthCheck };
