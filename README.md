# Rohit Patil - Data Scientist Portfolio

A modern, responsive, dark-mode portfolio website showcasing the work and skills of Rohit Patil, an MCA graduate and Data Scientist.

## 🚀 Features

- **Modern Dark Mode Design** - Professional charcoal/black theme with cyan/teal accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Subtle hover effects and micro-interactions
- **Performance Optimized** - Lazy loading, debounced scroll events, and efficient animations
- **Accessible** - Semantic HTML5, keyboard navigation, and screen reader friendly
- **Interactive Elements** - Smooth scrolling, active navigation highlighting, and contact form

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # Complete styling with dark mode
├── script.js               # Interactive JavaScript functionality
├── README.md               # Project documentation
├── ChatGPT Image Feb 2, 2026, 04_06_56 PM.png  # Profile picture
├── learningpath.png        # AI Learning Path Generator project
├── lexical.png            # Lexical Cloud Creation project
└── tis.png                 # Customer Segmentation project
```

## 🎨 Design System

### Colors
- **Background**: Charcoal dark (#0a0e1a)
- **Panels**: Dark gray (#111827)
- **Accent**: Cyan/Teal (#0891b2, #06b6d4, #22d3ee)
- **Text**: Light gray (#f3f4f6)
- **Muted**: Medium gray (#9ca3af)

### Typography
- **Font Family**: Inter (modern sans-serif)
- **Headings**: 800 weight for h1, 700 for h2, 600 for h3
- **Body**: Clean, readable with 1.6 line height

### Layout
- **Container**: Max-width 1200px, centered
- **Grid**: CSS Grid for layouts, Flexbox for components
- **Spacing**: Consistent 2rem section padding
- **Border Radius**: 16px for cards, 12px for buttons

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with proper accessibility
- **CSS3** - Modern features including Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript** - No frameworks, pure JS for performance
- **Intersection Observer** - For scroll animations and lazy loading
- **CSS Custom Properties** - For theming and consistency

## 📱 Responsive Breakpoints

- **Desktop**: >1024px - Full grid layouts
- **Tablet**: 768px-1024px - Adjusted grids and spacing
- **Mobile**: <768px - Single column, stacked navigation

## ⚡ Performance Features

- **Lazy Loading** - Images load when needed
- **Debounced Events** - Optimized scroll handling
- **CSS Animations** - Hardware accelerated transforms
- **Minimal Dependencies** - No external libraries or frameworks

## 🔧 Customization

### Adding New Projects
1. Add project image to the root directory
2. Update the projects section in `index.html`
3. Follow the existing card structure

### Modifying Colors
Update CSS variables in the `:root` selector:
```css
:root{
    --accent:#0891b2;     /* Primary accent */
    --accent-2:#06b6d4;    /* Secondary accent */
    --bg:#0a0e1a;         /* Background color */
    --panel:#111827;      /* Card backgrounds */
}
```

### Adding New Sections
1. Add section HTML with proper semantic tags
2. Add corresponding CSS styles
3. Update navigation menu
4. Add scroll spy functionality in JavaScript

## 🌐 Deployment

This website is ready for deployment on:

- **GitHub Pages** - Free static hosting
- **Netlify** - Continuous deployment
- **Vercel** - Modern hosting platform
- **Any static hosting service**

### Deployment Steps
1. Push all files to your repository
2. Configure hosting service to serve from root directory
3. Ensure all file paths are relative
4. Test all links and functionality

## 📧 Contact Form

The contact form includes:
- Real-time validation
- Visual feedback for errors/success
- Accessible error messages
- Simulated submission (replace with actual service)

To integrate with a real service:
1. Replace the simulated submission in `script.js`
2. Add your service credentials
3. Test thoroughly

## 🎯 Accessibility Features

- **Semantic HTML5** - Proper use of header, nav, main, section, article
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - ARIA labels and semantic markup
- **Focus Management** - Visible focus indicators
- **Reduced Motion** - Respects user preferences
- **Color Contrast** - WCAG compliant color combinations

## 🔄 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers** - iOS Safari, Chrome Mobile
- **Progressive Enhancement** - Works without JavaScript

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for Rohit Patil's Data Science Portfolio**
