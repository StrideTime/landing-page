import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { buildTheme } from "./theme";
import { useEffect, useMemo, type ReactNode } from "react";

export function RootThemeProvider({ children }: { children: ReactNode }) {
 const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
 const mode = prefersDarkMode ? "dark" : "light";

 const theme = useMemo(() => buildTheme(mode), [mode]);

 useEffect(() => {
  const root = document.documentElement;

  root.style.setProperty("--color-primary", theme.palette.primary.main);
  root.style.setProperty("--color-secondary", theme.palette.secondary.main);
  root.style.setProperty("--color-bg", theme.palette.background.default);
 }, []);

 return (
  <ThemeProvider theme={theme}>
   <CssBaseline />
   {children}
  </ThemeProvider>
 );
}
