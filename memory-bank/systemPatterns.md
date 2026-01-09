# System Patterns: Fold Bakery Landing Page

## Architecture Overview
Single-page application built with Next.js 14 App Router, focusing on client-side rendering for smooth animations and interactions.

## Key Technical Decisions

### Component Structure
```
app/
  layout.tsx          # Root layout with navbar
  page.tsx            # Main landing page with all sections
  globals.css         # Global styles and Tailwind imports
components/           # Reusable components (if needed)
```

### Styling Approach
- **Mobile-First:** All base styles target mobile, breakpoints add desktop styles
- **Tailwind Utility Classes:** Consistent spacing, colors, and responsive behavior
- **Custom Colors:** Defined in `tailwind.config.js` for brand consistency

### Animation Strategy
- **Framer Motion:** Used for:
  - Hero section entry animations
  - Mobile menu drawer slide-in
  - Smooth scroll reveals (optional)
- **Performance:** Animations use `transform` and `opacity` for GPU acceleration

### Responsive Breakpoints
- **Mobile:** Default (0px+)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)

## Design Patterns

### Navigation Pattern
- **Desktop:** Horizontal navbar with inline links
- **Mobile:** Hamburger icon → slide-in drawer from right
- **State Management:** React state for menu open/close

### Grid Pattern
- **Product Showcase:** CSS Grid with responsive columns
  - Mobile: `grid-cols-1`
  - Tablet: `md:grid-cols-2`
  - Desktop: `lg:grid-cols-3` or `lg:grid-cols-4`

### Layout Pattern
- **About Section:** Flexbox with direction change
  - Mobile: `flex-col` (stacked)
  - Desktop: `md:flex-row` (side-by-side)

### Typography Pattern
- **Headings:** Playfair Display with responsive sizes (`text-3xl md:text-6xl`)
- **Body:** Inter with readable line heights
- **Mobile:** Smaller base sizes, larger on desktop

## Component Relationships
- **Layout:** Wraps all pages, contains navbar
- **Page:** Contains all landing page sections
- **Navbar:** Shared across all pages (in layout)
- **Sections:** Independent, scrollable sections

## Performance Considerations
- **Images:** Next.js Image component for optimization
- **Fonts:** Next.js font optimization for Playfair Display and Inter
- **Code Splitting:** Automatic with Next.js App Router
- **Animations:** GPU-accelerated transforms

