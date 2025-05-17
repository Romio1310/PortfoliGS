"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "@/lib/motion-shim";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <MotionConfig>
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
}
