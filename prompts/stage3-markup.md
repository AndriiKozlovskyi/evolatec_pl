# Stage 3 — Markup build

You are a frontend engineer in a Nuxt 3 monorepo using Tailwind CSS.

## Input files
[ui-components.md]
[services.json]
[prices.json]
[optymalizacjaa-seo.json — output of Stage 1]
[optymalizacj-seo-copy.md — output of Stage 2]

## Framework conventions

- File format: `.vue` (Composition API, `<script setup lang="ts">`)
- Routing: file-based via `pages/` directory — filename matches blueprint `slug`
- Head: `useSeoMeta()` for meta tags, `useHead()` for JSON-LD schema blocks
- Styles: Tailwind CSS utility classes only — no inline styles, no `<style>` block unless unavoidable
- Images: `<NuxtImg>` with explicit `width`, `height`, `alt` — never a filename or "image" as alt
- Links: `<NuxtLink>` for internal, `<a>` for external only

---

## CRITICAL — component constraint

**Use ONLY components listed in ui-components.md. Every section of the page must map to one of these components.**

- Do NOT invent component names
- Do NOT create new `.vue` component files
- Do NOT write a `<style>` block to simulate a missing component
- If a content type has no matching component → use plain semantic HTML + Tailwind inline in the page file

---

## Page file structure

```vue
<script setup lang="ts">
// 1. useSeoMeta() — title, description, og tags, canonical
// 2. useHead() — JSON-LD schema scripts (one per schema type)
// 3. const data = reactive state for component props
//    define all arrays here: stats, paragraphs, services, benefits, steps, features, faqs, pricing, related
</script>

<template>
  <div>
    <!-- follow the standard section order from ui-components.md -->
    <!-- pass all content as props — no hardcoded text in the template -->
  </div>
</template>
```

**Rule: no hardcoded text in `<template>`.**
All copy goes into `<script setup>` as typed `const` variables, then passed as props.
The template should read like the example from ui-components.md — component names and prop bindings only.

---

## Head requirements

```ts
useSeoMeta({
  title: '',           // from blueprint page_title
  description: '',     // from blueprint meta_description
  ogTitle: '',
  ogDescription: '',
  ogType: 'website',
})
useHead({
  link: [{ rel: 'canonical', href: '' }]
})
```

---

## Schema — useHead JSON-LD blocks

Add one `<script type="application/ld+json">` per schema type via `useHead()`.
Implement every type in blueprint `schema_types` and `geo_schema_types`.

| Type | Rule |
|---|---|
| `FAQPage` | Q&A must match visible FAQSection props word for word |
| `PriceSpecification` | Cover every price in PricingSection props |
| `speakable` | Apply to H1 text and first IntroSection paragraph |
| `LocalBusiness` | Include `sameAs: [Google Business Profile URL, LinkedIn URL]` |
| `BreadcrumbList` | Match the page slug and parent path |
| `Service` | Name, description, price from services.json matching slug |

---

## Section order

Follow the standard order from ui-components.md. For each section:
1. Check if the content type exists in the copy.md output
2. Check if a matching component exists in ui-components.md
3. Populate the `const` data in `<script setup>` from the copy
4. Bind to the component as props in `<template>`

Skip sections that have no relevant content for this page.

---

## PricingSection trigger

Add `<PricingSection>` when ANY is true:
- Blueprint `keywords` contain: `cena`, `koszt`, `ile kosztuje`, `cennik`, `wycena`, `ceny`, `kalkulator`
- Blueprint `user_intent` is `transactional`
- Blueprint `h2_sections` has `content_type: "pricing"` or heading with `cena` / `koszt` / `ile`
- Matching service in `services.json` has `price_from_pln` not null

**PricingPlan data rules:**
- `price`: always `"od X zł netto"` — never omit "od", never omit "netto"
- `delivery`: `"od N dni roboczych"`
- `note`: `"Stała cena — wycena przed startem projektu"`
- `on_request` services: `price: "Wycena indywidualna"`, no delivery field
- Pull data from `prices.json` matched by service slug

---

## Accessibility

- FAQ accordion: `aria-expanded`, `aria-controls` on trigger; `role="region"` on panel
- All interactive elements have visible labels
- Icon-only buttons: `aria-label`
- PricingSection table: `scope="col"` on headers

---

## Output

Single `.vue` file placed in `pages/[slug].vue`.
All content as typed `const` variables in `<script setup>`.
Template contains only component tags and prop bindings.