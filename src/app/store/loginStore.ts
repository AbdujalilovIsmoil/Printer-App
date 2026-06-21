import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combine, createJSONStorage, persist } from 'zustand/middleware';

const useLoginStore = create(
  persist(
    combine(
      {
        token: '',
      },
      set => ({
        setToken: (token: string) => set({ token }),
      }),
    ),
    {
      name: 'token',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useLoginStore;
