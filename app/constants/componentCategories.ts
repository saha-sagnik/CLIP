// Component categories and items for sidebar navigation
export interface ComponentItem {
  name: string;
  path: string;
  isNew?: boolean;
}

export interface ComponentCategory {
  category: string;
  items: ComponentItem[];
}

export const componentCategories: ComponentCategory[] = [
  {
    category: "Text",
    items: [
      { name: "Blur Text", path: "/components/blur-text" },
      { name: "Fading Animated Text", path: "/components/fading-animated-text" },
      { name: "Siding Effect Text", path: "/components/sliding-type-text", isNew: true },
      { name: "Typewritter Effect", path: "/components/typewritter-effect" },
      { name: "3D Text Rotation", path: "/components/3d-text-rotation" },
      { name: "Text Morphing", path: "/components/text-morphing-effect", isNew: true },
      { name: "Shimmer Text Effect", path: "/components/shimmer-text" },
      { name: "Bounce Animation", path: "/components/bounce-text-animation" },
      { name: "Scaling Effect", path: "/components/scale-text-effect" },
      { name: "Jelly Text Effect", path: "/components/jelly-text" },
      { name: "Marque Text Effect", path: "/components/marque-text-effect" },
      { name: "Decrypted Text", path: "/components/decrypted-text" },
      { name: "Blinking Effect", path: "/components/blinking-text-effect" },
      { name: "Scroll Float", path: "/components/scroll-float" },
      { name: "Scroll Reveal", path: "/components/scroll-reveal" },
      { name: "ASCII Text", path: "/components/ascii-text" },
      { name: "Scramble Text", path: "/components/scramble-text" },
      { name: "Rotating Text", path: "/components/rotating-text" },
      { name: "Glitch Text", path: "/components/glitch-text" },
      { name: "Scroll Velocity", path: "/components/scroll-velocity" },
    ],
  },
  {
    category: "Buttons",
    items: [
      { name: "Primary Button", path: "/components/button" },
      { name: "Secondary Button", path: "/components/secondary-button" },
      { name: "Ghost Button", path: "/components/ghost-button" },
      { name: "Icon Button", path: "/components/icon-button" },
    ],
  },
  {
    category: "Layout",
    items: [
      { name: "Container", path: "/components/container" },
      { name: "Grid", path: "/components/grid" },
      { name: "Flex", path: "/components/flex" },
      { name: "Stack", path: "/components/stack" },
    ],
  },
  {
    category: "Navigation",
    items: [
      { name: "Navbar", path: "/components/navbar" },
      { name: "Breadcrumb", path: "/components/breadcrumb" },
      { name: "Pagination", path: "/components/pagination" },
      { name: "Tabs", path: "/components/tabs" },
    ],
  },
];
