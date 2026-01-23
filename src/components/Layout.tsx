import { Box, AppBar, Toolbar, Stack, Container, Typography, Button } from "@mui/material";
import { Logo } from "@stridetime/branding";
import { CTAButton } from "@stridetime/components";
import { Link as RouterLink, Outlet } from "react-router-dom";

export function Layout() {
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
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", py: 1.5, px: { xs: 0, sm: 2 } }}>
            <Stack direction="row" spacing={5} alignItems="center">
              <RouterLink
                to="/"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  transition: "transform 0.2s ease",
                }}
              >
                <Logo fontSize="large" />
              </RouterLink>
              <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  component={RouterLink}
                  to="/"
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
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%) scaleX(0)",
                      width: "80%",
                      height: "2px",
                      bgcolor: "primary.main",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1)",
                    },
                  }}
                >
                  Home
                </Button>
                <Button
                  component={RouterLink}
                  to="/features"
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
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%) scaleX(0)",
                      width: "80%",
                      height: "2px",
                      bgcolor: "primary.main",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1)",
                    },
                  }}
                >
                  Features
                </Button>
                <Button
                  component={RouterLink}
                  to="/pricing"
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
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%) scaleX(0)",
                      width: "80%",
                      height: "2px",
                      bgcolor: "primary.main",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1)",
                    },
                  }}
                >
                  Pricing
                </Button>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <CTAButton
                size="medium"
                sx={{
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  boxShadow: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
                  "&:hover": {
                    boxShadow: "0 6px 20px 0 rgba(0, 118, 255, 0.5)",
                  },
                }}
              >
                Download
              </CTAButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: "grey.900", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Logo fontSize="medium" />
            <Stack direction="row" spacing={3}>
              <Typography
                component="a"
                href="#"
                sx={{ color: "grey.400", textDecoration: "none", "&:hover": { color: "grey.300" } }}
              >
                Privacy Policy
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "grey.400", textDecoration: "none", "&:hover": { color: "grey.300" } }}
              >
                Terms of Service
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "grey.400", textDecoration: "none", "&:hover": { color: "grey.300" } }}
              >
                Support
              </Typography>
            </Stack>
          </Stack>
          <Typography
            variant="body2"
            color="grey.500"
            textAlign="center"
            sx={{ mt: 4 }}
          >
            © {new Date().getFullYear()} Stride. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
