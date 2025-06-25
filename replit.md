# LUXE - Premium $50,000 One-Page Website

## Overview

This is an ultra-premium, luxury one-page website built with a $50,000 budget in mind. Created using React, TypeScript, and Express.js, it features cutting-edge design, advanced animations, and exceptional UX/UI that represents the pinnacle of web craftsmanship.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Memory-based storage with plans for PostgreSQL sessions
- **API Design**: RESTful endpoints with Zod validation

## Key Components

### Frontend Components
1. **Navigation**: Sticky header with smooth scrolling to sections
2. **Hero Section**: Animated typing effect with professional introduction
3. **About Section**: Personal introduction with fade-in animations
4. **Skills Section**: Technical skills display with progress indicators
5. **Projects Section**: Portfolio showcase with project cards
6. **Contact Section**: Contact form with API integration
7. **Footer**: Simple footer with legal links

### Backend Components
1. **Contact API**: Handles form submissions with validation
2. **User Management**: Basic user schema (prepared for future authentication)
3. **Static File Serving**: Serves the built React application
4. **Development Server**: Vite integration for hot module replacement

## Data Flow

1. **Client-Side Rendering**: React application handles UI rendering and user interactions
2. **API Communication**: Frontend communicates with backend via REST API calls
3. **Form Handling**: Contact form data is validated on both client and server
4. **Database Operations**: User data and contact submissions stored in PostgreSQL
5. **Session Management**: Currently using in-memory storage, prepared for database sessions

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem (React, React-DOM, React Router alternative)
- **Styling**: Tailwind CSS, Radix UI components, Framer Motion
- **Backend**: Express.js, Drizzle ORM, Neon Database
- **Validation**: Zod for schema validation
- **Forms**: React Hook Form with resolvers
- **Icons**: Lucide React, React Icons

### Development Dependencies
- **Build Tools**: Vite, TypeScript, ESBuild
- **Development**: TSX (TypeScript execution), Replit integration plugins

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 and PostgreSQL 16 modules
- **Port Configuration**: Internal port 5000, external port 80
- **Development Server**: Concurrent frontend (Vite) and backend (Express) serving
- **Hot Reload**: Vite HMR for frontend, nodemon-like behavior for backend

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves frontend build in production
- **Database**: Environment-based PostgreSQL connection via DATABASE_URL

### Deployment Configuration
- **Target**: Autoscale deployment on Replit
- **Build Command**: `npm run build` (builds both frontend and backend)
- **Start Command**: `npm run start` (runs production server)
- **Environment**: Production mode with optimized builds

## User Preferences

Preferred communication style: Simple, everyday language.
Navigation preferences: Clean glassmorphism effects, minimal animations, no unnecessary elements.
Logo preferences: Animated glass square with rotating border, floating particles, and perfectly centered HC text.
Animation preferences: Fast, smooth animations - no slow transitions.
Mobile preferences: Working hamburger menu with proper icon transitions.
Contact preferences: Real contact information with professional styling.

## Changelog

- June 25, 2025: Complete luxury portfolio website with professional polish
  - Ultra-premium starry space aesthetic with floating tech elements
  - Professional headshot integration with glass overlay effects
  - Sophisticated navigation with working mobile hamburger menu
  - Hero: Massive typography with smooth floating animations
  - About: Personal story with professional image and stats grid
  - Expertise: 6 professional skill areas with clean card design
  - Projects: 3 featured projects with detailed modal popups
  - Contact: Real contact information with smooth animations
  - Mobile-first responsive design with touch-friendly interactions
  - Fast, smooth animations with optimized performance
  - Contact details: (813) 551-8853, hamza.chouaibi9@hotmail.com
  - Professional cursor effects (desktop only)
  - Zero animation bugs with buttery smooth interactions