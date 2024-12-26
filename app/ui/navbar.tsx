"use client";
import Image from "next/image";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import AcmeLogo from "./acme-logo";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Our Team",
    "Contact Us",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      height={"6rem"}
      maxWidth="full"
      className="bg-dark-gray-blue"
    >
      <NavbarContent justify="start" className="pt-5 text-white">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/logo.jpeg"
            width={65}
            height={65}
            alt="Logo"
          />
          {/* <p className="font-bold text-white">FGT</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-white" justify="start">
        <NavbarItem>
          <Link color="primary" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="primary" href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/team">
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="text-white">
        <NavbarItem className="hidden lg:flex">
          <Link href="/user/login" color="primary">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/user/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
