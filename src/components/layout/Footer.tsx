"use client";
import Image from "next/image";
import NavLinkTransparent from "../form/NavLinkTransparent";
import Link from "next/link";
import { navbarMenus } from "@/data/navbar-menus";

export default function Footer() {
  return (
    <footer className="bg-white w-full text-primary border-2 border-black flex flex-col items-center justify-center">
      <div className="w-full flex flex-col justify-start items-start">
        <div className="relative aspect-video w-[200px]">
          <Image
            src="/images/pgs-agency-icon.svg"
            alt="PGS Pershing Global Solutions Agency Logo"
            fill
            priority
          />
        </div>
        <div className="w-full py-4 px-4 flex flex-col md:flex-row items-start justify-end font-semibold text-primary gap-4">
          <div className="flex md:flex-row flex-col items-start md:items-center justify-between gap-4">
            <NavLinkTransparent href="#home">[ HOME ]</NavLinkTransparent>
            {navbarMenus.map((menu, index) => (
              <NavLinkTransparent
                key={index}
                href={menu.href}
                className={"text-primary"}
              >
                [ {menu.name} ]
              </NavLinkTransparent>
            ))}
            <Link
              href={
                "https://www.linkedin.com/company/pershing-global-solutions/posts/?feedView=all"
              }
              target="_blank"
              className="hover:scale-110 transition-all duration-300"
            >
              <Image
                src="/images/linkedin.webp"
                alt="LinkedIn"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full border-b-2 border-black"></div>
      <div className="container mx-auto px-4 py-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} PGS Pershing Global Solutions
          Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
