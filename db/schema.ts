import { pgTable, varchar, uuid, text } from "drizzle-orm/pg-core";

export const blogsTable = pgTable("blogs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 80 }).notNull(),
  body: text("body").notNull(),
  orgId: text("org_id").notNull(),
});


export type CreateBlogType = typeof blogsTable.$inferInsert;
export type SelectBlogType = typeof blogsTable.$inferSelect;