"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MembershipContextType {
  isMember: boolean;
  toggleMember: () => void;
}

const MembershipContext = createContext<MembershipContextType>({
  isMember: false,
  toggleMember: () => {},
});

export function MembershipProvider({ children }: { children: ReactNode }) {
  const [isMember, setIsMember] = useState(false);
  const toggleMember = () => setIsMember((prev) => !prev);

  return (
    <MembershipContext.Provider value={{ isMember, toggleMember }}>
      {children}
    </MembershipContext.Provider>
  );
}

export function useMembership() {
  return useContext(MembershipContext);
}
