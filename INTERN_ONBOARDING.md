# Varahi Waters - Intern Onboarding & Technical Guide

Welcome to the **Varahi Waters** project! This document serves as your technical map to understand the codebase, the structure we've set up, and how to proceed with development.

## 1. Project Overview
We are building a premium, modern website for a packaged drinking water brand. The goal is to create a site that feels "Clean, Fresh, and Trustworthy".

**Tech Stack:**
- **Framework:** React 19 (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Animations:** Framer Motion

---

## 2. File-by-File Explanation

### **Root Configuration Files**
These are the backbone configuration files. You generally won't touch these unless adding new libraries.

- **`vite.config.ts`**: Configures the build tool (Vite). It handles plugins like `@vitejs/plugin-react`.
- **`tsconfig.app.json`**: TypeScript configuration rules. Defines how strict the type checking is.
- **`package.json`**: Lists all dependencies (libs) and scripts (`dev`, `build`).
  - Run `npm run dev` to start coding.
  - Run `npm run build` to check for errors before pushing.

### **Source Code Structure (`src/`)**

#### **`src/main.tsx` (The Entry Point)**
This is where React attaches to the HTML.
- **What it does:** It wraps the entire application in `<BrowserRouter>` (for routing) and `<StrictMode>`.
- **Why it matters:** If you need to add a global provider (like Redux or a Context Provider) that wraps the *entire* app, it goes here.

#### **`src/index.css` (Global Styles & Design System)**
This is where Tailwind CSS v4 is configured.
- **`@import "tailwindcss";`**: Loads Tailwind.
- **`@theme { ... }`**: This block is where we define our **Brand Colors** and **Fonts**.
  - If you need to change the "Primary Blue" color of the whole site, you change it here (`--color-primary-500`).

#### **`src/App.tsx` (The Router)**
This acts as the "Traffic Controller" for the website.
- **What it does:** It defines which component to show based on the URL.
- **Structure:**
  - It uses a **Layout Route** (`<Route element={<MainLayout />}>`). This means every page inside it will automatically have the Navbar and Footer.
  - **Action:** If you create a new page, you MUST register it here.

---

### **Component Architecture (`src/components/`)**

#### **`src/components/layout/`**
- **`MainLayout.tsx`**: The skeleton of the page. It renders:
  1. `<Navbar />` (Fixed at the top)
  2. `<Outlet />` (This is a placeholder where the specific page content goes)
  3. `<Footer />` (Fixed at the bottom)
- **`Navbar.tsx`**:
  - Handles desktop and mobile navigation.
  - Uses `lucide-react` for icons (Menu, ShoppingCart).
  - Uses `framer-motion` for the mobile menu animation.
- **`Footer.tsx`**: Contains sitemap links and contact info.

#### **`src/pages/` (The Views)**
Each file here corresponds to a specific URL. currently, these are **skeletons** (placeholders). Your job will be to flesh them out.

- **`Home.tsx` (`/`)**: Currently empty. Needs a Hero section, Features, and Testimonials.
- **`Products.tsx` (`/products`)**: Displays the 20L can, 1L bottles, etc. Needs a grid layout.
- **`Checkout.tsx` (`/checkout`)**: The cart and payment flow.
- **`Tracking.tsx` (`/tracking`)**: Input field to track order status.
- **`Locations.tsx` (`/locations`)**: List of service areas.
- **`News.tsx` (`/news`)**: Blog/Updates list.
- **`Awards.tsx` (`/awards`)**: Trust signals and certifications.

---

## 3. Your Workflow (How to start)

1.  **Clone the Repo**: `git clone https://github.com/ASRITH1239/vaarahi.git`
2.  **Install Dependencies**: `npm install`
3.  **Start Server**: `npm run dev`

### **Task 1: Design System Refinement**
- Go to `src/index.css`.
- Update the hex codes in `--color-primary-*` to match the exact "Water Blue" brand color we decide on.

### **Task 2: Building the Hero Section**
- Create a new file: `src/components/sections/Hero.tsx`.
- Import it into `src/pages/Home.tsx`.
- Use `framer-motion` to make text fade in or water waves animate.

### **Task 3: State Management**
- When building the **Cart**, don't just put state in `Products.tsx`.
- We will need a `CartContext` later so the Navbar cart icon updates when you click "Add to Cart" on the Products page.

---

## 4. Key Rules
- **Mobile First:** Always check how it looks on mobile view in Chrome DevTools.
- **Type Safety:** Don't use `any`. Define interfaces for your data (e.g., `interface Product { id: number; name: string; price: number; }`).
- **Clean Code:** If a component gets too big (over 150 lines), break it into smaller components.

Happy Coding! 🚀
