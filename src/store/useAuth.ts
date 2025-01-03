import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: async (email: string, password: string) => {
        // Extract name from email (before @) and capitalize first letter
        const name = email.split('@')[0];
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        const user = { id: '1', email, name: capitalizedName };
        set({ user });
      },
      signup: async (email: string, password: string, name: string) => {
        // Capitalize first letter of each word in name
        const capitalizedName = name
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        const user = { id: '1', email, name: capitalizedName };
        set({ user });
      },
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);