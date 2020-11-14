import { createContext, useContext } from 'react';

/*
Pulls data it finds from AuthContext. This context is called via a hook "useAuth"
Provider ias added to react to use our new context.
 */
export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}