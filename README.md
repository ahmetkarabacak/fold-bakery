# Fold Bakery Landing Page

A modern, high-end landing page for Fold, an artisan bakery specializing in croissants, sourdough bread, gourmet sandwiches, and specialty coffee.

## Features

- 🎨 **Mobile-First Design** - Responsive across all device sizes
- 🍞 **Modern UI/UX** - Minimalist, warm, and sophisticated aesthetic
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📱 **Hamburger Menu** - Slide-in drawer navigation for mobile
- 🎯 **Accessible** - WCAG compliant with proper touch targets (min 44px)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Playfair Display (headings), Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
fold.website/
├── app/
│   ├── layout.tsx      # Root layout with navbar
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── components/
│   └── Navbar.tsx      # Responsive navigation component
├── memory-bank/        # Project documentation
└── public/             # Static assets
```

## Design System

### Colors
- **Buttery Yellow:** `#F5E6C8` - Accents and highlights
- **Golden Brown:** `#D4A017` - Primary buttons and CTAs
- **Dark Roast:** `#3E2723` - Text and navigation
- **Off-White:** `#FAFAFA` - Backgrounds and cards

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## Sections

1. **Hero Section** - Full-screen introduction with animated entry
2. **Product Showcase** - Responsive grid (1→2→4 columns)
3. **About Section** - Story about dough lamination process
4. **Footer** - Contact information and links

## Responsive Breakpoints

- **Mobile:** Default (0px+)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)

## License

ISC

