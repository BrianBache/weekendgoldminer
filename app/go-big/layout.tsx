import MembershipGate from "@/components/MembershipGate";

export default function GoBigLayout({ children }: { children: React.ReactNode }) {
  return <MembershipGate>{children}</MembershipGate>;
}
