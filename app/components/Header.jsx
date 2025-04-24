
"use client";

import { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";  // Import usePathname

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();  // Get the current pathname

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Resources", path: "/resources" },
    { title: "Contact", path: "/contact" },
  ];

  const isActiveLink = (linkPath) => {
    if (pathname.startsWith('/about')) return linkPath === '/about';
    if (pathname.includes('/services')) return linkPath === '/services';
    if (pathname.includes('/resources')) return linkPath === '/resources';
    if (pathname.startsWith('/contact')) return linkPath === '/contact';
    return pathname === linkPath;
  };

  return (
    <div className="bg-white text-gray-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto lg:px-5 pr-4">
        <div position="static">
          <Toolbar className="flex justify-between items-center py-2">
            <div className="flex justify-between items-center space-x-4 py-3">
              <Link href="/" prefetch={true}>
                <img 
                  src="/logo.png"
                  alt="Company Logo" 
                  className="h-14 w-14"
                />
              </Link>
              <div>
                <span className="text-xl lg:text-3xl font-semibold ">ImpactAcross</span>
                <p className="text-[10px] font-semibold hidden md:block">ImpactAcross Development Research and Consultancy PLC</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className={`px-3 py-2 rounded-md transition-colors duration-200 hover:text-blue-600 ${
                    isActiveLink(link.path)
                      ? 'text-blue-600 font-bold'
                      : 'text-gray-900'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <IconButton edge="end" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </div>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.title}
                component={Link}
                href={link.path}
                className={`transition-colors duration-200 hover:text-blue-600 ${
                  isActiveLink(link.path)
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-900'
                }`}
              >
                <ListItemText primary={link.title} />
              </ListItem>
            ))}
          </List>

        </Drawer>
      </div>
    </div>
  );
}
