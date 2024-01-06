import { Context } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { Env } from '~/config'

const health = sqliteTable('HealthCheck', {
    id: integer('id').primaryKey(),
    connection: text('connection').notNull(),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

/**
 * サーバーの健康状態を確認する関数。
 * @param {Context} ctx - HonoのContextオブジェクト
 * @return {Object} 健康状態を示すJSONレスポンス
 */
async function healthCheck(ctx: Context) {
    const env: Env = ctx.env;
    const db = drizzle(env.Database);
    const result = await db.select().from(health);
    return ctx.json({
		message: 'Health check OK',
        database: result[0].connection,
    });
}

export { healthCheck };
