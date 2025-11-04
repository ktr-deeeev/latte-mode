import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const cafes = pgTable('cafes', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  address: text('address'),
  createdAt: timestamp('created_at').defaultNow(),
});
