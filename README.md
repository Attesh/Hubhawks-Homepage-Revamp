# Hubhawks Homepage Redesign

Modern redesign of Hubhawks' homepage as part of the evaluation task. Built with Next.js and Tailwind CSS for optimal performance and responsiveness.

## 🚀 Live Demo
[View deployed version on Vercel](https://hubhawks-homepage.vercel.app)  
*(or GitHub Pages link if applicable)*

## ✨ Key Improvements

### Design & UX
- **Visual Hierarchy**: Restructured layout to prioritize core services (Publishing, Marketing, Distribution)
- **Modern Aesthetic**: 
  - Gradient backgrounds for visual depth
  - Hover animations on interactive elements
  - Improved spacing and typography
- **Mobile-First**: Fully responsive design with Tailwind's breakpoints

### Technical Changes
- **Tech Stack Migration**:
  - From: WordPress (legacy)
  - To: Next.js 14 + Tailwind CSS
- **Performance Optimizations**:
  - Component-based architecture
  - Automatic code splitting
  - Next.js Image component for optimized assets
- **Scalable Structure**:
  ```bash
  src/
  ├── components/ # Reusable UI components
  ├── pages/      # Next.js routing
  ├── styles/     # Global CSS/Tailwind
  public/         # Static assets