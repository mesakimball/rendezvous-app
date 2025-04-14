import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { registrations } from "./schema.ts";
import { RegistrationContact } from "./types.ts";

const connectionString = Deno.env.get("DATABASE_URL");

if (!connectionString) {
  throw new Error("No database connection string provided");
}

const sql = neon(connectionString);

export const db = drizzle({ client: sql });

export async function getRegistrations() {
  const result = await db.select().from(registrations);
  return result[0];
}

export async function createRegistration(reg: RegistrationContact) {
  const result = await db.insert(registrations).values(reg).returning();
  return result[0];
}
