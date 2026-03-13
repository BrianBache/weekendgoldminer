"use client";

import { ThemeProvider } from "next-themes";
import { MembershipProvider } from "./MembershipContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MembershipProvider>
        {children}
      </MembershipProvider>
    </ThemeProvider>
  );
}
