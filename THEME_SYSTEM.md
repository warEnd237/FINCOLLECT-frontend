# Système de Thème à 3 Options - FINCOLLECT

## 🎨 Vue d'ensemble

Le projet FINCOLLECT dispose maintenant d'un système de thème complet avec **3 options** : **Light**, **Dark**, et **Night**.

## 🏗️ Architecture Implémentée

### 1. Store Zustand (`src/store/ui.store.ts`)
- Types TypeScript pour les 3 thèmes : `"light" | "dark" | "night"`
- Fonction `setTheme(theme)` pour sélection directe
- Fonction `toggleTheme()` qui cycle : light → dark → night → light
- Persistance automatique avec Zustand persist middleware
- Gestion automatique des classes CSS sur `document.documentElement`

### 2. Variables CSS (`src/app/globals.css`)
- **Thème Light** : Variables par défaut (fond blanc, texte sombre)
- **Thème Dark** : Classe `.dark` avec couleurs sombres standard
- **Thème Night** : Classe `.night` avec fond ultra-sombre (#0a0a0a) et haute contraste

### 3. Provider (`src/providers/theme-provider.tsx`)
- Applique automatiquement les classes CSS selon le thème actuel
- Synchronisation avec le store Zustand
- Gestion des classes `dark` et `night` sur l'élément racine

### 4. Composant ThemeToggle (`src/components/ui/theme-toggle.tsx`)
- Bouton principal avec cycle automatique des thèmes
- Boutons individuels pour sélection directe (desktop uniquement)
- Icônes distinctes : Sun (light), Moon (dark), Star (night)
- Responsive design

## 🎯 Fonctionnalités

### Changement de Thème
```typescript
// Cycle automatique
const { toggleTheme } = useUIStore();
toggleTheme(); // light → dark → night → light

// Sélection directe
const { setTheme } = useUIStore();
setTheme('night'); // Passe directement au thème night
```

### Persistance
- Le thème choisi est automatiquement sauvegardé dans localStorage
- Restauration automatique au rechargement de la page

### Variables CSS par Thème
```css
/* Light (défaut) */
--neutral-bg-100: #ffffff;
--neutral-ink: #000000;

/* Dark */
.dark {
  --neutral-bg-100: #1a1a1a;
  --neutral-ink: #ffffff;
}

/* Night */
.night {
  --neutral-bg-100: #0a0a0a;
  --neutral-ink: #ffffff;
  /* Couleurs plus vives pour contraste optimal */
}
```

## 🧪 Tests & QA

### Tests Unitaires
- **Store UI** : Tests de la logique de changement de thème
- **Composant ThemeToggle** : Tests d'interaction et rendu
- Mocks appropriés pour `document.documentElement`

### Configuration
- **Vitest** : Configuration validée avec browser mode et Storybook
- **GitHub Actions CI** : lint, test, build automatiques
- **Storybook** : Stories pour validation visuelle du composant

## 🎨 Couleurs du Thème Night

Le thème Night est optimisé pour un usage nocturne prolongé :

### Backgrounds
- **Ultra-sombre** : `#0a0a0a` (réduction fatigue oculaire)
- **Surfaces** : `#1a1a1a`, `#2a2a2a`

### Textes
- **Haute-contraste** : `#ffffff`, `#e8e8e8`
- **Secondaire** : `#c0c0c0`, `#a8a8a8`

### Couleurs Brand & Accents
- **Brand** : Violets plus lumineux (`#7c5ce0`, `#a366ff`)
- **Accents** : Rouge/rose plus vifs (`#ff6b7d`, `#ff7a8a`)
- **Feedback** : Couleurs success/warning/error renforcées

## 🚀 Utilisation

### Dans le Header
Le composant `ThemeToggle` est intégré dans le header principal :

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Dans votre composant
<ThemeToggle />
```

### Dans vos Composants
Utilisez les variables CSS Tailwind standard. Le thème s'applique automatiquement :

```tsx
<div className="bg-neutral-cloud dark:bg-neutral-ink text-neutral-lead">
  {/* Le thème night utilise automatiquement ses variables */}
</div>
```

## 📱 Responsive Design

- **Mobile** : Bouton toggle simple avec icône + label
- **Desktop** : Boutons individuels additionnels pour accès direct
- **Accessibility** : Labels descriptifs et focus management

## 🔧 Configuration Technique

### Tailwind Config
- `darkMode: "class"` pour support des thèmes basés sur classes CSS
- Variables CSS mappées dans les couleurs Tailwind
- Support des paths src/**

### Next.js
- Provider intégré dans le layout racine
- Classes appliquées côté client avec `useEffect`
- Compatible avec SSR/Hydration Next.js

## 🎯 Prochaines Étapes

1. **Tests d'intégration** : Tests E2E avec Playwright
2. **Personnalisation avancée** : Permettre aux utilisateurs de modifier les couleurs
3. **Animations** : Transitions fluides entre thèmes
4. **Préférences système** : Détection automatique du thème OS

---

✅ **Système de thème complet fonctionnel avec 3 options : Light, Dark, Night**
