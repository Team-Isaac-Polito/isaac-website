"use client"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import Image from "next/image"


export function MyNavbar() {
  return (
    <Navbar fluid className="!bg-transparent !px-3 sm:!px-6">
      <NavbarBrand as={Link} href="/">
        <Image src="/favicon.svg" className="mr-3 h-8 w-8 sm:h-9 sm:w-9" alt="Team Isaac" width={36} height={36} priority />
        <span className="self-center whitespace-nowrap text-lg font-semibold text-white sm:text-xl">Team Isaac</span>
      </NavbarBrand>
      <NavbarToggle className="text-white hover:bg-white/10 focus:ring-white/50 dark:text-white dark:hover:bg-white/10 dark:focus:ring-white/50" />
      <NavbarCollapse className="rounded-lg bg-black/80 px-4 pb-2 backdrop-blur-md md:bg-transparent md:p-0 md:backdrop-blur-none">
        <NavbarLink href="#" className="!border-0 !text-white hover:!bg-white/10 md:hover:!bg-transparent">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#" className="!border-0 !text-white hover:!bg-white/10 md:hover:!bg-transparent">
          About
        </NavbarLink>
        <NavbarLink href="#" className="!border-0 !text-white hover:!bg-white/10 md:hover:!bg-transparent">Progetti</NavbarLink>
        <NavbarLink href="#eventi" className="!border-0 !text-white hover:!bg-white/10 md:hover:!bg-transparent">Eventi</NavbarLink>
        <NavbarLink href="#" className="!border-0 !text-white hover:!bg-white/10 md:hover:!bg-transparent">Contattaci</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}