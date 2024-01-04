import { Context } from 'hono';

/**
 * healthCheckは、サーバーの健康状態を確認するための関数です。
 * @param {Context} ctx - HonoのContextオブジェクト
 * @return {Object} 健康状態を示すJSONレスポンス
 */
function healthCheck(ctx: Context) {
    return ctx.json({
		message: 'Health check OK',
    });
}

export { healthCheck };
