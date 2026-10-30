
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#101F30]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 md:flex-row lg:px-10">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Mwaniki
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md border border-[#40536A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
