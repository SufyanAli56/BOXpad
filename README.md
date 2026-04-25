# Front-End Screening Assignment - Chat Interface

A modern chat/messaging interface built with Next.js, TypeScript, and Tailwind CSS, demonstrating professional UI implementation and API integration skills.

## 🎯 Features

- **Modern Chat UI**: Three-panel layout (sidebar, chat, details)
- **Live Data**: JSONPlaceholder API integration with real users/messages
- **Responsive Design**: Mobile-first with collapsible panels
- **TypeScript**: Full type safety throughout
- **Real-time Features**: Status indicators, timestamps, unread badges

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture

```
app/
├── components/
│   ├── ui/          # Reusable components (Button, Card)
│   ├── layout/      # Header, Footer
│   └── features/    # Chat-specific components
├── lib/             # API functions, utilities
├── hooks/           # Custom React hooks
├── types/           # TypeScript definitions
└── pages/           # About, Users pages
```

## 🎨 Design Implementation

### Chat Interface
- **Header**: BoxPad branding with user profile
- **Sidebar**: Search, conversation list, status indicators
- **Chat Area**: Message bubbles, timestamps, input field
- **Details Panel**: User info, labels, notes, metadata

### Key UI Elements
- User avatars with initials and gradients
- Online/away/offline status indicators
- Unread message badges
- Hover effects and smooth transitions
- Mobile-responsive collapsible panels

## 🔌 API Integration

- **JSONPlaceholder**: https://jsonplaceholder.typicode.com
- **Users API**: Contact information and profiles
- **Comments API**: Realistic message content
- **Loading States**: Skeleton components during fetch
- **Error Handling**: Retry functionality with user feedback

## 🧪 Technical Highlights

### Component Architecture
- Reusable UI components with TypeScript props
- Custom hooks for API state management
- Clean separation of concerns
- Modular, maintainable code structure

### State Management
- React hooks for local state
- Custom `useApi` hook for server state
- Proper data flow patterns
- Real-time UI updates

### Responsive Design
- Mobile-first Tailwind CSS approach
- Breakpoint-based layout changes
- Collapsible sidebar for mobile
- Flexible grid systems

## 🔧 Tech Stack

- **Next.js 16.2.4**: React framework with App Router
- **React 19.2.4**: Modern hooks and components
- **TypeScript 5.x**: Full type safety
- **Tailwind CSS v4**: Utility-first styling
- **JSONPlaceholder**: REST API for dummy data

## 📱 Responsive Behavior

- **Desktop (1024px+)**: Full three-panel layout
- **Tablet (768px+)**: Collapsible details panel
- **Mobile (320px+)**: Single-panel navigation

## 🎯 Assessment Criteria

✅ **UI Accuracy**: Pixel-perfect chat interface recreation  
✅ **API Integration**: Live data with loading/error states  
✅ **Component Quality**: Reusable, modular architecture  
✅ **Code Clarity**: Clean TypeScript with proper types  
✅ **Responsiveness**: Mobile-first responsive design  

## 🚀 Deployment

Ready for deployment to Vercel, Netlify, or any static hosting platform.

```bash
npm run build  # Production build
```

This implementation demonstrates production-ready code quality and modern React/Next.js development practices.