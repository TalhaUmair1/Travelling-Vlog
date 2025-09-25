import env from '~/lib/env'

import * as schema from './schema'

import { drizzle } from 'drizzle-orm/libsql'
const db = drizzle({
  connection: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
  schema,
})

export default db
