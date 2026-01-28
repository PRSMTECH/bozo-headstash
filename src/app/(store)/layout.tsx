import Navbar from "@/components/layout/Navbar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileTabBar } from "@/components/layout/MobileTabBar";
import Footer from "@/components/layout/Footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileHeader />
      <div className="pt-20 md:pt-32 min-h-screen">{children}</div>
      <Footer />
      <MobileTabBar />
    </>
  );
}
