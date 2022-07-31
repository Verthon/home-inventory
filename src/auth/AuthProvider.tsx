import * as React from 'react'
import type { User } from '@supabase/supabase-js';
import { getUser, supabaseAuth } from 'src/lib/supabase/supabaseClient';

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

export const AuthProvider = ({ children, user = null }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(getUser() || user)
  const { loginAction: login, status } = useLogin()

  React.useEffect(() => {
    const { data: authListener } = supabaseAuth.onAuthStateChange(
      async (_event, session) => {
        if (session) {
          setCurrentUser(session.user) 
        }
      }
    );

    return () => {
      if (authListener) authListener.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabaseAuth]);


  return <AuthContext.Provider value={{login, user: currentUser, authStatus: status}}>
    {children}
  </AuthContext.Provider>
}