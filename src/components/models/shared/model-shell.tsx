import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

type ModelShellProps = {
  children: React.ReactNode;
};

export default function ModelShell({ children }: ModelShellProps) {
  return (
    <main className="bg-slate-50">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
