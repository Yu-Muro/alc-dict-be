import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

const whiskys = sqliteTable('whiskys', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    volume: integer('volume'),
    abv: integer('abv'),
    area: text('area'),
    company: text('company'),
    description: text('description'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export { whiskys };
