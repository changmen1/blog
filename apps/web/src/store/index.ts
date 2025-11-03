import { create } from 'zustand';
import type { StoreApi, UseBoundStore } from 'zustand';

const useHisStore: UseBoundStore<StoreApi<any>> = create((set) => ({
  theme: 'system',
  setTheme: (str: string) => set(() => ({ theme: str }))
}))
export default useHisStore;
