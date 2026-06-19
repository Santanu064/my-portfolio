---
name: Kinetic Forge
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#b0c6ff'
  on-secondary: '#002d6e'
  secondary-container: '#0068ed'
  on-secondary-container: '#f2f3ff'
  tertiary: '#f2e9ff'
  on-tertiary: '#3c0090'
  tertiary-container: '#d9c8ff'
  on-tertiary-container: '#6c00f7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001945'
  on-secondary-fixed-variant: '#00429b'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The brand personality is authoritative yet innovative, reflecting the precision of a high-end Full Stack Engineer. The target audience includes technical recruiters, CTOs, and startup founders who value clean code and sophisticated aesthetics.

The design style is **Modern Tech / Glassmorphism**. It utilizes depth through translucency and layered surfaces. The UI should evoke a sense of a high-performance IDE—focused, efficient, and premium. Key characteristics include:
- **Depth through Blurs:** Semi-transparent containers with high-diffusion backdrop filters.
- **Interactive Glows:** Subtle "electric" shadows and outer glows that respond to hover states.
- **Developer-Centric:** Monospace accents to emphasize technical literacy and precision.

## Colors

The palette is built on a "Deep Space" foundation to minimize eye strain and maximize the vibrance of interactive elements.

- **Foundational Neutrals:** The base background is a deep charcoal (`#0A0C10`). Elevated surfaces use varying shades of slate to create hierarchy.
- **Accents:** Electric Cyan (`#00E5FF`) is the primary interactive color, used for links, active states, and primary buttons. Deep Blue (`#2979FF`) provides secondary support for gradients.
- **Semantic Colors:** Success and warning colors are highly saturated to stand out against the dark backgrounds, ensuring critical status information is never missed.

## Typography

This design system uses a dual-font approach to balance readability with technical flavor.

- **Inter:** The primary typeface for all UI elements and long-form content. It is chosen for its exceptional legibility in dark mode and modern, neutral character. Headlines utilize tighter tracking and heavier weights to create a strong visual "anchor."
- **JetBrains Mono:** Used for technical metadata, "Skill Badges," and code snippets. It provides a distinct visual cue that the content is related to the developer's craft.
- **Scale:** High contrast between headline sizes is encouraged to create a clear information hierarchy in the project gallery.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to ensure content remains readable on ultra-wide monitors, while transitioning to a **Fluid Grid** for mobile devices.

- **Grid System:** A 12-column grid is used for the Project Gallery and Skills sections. 
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Sectioning:** Large vertical gaps (`section-gap`) are used to create a "premium" feel, allowing each portfolio project to be viewed in isolation without visual noise.
- **Breakpoints:** 
  - Mobile: < 768px (4 columns)
  - Tablet: 768px - 1024px (8 columns)
  - Desktop: > 1024px (12 columns)

## Elevation & Depth

Hierarchy is established using **Tonal Layers** and **Glassmorphism**. Shadows are not used for realism, but for "glow" and "aura" effects.

- **Base (Level 0):** `#0A0C10` - The main canvas.
- **Surface (Level 1):** `#161B22` - Cards and container backgrounds.
- **Overlay (Level 2):** Semi-transparent slate (`rgba(30, 41, 59, 0.5)`) with a 12px backdrop-blur. Used for navigation bars and modal overlays.
- **Interactive State:** Elements that are hovered should exhibit a 15px-25px blur radius "Electric Cyan" outer glow at 20% opacity.

## Shapes

The shape language is "Soft Tech." While it avoids the playfulness of fully rounded pills, it uses significant corner rounding to feel modern and polished.

- **Standard Elements:** Buttons, input fields, and small cards use `rounded-md` (0.5rem).
- **Large Containers:** Project gallery cards and main section containers use `rounded-lg` (1rem).
- **Badges:** Tech stack labels use a slightly more aggressive `rounded-xl` (1.5rem) to differentiate them from functional UI components.

## Components

### Buttons
- **Primary:** Solid Electric Cyan background with black text. On hover, apply a cyan glow effect and scale by 1.02.
- **Ghost:** Transparent background with a 1px Cyan border. On hover, the background fills with a 10% Cyan tint.

### Project Cards
- **Structure:** Large image container on top, metadata below.
- **Effect:** On hover, the image should slightly zoom (scale 1.05) while the card container gains a subtle Cyan border glow.
- **Tags:** Small badges using JetBrains Mono, displayed in a low-contrast slate background with cyan text.

### Skill Badges
- Small, compact items with a `label-caps` typography style.
- Use the monospace font for all skill names to reinforce the "Full Stack" identity.

### Input Fields
- Dark background (`#0A0C10`) with a subtle 1px border (`#30363D`).
- On focus, the border transitions to Electric Cyan with a soft glow.

### Code Snippets
- Styled to look like a window with "traffic light" close/minimize/expand buttons.
- JetBrains Mono text with syntax highlighting using the primary and secondary accent colors.