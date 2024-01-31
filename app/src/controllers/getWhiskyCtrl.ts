import { Context } from 'hono';
import { drizzle } from 'drizzle-orm/d1';

import { Env } from '~/config'
import { whiskys } from '~/models/whisky';

/**
 * サーバーの健康状態を確認する関数。
 * @param {Context} ctx - HonoのContextオブジェクト
 * @return {Object} 健康状態を示すJSONレスポンス
 */
async function getWhiskyCtrl(ctx: Context) {
    const env: Env = ctx.env;
    const db = drizzle(env.Database);
    const result = await db.select().from(whiskys);
    return ctx.json(result);
}

export { getWhiskyCtrl };
