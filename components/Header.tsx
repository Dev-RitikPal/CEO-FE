'use client';

import React, { useState } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box component="header" className="shadow-sm sticky top-0 z-50 bg-white">
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          {/* Logo */}
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

          {/* Hamburger for screens < 700px */}
          <Box className="block max-[700px]:block hidden">
            <IconButton onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          {/* Full nav for screens >= 700px */}
          <Box
            component="nav"
            className="hidden min-[700px]:flex gap-10 text-gray-700 font-medium text-base"
          >
            <Link href="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-400 transition">
              About Us
            </Link>
            <Link href="/products" className="hover:text-orange-400 transition">
              Products
            </Link>
            <Link href="/features" className="hover:text-orange-400 transition">
              Features
            </Link>
            <Link href="/contact" className="hover:text-orange-400 transition">
              Contact
            </Link>
          </Box>
        </Box>

        {/* Mobile nav menu below 700px */}
        {menuOpen && (
          <Box className="flex flex-col gap-4 pt-4 text-center max-[700px]:flex min-[700px]:hidden">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/features" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </Box>
        )}
      </Container>
    </Box>
  );
}
