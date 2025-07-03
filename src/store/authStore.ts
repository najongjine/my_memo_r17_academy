import create from "zustand";
import { persist } from "zustand/middleware";

interface UserRole {
  idp: number;
  roleName: string;
}

interface UserData {
  idp: number;
  username: string;
  password: string;
  tUserRoles: UserRole[];
}

interface AuthState {
  userData: UserData | null;
  userToken: string | null;
  setAuthData: (data: { userData: UserData; userToken: string }) => void;
  resetAuthData: () => void;
}

export const useAuthStore = create<AuthState>(
  persist<AuthState>(
    (set) => ({
      userData: null,
      userToken: null,
      setAuthData: ({ userData, userToken }) => set({ userData, userToken }),
      resetAuthData: () => set({ userData: null, userToken: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
