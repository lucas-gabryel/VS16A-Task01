// hooks/useGoogleAuth.ts
import { useState, useCallback } from "react";
import { signInWithPopup, signOut, User } from "firebase/auth";
import { auth, provider } from "../../../firebaseConfig";

const useGoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const login = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Ocorreu um error desconhecido."));
      }

      console.error("Falha ao buscar elemento: ", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);
    setUser(null);
  }, []);

  return {
    user,
    login,
    logout,
    loading,
    error,
  };
};

export default useGoogleAuth;