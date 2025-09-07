import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeMode = 'light' | 'dark' | 'sakura'

interface ThemeStore {
  mode: ThemeMode
  toggle: () => void
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: 'light',
      toggle: () =>
        set((s) => ({
          mode:
            s.mode === 'light'
              ? 'dark'
              : s.mode === 'dark'
              ? 'sakura'
              : 'light',
        })),
    }),
    { name: 'theme' }
  )
)