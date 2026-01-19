# Screenshot Integration Guide

## Overview
Your redesigned website includes placeholder sections for app screenshots. This guide shows you how to add real screenshots.

## Recommended Screenshot Specifications

### For iPhone Mockups
- **Dimensions**: 1170 x 2532 pixels (iPhone 14 Pro resolution) or 1284 x 2778 (iPhone 14 Pro Max)
- **Format**: PNG with transparency (preferred) or JPG
- **Aspect Ratio**: 19.5:9 (modern iPhone)

### Screenshots Needed

#### **NeuroRest** (3 screenshots recommended)
1. **Primary**: Sleep analysis dashboard showing HRV data and recovery scoring
2. **Secondary**: Readiness tracking over time with trends
3. **Tertiary**: Detailed sleep stages breakdown

#### **FuelSense** (3 screenshots recommended)
1. **Primary**: Main nutrition dashboard with macro tracking
2. **Secondary**: Barcode scanning interface in action
3. **Tertiary**: Daily/weekly nutrition trends view

#### **Cortex** (Optional - Coming Soon)
1. Concept mockup or wireframe
2. Feature preview graphic
3. Or keep the placeholder "Coming Soon" design

## How to Add Screenshots

### Option 1: Replace Placeholder Sections (Recommended)

1. **Save your screenshots** to the `images/` directory:
   ```
   images/neurorest-screenshot-1.png
   images/neurorest-screenshot-2.png
   images/fuelsense-screenshot-1.png
   images/fuelsense-screenshot-2.png
   ```

2. **Update index.html** - Find the placeholder sections and replace them:

   **For NeuroRest** (around line 86):
   ```html
   <div class="screenshot-placeholder neuro-placeholder">
     <div class="placeholder-content">
       <div class="placeholder-icon">📊</div>
       <p>NeuroRest Screenshot</p>
       <small>Sleep analysis dashboard with HRV data and recovery scoring</small>
     </div>
   </div>
   ```

   Replace with:
   ```html
   <img src="images/neurorest-screenshot-1.png" alt="NeuroRest sleep analysis dashboard" style="width: 100%; height: 100%; object-fit: cover; border-radius: 32px;">
   ```

   **For FuelSense** (around line 139):
   ```html
   <div class="screenshot-placeholder fuel-placeholder">
     <div class="placeholder-content">
       <div class="placeholder-icon">🍎</div>
       <p>FuelSense Screenshot</p>
       <small>Nutrition dashboard with macro tracking and daily trends</small>
     </div>
   </div>
   ```

   Replace with:
   ```html
   <img src="images/fuelsense-screenshot-1.png" alt="FuelSense nutrition dashboard" style="width: 100%; height: 100%; object-fit: cover; border-radius: 32px;">
   ```

### Option 2: Create Screenshot Carousel (Advanced)

If you want to show multiple screenshots per app, you can create a simple carousel:

```html
<div class="screenshot-carousel">
  <img src="images/neurorest-screenshot-1.png" alt="NeuroRest dashboard" class="carousel-active">
  <img src="images/neurorest-screenshot-2.png" alt="NeuroRest trends">
  <img src="images/neurorest-screenshot-3.png" alt="NeuroRest details">
</div>
```

Then add CSS for cycling (I can help with this if needed).

## Screenshot Capture Tips

### From iOS Simulator
1. Open your app in Xcode Simulator
2. Navigate to the best screens
3. Use `Cmd + S` to save screenshots
4. Screenshots save to Desktop by default

### From Physical Device
1. Take screenshots with `Volume Up + Side Button`
2. AirDrop to your Mac
3. Crop if needed to remove status bar/home indicator

### Editing Screenshots
- Use **Preview** (Mac) or **Figma** to:
  - Crop to exact dimensions
  - Add subtle shadows
  - Adjust brightness/contrast for consistency
  - Remove sensitive data if needed

## Device Frame Alternatives

If you want actual device frames around screenshots:
1. Use [Screely](https://screely.com/) - Free browser tool
2. Use [MockUPhone](https://mockuphone.com/) - Device mockup generator
3. Use Figma device mockup templates

## Testing

After adding screenshots:
1. Open `index.html` in a browser
2. Check that images load correctly
3. Verify they look good in the phone mockup frames
4. Test on mobile devices for responsiveness

## Questions?

The phone mockup frames are sized at:
- Desktop: 320px x 640px
- Tablet: 280px x 560px
- Mobile: 240px x 480px

Screenshots will automatically scale to fit these frames while maintaining aspect ratio.
