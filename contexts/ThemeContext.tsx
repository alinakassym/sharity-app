import React, { createContext, useContext, useState, ReactNode } from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";

type ColorScheme = "light" | "dark";
type ThemeMode = "system" | "light" | "dark";

interface ThemeContextType {
  colorScheme: ColorScheme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const systemColorScheme = useSystemColorScheme();

  const colorScheme: ColorScheme =
    themeMode === "system"
      ? (systemColorScheme ?? "light")
      : (themeMode as ColorScheme);

  return (
    <ThemeContext.Provider value={{ colorScheme, themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
