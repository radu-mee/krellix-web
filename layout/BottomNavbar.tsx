import { primaryNavigation } from "@/lib/site";
import NavChip from "@/ui/NavChip";
import ThemeToggle from "@/ui/ThemeToggle";

export default function BottomNavbar() {
  return (
    <div className="hidden h-[76px] items-center justify-between border-b border-[var(--border-strong)] bg-[var(--navbar-bottom-bg)] px-6 backdrop-blur-md md:flex">
      <nav
        aria-label="Primary navigation"
        className="flex flex-wrap items-center gap-3"
      >
        {primaryNavigation.map((item) => (
          <NavChip key={item.label} href={item.href} label={item.label} />
        ))}
      </nav>
      <ThemeToggle />
    </div>
  );
}
