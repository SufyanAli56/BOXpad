# BOXpad - Modern Blog Platform

Ye ek modern blog application hai jo clean UI design, API integration, aur responsive components showcase karti hai. Is project mein Next.js 16, React 19, TypeScript, Supabase authentication, aur Tailwind CSS ka use kiya gaya hai.

## 🚀 Project Overview

Is project mein humne ek complete chat/blog application banaya hai jo multiple APIs se data fetch karti hai, user authentication provide karti hai, aur ek responsive, modern interface provide karti hai.

### Key Features

- **User Authentication**: Supabase-powered signup/login with auto profile creation
- **Auto Profile Creation**: Automatic user profile generation on signup
- **Responsive Design**: Mobile-first approach ke saath fully responsive UI
- **Multiple API Integration**: 3 different APIs ka integration
- **Modern Tech Stack**: Next.js 16, React 19, TypeScript, Supabase
- **Clean Architecture**: Component-based architecture with proper separation of concerns
- **Real-time Chat Interface**: Interactive chat-like interface
- **API Demo Page**: Live API testing functionality

## 🔐 Authentication & User Profiles

### REQ-USER-01: Auto Profile Creation ✅

Jab user sign up karta hai:
1. User account `auth.users` mein create hota hai
2. Database trigger automatically `public.users` mein profile create karta hai
3. Username email prefix se extract hota hai (e.g., `john.doe@example.com` → `john_doe`)
4. Duplicate usernames handle hote hain (numbered suffix ke saath)

**Setup Guide**: Detailed instructions ke liye `USER_PROFILE_SETUP.md` dekhen

### User Profile Schema

```typescript
interface UserProfile {
  id: string;              // UUID from auth.users
  email: string;           // User email
  username: string;        // Auto-generated from email
  full_name?: string;      // Optional display name
  avatar_url?: string;     // Profile picture URL
  bio?: string;            // User bio
  created_at: string;      // Account creation timestamp
  updated_at: string;      // Last update timestamp
}
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.4
- **Frontend**: React 19.2.4, TypeScript 5
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons 5.6.0
- **Utilities**: clsx for conditional classes
- **Development**: ESLint, PostCSS

## 📁 Project Structure

```
assignment/
├── app/
│   ├── auth/
│   │   └── callback/          # Auth callback handler
│   ├── components/
│   │   ├── features/          # Feature-specific components
│   │   │   ├── ApiDemo.tsx    # API testing interface
│   │   │   ├── ChatArea.tsx   # Main chat interface
│   │   │   ├── ChatMessages.tsx # Message display
│   │   │   ├── UserChatList.tsx # User list sidebar
│   │   │   └── ...
│   │   ├── layout/            # Layout components
│   │   └── ui/                # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Loading.tsx
│   │       └── ...
│   ├── hooks/
│   │   └── useApi.ts          # Custom API hooks
│   ├── lib/
│   │   ├── api.ts             # API integration layer
│   │   ├── supabase.ts        # Supabase client
│   │   ├── userProfile.ts     # User profile utilities
│   │   └── utils.ts           # Utility functions
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── constants/
│   │   └── index.ts           # Application constants
│   ├── login/                 # Login/Signup page
│   ├── users/                 # Users page
│   ├── api-demo/              # API demo page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── public/                    # Static assets
│   ├── icon.svg               # BOXpad logo
│   └── manifest.json          # PWA manifest
├── supabase-setup.sql         # Database setup script
├── USER_PROFILE_SETUP.md      # User profile setup guide
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## 🔌 API Integration

Humne teen different APIs integrate kiye hain:

### 1. JSONPlaceholder API
- **URL**: `https://jsonplaceholder.typicode.com`
- **Usage**: Users, Posts, aur Comments ke liye
- **Features**: 
  - User management
  - Post creation aur retrieval
  - Comments system

### 2. DummyJSON API
- **URL**: `https://dummyjson.com`
- **Usage**: Additional user data aur products
- **Features**:
  - Rich user profiles
  - Product catalog
  - Enhanced data structure

### 3. Reqres API
- **URL**: `https://reqres.in/api`
- **Usage**: Free public API for user management
- **Features**:
  - User CRUD operations
  - Pagination support
  - No authentication required

## 🎯 Key Components

### 1. Main Chat Interface (`page.tsx`)
- Central hub jo saare components ko manage karta hai
- Responsive layout with sidebar aur chat area
- State management for user selection aur chat flow

### 2. API Demo (`ApiDemo.tsx`)
- Live API testing interface
- Real-time API calls with loading states
- Error handling aur response display

### 3. Chat Components
- **ChatMessages**: Message display with user info
- **UserChatList**: Sidebar with user list
- **MessageInput**: Input field for new messages

### 4. UI Components
- **Button**: Reusable button with variants
- **Card**: Container component with hover effects
- **Loading**: Loading states with spinners
- **ErrorMessage**: Error display component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm ya yarn package manager
- Supabase account (free tier works)

### Installation

1. **Repository clone karein**:
```bash
cd assignment
```

2. **Dependencies install karein**:
```bash
npm install
```

3. **Environment variables setup**:
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Edit .env.local and add your Supabase credentials:
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

4. **Supabase database setup**:
   - Supabase dashboard mein jayen
   - SQL Editor open karen
   - `supabase-setup.sql` file ka content copy karen
   - SQL Editor mein paste karen aur Run karen
   - Detailed instructions: `USER_PROFILE_SETUP.md` dekhen

5. **Development server start karein**:
```bash
npm run dev
```

6. **Browser mein open karein**:
```
http://localhost:3000
```

### Quick Setup Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Supabase project created
- [ ] `.env.local` file configured
- [ ] Database setup SQL executed
- [ ] Development server running
- [ ] Test signup working

## 📱 Features Implemented

### ✅ Core Requirements
- [x] **User Authentication**: Supabase-powered signup/login
- [x] **Auto Profile Creation**: REQ-USER-01 implemented
- [x] **Responsive Design**: Mobile, tablet, aur desktop ke liye optimized
- [x] **API Integration**: Teen APIs successfully integrated
- [x] **Modern UI**: Clean, professional interface
- [x] **TypeScript**: Full type safety
- [x] **Component Architecture**: Reusable aur maintainable components

### ✅ Additional Features
- [x] **Loading States**: Proper loading indicators
- [x] **Error Handling**: Graceful error management
- [x] **Interactive Demo**: Live API testing page
- [x] **Chat Interface**: Real-time chat-like experience
- [x] **Responsive Navigation**: Mobile-friendly navigation
- [x] **Database Triggers**: Automatic profile creation
- [x] **Row Level Security**: Secure data access policies

## 🎨 Design Decisions

### 1. **Component Structure**
- Feature-based organization
- Separation of UI aur business logic
- Reusable component library

### 2. **API Layer**
- Centralized API management
- Error handling with try-catch
- Type-safe API responses

### 3. **Responsive Design**
- Mobile-first approach
- Flexible grid system
- Conditional rendering for different screen sizes

### 4. **State Management**
- React hooks for local state
- Prop drilling for simple data flow
- Loading aur error states properly managed

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 📊 Performance Optimizations

- **Code Splitting**: Next.js automatic code splitting
- **Image Optimization**: Next.js built-in image optimization
- **API Caching**: Efficient API call management
- **Lazy Loading**: Components load on demand

## 🐛 Error Handling

- API failures ke liye fallback mechanisms
- User-friendly error messages
- Loading states during API calls
- Network error recovery

## 🔮 Future Enhancements

- [ ] Real-time messaging with WebSockets
- [ ] User authentication system
- [ ] Message persistence with database
- [ ] Push notifications
- [ ] File sharing capabilities
- [ ] Advanced search functionality

## 📝 Development Notes

### Challenges Faced:
1. **API Integration**: Multiple APIs ke saath consistent data structure maintain karna
2. **Responsive Design**: Different screen sizes ke liye optimal layout
3. **State Management**: Complex component interactions handle karna

### Solutions Implemented:
1. **Type Safety**: TypeScript interfaces for all API responses
2. **Error Boundaries**: Graceful error handling throughout the app
3. **Modular Architecture**: Easy maintenance aur scalability

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is created for assessment purposes.

---

**Developed with ❤️ using Next.js, React, and TypeScript**

For any questions or issues, please check the `/api-demo` page for live API testing and debugging.