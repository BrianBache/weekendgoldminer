import MembershipGate from "@/components/MembershipGate";

export default function GISMapsLayout({ children }: { children: React.ReactNode }) {
  return <MembershipGate>{children}</MembershipGate>;
}
