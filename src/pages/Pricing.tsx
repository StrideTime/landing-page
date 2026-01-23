/* eslint-disable @typescript-eslint/no-explicit-any */
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
 Accordion,
 AccordionSummary,
 AccordionDetails,
 IconButton,
} from "@mui/material";
import { CheckCircle, ExpandMore, ArrowBack, ArrowForward } from "@mui/icons-material";
import { SectionContainer, CTAButton } from "@stridetime/components";
import { gradients, colors } from "@stridetime/design-tokens";
import { useTheme } from "@stridetime/theme";
import { WaitlistForm } from "../components/WaitlistForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiper-custom.css";

export function Pricing() {
 const { mode } = useTheme();
 const swiperRef = useRef<any>(null);

 const plans = [
  {
   name: "Free",
   price: "$0",
   period: "forever",
   description: "Perfect for individual users getting started with productivity tracking",
   features: [
    "1 workspace",
    "Up to 3 projects",
    "Unlimited time tracking",
    "Task management",
    "Daily productivity insights",
    "Local data storage only",
   ],
   cta: "Coming Soon",
   highlighted: false,
  },
  {
   name: "Pro",
   price: "$9",
   period: "per month",
   description: "For professionals who need cloud sync and unlimited projects",
   features: [
    "Everything in Free",
    "2 workspaces",
    "Unlimited projects",
    "Cloud sync across devices",
    "Advanced analytics & reports",
    "Priority support",
   ],
   cta: "Coming Soon",
   highlighted: true,
  },
  {
   name: "Team",
   price: "$19",
   period: "per user/month",
   description: "Built for teams that want to collaborate and track productivity together",
   features: [
    "Everything in Pro",
    "Shared workspace",
    "Team collaboration tools",
    "Team dashboards & analytics",
    "Role-based permissions",
    "Admin controls",
   ],
   cta: "Coming Soon",
   highlighted: false,
  },
  {
   name: "Enterprise",
   price: "Custom",
   period: "contact sales",
   description: "For organizations with advanced security and compliance needs",
   features: [
    "Everything in Team",
    "Custom workspace limits",
    "SSO authentication",
    "Audit logs",
    "Advanced security controls",
    "Dedicated support",
   ],
   cta: "Contact Sales",
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
       Choose Your Plan
      </Typography>
      <Typography
       variant="h5"
       color="text.secondary"
       sx={{ maxWidth: 700, fontSize: { xs: "1.125rem", md: "1.25rem" } }}>
       Find the plan that's right for you
      </Typography>
     </Stack>
    </Container>
   </Box>

   {/* Pricing Cards */}
   <SectionContainer>
    {/* Mobile Stack View */}
    <Box sx={{ display: { xs: "block", md: "none" } }}>
     <Stack spacing={4} sx={{ px: 2 }}>
      {plans.map((plan, index) => {
       const PricingCard = (
        <Card
         sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          border: plan.highlighted ? `2px solid ${colors.primary[500]}` : undefined,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          minHeight: 600,
          overflow: "visible",
          "&:hover": {
           transform: "translateY(-8px)",
           ...(!plan.highlighted && { boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)" }),
          },
         }}>
         {plan.highlighted && (
          <Box
           sx={{
            position: "absolute",
            top: -15,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "primary.main",
            color: "white",
            px: 3,
            py: 0.5,
            borderRadius: 2,
            fontWeight: 600,
            fontSize: "0.875rem",
            zIndex: 2,
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
            disabled={plan.cta === "Coming Soon" || plan.cta === "Contact Sales"}>
            {plan.cta}
           </CTAButton>
          </Stack>
         </CardContent>
        </Card>
       );

       return (
        <Box key={index} sx={{ position: "relative", pt: plan.highlighted ? 3 : 0 }}>
         {PricingCard}
        </Box>
       );
      })}
     </Stack>
    </Box>

    {/* Desktop Carousel View */}
    <Box sx={{ display: { xs: "none", md: "block" }, overflow: "hidden", width: "100%" }}>
     <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto", px: 6 }}>
      <Swiper
       modules={[Navigation, Pagination]}
       spaceBetween={32}
       slidesPerView="auto"
       centeredSlides={false}
       watchSlidesProgress={true}
       pagination={{
        clickable: true,
        bulletActiveClass: "swiper-pagination-bullet-active",
        bulletClass: "swiper-pagination-bullet",
       }}
       onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setTimeout(() => {
         swiper.slides.forEach((slide: any) => {
          const slideProgress = slide.progress || 0;
          const distance = Math.abs(slideProgress);
          const opacity = distance > 0.1 ? Math.max(0.3, 1 - distance * 0.7) : 1;
          slide.style.opacity = opacity.toString();
         });
        }, 100);
       }}
       onProgress={(swiper) => {
        swiper.slides.forEach((slide: any) => {
         const slideProgress = slide.progress || 0;
         const distance = Math.abs(slideProgress);
         const opacity = distance > 0.1 ? Math.max(0.3, 1 - distance * 0.7) : 1;
         slide.style.opacity = opacity.toString();
        });
       }}
       style={{ paddingBottom: "60px", paddingTop: "24px" }}>
       {plans.map((plan, index) => (
        <SwiperSlide
         key={index}
         style={{
          width: "340px",
          height: "auto",
         }}
         className="pricing-slide">
         <Card
          sx={{
           height: "100%",
           display: "flex",
           flexDirection: "column",
           position: "relative",
           border: plan.highlighted ? `2px solid ${colors.primary[500]}` : undefined,
           transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
           minHeight: 600,
           overflow: "visible",
           "&:hover": {
            transform: "translateY(-8px)",
            ...(plan.highlighted && { boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)" }),
           },
          }}>
          {plan.highlighted && (
           <Box
            sx={{
             position: "absolute",
             top: -15,
             left: "50%",
             transform: "translateX(-50%)",
             bgcolor: "primary.main",
             color: "white",
             px: 3,
             py: 0.5,
             borderRadius: 2,
             fontWeight: 600,
             fontSize: "0.875rem",
             zIndex: 2,
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
             disabled={plan.cta === "Coming Soon" || plan.cta === "Contact Sales"}>
             {plan.cta}
            </CTAButton>
           </Stack>
          </CardContent>
         </Card>
        </SwiperSlide>
       ))}
      </Swiper>

      {/* Navigation Buttons */}
      <IconButton
       onClick={() => swiperRef.current?.slidePrev()}
       sx={{
        position: "absolute",
        left: -20,
        top: "50%",
        transform: "translateY(-50%)",
        bgcolor: "primary.main",
        color: "white",
        boxShadow: "0 4px 12px rgba(14, 165, 233, 0.4)",
        zIndex: 10,
        "&:hover": {
         bgcolor: "primary.dark",
         boxShadow: "0 6px 16px rgba(14, 165, 233, 0.6)",
        },
       }}>
       <ArrowBack />
      </IconButton>
      <IconButton
       onClick={() => swiperRef.current?.slideNext()}
       sx={{
        position: "absolute",
        right: -20,
        top: "50%",
        transform: "translateY(-50%)",
        bgcolor: "primary.main",
        color: "white",
        boxShadow: "0 4px 12px rgba(14, 165, 233, 0.4)",
        zIndex: 10,
        "&:hover": {
         bgcolor: "primary.dark",
         boxShadow: "0 6px 16px rgba(14, 165, 233, 0.6)",
        },
       }}>
       <ArrowForward />
      </IconButton>
     </Box>
    </Box>
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
         When will Stride be available?
        </Typography>
       </AccordionSummary>
       <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
         Stride is currently in development. We're working hard to bring you the best productivity
         tracking experience. Join our waitlist to be notified when we launch.
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
         Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full
         refund, no questions asked.
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
       Be the First to Know
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.9 }}>
       Join our waitlist and be notified when Stride launches. Get early access to the productivity
       tracking experience that measures what truly matters.
      </Typography>
      <WaitlistForm variant="dark" size="large" />
     </Stack>
    </SectionContainer>
   </Box>
  </Box>
 );
}
