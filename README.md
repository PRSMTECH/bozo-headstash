# Bozo Headstash

Official e-commerce store for Bozo Headstash premium streetwear.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **3D Graphics**: React Three Fiber + Drei
- **Animations**: Framer Motion, React Spring
- **Mobile UI**: Ant Design Mobile
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (store)/           # Store route group
│   │   ├── shop/          # Product listings
│   │   ├── product/       # Product details
│   │   ├── cart/          # Shopping cart
│   │   ├── gallery/       # Image gallery
│   │   ├── profile/       # User profile
│   │   └── ...            # Policy pages
│   └── api/               # API routes
├── components/
│   ├── layout/            # Layout components (Navbar, Footer, etc.)
│   └── ui/                # UI components (ProductCard, etc.)
├── constants/             # Static data (products, business info)
├── lib/                   # Config and utilities
└── utils/                 # Helper functions
```

## Features

- Interactive 3D logo on homepage (drag to rotate, scroll to zoom)
- Mobile-first responsive design
- Product catalog with category filtering
- Shopping cart functionality
- Order tracking
- Policy pages (Privacy, Terms, Shipping, Refunds)

## Development

### Local Image API

During development, images are served from `../media_downloads/` via the `/api/local-image/` route. In production, images should be served from Supabase Storage.

### Environment Variables

Create a `.env.local` file for production configuration:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## License

Private - All rights reserved.
