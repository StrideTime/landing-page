"use client";

import {
  Box,
  Typography,
  Stack,
  Chip,
  Container,
  GridLegacy as Grid,
} from "@mui/material";
import {
  Timer,
  TrendingUp,
  EmojiEvents,
  BarChart,
  CheckCircle,
  Apps,
} from "@mui/icons-material";
import { FeatureCard, SectionContainer, CTAButton } from "@stridetime/components";
import { gradients } from "@stridetime/design-tokens";
import { useTheme } from "@stridetime/theme";
import { WaitlistForm } from "./components/WaitlistForm";

export default function Home() {
  const { mode } = useTheme();

  const features = [
    {
      icon: <Timer fontSize="large" />,
      title: "Effortless Time Tracking",
      description:
        "Track your work sessions automatically without disrupting your flow. Focus on what matters while Stride handles the details.",
    },
    {
      icon: <TrendingUp fontSize="large" />,
      title: "Visual Progress Tracking",
      description:
        "See your progress at a glance with clear visual indicators. Know exactly where you stand on every task and project.",
    },
    {
      icon: <EmojiEvents fontSize="large" />,
      title: "Achievement System",
      description:
        "Stay motivated with meaningful milestones and achievements. Transform daily work into a rewarding experience.",
    },
    {
      icon: <BarChart fontSize="large" />,
      title: "Insightful Analytics",
      description:
        "Understand your productivity patterns with beautiful, actionable reports. Make better decisions backed by your own data.",
    },
    {
      icon: <Apps fontSize="large" />,
      title: "Multi-Project Support",
      description:
        "Organize work across different projects and areas of focus. Keep everything in one place without losing context.",
    },
    {
      icon: <CheckCircle fontSize="large" />,
      title: "Smart Daily Planning",
      description:
        "Plan your day with intelligent task management. Start each morning with clarity and end with a sense of accomplishment.",
    },
  ];

  const benefits = [
    "Automatic time tracking without manual work",
    "Actionable insights that inform better habits",
    "Privacy-first with local data storage",
    "Seamless integration with your workflow",
    "Achievement-based motivation system",
    "Cross-platform sync when you need it",
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(56, 189, 248, 0.15) 25%, rgba(168, 85, 247, 0.15) 75%, rgba(192, 132, 252, 0.1) 100%)",
            animation: "gradientShift 8s ease infinite",
            backgroundSize: "200% 200%",
          },
          "@keyframes gradientShift": {
            "0%, 100%": {
              backgroundPosition: "0% 50%",
            },
            "50%": {
              backgroundPosition: "100% 50%",
            },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack alignItems="center" spacing={3} textAlign="center">
            <Chip
              label="Coming Soon"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Typography
              variant="h1"
              sx={{
                background: gradients.titleText,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: { xs: "2.5rem", md: "3.75rem" },
              }}
            >
              Track Progress, Not Just Time
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 700, fontSize: { xs: "1.125rem", md: "1.25rem" } }}
            >
              Understand your work patterns, stay motivated, and achieve more
              with intelligent productivity tracking.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ pt: 2 }}
            >
              <CTAButton variant="primary" size="large" disabled>Coming Soon</CTAButton>
              <CTAButton variant="secondary" size="large">Learn More</CTAButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Features Grid */}
      <SectionContainer>
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Everything You Need to Stay Productive
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: mode === "dark" ? "grey.900" : "grey.50" }}>
        <SectionContainer>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
              >
                Built for Focused Work
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Stride is designed for anyone who wants to understand their
                productivity better. Whether you're coding, designing, writing,
                or managing projects—track what matters and improve over time.
              </Typography>
              <Stack spacing={2} sx={{ mt: 3 }}>
                {benefits.map((benefit, index) => (
                  <Stack direction="row" spacing={2} alignItems="center" key={index}>
                    <CheckCircle color="success" />
                    <Typography variant="body1">{benefit}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  bgcolor: mode === "dark" ? "grey.800" : "grey.200",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  App Screenshot Placeholder
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </SectionContainer>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white" }}>
        <SectionContainer>
          <Stack alignItems="center" spacing={3} textAlign="center">
            <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}>
              Be the First to Know
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.9 }}>
              Join the waitlist and be notified when Stride launches. Get early
              access to the productivity tracking experience that measures what
              truly matters.
            </Typography>
            <WaitlistForm variant="dark" size="large" />
          </Stack>
        </SectionContainer>
      </Box>
    </Box>
  );
}
