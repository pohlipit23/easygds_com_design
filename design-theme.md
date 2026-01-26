# easyGDS Website Design Theme

## Design Philosophy

**Corporate Elegance with Modern Lightness**

A sophisticated, light-mode design that balances easyGDS's corporate credibility with modern airiness. Clean glassmorphism effects create depth without overwhelming content, while maintaining the professional trust required by airlines, travel agents, and enterprise clients.

---

## Color Palette

### Primary Colors

```css
/* Backgrounds */
--bg-primary: #F5F8FF;              /* easyGDS light blue tint - base background */
--bg-secondary: #FFFFFF;            /* Pure white - cards/sections */
--bg-glass: rgba(245, 248, 255, 0.85); /* Frosted glass effect with brand tint */
--bg-glass-strong: rgba(255, 255, 255, 0.92);

/* Text */
--text-primary: #203C94;           /* easyGDS deep blue - headings */
--text-secondary: #2A4CA0;         /* Medium blue - body text */
--text-muted: #5A6BA5;              /* Lighter blue-gray - meta text */

/* easyGDS Brand Colors */
--brand-primary: #203C94;           /* easyGDS deep blue - primary */
--brand-secondary: #2A4CA0;         /* Medium blue */
--brand-accent: #4A6BC8;            /* Lighter blue accent */

/* CTAs & Highlights */
--cta-primary: #FFB800;             /* Soft gold - primary action */
--cta-hover: #FFA500;               /* Darker gold - hover */
--cta-text: #203C94;                /* Brand blue text on gold */
```

### Gradient Accents

```css
/* Primary gradient for CTAs, highlights, borders */
--gradient-primary: linear-gradient(135deg, #203C94 0%, #2A4CA0 50%, #4A6BC8 100%);

/* Subtle gradient for backgrounds */
--gradient-subtle: linear-gradient(180deg, #F5F8FF 0%, #EBF0FF 100%);

/* Section divider gradients */
--gradient-divider: linear-gradient(90deg, transparent 0%, rgba(32, 60, 148, 0.08) 50%, transparent 100%);
```

### Supporting Colors

```css
--success: #00C853;
--warning: #FFB800;
--error: #FF1744;
--info: #203C94;

/* Glassmorphism borders */
--glass-border: rgba(32, 60, 148, 0.12);
--glass-border-hover: rgba(32, 60, 148, 0.25);
```

---

## Typography

### Font Stack

```css
/* Primary font: Raleway (corporate, clean, highly readable) */
--font-primary: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;

/* Display font: For headings and large hero text */
--font-display: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace: For code, technical specs, API documentation */
--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
```

### Font Weights

```css
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;  /* Increased from 400 for better readability */
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 800;   /* For hero headlines only */
```

### Typography Scale

```css
/* Mobile-first scale */
--text-xs: 0.75rem;    /* 12px - labels, metadata */
--text-sm: 0.875rem;   /* 14px - body text on mobile */
--text-base: 1rem;     /* 16px - body text (base) */
--text-lg: 1.125rem;   /* 18px - lead paragraphs */
--text-xl: 1.25rem;    /* 20px - section headings */
--text-2xl: 1.5rem;    /* 24px - page headings */
--text-3xl: 1.875rem;  /* 30px - hero subheadlines */
--text-4xl: 2.25rem;   /* 36px - hero headlines */
--text-5xl: 3rem;      /* 48px - mega headlines */
--text-6xl: 4rem;      /* 64px - display */

/* Line heights for readability */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Heading Hierarchy

```css
h1 { font-size: var(--text-4xl); font-weight: var(--weight-bold); letter-spacing: -0.02em; }
h2 { font-size: var(--text-2xl); font-weight: var(--weight-semibold); letter-spacing: -0.01em; }
h3 { font-size: var(--text-xl); font-weight: var(--weight-semibold); }
h4 { font-size: var(--text-lg); font-weight: var(--weight-medium); }
h5 { font-size: var(--text-base); font-weight: var(--weight-medium); }
h6 { font-size: var(--text-sm); font-weight: var(--weight-semibold); text-transform: uppercase; letter-spacing: 0.05em; }
```

---

## Glassmorphism System

### Glass Card Effect

```css
.glass-card {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  border-color: var(--glass-border-hover);
  transform: translateY(-2px);
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.08),
    0 4px 6px -2px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
```

### Glass Navigation

```css
.glass-nav {
  background: var(--bg-glass-strong);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--glass-border);
}
```

### Glass Buttons

```css
.btn-glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.btn-glass:hover {
  background: rgba(245, 248, 255, 0.95);
  border-color: var(--brand-primary);
  transform: translateY(-1px);
}
```

---

## Spacing System

```css
/* 8px base grid system */
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px - base */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */

/* Container widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;
```

---

## Components

### Buttons

```css
/* Primary CTA - Gold */
.btn-primary {
  background: var(--cta-primary);
  color: var(--cta-text);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: var(--weight-semibold);
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(255, 184, 0, 0.3);
}

.btn-primary:hover {
  background: var(--cta-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(255, 184, 0, 0.4);
}

/* Secondary - Glass */
.btn-secondary {
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: var(--weight-medium);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--brand-primary);
  background: rgba(245, 248, 255, 0.95);
  transform: translateY(-1px);
}

/* Text Button */
.btn-text {
  color: var(--brand-primary);
  padding: var(--space-2) var(--space-3);
  font-weight: var(--weight-medium);
  transition: color 0.2s ease;
}

.btn-text:hover {
  color: var(--brand-secondary);
}
```

### Cards

```css
.card {
  background: var(--bg-secondary);
  border-radius: 16px;
  padding: var(--space-6);
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 1px 2px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 10px 25px -5px rgba(0, 0, 0, 0.08),
    0 8px 10px -6px rgba(0, 0, 0, 0.03);
}

.card-glass {
  @extend .glass-card;
}
```

### Form Elements

```css
.input {
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px rgba(32, 60, 148, 0.1);
}

.input::placeholder {
  color: var(--text-muted);
}
```

---

## Animations & Transitions

### Micro-interactions

```css
/* Button hover */
.btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Card hover */
.card {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Border transition */
.glass-card {
  transition: border-color 0.3s ease, transform 0.3s ease;
}
```

### Section Transitions

```css
/* Fade in on scroll */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger > *:nth-child(1) { transition-delay: 0.1s; }
.stagger > *:nth-child(2) { transition-delay: 0.2s; }
.stagger > *:nth-child(3) { transition-delay: 0.3s; }
.stagger > *:nth-child(4) { transition-delay: 0.4s; }
```

### Subtle Parallax

```css
.parallax-container {
  perspective: 1000px;
  overflow: hidden;
}

.parallax-layer {
  transform: translateZ(0);
  transition: transform 0.3s ease;
}
```

---

## Layout Patterns

### Container

```css
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

### Grid System

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-2 { grid-template-columns: repeat(1, 1fr); }
.grid-3 { grid-template-columns: repeat(1, 1fr); }
.grid-4 { grid-template-columns: repeat(1, 1fr); }

@media (min-width: 640px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 768px) {
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
}
```

### Section Spacing

```css
.section {
  padding: var(--space-12) 0;
}

.section-lg {
  padding: var(--space-20) 0;
}

@media (min-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }
  
  .section-lg {
    padding: var(--space-24) 0;
  }
}
```

---

## Responsive Breakpoints

```css
/* Mobile First Breakpoints */
--breakpoint-sm: 640px;    /* Large phones */
--breakpoint-md: 768px;    /* Tablets */
--breakpoint-lg: 1024px;   /* Laptops */
--breakpoint-xl: 1280px;   /* Desktop */
--breakpoint-2xl: 1440px;  /* Large desktops */
```

---

## Accessibility

### Focus States

```css
/* Keyboard focus ring */
*:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* Remove default focus for mouse users */
button:focus:not(:focus-visible) {
  outline: none;
}
```

### Contrast Ratios

All text meets WCAG AA standards:
- Body text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

### Semantic HTML

```html
<!-- Proper heading hierarchy -->
<header>
  <nav>
    <h1>easyGDS</h1>
    <ul role="menubar">
      <li role="none"><a role="menuitem">Products</a></li>
      <li role="none"><a role="menuitem">Solutions</a></li>
    </ul>
  </nav>
</header>

<main>
  <section aria-labelledby="airlines-heading">
    <h2 id="airlines-heading">For Airlines</h2>
    <!-- content -->
  </section>
</main>

<footer>
  <!-- footer content -->
</footer>
```

---

## Specific Section Designs

### Hero Section

```css
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: var(--gradient-subtle);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(32, 60, 148, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(74, 107, 200, 0.04) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}
```

### Customer Segment Tabs

```css
.segment-tabs {
  display: flex;
  gap: var(--space-2);
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  padding: var(--space-2);
  border-radius: 12px;
  border: 1px solid var(--glass-border);
}

.segment-tab {
  flex: 1;
  padding: var(--space-3) var(--space-4);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-weight: var(--weight-medium);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.segment-tab.active {
  background: var(--brand-primary);
  color: white;
  box-shadow: 0 2px 8px rgba(32, 60, 148, 0.35);
}

.segment-tab:hover:not(.active) {
  background: rgba(32, 60, 148, 0.08);
}
```

### Trust Section (Client Logos)

```css
.trust-section {
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(32, 60, 148, 0.04) 20%,
    rgba(32, 60, 148, 0.04) 80%,
    transparent 100%);
}

.client-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-8);
}

.client-logo {
  opacity: 0.5;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.client-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}
```

### Testimonials

```css
.testimonial-card {
  background: var(--bg-secondary);
  border-radius: 16px;
  padding: var(--space-8);
  position: relative;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: var(--space-4);
  left: var(--space-6);
  font-size: var(--text-6xl);
  color: var(--brand-primary);
  opacity: 0.12;
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonial-quote {
  font-size: var(--text-lg);
  font-weight: var(--weight-regular);
  color: var(--text-primary);
  line-height: var(--leading-relaxed);
  position: relative;
  z-index: 1;
}
```

---

## Performance Guidelines

### CSS Animation Best Practices

```css
/* Use transform and opacity only (no layout thrashing) */
.animate-fade {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  will-change: opacity, transform;
}

.animate-fade.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Asset Loading

- Lazy load images below the fold
- Use WebP format for images
- Minify CSS and JS
- Use system fonts to avoid font loading delay

---

## Code Implementation Notes

### CSS Variables

```css
:root {
  /* Import Raleway font */
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap');
  
  /* Include all color, spacing, and typography variables defined above */
}
```

---

## Iconography

Use clean, modern icons with consistent stroke width:
- Primary choice: Heroicons or Phosphor Icons
- Stroke weight: 1.5px - 2px
- Color: var(--brand-primary) (#203C94) or var(--text-secondary) (#2A4CA0)
- Size: 24px default, scalable

---

## Final Design Checklist

✅ Mobile-first responsive design
✅ WCAG AA accessibility compliance
✅ Glassmorphism effects with proper fallbacks
✅ easyGDS brand colors (#F5F8FF, #203C94) integrated
✅ Corporate yet modern aesthetic
✅ Clear visual hierarchy
✅ Generous whitespace
✅ Smooth animations (60fps)
✅ Optimized performance
✅ Semantic HTML5 structure
✅ ARIA labeling for screen readers  
