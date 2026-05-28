// ============================================
// 🎨 VIPPROW THEME — CHANGE EVERYTHING HERE
// ============================================

const theme = {
  // --- COLORS ---
  colors: {
    primary: "#C9A96E",        // Gold accent
    primaryLight: "#E8D5B0",   // Light gold
    primaryDark: "#A07840",    // Dark gold
    secondary: "#ec66cf",      // Deep purple/black bg
    secondaryLight: "#594580", // Slightly lighter bg
    accent: "#FF6B9D",         // Pink accent
    accentAlt: "#B8860B",      // Dark goldenrod
    text: "#F5F0E8",           // Cream white text
    textMuted: "#A89880",      // Muted text
    textDark: "#1A0A2E",       // Dark text (for light bg)
    surface: "#231440",        // Card background
    surfaceHover: "#2E1A55",   // Card hover
    border: "rgba(201,169,110,0.25)", // Gold border
    overlay: "rgba(26,10,46,0.85)",  // Dark overlay
    white: "#FFFFFF",
    black: "#000000",
  },

  // --- GRADIENTS ---
  gradients: {
    hero: "linear-gradient(135deg, #1A0A2E 0%, #2D1B4E 50%, #1A0A2E 100%)",
    gold: "linear-gradient(90deg, #C9A96E, #E8D5B0, #C9A96E)",
    card: "linear-gradient(145deg, #231440, #2D1B4E)",
    button: "linear-gradient(90deg, #C9A96E, #A07840)",
    overlay: "linear-gradient(180deg, transparent 0%, rgba(26,10,46,0.95) 100%)",
  },

  // --- FONTS ---
  fonts: {
    heading: "'Playfair Display', Georgia, serif",   // Luxury display font
    body: "'Cormorant Garamond', Georgia, serif",    // Elegant body
    accent: "'Cinzel', serif",                        // Decorative caps
    sans: "'DM Sans', sans-serif",                   // Clean sans for UI
  },

  // --- FONT SIZES ---
  fontSizes: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    md: "1.125rem",     // 18px
    lg: "1.25rem",      // 20px
    xl: "1.5rem",       // 24px
    "2xl": "1.875rem",  // 30px
    "3xl": "2.25rem",   // 36px
    "4xl": "3rem",      // 48px
    "5xl": "3.75rem",   // 60px
    "6xl": "4.5rem",    // 72px
    hero: "5.5rem",     // Hero heading
  },

  // --- FONT WEIGHTS ---
  fontWeights: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  // --- SPACING ---
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "5rem",
    "3xl": "8rem",
    section: "6rem",
  },

  // --- BORDER RADIUS ---
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  // --- SHADOWS ---
  shadows: {
    sm: "0 2px 8px rgba(0,0,0,0.3)",
    md: "0 4px 20px rgba(0,0,0,0.4)",
    lg: "0 8px 40px rgba(0,0,0,0.5)",
    gold: "0 4px 30px rgba(201,169,110,0.3)",
    glow: "0 0 40px rgba(201,169,110,0.2)",
  },

  // --- TRANSITIONS ---
  transitions: {
    fast: "0.15s ease",
    normal: "0.3s ease",
    slow: "0.5s ease",
    spring: "0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  // --- BREAKPOINTS ---
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export default theme;
export type Theme = typeof theme;
