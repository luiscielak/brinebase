# UI Design Guidelines

## Device Frame Specifications

Every screen design must be rendered with a device frame that has the following specifications:

```css
.device-frame {
    width: 375px;
    height: 812px;
    border: 12px solid #1a1a1a;
    border-radius: 48px;
    position: relative;
    overflow: hidden;
    background: white;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}
```

## Fidelity Levels

### Low Fidelity Wireframes
- Must include labeled elements (not just empty boxes)
- Use grayscale colors
- Include actual text content and labels
- Show clear hierarchy with headers and sections
- Include placeholder text that describes the content
- Use dashed borders to indicate interactive elements

Example structure:
```html
<div class="wireframe">
    <header>
        <h1>Page Title</h1>
        <nav>Navigation Menu</nav>
    </header>
    <main>
        <section>
            <h2>Section Title</h2>
            <p>Content description goes here</p>
            <button>Action Button</button>
        </section>
    </main>
</div>
```

### Medium Fidelity
- Basic styling with simplified color palette
- Real content structure
- Basic interactions indicated
- Simple component shapes
- Minimal shadows and depth
- Basic typography hierarchy

### High Fidelity
- Complete styling with Tailwind CSS
- Full color palette implementation
- Detailed components with proper spacing
- Shadows and depth
- Proper typography scale
- Interactive states
- Lucide icons integration

## Layout Guidelines

1. Always maintain 375x812px dimensions
2. Use consistent spacing scale:
   - xs: 0.25rem (4px)
   - sm: 0.5rem (8px)
   - md: 1rem (16px)
   - lg: 1.5rem (24px)
   - xl: 2rem (32px)

3. Maintain proper content padding:
   - Content padding: 16px or 24px
   - Navigation height: 56px
   - Status bar height: 44px

## Component Structure

Each component should follow this hierarchy:
1. Container with frame
2. Content wrapper
3. Semantic HTML structure
4. Interactive elements
5. Supporting content

Example:
```html
<!-- Device Frame -->
<div class="device-frame">
    <!-- Content Wrapper -->
    <div class="content-wrapper">
        <!-- Semantic Structure -->
        <header>...</header>
        <main>
            <section>
                <h1>Title</h1>
                <!-- Interactive Elements -->
                <button>Action</button>
            </section>
        </main>
        <footer>...</footer>
    </div>
</div>
```

## CSS Classes

### Frame Classes
```css
.device-frame {
    /* Device frame styles */
}

.content-wrapper {
    /* Content wrapper styles */
}
```

### Fidelity-Specific Classes
```css
.wireframe {
    /* Low fidelity styles */
}

.mid-fi {
    /* Medium fidelity styles */
}

.hi-fi {
    /* High fidelity styles */
}
```

## Best Practices

1. Always start with labeled wireframes
2. Use semantic HTML elements
3. Include proper ARIA labels
4. Maintain consistent spacing
5. Use proper heading hierarchy
6. Include hover and active states
7. Ensure proper contrast ratios
8. Test responsive behavior
9. Document component variations
10. Include loading states 