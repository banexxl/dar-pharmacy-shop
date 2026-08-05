# Styling & UI — MUI Theme, Colors & Component Conventions

## Styling Approach

- **MUI (Material UI) v7** with **Emotion** styled-components — the only styling system
- **No Tailwind CSS** — do not add Tailwind utilities
- **Global CSS** in `src/globals.css` — minimal reset, scrollbar, focus styles
- **Theme** in `src/styles/theme/index.ts` — extensive custom MUI theme

---

## Color Palette

### Primary (Red — pharmacy branding)
```
main: #EF4444    dark: #DC2626    darker: #B91C1C
light: #F87171   lighter: #FEE2E2
Scale: 50 (#FEF2F2) → 900 (#7F1D1D)
```

### Secondary (Green — nature/health feel)
```
main: #059669    dark: #047857    darker: #065F46
light: #10B981   lighter: #D1FAE5
Scale: 50 (#ECFDF5) → 900 (#064E3B)
```

### Accent (Purple)
```
main: #7C3AED    dark: #6D28D9    light: #8B5CF6
Scale: 50 (#F5F3FF) → 900 (#4C1D95)
```

### Neutral (Grays)
```
50: #FAFAFA → 900: #111827
```

### Semantic Colors
| Purpose | Main | Light | Dark | Background |
|---------|------|-------|------|-----------|
| Success | #059669 | #10B981 | #047857 | #ECFDF5 |
| Warning | #D97706 | #F59E0B | #B45309 | #FFFBEB |
| Error | #DC2626 | #EF4444 | #B91C1C | #FEF2F2 |
| Info | #3B82F6 | #60A5FA | #2563EB | #EFF6FF |

### Usage in code:
```typescript
import { Colors } from '@/styles/theme';

// Direct usage
Colors.primary.main    // '#EF4444'
Colors.secondary.dark  // '#047857'
Colors.neutral[700]    // '#374151'

// In MUI sx prop
<Box sx={{ color: 'primary.main', bgcolor: 'secondary.lighter' }} />
```

---

## Theme Highlights

The theme (`src/styles/theme/index.ts`) customizes:

- **Palette** — Maps Colors to MUI palette (primary, secondary, error, warning, info, success)
- **Typography** — Font family: Inter + system fallbacks
- **Component overrides** — Custom styles for MUI components
- **Keyframe animations** — `shine`, `expand`, `wiggle` defined for reuse
- **Drawer width** — `DrawerWidth = 250`

---

## Global CSS (`src/globals.css`)

Minimal global styles:
- CSS reset (margin/padding/box-sizing)
- Body: white background, Inter font, #1F2937 text color
- Custom scrollbar (red gradient theme)
- Focus-visible styles (2px solid #a22b20 outline)
- Global transition on color/background/border/transform (0.2s ease)
- reCAPTCHA badge hidden by default, shown via `.recaptcha-badge-visible` class

---

## Component Library

### Icons
- **@iconify/react** — Primary icon system (vast icon library)
- **@mui/icons-material** — MUI icons (supplementary)
- **react-icons** — Additional icons

Usage:
```typescript
import { Icon } from '@iconify/react';
<Icon icon="mdi:cart" width={24} />
```

### Animations
- **Framer Motion** — Page transitions, component animations
- `src/components/animate/` — Animate wrapper component for page transitions

### Carousel
- **react-multi-carousel** — Product carousels on home page and product sections

### Toast Notifications
- **react-hot-toast** — Toast notifications via `<Toaster />` in providers

### Images
- **next/image** — Optimized images with remote patterns configured
- **mui-image** — MUI-integrated image component

---

## Component Conventions

### File Organization
Each component lives in its own folder:
```
src/components/product-card/
├── product-card.tsx       # Main component
├── product-card.styles.ts # Styled components (if needed)
└── index.ts               # Re-export (optional)
```

### Styling Patterns

1. **MUI `sx` prop** (preferred for one-off styles):
```typescript
<Box sx={{ display: 'flex', gap: 2, p: 3, borderRadius: 2 }}>
```

2. **MUI `styled()`** (for reusable styled components):
```typescript
import { styled } from '@mui/material/styles';
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  transition: 'transform 0.2s ease',
}));
```

3. **Theme tokens** in sx (not raw values):
```typescript
// Good
sx={{ color: 'primary.main', mb: 2 }}

// Avoid when possible
sx={{ color: '#EF4444', marginBottom: '16px' }}
```

### Responsive Design
- MUI breakpoints: `xs`, `sm`, `md`, `lg`, `xl`
- Custom hook: `src/hooks/screenSize.ts` for programmatic breakpoint detection
- MUI Grid/Stack for layout

```typescript
sx={{ display: { xs: 'none', md: 'flex' } }}
```

---

## Important Notes

- **Always use MUI components** — Don't use raw HTML elements when MUI equivalents exist (Box, Typography, Button, Stack, Grid, etc.)
- **Use theme colors** — Reference `Colors.*` or MUI palette tokens, never hardcode hex values
- **Framer Motion for animations** — Don't use CSS keyframes directly in components; use the Animate wrapper or framer-motion APIs
- **No CSS modules** — The project doesn't use `.module.css` files
- **Serbian text** — All user-facing strings are in Serbian
