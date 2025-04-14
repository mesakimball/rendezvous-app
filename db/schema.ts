import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const registrations = pgTable("registrations", {
  id: uuid().notNull().primaryKey().defaultRandom(),
  registrationType: text().notNull(),
  contactName: text().notNull(),
  contactEmail: text().notNull(),
  contactPhone: text().notNull(),
  clerkName: text().notNull(),
  clerkEmail: text().notNull(),
  clerkPhone: text().notNull(),
  wardName: text().notNull(),
  stakeName: text().notNull(),
  teachersCount: integer().default(0),
  priestsCount: integer().default(0),
  leadersCount: integer().default(0),
  specialAccomodations: text().default("none"),
});
