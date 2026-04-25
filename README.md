# Front-End Screening Assignment

This project demonstrates UI implementation accuracy, component architecture quality, responsiveness, API integration skills, and code clarity.

## 🎯 Features Implemented

- **UI Components**: Reusable, modular components with clean architecture
- **API Integration**: Live data fetching from JSONPlaceholder API
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Loading States**: Proper loading and error handling
- **Modern React**: Using React 19 with Next.js 16

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
assignment/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI components
│   │   ├── layout/         # Layout components
│   │   └── features/       # Feature-specific components
│   ├── lib/                # Utilities and API functions
│   ├── types/              # TypeScript type definitions
│   └── globals.css         # Global styles
├── public/                 # Static assets
└── README.md
```

## 🔌 APIs Used

- **JSONPlaceholder**: https://jsonplaceholder.typicode.com
  - Posts endpoint for blog-style content
  - Users endpoint for user profiles
  - Comments endpoint for interactive features

## 🎨 Design Implementation

The application implements:
- Clean, modern UI with proper spacing and typography
- Responsive grid layouts
- Loading states and error handling
- Interactive components with hover states
- Accessible design patterns

## 🧪 Key Features Demonstrated

1. **Component Architecture**
   - Reusable UI components
   - Proper separation of concerns
   - TypeScript interfaces for props

2. **API Integration**
   - Async data fetching
   - Loading and error states
   - Data transformation and display

3. **State Management**
   - React hooks for local state
   - Proper data flow patterns

4. **Code Quality**
   - Clean folder structure
   - Meaningful naming conventions
   - Type safety with TypeScript
   - Minimal but clear comments

## 📱 Responsive Design

The application is fully responsive and works across:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🔧 Technologies Used

- **Framework**: Next.js 16.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI**: React 19.2.4
- **API**: JSONPlaceholder (dummy data)

## 📝 Assumptions Made

1. Used JSONPlaceholder API as the primary data source
2. Implemented a blog-style layout to showcase various UI components
3. Added loading states and error handling for better UX
4. Used Tailwind CSS for rapid, consistent styling
5. Focused on component reusability and clean architecture

## 🚀 Deployment

This project can be easily deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Build command: `npm run build`, Publish directory: `out`

## 📊 Performance Considerations

- Optimized images with Next.js Image component
- Efficient API calls with proper caching
- Minimal bundle size with tree-shaking
- Fast loading with Next.js optimizations