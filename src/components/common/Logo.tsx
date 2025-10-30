"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/images/pgs-agency-icon.svg"
        alt="Logo"
        width={124}
        height={40}
      />
    </Link>
  );
};

export default Logo;
