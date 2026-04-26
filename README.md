# BlogApp - Front-End Assessment

Ye ek modern blog application hai jo clean UI design, API integration, aur responsive components showcase karti hai. Is project mein Next.js 16, React 19, TypeScript, aur Tailwind CSS ka use kiya gaya hai.

## 🚀 Project Overview

Is project mein humne ek complete chat/blog application banaya hai jo multiple APIs se data fetch karti hai aur ek responsive, modern interface provide karti hai.

### Key Features

- **Responsive Design**: Mobile-first approach ke saath fully responsive UI
- **Multiple API Integration**: 3 different APIs ka integration
- **Modern Tech Stack**: Next.js 16, React 19, TypeScript
- **Clean Architecture**: Component-based architecture with proper separation of concerns
- **Real-time Chat Interface**: Interactive chat-like interface
- **API Demo Page**: Live API testing functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.4
- **Frontend**: React 19.2.4, TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons 5.6.0
- **Utilities**: clsx for conditional classes
- **Development**: ESLint, PostCSS

## 📁 Project Structure

```
assignment/
├── app/
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
│   │   └── utils.ts           # Utility functions
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── constants/
│   │   └── index.ts           # Application constants
│   ├── users/                 # Users page
│   ├── api-demo/              # API demo page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── public/                    # Static assets
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

### Installation

1. **Repository clone karein**:
```bash
cd assignment
```

2. **Dependencies install karein**:
```bash
npm install
```

3. **Development server start karein**:
```bash
npm run dev
```

4. **Browser mein open karein**:
```
http://localhost:3000
```

## 📱 Features Implemented

### ✅ Core Requirements
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