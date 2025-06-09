import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";
import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router";

interface PrivateProps {
  children: ReactNode;
}
export function Private({ children }: PrivateProps) {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user?.uid,
          email: user?.email,
        };
        localStorage.setItem("@reactlinks", JSON.stringify(userData));
        setSignedIn(true);
        setLoading(false);
      } else {
        console.log("Usuário não autenticado");
        setSignedIn(false);
        setLoading(false);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <div className="flex flex-col min-h-screen items-center justify-center text-white text-3xl font-medium italic">Carregando...</div>;
  }
  if (!signedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
