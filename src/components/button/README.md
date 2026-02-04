# Button Component Usage

## Overview
The Button component is a reusable, attractive button with multiple variants and sizes that adapts to both light and dark modes using the palette system.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | 'primary' | Button style: 'primary', 'secondary', 'ghost', 'outline' |
| `size` | string | 'md' | Button size: 'sm', 'md', 'lg' |
| `disabled` | boolean | false | Disables the button |
| `onClick` | function | - | Click handler |
| `children` | ReactNode | - | Button content/text |
| `className` | string | '' | Additional CSS classes |

## Examples

### Primary Button
```jsx
import Button from './components/button';

<Button variant="primary" size="md" onClick={() => console.log('Clicked!')}>
  Get Started
</Button>
```

### Secondary Button
```jsx
<Button variant="secondary" size="md">
  Learn More
</Button>
```

### Ghost Button (Transparent)
```jsx
<Button variant="ghost" size="md">
  Cancel
</Button>
```

### Outline Button
```jsx
<Button variant="outline" size="lg">
  View My Work
</Button>
```

### Disabled Button
```jsx
<Button variant="primary" disabled>
  Disabled
</Button>
```

## Features

✨ **Attractive Animations**
- Smooth elevation on hover
- Ripple effect on click
- Transform animations

🎨 **Theme-Aware**
- Automatically adapts to light and dark modes
- Uses palette system colors
- Gradient support

📱 **Responsive**
- Multiple size options (sm, md, lg)
- Works on all devices

## Color Palette

**Light Mode:**
- Primary: Indigo (#6366f1)
- Secondary: Pink (#ec4899)
- Success: Green (#10b981)
- Warning: Amber (#f59e0b)
- Error: Red (#ef4444)

**Dark Mode:**
- Primary: Light Indigo (#818cf8)
- Secondary: Light Pink (#f472b6)
- Success: Bright Green (#34d399)
- Warning: Bright Amber (#fbbf24)
- Error: Bright Red (#f87171)
