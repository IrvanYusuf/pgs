import { create } from "zustand";
import { Theme } from "@/enum/common";
import { createJSONStorage, persist, devtools } from "zustand/middleware";

type Settings = {
  theme: Theme;
};

interface SettingStore {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  toggleTheme: () => void;
}

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist(
      (set, get) => ({
        settings: {
          theme: Theme.DARK,
        },
        setSettings: (settings: Settings) => set({ settings }),
        toggleTheme: () =>
          set(() => ({
            settings: {
              theme:
                get().settings.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
            },
          })),
      }),
      {
        name: "user-setting",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ settings: state.settings }),
        onRehydrateStorage: () => (state) => {
          if (state?.settings?.theme) {
            console.log("Rehydrating theme", state.settings.theme);
          }
        },
      }
    )
  )
);
