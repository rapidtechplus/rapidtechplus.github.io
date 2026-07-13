"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="logo">{site.logoLetter}</span>
          <span>{site.name}</span>
        </Link>

        <nav className={cn("nav-links", open && "open")} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(isActive(item.href) && "active")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="btn btn-primary nav-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>
        </nav>

        <div className="nav-right">
          <ThemeToggle />
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
