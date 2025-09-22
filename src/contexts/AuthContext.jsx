import React, { createContext, useContext, useMemo } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const value = useMemo(() => ({
    user: null,
    session: null,
    loading: false,
    signUp: async () => ({ error: { message: "Authentication is currently disabled." } }),
    signIn: async () => ({ error: { message: "Authentication is currently disabled." } }),
    signOut: async () => ({ error: null }),
  }), []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};