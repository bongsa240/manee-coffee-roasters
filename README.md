# Manee Coffee Roasters Website

A beautiful and modern website for Manee Coffee Roasters, showcasing sustainably sourced coffee beans from Laos.

## Features

- **Modern Next.js 13+ with App Router**: Latest Next.js features and performance optimizations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Beautiful UI**: Clean, modern design showcasing coffee and Laos culture
- **TypeScript**: Type-safe development experience
- **SEO Optimized**: Proper meta tags and structured data
- **E-commerce Ready**: Prepared for future MedusaJS integration

## Sections

1. **Hero Section**: Eye-catching introduction with coffee plantation imagery
2. **About Section**: Mission statement and sustainability commitment
3. **Products Section**: Coffee collection showcase (prepared for e-commerce)
4. **Laos Section**: Information about the beautiful country and coffee growing conditions
5. **Footer**: Contact information and social links

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future E-commerce Integration

The project is structured to easily integrate with MedusaJS for e-commerce functionality:

- **Type definitions** ready in `src/types/index.ts`
- **Medusa client setup** placeholder in `src/lib/medusa.ts`
- **Component structure** prepared for product management
- **Utility functions** ready for cart and checkout functionality

### MedusaJS Integration Steps (Future)

1. Set up MedusaJS backend server
2. Install MedusaJS JavaScript client
3. Update environment variables
4. Replace placeholder functions in `src/lib/medusa.ts`
5. Add shopping cart functionality
6. Implement checkout process
7. Add user authentication
8. Set up payment processing

## Technologies Used

- **Next.js 13+**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library
- **ESLint**: Code linting
- **PostCSS**: CSS processing

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── LaosSection.tsx
│   └── Footer.tsx
├── lib/
│   └── medusa.ts
├── types/
│   └── index.ts
└── utils/
```

## Deployment

The project is ready for deployment on Vercel, Netlify, or any other Next.js compatible platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.