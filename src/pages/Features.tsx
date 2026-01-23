import { Box, Typography, Stack, Container, Divider, GridLegacy as Grid } from "@mui/material";
import {
 Timer,
 TrendingUp,
 EmojiEvents,
 BarChart,
 Apps,
 CheckCircle,
 LocalOffer,
 Security,
 Cloud,
 Speed,
 Insights,
 CalendarMonth,
} from "@mui/icons-material";
import { FeatureCard, SectionContainer, CTAButton } from "@stridetime/components";
import { gradients } from "@stridetime/design-tokens";

export function Features() {
 const coreFeatures = [
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

 const additionalFeatures = [
  {
   icon: <LocalOffer fontSize="large" />,
   title: "Difficulty Tagging",
   description:
    "Assign difficulty levels to tasks for more meaningful progress tracking. Know when you're tackling challenging work.",
  },
  {
   icon: <Security fontSize="large" />,
   title: "Privacy First",
   description:
    "Your data stays on your device. Optional cloud sync gives you control over where your productivity data lives.",
  },
  {
   icon: <Cloud fontSize="large" />,
   title: "Cross-Platform Sync",
   description:
    "Seamlessly sync your data across devices when you want it. Work on desktop, check progress on mobile.",
  },
  {
   icon: <Speed fontSize="large" />,
   title: "Quick Capture",
   description:
    "Rapidly log tasks and start tracking with minimal friction. Get back to work without interrupting your flow.",
  },
  {
   icon: <Insights fontSize="large" />,
   title: "Smart Insights",
   description:
    "Discover patterns in your work habits. Learn when you're most productive and optimize your schedule accordingly.",
  },
  {
   icon: <CalendarMonth fontSize="large" />,
   title: "Flexible Scheduling",
   description:
    "Plan your day, week, or month with flexible task scheduling. Adapt to changing priorities without losing track.",
  },
 ];

 return (
  <Box>
   {/* Hero Section */}
   <Box
    sx={{
     background: gradients.hero,
     pt: { xs: 6, md: 10 },
     pb: { xs: 6, md: 10 },
    }}>
    <Container maxWidth="lg">
     <Stack alignItems="center" spacing={2} textAlign="center">
      <Typography
       variant="h1"
       sx={{
        background: gradients.titleText,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontSize: { xs: "2.5rem", md: "3.75rem" },
       }}>
       Powerful Features
      </Typography>
      <Typography
       variant="h5"
       color="text.secondary"
       sx={{ maxWidth: 700, fontSize: { xs: "1.125rem", md: "1.25rem" } }}>
       Everything you need to track real progress and build better work habits
      </Typography>
     </Stack>
    </Container>
   </Box>

   {/* Core Features */}
   <SectionContainer>
    <Typography
     variant="h2"
     textAlign="center"
     gutterBottom
     sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
     Core Features
    </Typography>
    <Typography
     variant="body1"
     color="text.secondary"
     textAlign="center"
     sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
     The essential tools that make Stride a powerful productivity companion
    </Typography>
    <Grid container spacing={4}>
     {coreFeatures.map((feature, index) => (
      <Grid item xs={12} md={6} lg={4} key={index}>
       <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
      </Grid>
     ))}
    </Grid>
   </SectionContainer>

   <Divider />

   {/* Additional Features */}
   <SectionContainer>
    <Typography
     variant="h2"
     textAlign="center"
     gutterBottom
     sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
     Enhanced Capabilities
    </Typography>
    <Typography
     variant="body1"
     color="text.secondary"
     textAlign="center"
     sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
     Advanced features that take your productivity tracking to the next level
    </Typography>
    <Grid container spacing={4}>
     {additionalFeatures.map((feature, index) => (
      <Grid item xs={12} md={6} lg={4} key={index}>
       <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
      </Grid>
     ))}
    </Grid>
   </SectionContainer>

   {/* CTA Section */}
   <Box sx={{ bgcolor: "primary.main", color: "white" }}>
    <SectionContainer>
     <Stack alignItems="center" spacing={3} textAlign="center">
      <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}>
       Experience All Features
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.9 }}>
       Start using Stride Desktop today and discover how these features work together to help you
       track real progress.
      </Typography>
      <CTAButton
       size="large"
       variant="primary"
       sx={{
        bgcolor: "white",
        color: "primary.main",
        "&:hover": { bgcolor: "grey.100" },
       }}
       disabled>
       Coming Soon
      </CTAButton>
     </Stack>
    </SectionContainer>
   </Box>
  </Box>
 );
}
