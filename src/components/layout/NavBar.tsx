"use client";
import NavLinkTransparent from "../form/NavLinkTransparent";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedHamburgerMenu from "../AnimatedHamburgerMenu";
import { useState, useEffect, useRef } from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import Logo from "../common/Logo";
import { itemVariants, listVariants } from "@/utils/AnimationVariants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarMenus } from "@/data/navbar-menus";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // ← cek halaman aktif
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [onPrimaryBG, setOnPrimaryBG] = useState(false);

  const isHome = pathname === "/" || pathname!.startsWith("/#");

  // Handle scroll behavior
  useEffect(() => {
    if (!isHome) return; // hanya berlaku di home
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Detect section (whyWorkWithUs)
  useEffect(() => {
    if (!isHome) return;

    const target = document.getElementsByClassName("whyWorkWithUs");
    if (!target.length) return;

    const handleScrollWhyWorkWithUs = () => {
      const navHeight = navRef.current?.clientHeight || 0;
      let isInside = false;
      for (const element of target) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          isInside = true;
          break;
        }
      }
      setOnPrimaryBG(isInside);
    };

    handleScrollWhyWorkWithUs();
    window.addEventListener("scroll", handleScrollWhyWorkWithUs);
    return () =>
      window.removeEventListener("scroll", handleScrollWhyWorkWithUs);
  }, [isHome]);

  const bgColor = !isHome
    ? "rgba(255,255,255,1)" // halaman bukan home → putih solid
    : onPrimaryBG || isScrolled
    ? "rgba(255,255,255,1)" // home tapi sedang di scroll atau section tertentu
    : "rgba(255,255,255,0)"; // home awal → transparan

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, backgroundColor: bgColor }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        backgroundColor: { duration: 0.4, ease: "easeInOut" },
      }}
      className={`fixed top-0 left-0 w-full flex justify-between items-start px-2 py-2 md:px-4 md:py-4 z-20 border-b border-white/20 backdrop-blur-xs`}
    >
      <motion.div>
        <Logo />
      </motion.div>
      <motion.div>
        <div className="hidden [@media(min-width:800px)]:flex items-center justify-center text-sm lg:text-base font-semibold lg:font-bold gap-2 md:gap-4 flex-row">
          <motion.ul className="hidden [@media(min-width:800px)]:flex items-center justify-center text-sm lg:text-base font-semibold lg:font-bold gap-2 md:gap-4 flex-row">
            {navbarMenus.map((menu, index) => (
              <li key={index}>
                <NavLinkTransparent
                  href={menu.href}
                  className={
                    bgColor === "rgba(255,255,255,1)"
                      ? "text-primary"
                      : "text-white"
                  }
                >
                  [ {menu.name} ]
                </NavLinkTransparent>
              </li>
            ))}
          </motion.ul>
          <motion.div className="hover:scale-110 transition-all duration-300">
            <Link href="/contact-us">
              <ButtonPrimary>[ CONTACT US ]</ButtonPrimary>
            </Link>
          </motion.div>
        </div>
        <div className="flex space-x-4 items-center">
          <motion.div className="text-primary bg-secondary font-medium [@media(min-width:800px)]:hidden flex flex-col items-end justify-start gap-4">
            <AnimatedHamburgerMenu onButtonClick={setIsMenuOpen} />
            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col justify-center text-sm lg:text-base text-primary font-semibold lg:font-bold gap-2 md:gap-4 items-end"
                >
                  {navbarMenus.map((menu, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <NavLinkTransparent href={menu.href}>
                        [ {menu.name} ]
                      </NavLinkTransparent>
                    </motion.li>
                  ))}
                  <motion.li
                    variants={itemVariants}
                    className="hover:scale-110 transition-all duration-300"
                  >
                    <Link href="/contact-us">
                      <ButtonPrimary>[ CONTACT US ]</ButtonPrimary>
                    </Link>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
