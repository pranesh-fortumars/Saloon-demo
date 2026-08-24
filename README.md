# UNISEX SALON - Luxury Beauty & Styling

A premium, highly customized, modern, cinematic demo website for a luxury beauty, hair, styling, makeup, and grooming brand. 

Built with a focus on conversion, high-end editorial aesthetics, smooth scroll animations, and optimized performance.

## 🚀 Technologies Used

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta) (Using the new `@theme` CSS configuration)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)

## ✨ Features

- **Cinematic Hero**: Immersive, full-screen background imagery with staggered entrance animations.
- **Editorial Typography**: Fluid, responsive typography scale (`clamp`) inspired by luxury fashion magazines.
- **Interactive Service Drawer**: A sleek, animated slide-out drawer for exploring specific service details without leaving the page.
- **Before / After Slider**: Custom-built, touch-friendly image comparison slider for showcasing styling transformations.
- **Multi-Step Booking UI**: A seamless 4-step appointment booking interface with a `mailto:` fallback and a WhatsApp pre-filled message generator.
- **Performance First**: Lazy loaded imagery, explicit font preloading, and CSS-based performance optimizations.
- **Accessibility & UX**: Includes `@media (prefers-reduced-motion: reduce)` support, dynamic custom cursors (disabled on touch devices), and full `aria` label support.
- **Local SEO Ready**: Fully injected with Open Graph metadata and JSON-LD `LocalBusiness` schema markup.

## 📦 Project Structure

```text
├── src/
│   ├── components/      # All React UI components (Hero, About, Booking, etc.)
│   ├── config/          
│   │   └── siteConfig.js # Centralized configuration for all text, links, and imagery
│   ├── App.jsx          # Main application layout and narrative flow assembly
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind v4 configuration, theme variables, and global styles
├── index.html           # HTML template with SEO metadata and preloads
├── package.json         
└── vite.config.js       # Vite configuration with @tailwindcss/vite plugin
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project folder.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server:
```bash
npm run dev
```
The site will be available at `http://localhost:5173/`.

### Production Build

To build the application for production:
```bash
npm run build
```
You can preview the production build locally using:
```bash
npm run preview
```

## 🎨 Configuration (White-labeling)

This project is built to be easily configured for any salon. 
To update the content, simply edit `src/config/siteConfig.js`. 

This file acts as a centralized database for the frontend, allowing you to update:
- Salon Name & Taglines
- Contact Numbers & WhatsApp
- Physical Address & Operating Hours
- Service Lists & Categories
- Unsplash Image URLs
- Client Testimonials
- Social Media Links

## 📝 License

This project is open-source and available under the MIT License.
