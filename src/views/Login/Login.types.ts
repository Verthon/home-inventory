import { Session } from '@supabase/supabase-js'
import { MutateOptions } from 'react-query'
import { LoginPayload } from 'src/lib/supabase/supabaseClient'

export type LoginFormValues = {
  email: string
  password: string
}

export type useLoginFormProps = {
  login: (
    variables: LoginPayload,
    options?: MutateOptions<Session | null, unknown, LoginPayload, unknown>
  ) => void
}
