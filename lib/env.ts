import { z } from 'zod'
import { string } from './../node_modules/zod/v4/classic/coerce'

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
})

export type EnvSchema = z.infer<typeof EnvSchema>

export default EnvSchema.parse(process.env)
