# 📝 NoteBook - Advanced Note-Taking Application

A modern, full-featured note-taking application inspired by Notion, built with Next.js 14, TypeScript, and Convex. Experience seamless document creation, real-time collaboration, and beautiful UI with dark/light mode support.

![NoteBook Preview](https://img.shields.io/badge/Next.js-14.2.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Convex](https://img.shields.io/badge/Convex-1.11.2-purple?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

###  Core Functionality
- **Rich Text Editor**: Powered by BlockNote with WYSIWYG editing capabilities
- **Real-time Collaboration**: Live updates using Convex's reactive database
- **Document Management**: Create, edit, archive, and delete documents
- **Hierarchical Organization**: Nested documents with parent-child relationships
- **Search Functionality**: Quick document search across your workspace
- **Trash Management**: Soft delete with restore capabilities

### 🎨 User Experience
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Smooth Animations**: Polished interactions with Framer Motion
- **Keyboard Shortcuts**: Efficient navigation and editing

### 🔐 Authentication & Security
- **Clerk Integration**: Secure authentication with social login options
- **User Management**: Personal workspaces with user-specific data
- **Authorization**: Document-level access control

### 📤 Publishing & Sharing
- **Public Publishing**: Share documents with public URLs
- **Preview Mode**: Read-only view for published documents
- **Custom Icons**: Personalize documents with emoji icons
- **Cover Images**: Visual document representation

### ️ Media Management
- **Image Upload**: Drag-and-drop image support via EdgeStore
- **File Handling**: Secure file storage and retrieval
- **Image Optimization**: Automatic image processing and optimization

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **BlockNote** - Rich text editor
- **Lucide React** - Beautiful icon library
- **Zustand** - State management
- **React Hook Form** - Form handling

### Backend & Database
- **Convex** - Real-time backend-as-a-service
- **EdgeStore** - File storage and CDN
- **Clerk** - Authentication and user management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Convex account
- Clerk account
- EdgeStore account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/notion-clone.git
   cd notion-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/documents
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/documents
   EDGE_STORE_ACCESS_KEY=your_edgestore_access_key
   EDGE_STORE_SECRET_KEY=your_edgestore_secret_key
   ```

4. **Set up Convex**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
notion-clone/
├── app/                    # Next.js App Router
│   ├── (Landing)/         # Landing page
│   ├── (main)/            # Main application
│   │   └── documents/     # Document management
│   └── (publish)/         # Published documents
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── editor.tsx        # Rich text editor
│   ├── navigation.tsx    # Sidebar navigation
│   └── ...               # Other components
├── convex/               # Convex backend functions
│   ├── documents.ts      # Document CRUD operations
│   └── schema.ts         # Database schema
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

##  Configuration

### Convex Setup
1. Create a new Convex project
2. Copy the deployment URL to your environment variables
3. Run `npx convex dev` to sync your schema

### Clerk Setup
1. Create a Clerk application
2. Configure authentication providers
3. Set up redirect URLs for your domain
4. Copy API keys to environment variables

### EdgeStore Setup
1. Create an EdgeStore account
2. Set up a new bucket
3. Configure CORS settings
4. Copy access keys to environment variables

## 🎯 Usage

### Creating Documents
1. Sign in to your account
2. Click "Create a Note" on the main page
3. Start typing to create your first document
4. Use the toolbar to format text, add images, and more

### Organizing Documents
- Create nested documents by clicking the "+" icon next to any document
- Use the sidebar to navigate between documents
- Search for documents using the search bar
- Archive documents to move them to trash

### Publishing Documents
1. Open any document
2. Click the "Publish" button in the toolbar
3. Copy the generated public URL
4. Share with others for read-only access

## 📝 License

MIT License © 2025 [Yash Singhal]