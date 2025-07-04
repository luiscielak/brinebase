# BrineBase UI Guidelines

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
    flex-shrink: 0;  /* Prevents frame from shrinking */
}
```

### Content Scrolling

Each design must implement proper content scrolling within the device frame:

```css
/* Base content container for all fidelity levels */
.wireframe, .mid-fi, .prototype {
    height: 100%;
    overflow-y: auto;
    position: relative;
}

/* Footer stays fixed at bottom while content scrolls */
.wireframe footer,
.mid-fi footer,
.prototype footer {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #e5e5e5;
    z-index: 10;
}
```

### Layout Grid

Designs should be displayed in a responsive grid layout:

```css
.designs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 375px);
    gap: 2rem;
    justify-content: center;
    padding: 1rem;
}

/* Desktop layout */
@media (min-width: 1200px) {
    .designs-grid {
        grid-template-columns: repeat(3, 375px);
    }
}

.fidelity-section {
    margin-bottom: 4rem;
}
```

## Design Fidelity Levels

### Low-Fidelity Wireframes

#### Core Principles

1. **Minimalism First**
   - Focus on core functionality and content hierarchy
   - Avoid decorative elements
   - Use whitespace effectively to create visual separation

2. **Content Structure**
   - Group related elements into clear sections
   - Use consistent spacing between sections (24px)
   - Maintain a clear visual hierarchy with labels

3. **Typography**
   - Use system fonts for better readability
   - Labels: 12px, uppercase, light gray (#999)
   - Content: 16px, regular weight
   - Headers: 20px, medium weight

#### Layout Guidelines

1. **Device Frame**
   - Width: 375px
   - Height: 812px
   - Background: #fafafa
   - System font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

2. **Spacing**
   - Section margins: 24px bottom
   - Content padding: 16px left/right
   - Vertical rhythm: 12px between elements
   - Form elements: 4px margins
   - Navigation height: 56px
   - Status bar height: 44px

3. **Component Structure**
   ```html
   <section>
     <span class="wireframe-label">Section Title</span>
     <div class="content">
       <!-- Content elements -->
     </div>
   </section>
   ```

#### Visual Elements

1. **Headers & Footers**
   - Light gray background (#f5f5f5)
   - Single border bottom/top
   - 16px padding
   - Flexible layout with justify-between

2. **Form Elements**
   - Light gray background (#f5f5f5)
   - Single border (#e5e5e5)
   - 4px border radius
   - 8px internal padding
   - Full width by default

3. **Buttons**
   - Light gray background
   - Single border
   - Left-aligned text
   - 8px vertical, 16px horizontal padding

4. **Grid Layouts**
   - Use CSS Grid for structured layouts
   - 16px gap between elements
   - Prefer 2-column grids for form layouts

#### Content Guidelines

1. **Labels**
   - Keep labels short and descriptive
   - Use sentence case
   - Avoid technical terms
   - Place above content they describe

2. **Placeholder Text**
   - Use when additional context is needed
   - Keep it concise
   - Provide examples when helpful

3. **Navigation**
   - Minimize number of navigation items
   - Use clear, single-word labels
   - Indicate current section

#### Example Sections

1. **Project Overview**
   ```html
   <section>
     <span class="wireframe-label">Overview</span>
     <div class="grid grid-cols-2">
       <div>
         <span class="wireframe-label">Active</span>
         <p>5 Projects</p>
       </div>
       <div>
         <span class="wireframe-label">Today</span>
         <p>3 Check-ins</p>
       </div>
     </div>
   </section>
   ```

2. **Action Buttons**
   ```html
   <section>
     <span class="wireframe-label">Actions</span>
     <button>Primary Action</button>
     <button>Secondary Action</button>
   </section>
   ```

3. **Form Fields**
   ```html
   <section>
     <span class="wireframe-label">Measurements</span>
     <div class="grid grid-cols-2">
       <input type="number" placeholder="Temperature">
       <input type="number" placeholder="pH Level">
     </div>
   </section>
   ```

#### CSS Base Styles

```css
.wireframe {
  background: #fafafa;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.wireframe * {
  border: none;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 0;
  margin-bottom: 0;
}

.wireframe-label {
  color: #999;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
  display: block;
}

.wireframe section {
  margin-bottom: 24px;
  padding: 0 16px;
}

.wireframe button {
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 8px 16px;
  width: 100%;
  text-align: left;
  margin: 4px 0;
}
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

## Next Steps

After creating low-fidelity wireframes:
1. Review for content hierarchy and flow
2. Validate navigation patterns
3. Ensure all key functionality is represented
4. Move to medium-fidelity designs with basic styling
5. Iterate based on feedback before moving to high-fidelity 