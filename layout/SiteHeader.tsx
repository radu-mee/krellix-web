import BottomNavbar from "@/layout/BottomNavbar";
import TopNavbar from "@/layout/TopNavbar";

export default function SiteHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto w-full max-w-[1280px] xl:border-x xl:border-[var(--border-strong)]">
          <TopNavbar />
          <BottomNavbar />
        </div>
      </header>
      <div aria-hidden="true" className="h-[76px] md:h-[152px]" />
    </>
  );
}