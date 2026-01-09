# Technical Context: Fold Bakery Landing Page

## Technologies Used

### Core Framework
- **Next.js 14:** React framework with App Router
  - Server Components by default
  - Built-in optimization features
  - File-based routing

### Styling
- **Tailwind CSS:** Utility-first CSS framework
  - Custom color palette defined in config
  - Responsive breakpoints: `md:` (768px), `lg:` (1024px)
  - Mobile-first approach

### Animation
- **Framer Motion:** React animation library
  - Smooth transitions and animations
  - Gesture support
  - Performance optimized

### Icons
- **Lucide React:** Modern icon library
  - Consistent icon style
  - Tree-shakeable imports

### Fonts
- **Playfair Display:** Google Fonts (serif) for headings
- **Inter:** Google Fonts (sans-serif) for body text
- Loaded via Next.js font optimization

## Development Setup

### Project Structure
```
fold.website/
  app/
    layout.tsx
    page.tsx
    globals.css
  public/
    (images, if any)
  memory-bank/
    (documentation)
  tailwind.config.js
  next.config.js
  package.json
  tsconfig.json
```

### Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "framer-motion": "^10.0.0",
  "lucide-react": "^0.300.0",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.0.0",
  "postcss": "^8.0.0"
}
```

## Technical Constraints

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Minimum touch target size: 44px

## Development Workflow
1. Initialize Next.js project
2. Install dependencies
3. Configure Tailwind with custom colors
4. Set up fonts
5. Build components (mobile-first)
6. Test responsive behavior
7. Add animations
8. Optimize performance

## Build & Deployment
- **Build Command:** `npm run build`
- **Dev Server:** `npm run dev`
- **Output:** Static export possible (if needed)

