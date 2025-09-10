import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Appearance } from "react-native";

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
  const [systemColorScheme, setSystemColorScheme] = useState<ColorScheme>(
    () => (Appearance.getColorScheme() as ColorScheme) || "system",
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      console.log("Appearance changed to:", colorScheme);
      setSystemColorScheme((colorScheme as ColorScheme) || "light");
    });

    return () => subscription.remove();
  }, []);

  console.log("Current system color scheme:", systemColorScheme);

  const colorScheme: ColorScheme =
    themeMode === "system" ? systemColorScheme : (themeMode as ColorScheme);

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
