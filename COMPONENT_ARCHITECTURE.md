# Component Architecture Documentation

## 📁 Folder Structure

```
assignment/app/
├── components/
│   ├── features/           # Feature-specific components
│   │   ├── ApiDemo.tsx
│   │   ├── ChatArea.tsx
│   │   ├── ChatHeader.tsx
│   │   ├── ConversationList.tsx
│   │   ├── MessageInput.tsx
│   │   └── MessageList.tsx
│   ├── layout/             # Layout components
│   │   ├── DetailsPanel.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   └── ui/                 # Reusable UI components
│       ├── Loading.tsx
│       └── Message.tsx
├── constants/              # Application constants
│   └── index.ts
├── hooks/                  # Custom React hooks
│   ├── useApi.ts
│   └── useChat.ts
├── lib/                    # Utility libraries
│   ├── api.ts
│   └── utils.ts
├── types/                  # TypeScript type definitions
│   └── index.ts
├── globals.css             # Global styles
├── layout.tsx              # Root layout
└── page.tsx                # Main page component
```

## 🏗️ Architecture Principles

### 1. **Component Separation by Concern**
- **Layout Components**: Handle page structure and positioning
- **Feature Components**: Implement specific business logic
- **UI Components**: Provide reusable interface elements

### 2. **Single Responsibility Principle**
Each component has one clear purpose:
- `Header`: Navigation and branding
- `Sidebar`: Conversation list and filters
- `ChatArea`: Message display and input
- `DetailsPanel`: Contact information and metadata

### 3. **Props Interface Design**
All components use TypeScript interfaces for type safety:
```typescript
interface MessageProps {
  content: string;
  time: string;
  isFromUser: boolean;
}
```

### 4. **Custom Hooks for Logic Separation**
Business logic is extracted into custom hooks:
- `useChat`: Manages chat state and API calls
- `useApi`: Handles API requests and caching

## 🔧 Component Breakdown

### Layout Components (`/components/layout/`)

#### Header.tsx
- **Purpose**: Top navigation bar with logo and menu items
- **Props**: `className` for styling flexibility
- **Features**: Responsive navigation, user profile display

#### Sidebar.tsx
- **Purpose**: Left panel with conversation list and filters
- **Props**: `className` for styling
- **Features**: Search functionality, team organization, conversation filtering

#### DetailsPanel.tsx
- **Purpose**: Right panel showing contact details and metadata
- **Props**: `className` for styling
- **Features**: Contact information, labels, notes, related chats

### Feature Components (`/components/features/`)

#### ChatArea.tsx
- **Purpose**: Main chat interface container
- **Composition**: Combines ChatHeader, MessageList, and MessageInput
- **State Management**: Handles message input state

#### ConversationList.tsx
- **Purpose**: Displays list of conversations with search filtering
- **Props**: `searchTerm` for filtering
- **Features**: Real-time search, conversation selection

#### MessageList.tsx
- **Purpose**: Displays chat messages in chronological order
- **Features**: Message grouping, system messages, typing indicators

#### MessageInput.tsx
- **Purpose**: Input field with send functionality and toolbar
- **Props**: `value`, `onChange`, `onSend`
- **Features**: Keyboard shortcuts, attachment buttons, emoji support

### UI Components (`/components/ui/`)

#### Message.tsx
- **Purpose**: Individual message bubble component
- **Props**: `content`, `time`, `isFromUser`
- **Features**: Responsive design, timestamp display

#### Loading.tsx
- **Purpose**: Loading state indicator
- **Props**: `message` for custom loading text
- **Features**: Animated spinner, customizable message

## 📊 Data Flow

```
API Layer (lib/api.ts)
    ↓
Custom Hooks (hooks/useChat.ts)
    ↓
Page Component (page.tsx)
    ↓
Layout Components (Header, Sidebar, DetailsPanel)
    ↓
Feature Components (ChatArea, ConversationList)
    ↓
UI Components (Message, Loading)
```

## 🎯 Benefits of This Architecture

### 1. **Maintainability**
- Clear separation of concerns
- Easy to locate and modify specific functionality
- Consistent naming conventions

### 2. **Reusability**
- UI components can be used across different features
- Layout components provide consistent structure
- Custom hooks can be shared between components

### 3. **Testability**
- Each component has a single responsibility
- Props interfaces make testing predictable
- Business logic is separated from UI logic

### 4. **Scalability**
- New features can be added without affecting existing code
- Component composition allows for flexible layouts
- Type safety prevents runtime errors

### 5. **Developer Experience**
- Clear folder structure makes navigation easy
- TypeScript provides excellent IntelliSense
- Consistent patterns reduce cognitive load

## 🚀 Performance Optimizations

### 1. **Component Lazy Loading**
```typescript
const ApiDemo = lazy(() => import('./components/features/ApiDemo'));
```

### 2. **Memoization**
```typescript
const MemoizedMessage = memo(Message);
```

### 3. **Custom Hooks for State Management**
- Prevents prop drilling
- Centralizes business logic
- Enables better caching strategies

## 📝 Code Quality Standards

### 1. **TypeScript First**
- All components use TypeScript
- Strict type checking enabled
- Interface definitions for all props

### 2. **Consistent Naming**
- PascalCase for components
- camelCase for functions and variables
- kebab-case for CSS classes

### 3. **Error Handling**
- Try-catch blocks in async operations
- Error boundaries for component failures
- User-friendly error messages

### 4. **Accessibility**
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support

This architecture demonstrates professional-level component organization, separation of concerns, and maintainable code structure suitable for production applications.