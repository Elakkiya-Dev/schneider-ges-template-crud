## Live Demo

https://elakkiya-dev.github.io/schneider-ges-template-crud/

# Schneider GES — Template CRUD

A single-page Angular application for managing **Global Engineering & Services (GES)** project templates. It provides full **Create, Read, Update, Delete** functionality over a list of industrial control templates (Triconex, Foxboro DCS, etc.), with data persisted in the browser's `localStorage`.

---

## Features

- **List view** — table of templates with project, customer, product, and status.
- **Add** — create a new template via a validated dialog form.
- **Edit / Update** — modify an existing template.
- **View** — read-only display of a template's details.
- **Delete** — confirmation dialog before removal.
- **Reset data** — restore the original 5 seed templates (shown when the list is empty).
- **Status indicators** — colored dots for `GES Managed` (green), `Tested And Validated` (blue), and `Untested` (amber).
- **Toast notifications** — success/warning feedback on every action.
- **Persistence** — all changes are saved to `localStorage` under the key `schneider_ges_templates`, so data survives page refreshes.
- **Schneider Electric branding** — custom wordmark, green palette, and themed PrimeNG components.

---

## Tech Stack

| Area | Technology |
|------|------------|
| Framework | Angular 20 (standalone components) |
| UI Library | PrimeNG 20 + PrimeIcons |
| Styling | Tailwind CSS 3.4 + SCSS |
| Forms | Angular Reactive Forms |
| State / Storage | In-memory service backed by `localStorage` |
| Testing | Karma + Jasmine |

---

## Prerequisites

- **Node.js** 18.19+ or 20+ (required by Angular 20)
- **npm** 9+
- **Angular CLI** (optional, for `ng` commands): `npm install -g @angular/cli`

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm start
```

Then open **http://localhost:4200/** in your browser. The app reloads automatically when you change source files.

> If you have the Angular CLI installed globally you can also run `ng serve`.

### 3. Build for production

```bash
npm run build
```

Build artifacts are output to the `dist/` directory.

### 4. Run unit tests

```bash
npm test
```

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── template-list/      # Main table + page layout, orchestrates dialogs
│   │   ├── template-form/      # Add / Edit / View dialog (reactive form)
│   │   └── delete-confirm/     # Delete confirmation dialog
│   ├── models/
│   │   ├── template.model.ts   # Template type + PRODUCT/STATUS options
│   │   └── user.model.ts
│   ├── services/
│   │   ├── template.service.ts # CRUD logic + localStorage persistence + seed data
│   │   └── auth.service.ts
│   ├── app.ts / app.html       # Root shell: header (branding), router outlet, toast
│   ├── app.config.ts           # Providers (router, PrimeNG, MessageService, etc.)
│   └── app.routes.ts           # Routing
├── styles.scss                 # Global styles + PrimeNG component overrides
└── index.html
tailwind.config.js              # Custom Schneider theme tokens (colors, spacing, fonts)
postcss.config.js
```

---

## Usage

1. The app loads with **5 sample templates** the first time (seeded into `localStorage`).
2. Click **Upload New Template** to add one. All four fields are required.
3. Use the row action icons to **View**, **Edit**, or **Delete** a template.
4. When the list is empty, a **Reset Data** button appears to restore the seed templates.

### Clearing stored data

To wipe all saved templates and start fresh, clear the browser entry from the console:

```js
localStorage.removeItem('schneider_ges_templates');
```

Or use the in-app **Reset Data** action to restore the original 5 templates.

---

## Notes

- Custom Tailwind utilities (e.g. `h-18`, `text-22`, `shadow-card`, `tracking-heading`) are defined in **`tailwind.config.js`** — restart the dev server after editing that file.
- There is no backend; the `TemplateService` is the single source of truth and the only place CRUD logic lives.
