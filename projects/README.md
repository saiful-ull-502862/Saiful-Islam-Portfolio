# Projects Directory

This directory contains individual project detail pages. Each HTML file provides comprehensive information about a specific research project.

## Creating New Project Pages

To add a new project:

1. **Copy an existing project HTML file** (e.g., `multiscale-cartilage.html`) as a template
2. **Update the content** with your project details
3. **Add project media** to the `/images/projects/` directory
4. **Update the main page** (`index.html`) to link to your new project

## Project Page Structure

Each project page should include:

- **Project Header**: Title, duration, location, advisor
- **Overview**: Brief description of the project
- **Objectives**: Key research goals
- **Methodology**: Technical approach and tools used
- **Key Findings**: Research outcomes and discoveries
- **Media Gallery**: Images, diagrams, videos (optional)
- **Publications**: Related papers and presentations
- **Impact**: Real-world applications and future work

## Adding Media to Projects

### Images
Place images in `/images/projects/` with descriptive names:
- `cartilage-microstructure.png`
- `motion-capture-setup.jpg`
- `cnn-results-graph.png`

### Videos
For videos, you have several options:
1. **YouTube**: Upload to YouTube and embed using iframe
2. **Local files**: Place .mp4 files in `/images/projects/` (keep file size <10MB for GitHub)
3. **Cloud storage**: Host on Google Drive, Vimeo, etc. and link

### Diagrams and Figures
- Use high-resolution images (at least 1200px width)
- Save as PNG for diagrams with text
- Save as JPG for photographs
- Optimize file sizes using tools like TinyPNG

## Example Media HTML

### Image
```html
<div class="media-item">
    <img src="../images/projects/your-image.png" alt="Description">
    <div class="media-caption">
        Your image caption here
    </div>
</div>
```

### Video (YouTube)
```html
<div class="media-item">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube.com/embed/VIDEO_ID" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="media-caption">
        Video caption
    </div>
</div>
```

### PDF/Links
```html
<a href="../path/to/file.pdf" class="btn btn-secondary" target="_blank">
    <i class="fas fa-file-pdf"></i> View Full Report
</a>
```

## Available Project Templates

- `multiscale-cartilage.html` - Full detailed example
- Additional templates can be created by copying this file

## Linking from Main Page

In `index.html`, update the project card:

```html
<div class="project-overlay">
    <a href="projects/your-project.html" class="btn btn-sm">View Details</a>
</div>
```
