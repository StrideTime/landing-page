"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@stridetime/ui";
import { AppLayout } from "./AppLayout";

export function Providers({ children }: { children: React.ReactNode }) {
 return (
  <AppRouterCacheProvider>
   <ThemeProvider mode="dark">
    <AppLayout>{children}</AppLayout>
   </ThemeProvider>
  </AppRouterCacheProvider>
 );
}
