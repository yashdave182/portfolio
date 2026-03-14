# 🚀 Quick Start Guide - Yash Dave Portfolio

## Prerequisites
- Node.js 14+ installed
- npm or yarn package manager
- Git (for version control)

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
- Opens http://localhost:3000 in your browser
- Hot reload enabled - changes auto-refresh

### 3. View Your Portfolio
Navigate through the sections:
- **Hero** - Profile photo, tagline, CTA buttons
- **About** - Personal bio and quick stats
- **Skills** - Tech stack organized by category
- **Experience** - Career timeline and education
- **Projects** - 8+ projects with category filtering
- **Achievements** - Hackathons, open source, certifications
- **Contact** - Direct links to email, LinkedIn, GitHub

---

## 🎨 Customization Guide

### Update Personal Information

**File**: `src/components/Main.tsx`
```tsx
// Change profile photo path
<img src={require("../assets/images/photo.png")} alt="Your Name" />

// Update name and tagline
<h1>Your Name</h1>
<p className="tagline">Your tagline here</p>
```

**File**: `src/components/Contact.tsx`
```tsx
// Update contact links
<a href="mailto:your-email@example.com">Email</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
<a href="https://github.com/your-username">GitHub</a>
```

### Update Projects

**File**: `src/components/Project.tsx`
```tsx
const projects: ProjectType[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "What your project does",
    problem: "Problem it solves",
    techStack: ["Tech1", "Tech2", "Tech3"],
    category: "mobile", // mobile | ai-ml | web | hackathon | iot
    image: require("../assets/images/mockXX.png"),
    githubLink: "https://github.com/your-repo",
    liveLink: "https://your-live-demo.com",
  },
  // ... add more projects
];
```

### Update About Section

**File**: `src/components/About.tsx`
```tsx
<p>
  Your bio here. Mention your specialization, education, and current role.
</p>
```

### Update Skills

**File**: `src/components/Expertise.tsx`
```tsx
const skillsData = [
  {
    icon: faYourIcon,
    title: "Your Skill Category",
    description: "Description of your skills",
    skills: ["Skill1", "Skill2", "Skill3"],
  },
  // ... add more skill categories
];
```

### Update Experience

**File**: `src/components/Timeline.tsx`
```tsx
<VerticalTimelineElement
  date="Your Date Range"
  icon={<FontAwesomeIcon icon={faBriefcase} />}
>
  <h3>Your Position</h3>
  <h4>Company Name, Location</h4>
  <p>Your accomplishment and metrics</p>
</VerticalTimelineElement>
```

### Update Achievements

**File**: `src/components/Achievements.tsx`
```tsx
const achievements: Achievement[] = [
  {
    id: 1,
    title: "Hackathon Name",
    type: "hackathon", // hackathon | certification | opensource
    date: "2024",
    description: "What you built or achieved",
  },
  // ... add more achievements
];
```

---

## 🎯 Resume Download

Your resume is located at: `public/Yash_sem_6_Final.pdf`

To use a different resume:
1. Replace the PDF file in `public/` folder
2. Update the filename in `src/components/Main.tsx`:
```tsx
const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/your-resume-filename.pdf"; // ← Change this
  link.download = "Your Name Resume.pdf";
  // ...
};
```

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. Update `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

2. Deploy:
```bash
npm run deploy
```

Your portfolio will be live at: `https://yourusername.github.io/your-repo-name`

### Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Your portfolio will be live with a custom domain!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

---

## 🛠️ Build for Production

```bash
npm run build
```
- Creates optimized production build in `build/` folder
- Minified and ready to deploy
- All code is optimized for performance

---

## 📸 Project Images

Replace placeholder project images:

1. Add your project screenshot to `src/assets/images/`
2. Update the import in `Project.tsx`:
```tsx
image: require("../assets/images/your-image.png"),
```

Recommended image sizes: 600x400px (PNG or JPG)

---

## 🎨 Dark/Light Mode

Users can toggle between dark and light themes using the icon in the navbar.
No additional configuration needed - it's built-in!

---

## 📱 Responsive Testing

Test your portfolio on different screen sizes:

```bash
# Chrome DevTools
1. Open portfolio
2. Press F12
3. Click device toggle (phone icon)
4. Test on different screen sizes
```

Breakpoints:
- Mobile: < 700px
- Tablet: 700px - 1024px
- Desktop: > 1024px

---

## ⚡ Performance Tips

1. **Optimize Images**:
   - Compress PNGs/JPGs using TinyPNG
   - Use WebP format when possible
   - Recommended: < 200KB per image

2. **Update Navigation** (Optional):
   - Edit `src/components/Navigation.tsx` to add/remove menu items

3. **Color Customization**:
   - Primary accent color: `#5000ca`
   - Change in all `.scss` files for consistent branding

---

## 🚨 Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
# Check for TypeScript errors
npm run build -- --verbose
```

---

## 📚 Project Structure

```
react-portfolio-template/
├── src/
│   ├── components/          # All React components
│   ├── assets/
│   │   ├── images/         # Add your project images here
│   │   └── styles/         # SCSS stylesheets
│   ├── App.tsx             # Main app component
│   └── index.tsx           # React entry point
├── public/
│   ├── Yash_sem_6_Final.pdf  # Your resume
│   └── index.html          # HTML template
├── package.json            # Dependencies
└── README.md              # Project info
```

---

## 🔗 Useful Links

- **React Docs**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **SASS/SCSS**: https://sass-lang.com
- **Material-UI**: https://mui.com
- **GitHub Pages**: https://pages.github.com
- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com

---

## 💡 Tips & Best Practices

1. **Git Commits**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

2. **Keep Resume Updated**:
   - Update PDF file regularly
   - Keep it under 2MB for fast download

3. **Test Before Deployment**:
   ```bash
   npm start
   # Test all sections and links
   npm run build
   # Check build succeeds
   ```

4. **SEO Optimization**:
   - Meta tags already configured in `public/index.html`
   - Update title and description with your info

5. **Mobile First**:
   - Always test on mobile device sizes
   - Your portfolio should look great on phones!

---

## 🎓 Learning Resources

If you want to customize further:

- **React Components**: `src/components/` - Learn how each section works
- **Styling**: `src/assets/styles/` - Understand SCSS structure
- **Navigation**: `src/components/Navigation.tsx` - Add custom menu items
- **Icons**: `@fortawesome` and `@mui/icons-material` packages used

---

## ✅ Pre-Launch Checklist

- [ ] All project links are correct
- [ ] Resume PDF is up to date
- [ ] Contact information is accurate
- [ ] Profile photo is high quality
- [ ] All sections have content (no placeholders)
- [ ] Tested on mobile and desktop
- [ ] Dark/Light mode works
- [ ] All links open correctly
- [ ] Build completes without errors
- [ ] Ready to deploy!

---

## 📞 Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review the component files mentioned in the error
3. Test in development mode: `npm start`
4. Check console for error messages: F12 → Console tab

---

**Your portfolio is ready! Good luck with your job search and hackathon applications! 🚀**