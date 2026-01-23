import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@stridetime/theme";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <ThemeProvider mode="dark">
   <App />
  </ThemeProvider>
 </StrictMode>
);
