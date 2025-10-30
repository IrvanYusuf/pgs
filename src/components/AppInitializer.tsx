"use client";
import { useSettingStore } from "@/store/useSettingStore";
import { useEffect, useState } from "react";

export default function AppInitializer() {
  const settingStore = useSettingStore();
  const theme = settingStore.settings.theme;

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  // useEffect(() => {
  //   console.log("theme", theme);
  //   const root = document.documentElement;

  //   // Remove existing theme classes
  //   root.classList.remove("light", "dark");

  //   // Add the current theme class
  //   root.classList.add(theme === Theme.DARK ? "dark" : "light");
  // }, [theme]);

  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme, hydrated]);

  return null;
}
