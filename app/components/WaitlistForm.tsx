"use client";

import { Box, TextField, InputAdornment } from "@mui/material";
import { Email } from "@mui/icons-material";
import { CTAButton } from "@stridetime/components";
import { useState } from "react";

interface WaitlistFormProps {
  variant?: "light" | "dark";
  size?: "medium" | "large";
}

export function WaitlistForm({ variant = "dark", size = "large" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement waitlist signup
    console.log("Waitlist signup:", email);
  };

  const isLight = variant === "light";

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        maxWidth: 600,
        width: "100%",
      }}
    >
      <TextField
        fullWidth
        placeholder="Enter your email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Email sx={{ color: isLight ? "text.secondary" : "rgba(255, 255, 255, 0.7)" }} />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: isLight ? "background.paper" : "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            fontSize: size === "large" ? "1rem" : "0.875rem",
            "& fieldset": {
              borderColor: isLight ? "divider" : "rgba(255, 255, 255, 0.2)",
            },
            "&:hover fieldset": {
              borderColor: isLight ? "primary.main" : "rgba(255, 255, 255, 0.3)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
            "& input": {
              color: isLight ? "text.primary" : "white",
              "&::placeholder": {
                color: isLight ? "text.secondary" : "rgba(255, 255, 255, 0.5)",
                opacity: 1,
              },
            },
          },
        }}
      />
      <CTAButton
        type="submit"
        size={size}
        variant="primary"
        sx={{
          minWidth: { xs: "100%", sm: 160 },
          whiteSpace: "nowrap",
          ...(isLight
            ? {}
            : {
                bgcolor: "white",
                color: "primary.main",
                "&:hover": { bgcolor: "grey.100" },
              }),
        }}
      >
        Join Waitlist
      </CTAButton>
    </Box>
  );
}
