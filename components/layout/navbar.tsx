"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SCROLL_THRESHOLD = 200;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileDropdown = (id: string) => {
    setOpenMobileDropdown((current) => (current === id ? null : id));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClassName = isScrolled
    ? "bg-white/95 text-app-purple shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/80"
    : "bg-transparent text-white";

  const mobileMenuClassName = isScrolled
    ? "border-t border-black/10 bg-white text-app-purple"
    : "border-t border-white/20 bg-black/30 text-white backdrop-blur-sm";

  const desktopLinkClassName = isScrolled
    ? "text-sm font-medium whitespace-nowrap transition-colors hover:text-app-orange"
    : "text-sm font-medium whitespace-nowrap transition-colors hover:text-app-orange";

  const mobileLinkClassName = isScrolled
    ? "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5"
    : "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navbarClassName}`}
    >
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/icons/logo.svg"
            alt="Within Tech Logo"
            width={96}
            height={96}
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.id} className="flex items-center">
                {"children" in link && link.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="border-none outline-none">
                      <button
                        type="button"
                        className={desktopLinkClassName + " flex items-center gap-1 leading-none"}
                      >
                        {link.label}
                        <ChevronDown className="size-4" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="center" className="w-56">
                      {link.children.map((child) => (
                        <DropdownMenuItem key={child.id} asChild>
                          <Link href={child.href} className="whitespace-nowrap">
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={link.href} className={desktopLinkClassName + " leading-none"}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button className="rounded-sm bg-app-purple px-6 py-4 hover:bg-app-purple/90">
            Donate
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={`lg:hidden ${
              isScrolled
                ? "hover:bg-black/5 hover:text-app-purple"
                : "text-white hover:bg-white/10 hover:text-white"
            }`}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={mobileMenuClassName}>
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id} className="rounded-md">
                  {"children" in link && link.children ? (
                    <div className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(link.id)}
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                          isScrolled ? "hover:bg-black/5" : "hover:bg-white/10"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            openMobileDropdown === link.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openMobileDropdown === link.id && (
                        <ul
                          className={`mt-1 ml-3 flex flex-col gap-1 pl-3 ${
                            isScrolled ? "border-l border-black/10" : "border-l border-white/20"
                          }`}
                        >
                          {link.children.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={child.href}
                                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                  isScrolled
                                    ? "text-black/70 hover:bg-black/5 hover:text-black"
                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={mobileLinkClassName}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
