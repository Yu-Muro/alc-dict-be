import { Context } from 'hono';

/**
 * healthCheckは、サーバーの健康状態を確認するための関数です。
 * @param {Context} c - HonoのContextオブジェクト
 * @return {Object} 健康状態を示すJSONレスポンス
 */
function healthCheck(c: Context) {
    return c.json({
        message: 'Health check OK',
    });
}

export { healthCheck };
