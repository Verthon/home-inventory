import type { User } from "@supabase/supabase-js"

export type AuthContextProps = {
  user: User | null
}

export type AuthProviderProps = {
  children: React.ReactNode
  user?: AuthContextProps['user']
}