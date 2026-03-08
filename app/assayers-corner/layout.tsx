import MembershipGate from "@/components/MembershipGate";

export default function AssayersCornerLayout({ children }: { children: React.ReactNode }) {
  return <MembershipGate>{children}</MembershipGate>;
}
