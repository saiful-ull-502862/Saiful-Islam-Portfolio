#!/usr/bin/env python3
"""
Batch update HTML files to add hamburger menu and update navigation
"""

import re

files_to_update = [
    'education.html',
    'experience.html',
    'projects.html',
    'publications.html',
    'contact.html'
]

# The hamburger menu HTML to insert
hamburger_html = '''        <!-- Hamburger Menu Button -->
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- Sidebar Overlay -->
        <div class="sidebar-overlay" id="sidebarOverlay"></div>

'''

# New navigation HTML
new_nav = '''            <nav class="sidebar-nav">
                <ul>
                    <li><a href="index.html" class="nav-link">HOME</a></li>
                    <li><a href="about.html" class="nav-link">ABOUT</a></li>
                    <li><a href="skills.html" class="nav-link">SKILLS</a></li>
                    <li><a href="education.html" class="nav-link">EDUCATION</a></li>
                    <li><a href="experience.html" class="nav-link">EXPERIENCE</a></li>
                    <li><a href="projects.html" class="nav-link">PROJECTS</a></li>
                    <li><a href="publications.html" class="nav-link">PUBLICATIONS</a></li>
                    <li><a href="contact.html" class="nav-link">CONTACT</a></li>
                </ul>
            </nav>'''

for filename in files_to_update:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add hamburger menu after <div class="app-layout">
        if 'menu-toggle' not in content:
            content = content.replace(
                '        <!-- Sidebar Navigation -->',
                hamburger_html + '        <!-- Sidebar Navigation -->'
            )
        
        # Update sidebar tag to include id
        content = content.replace(
            '<aside class="sidebar">',
            '<aside class="sidebar" id="sidebar">'
        )
        
        # Update navigation - find and replace the nav section
        # This is a bit tricky, so we'll use regex
        nav_pattern = r'<nav class="sidebar-nav">.*?</nav>'
        if re.search(nav_pattern, content, re.DOTALL):
            # Set the active class based on the current file
            page_nav = new_nav
            page_name = filename.replace('.html', '').upper()
            page_nav = page_nav.replace(
                f'<li><a href="{filename}" class="nav-link">',
                f'<li><a href="{filename}" class="nav-link active">'
            )
            
            content = re.sub(nav_pattern, page_nav, content, flags=re.DOTALL)
        
        # Write back
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Updated {filename}")
    
    except FileNotFoundError:
        print(f"✗ File not found: {filename}")
    except Exception as e:
        print(f"✗ Error updating {filename}: {e}")

print("\nBatch update complete!")
