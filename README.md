# Stride Landing Page

**Marketing website for Stride productivity tracking**

The Stride landing page is a public-facing marketing website that introduces potential users to Stride, showcases key features, and provides download links for the desktop application.

## Purpose

The landing page serves as the primary marketing presence for Stride:

1. **Introduce Stride**: Explain what Stride is and how it helps users track productivity
2. **Showcase Features**: Highlight key features like task planning, progress tracking, and gamification
3. **Convert Visitors**: Encourage downloads of the desktop app
4. **Build Trust**: Demonstrate value through clear messaging and visuals

## Target Audience

- **Prospective Users**: People searching for productivity tracking tools
- **Current Users**: Looking for information or downloads
- **Press/Media**: Learning about Stride for coverage

## Key Sections (Typical)

### Hero Section
- Compelling headline about productivity tracking
- Brief value proposition
- Call-to-action (Download or Learn More)
- Hero image or demo video

### Features
- Task planning with difficulty ratings
- Real-time progress tracking
- Gamified scoring system
- Daily summaries and analytics
- Visual demonstrations of each feature

### How It Works
- 3-4 step process explaining the user journey
- Plan → Track → Analyze → Optimize

### Social Proof
- User testimonials (if available)
- Use case scenarios
- Productivity statistics

### Download / Call to Action
- Download buttons for desktop app
- Platform availability (Windows, macOS, Linux)
- Future: Mobile app coming soon

### Footer
- Links to documentation, support, privacy policy
- Social media links
- Contact information

## Technology Stack

### Core
- **React 19**: UI framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing for multi-page layout

### UI & Styling
- **Material-UI 7**: Component library
- **@stridetime/branding**: Shared logo and brand assets
- **@stridetime/theme**: Shared theme with light/dark mode
- **Emotion**: CSS-in-JS styling

### Development
- **ESLint**: Code linting
- **Hot Module Replacement**: Fast development iteration

## Project Structure

```
landing-page/
├── src/
│   ├── components/       # React components
│   │   ├── Hero.tsx     # Hero section
│   │   ├── Features.tsx # Features showcase
│   │   ├── HowItWorks.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx     # Main landing page
│   │   ├── Privacy.tsx  # Privacy policy
│   │   └── Terms.tsx    # Terms of service
│   ├── App.tsx          # Root component with routing
│   └── main.tsx         # Entry point
├── public/              # Static assets (images, videos)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ (check `.nvmrc` if added)
- Yarn package manager
- Git

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start development server
yarn dev

# Opens at http://localhost:5173
```

### Building

```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## Working with Shared Components

The landing page uses components from `@stridetime/branding` and `@stridetime/theme`.

### Using Shared Components

```tsx
import { Logo, LogoFull } from "@stridetime/branding";
import { ThemeProvider } from "@stridetime/theme";

function App() {
  return (
    <ThemeProvider>
      <header>
        <LogoFull sx={{ width: 200 }} />
      </header>
      {/* Your landing page content */}
    </ThemeProvider>
  );
}
```

### Updating Shared Packages

```bash
# Update to latest versions
yarn upgrade @stridetime/branding @stridetime/theme

# Or update to specific version
yarn add @stridetime/branding@0.1.16
```

## Routing

Uses React Router for multiple pages:

```tsx
// Example routing setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Scripts Reference

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn preview      # Preview production build
yarn lint         # Run ESLint
```

## Configuration

### Vite Configuration (vite.config.ts)

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  // Additional config as needed
});
```

### Environment Variables

Create a `.env` file for configuration:

```env
VITE_APP_NAME=Stride
VITE_DOWNLOAD_URL_MAC=https://...
VITE_DOWNLOAD_URL_WINDOWS=https://...
VITE_DOWNLOAD_URL_LINUX=https://...
```

Access in code:
```typescript
const appName = import.meta.env.VITE_APP_NAME;
```

## Deployment

### Static Site Hosting

The landing page builds to static HTML/CSS/JS and can be deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Build and push to gh-pages branch
- **AWS S3 + CloudFront**: Upload build folder

### Build Output

```bash
yarn build
# Output in: dist/
```

Upload the `dist/` folder to your hosting provider.

## SEO Optimization

### Meta Tags

Ensure proper meta tags in `index.html`:

```html
<head>
  <title>Stride - Gamified Productivity Tracking</title>
  <meta name="description" content="Track your task progress with Stride's gamified productivity system. Plan your day, earn points, and optimize your work habits." />
  <meta property="og:title" content="Stride - Gamified Productivity Tracking" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="/og-image.png" />
</head>
```

### Performance

- Optimize images (use WebP format)
- Lazy load below-the-fold content
- Minimize bundle size
- Use Vite's code splitting

## Content Guidelines

### Messaging Principles

- **Clear Value Prop**: Immediately communicate what Stride does
- **Benefits Over Features**: Focus on user outcomes, not just functionality
- **Approachable Tone**: Professional but friendly, not corporate
- **Visual First**: Show, don't just tell - use screenshots and demos

### Copy Tips

- Use active voice
- Keep sentences short and scannable
- Highlight the gamification aspect as a key differentiator
- Address pain points (lack of productivity insights, scattered task tracking)

## Analytics & Tracking

Consider adding:
- **Google Analytics**: Track visitor behavior
- **Plausible/Fathom**: Privacy-friendly analytics
- **Download tracking**: Monitor conversion rates

## Future Enhancements

- Interactive demo or product tour
- Video walkthrough of key features
- Blog for productivity tips and updates
- Email signup for launch updates
- Pricing page (if freemium/paid tiers added)
- Case studies or success stories

## Common Workflows

### Adding a New Section

1. Create component in `src/components/`
2. Import and add to `src/pages/Home.tsx`
3. Style with Material-UI components
4. Test responsive design

### Updating Content

1. Edit component text/copy
2. Update images in `public/` if needed
3. Test in development: `yarn dev`
4. Build and deploy: `yarn build`

### A/B Testing Landing Page Variants

1. Create variant components (e.g., `HeroV2.tsx`)
2. Use feature flags or URL parameters to toggle
3. Track performance of each variant

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist
yarn install
yarn build
```

### Routing Issues

- Ensure hosting provider supports SPA routing (rewrites to index.html)
- Vercel/Netlify handle this automatically
- For S3, configure CloudFront error pages

### Shared Package Updates Not Showing

```bash
# Force reinstall
yarn upgrade @stridetime/branding @stridetime/theme --latest
```

## Contributing

When working on the landing page:

1. Keep messaging concise and benefit-focused
2. Ensure mobile responsiveness
3. Optimize images before committing
4. Test on multiple browsers
5. Check page load performance

---

**For AI Agents & Future Developers:**

This is the **public marketing website** for Stride—the first touchpoint for potential users. Key priorities:

- **Conversion-Focused**: Primary goal is getting people to download the desktop app
- **Clear Messaging**: Visitors should understand what Stride is within 5 seconds
- **Professional & Polished**: This represents the brand, so quality matters
- **Fast Loading**: Performance directly impacts conversion rates

Key messaging to convey:
1. **Problem**: Existing productivity tools don't measure real progress or provide insights
2. **Solution**: Stride tracks progress + difficulty = actionable productivity data
3. **Differentiation**: Gamification makes productivity tracking engaging, not a chore
4. **Call to Action**: Download the desktop app and start tracking today

When adding features:
- Prioritize above-the-fold content (hero, value prop)
- Use visuals to demonstrate features (screenshots, videos)
- Keep copy scannable—bullets, short paragraphs
- Mobile-first design approach
- Fast page load is critical for SEO and conversion

The landing page should inspire confidence that Stride will help users work more effectively.
