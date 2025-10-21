# Portfolio Website

A modern, responsive portfolio website for Md Saiful Islam, showcasing expertise in FEA engineering, biomechanics, and computational modeling.

## Features

- **Modern Design**: Clean, professional layout with dark/light mode toggle
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth animations using Framer Motion
- **Multi-page Navigation**: React Router for seamless navigation
- **Optimized Performance**: Built with Vite for fast loading
- **GitHub Pages Ready**: Configured for easy deployment

## Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM

## Project Structure

```
portfolio-website/
├── public/
│   ├── assets/
│   │   ├── images/       # Project thumbnails, profile pictures
│   │   ├── docs/         # Resume, papers, presentations
│   │   ├── models/       # CAD files, .inp files
│   │   └── media/        # Videos, animations
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web server

## Customization

### Adding Your Content

1. **Personal Information**: Update contact details in `src/pages/Contact.jsx`
2. **Projects**: Add your projects to `src/pages/ResearchProjects.jsx`
3. **Publications**: Update publications in `src/pages/Publications.jsx`
4. **Experience**: Modify work experience in `src/pages/Experience.jsx`
5. **Skills**: Update skills in `src/pages/Skills.jsx`

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Use Tailwind utility classes throughout components

### Assets

Place your files in the appropriate `public/assets` subdirectories:
- `images/`: Profile pictures, project thumbnails
- `docs/`: Resume, research papers, presentations
- `models/`: CAD files, ABAQUS input files
- `media/`: Videos, animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Md Saiful Islam
- Email: saiful.islam@mavs.uta.edu
- LinkedIn: [linkedin.com/in/mdsaifulislam](https://linkedin.com/in/mdsaifulislam)
- GitHub: [github.com/username](https://github.com/username)