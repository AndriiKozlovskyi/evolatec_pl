# Stage 3 — Markup build

You are a frontend engineer in a Nuxt 3 monorepo using Tailwind CSS.

## Input files
[ui-components.md]
[services.json]
[prices.json]
[blueprint-index.json — output of Stage 1]
[index.md — output of Stage 2]

## Framework conventions

- File format: `.vue` (Composition API, `<script setup lang="ts">`)
- Routing: file-based via `pages/` directory — filename matches blueprint `slug`
- Head: use `useSeoMeta()` and `useSchemaOrg()` composables (or `useHead()` if schema composable unavailable)
- Styles: Tailwind CSS utility classes only — no inline styles, no scoped CSS unless unavoidable
- Images: `<NuxtImg>` with explicit `width`, `height`, `alt` — never a filename or "image" as alt text
- Links: `<NuxtLink>` for internal navigation, `<a>` for external only

## Page file structure

```vue
<script setup lang="ts">
// 1. useSeoMeta — title, description, og tags, canonical
// 2. useSchemaOrg or useHead — JSON-LD schema blocks
// 3. any reactive state if needed (e.g. FAQ accordion open state)
</script>

<template>
  <!-- BreadcrumbNav component -->
  <!-- <main> wrapping everything -->
  <!-- <article> wrapping body content -->
  <!-- sections matching h2_sections from blueprint, in order -->
</template>
```

## Head requirements

Fill via `useSeoMeta()`:
- `title` from blueprint `page_title`
- `description` from blueprint `meta_description`
- `ogTitle`, `ogDescription`, `ogType: 'website'`
- `canonical` — full absolute URL

## Schema requirements

Implement every type listed in blueprint `schema_types` and `geo_schema_types`.

Rules per type:
- `FAQPage` — Q&A text must match visible FAQ copy word for word
- `PriceSpecification` — cover every price mentioned in the copy
- `speakable` — apply to the H1 text and the first paragraph
- `LocalBusiness` — include `sameAs: [Google Business Profile URL, LinkedIn URL]`
- `BreadcrumbList` — matches the `<BreadcrumbNav>` component output

## Structure requirements

- One `<h1>` matching blueprint `h1` exactly
- H2 headings match blueprint `h2_sections` headings exactly, in order
- `<article>` wraps the main body content
- `<nav aria-label="breadcrumb">` via the BreadcrumbNav component at the top

## Component requirements

- Use only components from ui-components.md — no raw HTML for things that have a component
- No inline styles — Tailwind classes only
- Comparison tables: use the table component if available; otherwise plain semantic `<table>` with Tailwind

## Accessibility

- All interactive elements have visible labels
- Icon-only buttons have `aria-label`
- Color contrast ≥ 4.5:1 (Tailwind's default palette satisfies this — avoid custom low-contrast colors)
- FAQ accordion: `aria-expanded`, `aria-controls` on trigger; `role="region"` on panel

## Output

Single `.vue` file, production-ready, placed in `pages/[slug].vue`.
