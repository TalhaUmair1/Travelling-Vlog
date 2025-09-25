import { drizzle } from 'drizzle-orm/libsql'

import env from '~/lib/env'
// You can specify any property from the libsql connection options
const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
})
