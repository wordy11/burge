// "use client";
// import Image from "next/image";
// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// import AcmeLogo from "./acme-logo";

// export default function NavbarComponent() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     "Home",
//     "About Us",
//     "Our Team",
//     "Contact Us",
//   ];

//   return (
//     <Navbar
//       onMenuOpenChange={setIsMenuOpen}
//       height={"6rem"}
//       maxWidth="full"
//       className="bg-dark-gray-blue"
//     >
//       <NavbarContent justify="start" className="text-white">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//        <NavbarBrand className="gap-4">
//           {/* Logo for large screens */}
//           <Image
//             src="/logo.jpeg"
//             width={45}
//             height={45}
//             alt="Logo Large"
//             className="hidden md:block" // Only visible on medium and larger screens
//           />
//           {/* Logo for small screens */}
//           <Image
//             src="/logo.jpeg"
//             width={35} // Smaller size for small screens
//             height={35}
//             alt="Logo Small"
//             className="block md:hidden" // Only visible on small screens
//           />
//           {/* Text */}
//           <p className="font-bold text-white text-xs sm:text-4xl">FORTIS GLOBAL TRADES</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4 text-white" justify="start">
//         <NavbarItem>
//           <Link color="primary" href="/">
//             Home
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link aria-current="page" color="primary" href="/about">
//             About Us
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="primary" href="/team">
//             Our Team
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="primary" href="/contact">
//             Contact Us
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end" className="text-white">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="/user/login" color="primary">
//             Login
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="/user/register" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full"
//               color={
//                 index === 2
//                   ? "primary"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }

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

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      height={"6rem"}
      maxWidth="full"
      className="bg-dark-gray-blue"
    >
      <NavbarContent justify="start" className="text-white">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-4">
          {/* Logo for large screens */}
          <Image
            src="/logo.jpeg"
            width={45}
            height={45}
            alt="Logo Large"
            className="hidden md:block" // Only visible on medium and larger screens
          />
          {/* Logo for small screens */}
          <Image
            src="/logo.jpeg"
            width={35} // Smaller size for small screens
            height={35}
            alt="Logo Small"
            className="block md:hidden" // Only visible on small screens
          />
          {/* Text */}
          <p className="font-bold text-white text-xs sm:text-4xl">FORTIS GLOBAL TRADES</p>
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
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href} // Use the href property from the menuItems array
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
