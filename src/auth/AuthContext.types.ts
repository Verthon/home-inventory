import type { Session, User } from "@supabase/supabase-js"
import type { QueryStatus, UseMutateFunction } from "react-query"

import { LoginPayload } from "src/lib/supabase/supabaseClient"

export type AuthContextProps = {
  user: User | null
  authStatus: QueryStatus
  login: UseMutateFunction<Session | null, unknown, LoginPayload, unknown>
}

export type AuthProviderProps = {
  children: React.ReactNode
  user?: AuthContextProps['user']
}