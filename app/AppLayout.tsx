"use client";

import {
 Box,
 AppBar,
 Toolbar,
 Stack,
 Container,
 Typography,
 Button,
 IconButton,
 Drawer,
 List,
 ListItem,
 ListItemButton,
 ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Logo } from "@stridetime/branding";
import { CTAButton } from "@stridetime/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function AppLayout({ children }: { children: React.ReactNode }) {
 const [mobileOpen, setMobileOpen] = useState(false);
 const pathname = usePathname();

 const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
 };

 const menuItems = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
 ];

 return (
  <Box>
   {/* Navigation */}
   <AppBar
    position="sticky"
    elevation={0}
    sx={{
     bgcolor: "rgba(18, 18, 18, 0.85)",
     backdropFilter: "blur(16px)",
     borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
    }}>
    <Container maxWidth="lg">
     <Toolbar sx={{ justifyContent: "space-between", py: 1.5, px: { xs: 0, sm: 2 } }}>
      <Stack direction="row" spacing={5} alignItems="center">
       <Link
        href="/"
        style={{
         textDecoration: "none",
         display: "flex",
         transition: "transform 0.2s ease",
        }}>
        <Logo fontSize="large" />
       </Link>
       <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
        <Button
         component={Link}
         href="/"
         sx={{
          color: "white",
          fontWeight: 600,
          fontSize: "0.95rem",
          px: 2.5,
          py: 1,
          borderRadius: 2,
          textTransform: "none",
          position: "relative",
          "&:hover": {
           bgcolor: "rgba(255, 255, 255, 0.08)",
          },
         }}>
         Home
        </Button>
        <Button
         component={Link}
         href="/features"
         sx={{
          color: "white",
          fontWeight: 600,
          fontSize: "0.95rem",
          px: 2.5,
          py: 1,
          borderRadius: 2,
          textTransform: "none",
          position: "relative",
          "&:hover": {
           bgcolor: "rgba(255, 255, 255, 0.08)",
          },
         }}>
         Features
        </Button>
        <Button
         component={Link}
         href="/pricing"
         sx={{
          color: "white",
          fontWeight: 600,
          fontSize: "0.95rem",
          px: 2.5,
          py: 1,
          borderRadius: 2,
          textTransform: "none",
          position: "relative",
          "&:hover": {
           bgcolor: "rgba(255, 255, 255, 0.08)",
          },
         }}>
         Pricing
        </Button>
       </Stack>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
       <CTAButton
        size="medium"
        disabled
        sx={{
         px: 3,
         py: 1,
         fontWeight: 600,
         boxShadow: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
         "&:hover": {
          boxShadow: "0 6px 20px 0 rgba(0, 118, 255, 0.5)",
         },
         display: { xs: "none", md: "block" },
        }}>
        Coming Soon
       </CTAButton>
       <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { md: "none" } }}>
        <MenuIcon />
       </IconButton>
      </Stack>
     </Toolbar>
    </Container>
   </AppBar>

   {/* Mobile Drawer */}
   <Drawer
    anchor="right"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    sx={{
     display: { xs: "block", md: "none" },
     "& .MuiDrawer-paper": {
      width: "100%",
      bgcolor: "background.default",
     },
    }}>
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
     <Box
      sx={{
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       p: 2,
       borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      }}>
      <Logo fontSize="large" />
      <IconButton
       onClick={handleDrawerToggle}
       sx={{
        color: "white",
        transform: mobileOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
       }}>
       <CloseIcon />
      </IconButton>
     </Box>
     <List sx={{ flexGrow: 1, pt: 4 }}>
      {menuItems.map((item, index) => (
       <ListItem key={item.path} disablePadding>
        <ListItemButton
         component={Link}
         href={item.path}
         onClick={handleDrawerToggle}
         sx={{
          py: 2,
          px: 4,
          opacity: 0,
          animation: mobileOpen ? `slideIn 0.3s ease forwards ${index * 0.1}s` : "none",
          "@keyframes slideIn": {
           from: {
            opacity: 0,
            transform: "translateX(20px)",
           },
           to: {
            opacity: 1,
            transform: "translateX(0)",
           },
          },
         }}>
         <ListItemText
          primary={item.label}
          primaryTypographyProps={{
           fontSize: "1.5rem",
           fontWeight: 600,
          }}
         />
        </ListItemButton>
       </ListItem>
      ))}
     </List>
     <Box sx={{ p: 4 }}>
      <CTAButton
       fullWidth
       size="large"
       disabled
       sx={{
        opacity: 0,
        animation: mobileOpen ? "slideIn 0.3s ease forwards 0.4s" : "none",
       }}>
       Coming Soon
      </CTAButton>
     </Box>
    </Box>
   </Drawer>

   {/* Page Content */}
   {children}

   {/* Footer */}
   <Box component="footer" sx={{ bgcolor: "grey.900", color: "white", py: 6 }}>
    <Container maxWidth="lg">
     <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      spacing={3}>
      <Logo fontSize="medium" />
      <Stack direction="row" spacing={3}>
       <Typography
        component="a"
        href="#"
        sx={{ color: "grey.400", textDecoration: "none", "&:hover": { color: "grey.300" } }}>
        Privacy Policy
       </Typography>
       <Typography
        component="a"
        href="#"
        sx={{ color: "grey.400", textDecoration: "none", "&:hover": { color: "grey.300" } }}>
        Terms of Service
       </Typography>
       <Typography
        component="a"
        href="#"
        sx={{ color: "grey.400", textDecoration: "none", "&:hover": { color: "grey.300" } }}>
        Support
       </Typography>
      </Stack>
     </Stack>
     <Typography variant="body2" color="grey.500" textAlign="center" sx={{ mt: 4 }}>
      © {new Date().getFullYear()} Stride. All rights reserved.
     </Typography>
    </Container>
   </Box>
  </Box>
 );
}
