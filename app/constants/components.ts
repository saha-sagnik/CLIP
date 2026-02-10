// Component registry for ClipUI components
export interface ComponentInfo {
  name: string;
  path: string;
  category: string;
  description: string;
  platforms: ('swiftui' | 'compose' | 'reactnative')[];
  tags: string[];
  isNew?: boolean;
  isPro?: boolean;
}

export const componentRegistry: ComponentInfo[] = [
  // Buttons
  {
    name: 'Button',
    path: '/components/button',
    category: 'Buttons',
    description: 'A fundamental UI component for triggering actions across SwiftUI, Jetpack Compose, and React Native.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['button', 'action', 'form', 'interactive'],
  },
  {
    name: 'Secondary Button',
    path: '/components/secondary-button',
    category: 'Buttons',
    description: 'A secondary button component with subtle styling for less prominent actions.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['button', 'secondary', 'action'],
  },
  {
    name: 'Ghost Button',
    path: '/components/ghost-button',
    category: 'Buttons',
    description: 'A ghost button component with transparent background and border styling.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['button', 'ghost', 'transparent'],
  },
  {
    name: 'Icon Button',
    path: '/components/icon-button',
    category: 'Buttons',
    description: 'A compact button component designed for icon-only actions.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['button', 'icon', 'compact'],
  },

  // Text Components
  {
    name: 'Blur Text',
    path: '/components/blur-text',
    category: 'Text',
    description: 'Text component with blur effect for creating sophisticated text animations and transitions.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'blur', 'effect'],
  },
  {
    name: 'Fading Animated Text',
    path: '/components/fading-animated-text',
    category: 'Text',
    description: 'Text component with smooth fading animation effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'fade'],
  },
  {
    name: 'Sliding Type Text',
    path: '/components/sliding-type-text',
    category: 'Text',
    description: 'Text component with sliding type animation effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'slide'],
    isNew: true,
  },
  {
    name: 'Typewriter Effect',
    path: '/components/typewritter-effect',
    category: 'Text',
    description: 'Classic typewriter animation effect for text.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'typewriter'],
  },
  {
    name: '3D Text Rotation',
    path: '/components/3d-text-rotation',
    category: 'Text',
    description: 'Text component with 3D rotation animation.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', '3d', 'rotation'],
  },
  {
    name: 'Text Morphing',
    path: '/components/text-morphing-effect',
    category: 'Text',
    description: 'Text morphing animation between different words.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'morph'],
    isNew: true,
  },
  {
    name: 'Shimmer Text',
    path: '/components/shimmer-text',
    category: 'Text',
    description: 'Text with shimmer/shine animation effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'shimmer'],
  },
  {
    name: 'Bounce Animation',
    path: '/components/bounce-text-animation',
    category: 'Text',
    description: 'Text with bouncing animation effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'bounce'],
  },
  {
    name: 'Scale Effect',
    path: '/components/scale-text-effect',
    category: 'Text',
    description: 'Text with scaling animation effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'scale'],
  },
  {
    name: 'Jelly Text',
    path: '/components/jelly-text',
    category: 'Text',
    description: 'Text with jelly wobble animation effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'jelly'],
  },
  {
    name: 'Marquee Text',
    path: '/components/marque-text-effect',
    category: 'Text',
    description: 'Scrolling marquee text animation.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'marquee', 'scroll'],
  },
  {
    name: 'Decrypted Text',
    path: '/components/decrypted-text',
    category: 'Text',
    description: 'Text with decryption/scramble reveal effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'decrypt'],
  },
  {
    name: 'Blinking Effect',
    path: '/components/blinking-text-effect',
    category: 'Text',
    description: 'Text with blinking/flashing animation.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'blink'],
  },
  {
    name: 'Scroll Float',
    path: '/components/scroll-float',
    category: 'Text',
    description: 'Text with scroll-based floating animation.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'scroll', 'float'],
  },
  {
    name: 'Scroll Reveal',
    path: '/components/scroll-reveal',
    category: 'Text',
    description: 'Text with scroll-based reveal animation.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'scroll', 'reveal'],
  },
  {
    name: 'ASCII Text',
    path: '/components/ascii-text',
    category: 'Text',
    description: 'Text with ASCII art animation effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'ascii'],
  },
  {
    name: 'Scramble Text',
    path: '/components/scramble-text',
    category: 'Text',
    description: 'Text with scramble/shuffle animation.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'scramble'],
  },
  {
    name: 'Rotating Text',
    path: '/components/rotating-text',
    category: 'Text',
    description: 'Text with rotation animation effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'rotate'],
  },
  {
    name: 'Glitch Text',
    path: '/components/glitch-text',
    category: 'Text',
    description: 'Text with glitch/distortion effect.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'glitch'],
  },
  {
    name: 'Scroll Velocity',
    path: '/components/scroll-velocity',
    category: 'Text',
    description: 'Text animation based on scroll velocity.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'scroll', 'velocity'],
  },

  // Layout Components
  {
    name: 'Container',
    path: '/components/container',
    category: 'Layout',
    description: 'A flexible container component for content layout.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['layout', 'container', 'wrapper'],
  },
  {
    name: 'Grid',
    path: '/components/grid',
    category: 'Layout',
    description: 'A responsive grid layout component.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['layout', 'grid', 'responsive'],
  },
  {
    name: 'Flex',
    path: '/components/flex',
    category: 'Layout',
    description: 'A flexible box layout component.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['layout', 'flexbox', 'flexible'],
  },
  {
    name: 'Stack',
    path: '/components/stack',
    category: 'Layout',
    description: 'A vertical or horizontal stack layout component.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['layout', 'stack', 'vertical', 'horizontal'],
  },

  // Navigation Components
  {
    name: 'Navbar',
    path: '/components/navbar',
    category: 'Navigation',
    description: 'A responsive navigation bar component.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['navigation', 'navbar', 'menu'],
  },
  {
    name: 'Breadcrumb',
    path: '/components/breadcrumb',
    category: 'Navigation',
    description: 'A breadcrumb navigation component.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['navigation', 'breadcrumb', 'path'],
  },
  {
    name: 'Pagination',
    path: '/components/pagination',
    category: 'Navigation',
    description: 'A pagination component for content navigation.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['navigation', 'pagination', 'pages'],
  },
  {
    name: 'Tabs',
    path: '/components/tabs',
    category: 'Navigation',
    description: 'A tabbed interface component.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['navigation', 'tabs', 'tabbed'],
  },
];

// Helper functions
export const getComponentsByCategory = (category: string) => {
  return componentRegistry.filter(component => component.category === category);
};

export const getComponentsByPlatform = (platform: 'swiftui' | 'compose' | 'reactnative') => {
  return componentRegistry.filter(component => component.platforms.includes(platform));
};

export const searchComponents = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return componentRegistry.filter(component => 
    component.name.toLowerCase().includes(lowercaseQuery) ||
    component.description.toLowerCase().includes(lowercaseQuery) ||
    component.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getNewComponents = () => {
  return componentRegistry.filter(component => component.isNew);
};

export const getProComponents = () => {
  return componentRegistry.filter(component => component.isPro);
};

export const getAllCategories = () => {
  const categories = new Set(componentRegistry.map(c => c.category));
  return Array.from(categories);
};

export const getComponentCount = () => componentRegistry.length;
