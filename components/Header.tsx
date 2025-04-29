"use client";

import React, { useState } from "react";
import { Box, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavList = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
  ];

  function RenderNavList() {
    return (
      <>
        {NavList.map((item) => (
          <Link
            href={item.href}
            className="hover:text-orange-400 transition"
            key={item.label}
          >
            {item.label}
          </Link>
        ))}
      </>
    );
  }

  return (
    <Box component="header" className="shadow-sm sticky top-0 z-50 bg-white">
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Link href="/">
            <Image
              src="https://websitedemos.net/saas-app-company-04/wp-content/uploads/sites/1180/2023/02/logo-retina.png"
              alt="Company Logo"
              width={150}
              height={40}
              priority
              className="cursor-pointer"
            />
          </Link>

          <Box className="block min-[700px]:hidden">
            <IconButton onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          <Box
            component="nav"
            className="hidden min-[700px]:flex gap-10 text-gray-700 font-medium text-base"
          >
            {RenderNavList()}
          </Box>
        </Box>

        {menuOpen && (
          <Box className="flex flex-col gap-4 pt-4 text-center min-[700px]:hidden">
            {RenderNavList()}
          </Box>
        )}
      </Container>
    </Box>
  );
}
