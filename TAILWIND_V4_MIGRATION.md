# Migration Tailwind CSS v3 → v4

## 🔄 **Changements de Configuration**

### **Avant (v3) - tailwind.config.ts**
```typescript
const config: Config = {
  theme: {
    extend: {
      colors: { /* couleurs */ },
      fontFamily: { /* polices */ },
      screens: { /* breakpoints */ },
      spacing: { /* espacements */ },
      boxShadow: { /* ombres */ },
      keyframes: { /* animations */ },
      animation: { /* animations */ },
    },
  },
  plugins: [/* plugins */],
};
```

### **Après (v4) - globals.css**
```css
@theme {
  --color-brand-primary: #5e3fbe;
  --font-family-sans: var(--font-body), system-ui, sans-serif;
  --breakpoint-xs: 480px;
  --spacing-128: 32rem;
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.1);
  --animate-fadeIn: fadeIn 0.3s ease-out;
}

@keyframes fadeIn { /* keyframes */ }
```

## 📦 **Ce qui a été migré dans globals.css**

### **✅ Couleurs**
- Toutes les couleurs custom (brand, neutral, feedback, accent, teal)
- Variables pour thèmes dark et night

### **✅ Typographie**
- Font families (sans, heading, mono)
- Mapping vers vos variables CSS

### **✅ Breakpoints**
- xs, sm, md, lg, xl, 2xl
- Maintenant en variables CSS

### **✅ Spacing**
- spacing-128, spacing-144
- Espacements personnalisés

### **✅ Box Shadows**
- shadow-soft, shadow-card, shadow-strong
- Ombres personnalisées

### **✅ Animations**
- fadeIn, slideUp, slideIn, pulseSlow
- Keyframes + classes utilitaires

### **✅ Transitions**
- Durées personnalisées (2000ms)
- Timing functions (in-expo, out-expo)

### **✅ Max Widths**
- max-width-8xl (90rem)

## 🎨 **Système de Thèmes**

### **Light (par défaut)**
Couleurs définies dans `@theme { }`

### **Dark Mode**
```css
.dark {
  --color-neutral-bg-100: #1a1a1a;
  /* ... autres variables */
}
```

### **Night Theme**
```css
.night {
  --color-neutral-bg-100: #0a0a0a;
  --color-brand-primary: #7c5ce0;
  /* ... couleurs optimisées */
}
```

## 🛠️ **Utilisation**

### **Couleurs**
```jsx
<div className="bg-brand-primary text-neutral-cloud">
  <button className="bg-feedback-success hover:bg-feedback-success/90">
    Success Button
  </button>
</div>
```

### **Animations**
```jsx
<div className="animate-fadeIn">
  <div className="animate-slideUp">
    Content with animations
  </div>
</div>
```

### **Breakpoints**
```jsx
<div className="text-sm md:text-lg xl:text-2xl">
  Responsive text
</div>
```

## 🔧 **Configuration PostCSS**
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

## ⚡ **Avantages Tailwind v4**

1. **Plus rapide** : Compilation plus rapide
2. **Plus simple** : Configuration CSS uniquement
3. **Plus flexible** : Variables CSS natives
4. **Meilleur tree-shaking** : Taille bundle optimisée
5. **Support natif CSS** : Pas besoin de config JS/TS

## 🎯 **Résultat**

- ✅ Toutes vos couleurs custom fonctionnent
- ✅ Système de thème 3 options (light/dark/night)
- ✅ Animations personnalisées préservées
- ✅ Breakpoints et spacing conservés
- ✅ Polices et shadows migrées
- ✅ Compatibilité totale avec votre code existant

**Rien n'a été perdu dans la migration !** 🎉
