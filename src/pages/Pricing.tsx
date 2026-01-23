import {
 Box,
 Typography,
 Stack,
 Container,
 Card,
 CardContent,
 List,
 ListItem,
 ListItemIcon,
 ListItemText,
 GridLegacy as Grid,
 Accordion,
 AccordionSummary,
 AccordionDetails,
} from "@mui/material";
import { CheckCircle, ExpandMore } from "@mui/icons-material";
import { SectionContainer, CTAButton } from "@stridetime/components";
import { gradients, colors } from "@stridetime/design-tokens";
import { useTheme } from "@stridetime/theme";

export function Pricing() {
 const { mode } = useTheme();

 const plans = [
  {
   name: "Free",
   price: "$0",
   period: "forever",
   description: "Perfect for individual users getting started with productivity tracking",
   features: [
    "Unlimited time tracking",
    "Task management",
    "Daily productivity insights",
    "Local data storage",
   ],
   cta: "Download Free",
   highlighted: false,
  },
  {
   name: "Pro",
   price: "$9",
   period: "per month",
   description: "For professionals who want advanced insights and cross-platform access",
   features: [
    "Everything in Free",
    "Cloud sync across devices",
    "Advanced analytics & reports",
    "Calendar & email integrations",
   ],
   cta: "Coming Soon",
   highlighted: true,
  },
  {
   name: "Team",
   price: "$19",
   period: "per user/month",
   description: "Built for teams that want to track productivity together",
   features: [
    "Everything in Pro",
    "Team dashboards",
    "Shared workspaces",
    "Team analytics",
   ],
   cta: "Coming Soon",
   highlighted: false,
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
       Simple, Transparent Pricing
      </Typography>
      <Typography
       variant="h5"
       color="text.secondary"
       sx={{ maxWidth: 700, fontSize: { xs: "1.125rem", md: "1.25rem" } }}>
       Start free, upgrade when you need more. No hidden fees or surprises.
      </Typography>
     </Stack>
    </Container>
   </Box>

   {/* Pricing Cards */}
   <SectionContainer>
    <Grid container spacing={4} justifyContent="center">
     {plans.map((plan, index) => (
      <Grid item xs={12} md={4} key={index}>
       <Card
        sx={{
         height: "100%",
         display: "flex",
         flexDirection: "column",
         position: "relative",
         border: plan.highlighted ? `2px solid ${colors.primary[500]}` : undefined,
         transform: plan.highlighted ? "scale(1.05)" : "scale(1)",
         transition: "transform 0.3s ease-in-out",
         overflow: "visible",
         minHeight: { xs: "auto", md: 600 },
        }}>
        {plan.highlighted && (
         <Box
          sx={{
           position: "absolute",
           top: -16,
           left: "50%",
           transform: "translateX(-50%)",
           bgcolor: "primary.main",
           color: "white",
           px: 3,
           py: 0.5,
           borderRadius: 2,
           fontWeight: 600,
           fontSize: "0.875rem",
          }}>
          Most Popular
         </Box>
        )}
        <CardContent sx={{ flexGrow: 1, p: 4 }}>
         <Stack spacing={3}>
          <Box>
           <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            {plan.name}
           </Typography>
           <Stack direction="row" alignItems="baseline" spacing={1}>
            <Typography
             variant="h2"
             sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3rem" },
             }}>
             {plan.price}
            </Typography>
            <Typography variant="body1" color="text.secondary">
             {plan.period}
            </Typography>
           </Stack>
          </Box>

          <Typography variant="body2" color="text.secondary">
           {plan.description}
          </Typography>

          <List disablePadding>
           {plan.features.map((feature, featureIndex) => (
            <ListItem key={featureIndex} disablePadding sx={{ py: 1 }}>
             <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircle color="success" fontSize="small" />
             </ListItemIcon>
             <ListItemText
              primary={feature}
              slotProps={{
               primary: {
                variant: "body2",
               },
              }}
             />
            </ListItem>
           ))}
          </List>

          <CTAButton
           variant={plan.highlighted ? "primary" : "secondary"}
           fullWidth
           size="large"
           disabled={plan.cta === "Coming Soon"}>
           {plan.cta}
          </CTAButton>
         </Stack>
        </CardContent>
       </Card>
      </Grid>
     ))}
    </Grid>
   </SectionContainer>

   {/* FAQ Section */}
   <Box sx={{ bgcolor: mode === "dark" ? "grey.900" : "grey.50" }}>
    <SectionContainer>
     <Typography
      variant="h2"
      textAlign="center"
      gutterBottom
      sx={{ mb: 6, fontSize: { xs: "2rem", md: "3rem" } }}>
      Frequently Asked Questions
     </Typography>
     <Box sx={{ maxWidth: 900, mx: "auto" }}>
      <Accordion disableGutters elevation={0}>
       <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
         Is the free version really free forever?
        </Typography>
       </AccordionSummary>
       <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
         Yes! The free version includes all core features and will always be free. No credit card
         required, no trials, no surprises.
        </Typography>
       </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0}>
       <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
         When will Pro and Team plans be available?
        </Typography>
       </AccordionSummary>
       <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
         Pro and Team plans are currently in development. Join our waitlist to be notified when
         they launch.
        </Typography>
       </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0}>
       <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
         Can I upgrade or downgrade anytime?
        </Typography>
       </AccordionSummary>
       <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
         Absolutely. You can change your plan at any time. Upgrades take effect immediately, and
         downgrades apply at the end of your billing cycle.
        </Typography>
       </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0}>
       <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
         What payment methods do you accept?
        </Typography>
       </AccordionSummary>
       <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
         We'll accept all major credit cards and PayPal when paid plans launch. Billing is handled
         securely through Stripe.
        </Typography>
       </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0}>
       <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
         Is my data secure?
        </Typography>
       </AccordionSummary>
       <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
         Your data is stored locally by default. With Pro, optional cloud sync uses end-to-end
         encryption. We never sell or share your data.
        </Typography>
       </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0}>
       <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
         Do you offer refunds?
        </Typography>
       </AccordionSummary>
       <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
         Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a
         full refund, no questions asked.
        </Typography>
       </AccordionDetails>
      </Accordion>
     </Box>
    </SectionContainer>
   </Box>

   {/* CTA Section */}
   <Box sx={{ bgcolor: "primary.main", color: "white" }}>
    <SectionContainer>
     <Stack alignItems="center" spacing={3} textAlign="center">
      <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}>
       Start Tracking Progress Today
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.9 }}>
       Download Stride Desktop for free and experience the full power of productivity tracking that
       measures what truly matters.
      </Typography>
      <CTAButton
       size="large"
       variant="primary"
       sx={{
        bgcolor: "white",
        color: "primary.main",
        "&:hover": { bgcolor: "grey.100" },
       }}>
       Download Free Version
      </CTAButton>
     </Stack>
    </SectionContainer>
   </Box>
  </Box>
 );
}
