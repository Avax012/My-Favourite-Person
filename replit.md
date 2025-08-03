# Overview

This is a full-stack web application built with React frontend and Express backend, featuring a friendship-themed slideshow application. The project uses modern web technologies including TypeScript, Tailwind CSS, and shadcn/ui components to create an interactive photo gallery experience with animated elements and smooth transitions.

# User Preferences

Preferred communication style: Simple, everyday language.
Slideshow timing: Increased to 8 seconds per slide for better photo viewing experience.
Music preference: Added "Meherbaan" song as background music during slideshow experience.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Component-based architecture using functional components and hooks
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express.js**: RESTful API server with TypeScript support
- **Storage Layer**: Abstract storage interface with in-memory implementation (MemStorage)
- **Development**: Hot reload with tsx and comprehensive error handling middleware
- **Static Serving**: Vite integration for serving frontend assets in development

## Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User management schema with username/password authentication
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL adapter

## Component Architecture
- **Design System**: Comprehensive UI component library with consistent theming
- **Custom Components**: Slideshow component with navigation controls and autoplay
- **Audio Player**: Floating music player with volume controls and auto-play functionality
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA-compliant components with keyboard navigation support

## Development Workflow
- **TypeScript**: Strict type checking across frontend, backend, and shared code
- **Path Aliases**: Organized imports with @ prefix for client code and @shared for common types
- **Hot Reload**: Development server with automatic refresh and error overlay
- **Build Process**: Separate builds for client (Vite) and server (esbuild)

# External Dependencies

## Database Services
- **Neon Database**: Managed PostgreSQL service for production data storage
- **Drizzle ORM**: Type-safe database operations with automatic migrations

## UI and Styling
- **Radix UI**: Headless UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool with HMR and optimized bundling
- **Replit Integration**: Cartographer plugin and runtime error modal for Replit environment
- **PostCSS**: CSS processing with Tailwind and autoprefixer

## Form and Data Management
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation for type-safe data handling
- **TanStack React Query**: Server state synchronization and caching
- **date-fns**: Date manipulation utilities

## Image and Media
- **Unsplash**: External image service for slideshow content
- **Embla Carousel**: Carousel component for image navigation