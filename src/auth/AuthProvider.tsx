import * as React from 'react'
import type { User } from '@supabase/supabase-js';
import { getUser } from 'src/lib/supabase/supabaseClient';

import { useLogin } from "src/views/Login/useLogin"
import { AuthContext } from "./AuthContext"
import type { AuthProviderProps } from "./AuthContext.types"

export const useAuth = () => {
  const auth = React.useContext(AuthContext);

  if (auth === undefined) {
    throw new Error('AuthContext is unavailable, make sure you are using UserAuthContextProvider');
  }

  const {
    authStatus,
    login,
    user
  } = auth

  return {
    authStatus,
    login,
    user
  };
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = React.useState<User | null>(null)
  const { loginAction: login, status } = useLogin()

  React.useEffect(() => {
    setUser(getUser())
  }, [])


  return <AuthContext.Provider value={{login, user, authStatus: status}}>
    {children}
  </AuthContext.Provider>
}