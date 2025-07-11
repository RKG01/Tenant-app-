import 'dotenv/config'

import {drizzle} from 'drizzle-orm/node-postgres'

export const db = drizzle(process.env.NEON_DATABASE_URL!);