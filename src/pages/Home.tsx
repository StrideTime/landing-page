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

export function Home() {
  const { mode } = useTheme();

  const features = [
    {
      icon: <Timer fontSize="large" />,
      title: "Smart Time Tracking",
      description:
        "Precise measurement without guesswork. Track your work sessions with automatic timing and manual adjustments when needed.",
    },
    {
      icon: <TrendingUp fontSize="large" />,
      title: "Progress Measurement",
      description:
        "Real-time task progress tracking that shows how far you've come and how much remains. Never lose sight of your goals.",
    },
    {
      icon: <EmojiEvents fontSize="large" />,
      title: "Gamified Scoring",
      description:
        "Earn points based on difficulty and efficiency. Transform your productivity into achievements that motivate you to do more.",
    },
    {
      icon: <BarChart fontSize="large" />,
      title: "Detailed Analytics",
      description:
        "Daily summaries and comprehensive time reports. Understand your patterns and optimize your workflow with data-driven insights.",
    },
    {
      icon: <Apps fontSize="large" />,
      title: "Multi-Area Balance",
      description:
        "Work across diverse focus areas without losing context. Manage multiple projects and responsibilities in one unified system.",
    },
    {
      icon: <CheckCircle fontSize="large" />,
      title: "Daily Planning",
      description:
        "Structured task lists and clear objectives. Start each day with purpose and end with a sense of accomplishment.",
    },
  ];

  const benefits = [
    "Accurate time tracking without manual work",
    "Actionable insights that inform better habits",
    "Privacy-first with local data storage",
    "Minimal friction for seamless workflow integration",
    "Difficulty-based scoring for true progress measurement",
    "Cross-platform sync when you need it",
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: gradients.hero,
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Stack alignItems="center" spacing={3} textAlign="center">
            <Chip
              label="Productivity Tracking Reimagined"
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
              The productivity app that combines precise time tracking with
              difficulty-based scoring. Built for knowledge workers who want to
              measure real progress.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ pt: 2 }}
            >
              <CTAButton variant="primary" size="large">Download Stride Desktop</CTAButton>
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
          Everything You Need to Track Real Progress
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
                Built for Knowledge Workers
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Stride is designed for developers, designers, consultants,
                researchers, and writers who need to understand their
                productivity beyond simple time tracking.
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
              Ready to Track Real Progress?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.9 }}>
              Join knowledge workers who are measuring what truly matters.
              Download Stride Desktop and start tracking your productivity with
              purpose.
            </Typography>
            <CTAButton
              size="large"
              variant="primary"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              Download Stride Desktop
            </CTAButton>
          </Stack>
        </SectionContainer>
      </Box>
    </Box>
  );
}
