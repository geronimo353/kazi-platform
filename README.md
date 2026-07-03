# 🟣 KAZI Platform

> **Connecter les talents congolais aux opportunités qui leur correspondent.**

Plateforme de mise en relation entre jeunes diplômés congolais et PMEs — propulsée par le **Kazi Score™**, un indicateur de confiance qui va au-delà du diplôme.

---

## 🚀 Déploiement sur GitHub Pages (5 minutes)

### Étape 1 — Créer un dépôt GitHub
1. Va sur [github.com](https://github.com) et connecte-toi
2. Clique sur **"New repository"**
3. Nomme le dépôt : `kazi-platform` (ou ce que tu veux)
4. Coche **"Public"**
5. Clique **"Create repository"**

### Étape 2 — Uploader les fichiers
**Option A — Via l'interface web (plus simple) :**
1. Dans ton nouveau dépôt, clique sur **"uploading an existing file"**
2. Glisse-dépose **TOUS** les fichiers du dossier `kazi/`
3. (N'oublie pas le dossier `assets/` avec `css/style.css` et `js/app.js`)
4. Clique **"Commit changes"**

**Option B — Via Git (terminal) :**
```bash
cd kazi
git init
git add .
git commit -m "🚀 Initial commit — Kazi Platform"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/kazi-platform.git
git push -u origin main
```

### Étape 3 — Activer GitHub Pages
1. Dans ton dépôt, clique sur **Settings** (⚙️)
2. Dans le menu gauche, clique sur **Pages**
3. Sous "Branch", sélectionne **main** → **/ (root)**
4. Clique **Save**
5. Attends 1-2 minutes...
6. Ton site est en ligne sur : `https://TON_USERNAME.github.io/kazi-platform/`

---

## 📁 Structure du projet

```
kazi/
├── index.html                  ← Page d'accueil (Landing page)
├── inscription-diplome.html    ← Inscription des diplômés (3 étapes)
├── inscription-pme.html        ← Inscription des PMEs (RCCM, ID NAT, NIF)
├── dashboard-diplome.html      ← Tableau de bord diplômé
├── dashboard-pme.html          ← Tableau de bord entreprise
├── recherche.html              ← Recherche avancée de candidats
├── profil.html                 ← Profil public d'un diplômé
├── admin.html                  ← Panneau d'administration
├── assets/
│   ├── css/
│   │   └── style.css          ← Styles globaux partagés
│   └── js/
│       └── app.js             ← JavaScript partagé (Kazi Score, toasts, etc.)
└── README.md                   ← Ce fichier
```

---

## 📄 Pages de la plateforme

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/index.html` | Landing page avec stats, fonctionnalités, tarifs |
| Inscription diplômé | `/inscription-diplome.html` | Formulaire 3 étapes : identité, académique, portfolio |
| Inscription PME | `/inscription-pme.html` | Formulaire avec upload RCCM, ID NAT, NIF |
| Dashboard diplômé | `/dashboard-diplome.html` | Kazi Score, offres, badges, messages |
| Dashboard PME | `/dashboard-pme.html` | Offres, candidats recommandés, statistiques |
| Recherche | `/recherche.html` | Filtres avancés, cartes candidats, Kazi Score |
| Profil | `/profil.html` | Portfolio complet, expérience, recommandations |
| Admin | `/admin.html` | Vérification PMEs, statistiques, gestion users |

---

## 🛠️ Technologies utilisées

| Technologie | Usage | CDN |
|-------------|-------|-----|
| **Tailwind CSS** | Classes utilitaires | `cdn.tailwindcss.com` |
| **Alpine.js** | Réactivité (formulaires, onglets) | `cdn.jsdelivr.net/npm/alpinejs` |
| **Chart.js** | Graphiques dans les dashboards | `cdn.jsdelivr.net/npm/chart.js` |
| **Inter** (Google Fonts) | Typographie | `fonts.googleapis.com` |
| CSS personnalisé | Glassmorphism, badges, Kazi Score ring | `assets/css/style.css` |
| JS partagé | Score ring, toasts, file upload | `assets/js/app.js` |

> ✅ **Aucune installation requise.** Tout fonctionne via CDN — ouvre simplement `index.html` dans un navigateur.

---

## 🎨 Système de design

### Couleurs
```css
--primary:    #7c3aed  /* Violet — couleur principale Kazi */
--accent:     #10b981  /* Vert — succès, disponibilité */
--warning:    #f59e0b  /* Ambre — alertes */
--danger:     #ef4444  /* Rouge — erreurs, urgences */
--bg:         #09090b  /* Fond principal (noir profond) */
--surface:    #18181b  /* Cartes et panneaux */
```

### Badges Kazi Score™
| Badge | Score | Couleur |
|-------|-------|---------|
| 🥉 Bronze | 0–39 | `#cd7f32` |
| 🥈 Silver | 40–59 | `#c0c0c0` |
| 🥇 Gold | 60–79 | `#ffd700` |
| ⭐ Expert | 80–100 | `#a78bfa` |

---

## 📋 Fonctionnalités clés

- ✅ **Kazi Score™** — Score sur 100 (formation + tests + portfolio + recommandations + expérience)
- ✅ **Inscription PME vérifiée** — Upload RCCM + ID NAT + NIF (PDF)
- ✅ **Tests de compétences** — Badges Bronze / Silver / Gold / Expert
- ✅ **Recherche avancée** — Filtres province, badge, score, université, disponibilité
- ✅ **Dashboard diplômé** — Score détaillé, offres recommandées, messages
- ✅ **Dashboard PME** — Offres, candidats recommandés, statistiques recrutement
- ✅ **Profil portfolio** — CV, projets, recommandations vérifiées, liens GitHub/Behance
- ✅ **Admin panel** — File de vérification PME, stats globales, graphiques
- ✅ **Design responsive** — Mobile et desktop
- ✅ **Dark theme** — Inspiré de Linear, Stripe, Apple

---

## 📞 Contact & Support

📧 hello@kazi.cd  
📍 Kinshasa, République Démocratique du Congo 🇨🇩  
🌐 kazi.cd

---

*Fait avec ❤️ à Kinshasa pour la jeunesse congolaise.*
