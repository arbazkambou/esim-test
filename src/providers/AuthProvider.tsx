"use client";

import api from "@/lib/axios/apiSetup";
import {
  LoginUserResponseType,
  LoginUserType,
} from "@/types/auth/LoginUserTypes";
import {
  RegisterUserResponseType,
  RegisterUserType,
} from "@/types/auth/RegisterUserTypes";
import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

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
  }, []);

  async function fetchUser() {
    const token = Cookies.get("token");
    try {
      const response = await api.get<LoginUserType>("/user", {
        headers: { Authorization: `Bearer ${token} ` },
      });
      if (!response.data.id) {
        return logout();
      }
      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) {
          return;
        }

        logout();
      } else {
        logout();
      }
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setUser(null);
    Cookies.remove("token");
  }

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
