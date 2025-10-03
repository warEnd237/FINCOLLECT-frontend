import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        // Emplacements à scanner
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // -----------------------
                // NEUTRALS / GREYS
                // -----------------------
                neutral: {
                    // noms descriptifs pour lecture rapide
                    ink: "#000000", // 000000
                    lead: "#333333", // 333333
                    slate: "#636060", // 636060
                    iron: "#616161", // 616161
                    mid: "#979797", // 979797
                    silver: "#b1b1b1", // b1b1b1
                    light: "#d9d9d9", // d9d9d9 (valeur par défaut)
                    pale: "#ececec", // ececec
                    cloud: "#fafbfc", // fafbfc
                    soft: "#c5c5c5", // c5c5c5
                    // variantes opaques utiles (extraites de ta liste)
                    "lead-41": "rgba(51, 51, 51, 0.41)", // 333333 41%
                    "lead-20": "rgba(51, 51, 51, 0.20)", // 333333 20%
                    "silver-28": "rgba(177, 177, 177, 0.28)", // b1b1b1 28%
                    "light-95": "rgba(217, 217, 217, 0.95)", // d9d9d9 95%
                    "light-90": "rgba(217, 217, 217, 0.90)", // d9d9d9 90%
                    // très clair pour surfaces / backgrounds
                    "bg-100": "#ffffff", // white
                    "muted-100": "#9d9d9d", // 9d9d9d
                },

                // -----------------------
                // BRAND / VIOLET FAMILY
                // -----------------------
                brand: {
                    // palette violette / "brand" (regroupement des violets fournis)
                    primary: "#5e3fbe", // 5e3fbe (couleur profonde)
                    vivid: "#884dff", // 884dff
                    neon: "#9747ff", // 9747ff
                    rich: "#8650c8", // 8650c8 (var faible alpha aussi fournie)
                    "rich-10": "rgba(134, 80, 200, 0.10)", // 8650c8 10%
                    lavender: "#a657d6", // a657d6
                    "lavender-10": "rgba(166, 87, 214, 0.10)", // 8650c8-style if needed
                },

                // -----------------------
                // ACCENTS PINK / RED / PUNCH
                // -----------------------
                accent: {
                    coral: "#f64e60", // f64e60 (rouge-rose)
                    "coral-80": "rgba(246, 78, 96, 0.80)", // f64e60 80%
                    "coral-07": "rgba(246, 78, 96, 0.07)", // f64e60 7%
                    "coral-100": "#f64e60", // alias full
                    rose: "#f66274", // f66274 (rose chaud)
                    "rose-18": "rgba(246, 98, 116, 0.18)", // f66274 18%
                    "rose-100": "#f66274",
                    dusty: "#d17a85", // d17a85 (plus doux)
                    garnet: "#b22234", // b22234 (rouge profond)
                    "garnet-60": "rgba(178, 34, 52, 0.60)", // b22234 60%
                },

                // -----------------------
                // TEAL / CYAN / BLUES
                // -----------------------
                teal: {
                    sea: "#009699", // 009699 (teal profond)
                    "sea-08": "rgba(0, 150, 153, 0.08)", // 009699 8%
                    aqua: "#0095ff", // 0095ff (bleu vif)
                    sky: "#40d4d7", // 40d4d7 (bleu-cyan)
                    lagoon: "#51b8ba", // 51b8ba (muted cyan)
                    "lagoon-10": "rgba(81, 184, 186, 0.10)", // 51b8ba 10%
                    mint: "#4ab58e", // 4ab58e (vert-menthe)
                    "mint-18": "rgba(11, 183, 131, 0.18)", // 0bb783 18% (approx group)
                    seaGreen: "#0bb783", // 0bb783 (success-variant)
                    "seaGreen-18": "rgba(11, 183, 131, 0.18)", // 0bb783 18%
                    "seaGreen-100": "#0bb783",
                    fresh: "#07e098", // 07e098 (vert clair)
                    lime: "#00ff00", // 00ff00 (neon green)
                    "cyan-soft": "#ccffff", // ccffff (très clair cyan)
                    "cyan-soft-60": "rgba(204, 255, 255, 0.60)", // ccffff 60%
                    "cyan-soft-22": "rgba(204, 255, 255, 0.22)", // ccffff 22%
                    "eau-100": "#e5f4ff", // e5f4ff (teinte très pâle)
                },

                // -----------------------
                // SUCCESS / WARNING / ERROR
                // -----------------------
                feedback: {
                    success: "#0bb783", // success principal (0bb783)
                    "success-18": "rgba(11, 183, 131, 0.18)", // 0bb783 18%
                    successAlt: "#4ab58e", // autre variante verte (4ab58e)
                    warning: "#ffa800", // warning (ffa800)
                    "warning-18": "rgba(255, 168, 0, 0.18)", // ffa800 18%
                    "warning-10": "rgba(255, 168, 0, 0.10)", // ffa800 10%
                    error: "#b22234", // erreur principale (b22234)
                    "error-60": "rgba(178, 34, 52, 0.60)", // b22234 60%
                    danger: "#ff0000", // rouge vif (ff0000)
                    "danger-09": "rgba(255, 0, 0, 0.09)", // ff0000 9%
                },

                // -----------------------
                // SPECIAL / UTILITY (overlays, backgrounds)
                // -----------------------
                special: {
                    // overlays et surfaces légères
                    frost: "#edf2f6", // edf2f6 (fond très pâle)
                    bloom: "#e5dafb", // e5dafb (lavande pâle)
                    shimmer: "#ccffff", // ccffff (aqua pâle)
                    "shimmer-22": "rgba(204, 255, 255, 0.22)", // ccffff 22%
                    "shimmer-60": "rgba(204, 255, 255, 0.60)", // ccffff 60%
                    "black-09": "rgba(0, 0, 0, 0.09)", // 000000 9% (pour overlays)
                    "brand-blue": "#0095ff", // 0095ff alias
                },

                // -----------------------
                // EXTRAS: petits « tokens » identifiables
                // -----------------------
                // (noms courts & parlants pour raccourcir l'usage)
                ui: {
                    border: "#d9d9d9", // default border (d9d9d9)
                    "border-95": "rgba(217, 217, 217, 0.95)",
                    "muted-28": "rgba(177, 177, 177, 0.28)",
                },
            },

            // fonts, shadows, keyframes... tu gardes ce que tu avais
            fontFamily: {
                sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
                heading: ['var(--font-heading)', 'var(--font-body)', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
            },

            screens: {
                xs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },

            spacing: {
                "128": "32rem",
                "144": "36rem",
            },

            boxShadow: {
                soft: "0 2px 8px rgba(0, 0, 0, 0.05)",
                card: "0 4px 12px rgba(0, 0, 0, 0.1)",
                strong: "0 8px 24px rgba(0, 0, 0, 0.15)",
            },

            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                pulseSlow: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-out",
                slideUp: "slideUp 0.4s ease-out",
                pulseSlow: "pulseSlow 3s infinite",
            },
            transitionDuration: {
                2000: "2000ms",
            },
            transitionTimingFunction: {
                "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
                "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
            },
            maxWidth: {
                "8xl": "90rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};

export default config;
