# Scrollytelling: 3. Säule Schweiz

A modern, interactive scrollytelling website built with Next.js 15, React 19, and TypeScript. This project explains the Swiss 3-pillar pension system in an engaging, scroll-driven narrative format.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessible**: Built with semantic HTML and ARIA best practices
- **Performance Optimized**: Server-side rendering with React Server Components
- **Interactive Elements**: Engaging UI with icons, gradients, and smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS Transitions + Intersection Observer
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prototype-scrollytelling
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Environment Variables** (if needed):
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add any required environment variables

### Troubleshooting Deployment Issues

If you get a **404 NOT_FOUND** error on Vercel:

1. **Check Build Logs**:
   - Go to Vercel Dashboard > Deployments
   - Click on the failed deployment
   - Check the build logs for errors

2. **Verify File Structure**:
   ```
   app/
   ├── layout.tsx
   ├── page.tsx
   ├── not-found.tsx
   └── globals.css
   ```

3. **Check vercel.json** (if exists):
   ```json
   {
     "framework": "nextjs",
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "installCommand": "npm install"
   }
   ```

4. **Node.js Version**:
   - Ensure your `package.json` has the engines field:
   ```json
   "engines": {
     "node": ">=18"
   }
   ```

5. **Clear Build Cache**:
   - In Vercel dashboard: Settings > Functions > Clear Build Cache

6. **Redeploy**:
   - Go to Deployments tab
   - Click "Redeploy" on the latest deployment

### Manual Build Test

```bash
npm run build
npm start
```

If this works locally but fails on Vercel, the issue is likely environment-specific.

## 🏗️ Project Structure

```
prototype-scrollytelling/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main scrollytelling page
│   ├── not-found.tsx       # Custom 404 page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── scroll-section.tsx  # Reusable scroll section component
│   └── button.tsx          # Custom button component
├── hooks/
│   └── useScrollAnimation.ts # Custom hook for scroll animations
├── utils/
│   └── cn.ts               # Class name utility function
├── public/
│   ├── hero-icon.svg       # Custom hero section icon
│   ├── favicon.ico         # Website favicon
│   ├── next.svg            # Next.js logo
│   └── vercel.svg          # Vercel logo
└── Configuration files...
```

## 🎨 Features Breakdown

### Scroll Animations
- **Intersection Observer**: Detects when sections come into view
- **CSS Transitions**: Smooth opacity and transform animations
- **Performance Optimized**: Uses modern web APIs for smooth 60fps animations

### Responsive Design
- **Mobile-First**: Tailwind CSS with responsive breakpoints
- **Flexible Layout**: Adapts to different screen sizes seamlessly
- **Touch-Friendly**: Optimized for mobile and tablet interactions

### Content Sections
1. **Hero Section**: Animated floating icon with gradient text
2. **Introduction**: Explains the three-pillar concept
3. **Pillar 3a**: Tax-advantaged savings features
4. **Pillar 3b**: Flexible savings options
5. **Comparison Table**: Side-by-side feature comparison
6. **Expert Tip**: Professional recommendation
7. **Call-to-Action**: External link to provider

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

#### ScrollSection
Reusable component that handles scroll-triggered animations:
```tsx
<ScrollSection>
  <div>Your content here</div>
</ScrollSection>
```

#### useScrollAnimation Hook
Custom hook for Intersection Observer logic:
```tsx
const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.4,
  triggerOnce: true
})
```

## 🎯 Future Enhancements

- **Framer Motion**: Enhanced animations and page transitions
- **Scroll Progress**: Visual progress indicator
- **Interactive Charts**: Data visualization for pension calculations
- **Multi-language**: Support for German, French, Italian
- **CMS Integration**: Dynamic content management
- **Analytics**: User engagement tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Swiss pension system information
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Lucide for the beautiful icons 