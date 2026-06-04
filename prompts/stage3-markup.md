# Stage 3 — Markup build

You are a frontend engineer in a Nuxt 3 monorepo using Tailwind CSS.

## Input files
[ui-components.md]
[services.json]
[prices.json]
[blueprint.json — output of Stage 1]
[copy.md — output of Stage 2]

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
  <!-- PriceSection — if price trigger conditions are met (see below) -->
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
- `PriceSpecification` — cover every price mentioned in the copy AND every price shown in the price section
- `speakable` — apply to the H1 text and the first paragraph
- `LocalBusiness` — include `sameAs: [Google Business Profile URL, LinkedIn URL]`
- `BreadcrumbList` — matches the `<BreadcrumbNav>` component output

## Price section rules

**Add a dedicated price section when ANY of these conditions are true:**

1. Blueprint `keywords` contain any of: `cena`, `koszt`, `ile kosztuje`, `cennik`, `wycena`, `ceny`, `kalkulator`
2. Blueprint `user_intent` is `transactional`
3. Blueprint `h2_sections` contains a section with `content_type: "pricing"` or heading containing `cena` / `koszt` / `ile`
4. The matching service in `services.json` has `price_from_pln` set (not null)

**Price section requirements when added:**

- Use the `<PricingTable>` component from ui-components.md if available
- If no pricing component exists, render a semantic `<table>` with Tailwind
- Pull price data from `prices.json` — match by service slug from blueprint
- Show: service name, price (always with "od X zł netto"), delivery time, key includes
- Add a CTA button below the table linking to the contact or calculator page
- Add `PriceSpecification` JSON-LD for every row shown
- For `kalkulator-kosztow` slug: render the full interactive calculator, not a static table
- For `on_request` prices: show "Wycena indywidualna — bezpłatna konsultacja" instead of a number

**Price display format:**
- Always: `od [X] zł netto`
- Never: round numbers without "od", never omit "netto" for B2B clarity
- Delivery: `od [N] dni roboczych`
- Fixed price note: "Stała cena — wycena przed startem projektu"

## Structure requirements

- One `<h1>` matching blueprint `h1` exactly
- H2 headings match blueprint `h2_sections` headings exactly, in order
- `<article>` wraps the main body content
- `<nav aria-label="breadcrumb">` via the BreadcrumbNav component at the top
- Price section placed after the main content sections, before the FAQ

## Component requirements

- Use only components from ui-components.md — no raw HTML for things that have a component
- No inline styles — Tailwind classes only
- Comparison tables: use the table component if available; otherwise plain semantic `<table>` with Tailwind

## Accessibility

- All interactive elements have visible labels
- Icon-only buttons have `aria-label`
- Color contrast ≥ 4.5:1 (Tailwind's default palette satisfies this — avoid custom low-contrast colors)
- FAQ accordion: `aria-expanded`, `aria-controls` on trigger; `role="region"` on panel
- Price table: `<caption>` element describing the table, `scope="col"` on headers

## Output

Single `.vue` file, production-ready, placed in `pages/[slug].vue`.