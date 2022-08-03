import * as React from 'react'

import type { AuthContextProps } from './AuthContext.types';

export const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);