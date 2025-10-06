/**
 * DESIGN TOKENS - Point d'accès unique
 *
 * ✅ Centralise tous les tokens de design
 * ✅ Compatible avec le CSS et utilisable en JavaScript
 * ✅ Support TypeScript avec auto-completion
 * ✅ Synchronisé avec les variables CSS dans global.css
 */

export const tokens = {
  colors: {
    // Couleurs principales shadcn/ui
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: "hsl(var(--card))",
    cardForeground: "hsl(var(--card-foreground))",
    popover: "hsl(var(--popover))",
    popoverForeground: "hsl(var(--popover-foreground))",
    primary: "hsl(var(--primary))",
    primaryForeground: "hsl(var(--primary-foreground))",
    secondary: "hsl(var(--secondary))",
    secondaryForeground: "hsl(var(--secondary-foreground))",
    muted: "hsl(var(--muted))",
    mutedForeground: "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    accentForeground: "hsl(var(--accent-foreground))",
    destructive: "hsl(var(--destructive))",
    destructiveForeground: "hsl(var(--destructive-foreground))",
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",

    // Couleurs hover
    hover: {
      primary: "hsl(var(--primary-hover))",
      secondary: "hsl(var(--secondary-hover))",
      accent: "hsl(var(--accent-hover))",
      muted: "hsl(var(--muted-hover))",
    },

    // Couleurs custom FinCollect
    brand: {
      primary: "hsl(var(--primary))", // Alias vers primary
      vivid: "hsl(var(--brand-vivid))",
      neon: "hsl(var(--brand-neon))",
      rich: "hsl(var(--brand-rich))",
      lavender: "hsl(var(--brand-lavender))",
    },

    feedback: {
      success: "hsl(var(--feedback-success))",
      warning: "hsl(var(--feedback-warning))",
      error: "hsl(var(--feedback-error))",
      danger: "hsl(var(--feedback-danger))",
    },

    accents: {
      coral: "hsl(var(--accent-coral))",
      rose: "hsl(var(--accent-rose))",
      dusty: "hsl(var(--accent-dusty))",
      garnet: "hsl(var(--accent-garnet))",
      teal: "hsl(var(--accent-teal))",
      tealLight: "hsl(var(--accent-teal-light))",
      mint: "hsl(var(--accent-mint))",
      cyan: "hsl(var(--accent-cyan))",
      seafoam: "hsl(var(--accent-seafoam))",
    },

    neutral: {
      charcoal: "hsl(var(--neutral-charcoal))",
      gray: "hsl(var(--neutral-gray))",
      silver: "hsl(var(--neutral-silver))",
      lightGray: "hsl(var(--neutral-light-gray))",
    },

    teal: {
      sea: "hsl(var(--teal-sea))",
      aqua: "hsl(var(--teal-aqua))",
      sky: "hsl(var(--teal-sky))",
      lagoon: "hsl(var(--teal-lagoon))",
      mint: "hsl(var(--teal-mint))",
      seagreen: "hsl(var(--teal-seagreen))",
      fresh: "hsl(var(--teal-fresh))",
      lime: "hsl(var(--teal-lime))",
    },
  },

  radius: {
    sm: "var(--radius-sm)" /* 8px */,
    md: "var(--radius-md)" /* 12px */,
    lg: "var(--radius-lg)" /* 16px - Base FinCollect */,
    xl: "var(--radius-xl)" /* 20px */,
    "2xl": "var(--radius-2xl)" /* 24px */,
  },

  shadows: {
    sm: "var(--shadow-sm)",
    default: "var(--shadow)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
    "2xl": "var(--shadow-2xl)",
    soft: "var(--shadow-soft)",
    card: "var(--shadow-card)",
  },

  fonts: {
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
    heading: "var(--font-heading)",
  },
  fontSizes: {
    "9": "var(--font-size-9)", // 9px
    "10": "var(--font-size-10)", // 10px
    "12": "var(--font-size-12)", // 12px
    "16": "var(--font-size-16)", // 16px
    "18": "var(--font-size-18)", // 18px
    "19": "var(--font-size-19)", // 19px
    "20": "var(--font-size-20)", // 20px
    "32": "var(--font-size-32)", // 32px
    "40": "var(--font-size-40)", // 40px
    "48": "var(--font-size-48)", // 48px
    "57": "var(--font-size-57)", // 57px
  },

  spacing: {
    xs: "var(--spacing-xs)",
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    xl: "var(--spacing-xl)",
    "2xl": "var(--spacing-2xl)",
    "3xl": "var(--spacing-3xl)",
  },

  transitions: {
    fast: "var(--transition-fast)",
    normal: "var(--transition-normal)",
    slow: "var(--transition-slow)",
  },
} as const;

/**
 * Type helper pour l'auto-completion
 */
export type DesignTokens = typeof tokens;
export type ColorTokens = keyof typeof tokens.colors;
export type RadiusTokens = keyof typeof tokens.radius;
export type ShadowTokens = keyof typeof tokens.shadows;
