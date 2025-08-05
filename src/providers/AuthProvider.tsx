"use client";

import {
  LoginUserResponseType,
  LoginUserType,
} from "@/types/auth/LoginUserTypes";
import {
  RegisterUserResponseType,
  RegisterUserType,
} from "@/types/auth/RegisterUserTypes";
import { GetUserObject } from "@/types/user/UserTypes";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { usePromoCode } from "./PromoCodeProvider";
import { baseUrl } from "@/lib/fetch/apiSetup";

interface AuthContextTypes {
  user: LoginUserType | null;
  setUser: (user: LoginUserType) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
  isAuthLoading: boolean;
  login: (data: LoginUserResponseType | RegisterUserResponseType) => void;
}

const AuthContext = createContext<AuthContextTypes>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  logout: () => {},
  isAuthLoading: true,
  login: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<RegisterUserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const { setPromoCodeData } = usePromoCode();
  const queryClient = useQueryClient();

  //if it found cookeis in browser it will authenticatee the user , also calls fetch user api because in any case if cookies is malfunction or has beend modified it then logout the user
  useEffect(function () {
    const tokenFromCookie = Cookies.get("token");
    setIsAuthLoading(true);
    if (tokenFromCookie) {
      setIsAuthenticated(true);
      fetchUser();
      setIsAuthLoading(false);
    } else {
      logout();
      setIsAuthLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //fetch user api which will run on first page load to check if user is authenticated or not
  async function fetchUser() {
    try {
      const token = Cookies.get("token");
      const response = await fetch(`${baseUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data: GetUserObject = await response.json();

      if (!data.id) {
        return logout();
      }

      setUser(data);
    } catch {
      logout();
    }
  }

  //log the user out by clearing cookies, promocde data and user state to null
  function logout() {
    setIsAuthenticated(false);
    setUser(null);
    Cookies.remove("token");
    queryClient.clear();
    setPromoCodeData(null);
  }

  //responsible for logged in the user,
  //it will receieve user object then based on the user object it will set his state to authenticate and also set his token in cookies
  function login(data: LoginUserResponseType | RegisterUserResponseType) {
    setUser(data.user);
    setIsAuthenticated(true);
    Cookies.set("token", data.access_token, { expires: 365 });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isAuthLoading,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
