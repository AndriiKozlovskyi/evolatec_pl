# UI Components — packages/ui

All components are globally auto-imported in Nuxt 3.
Do not import them manually. Use exactly the names listed here.

---

## HeroSection

Main hero at the top of every page.

```vue
<HeroSection
  background-image="/path/to/hero.webp"
  badge="Short eyebrow label"
  title="Main H1 heading"
  description="Subheading paragraph under the H1"
  primary-cta="Button label"
  secondary-cta="Secondary link label"
  :stats="heroStats"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `background-image` | `string` | yes | Path to webp hero image |
| `badge` | `string` | no | Small label above the title |
| `title` | `string` | yes | Maps to blueprint `h1` |
| `description` | `string` | yes | First paragraph / subheading |
| `primary-cta` | `string` | yes | Primary button label |
| `secondary-cta` | `string` | no | Secondary link label |
| `:stats` | `HeroStat[]` | no | Array of stat objects |

**HeroStat shape:**
```ts
{ value: string; label: string }
// e.g. { value: '95–100', label: 'Lighthouse score' }
```

---

## IntroSection

Two-column section: text left, image right. Used for the first substantive section after the hero.

```vue
<IntroSection
  heading="Section heading"
  :paragraphs="introParagraphs"
  image="/path/to/image.webp"
  image-alt="Descriptive alt text"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `heading` | `string` | yes | Maps to an H2 from blueprint |
| `:paragraphs` | `string[]` | yes | Array of paragraph strings |
| `image` | `string` | yes | Path to webp image |
| `image-alt` | `string` | yes | Descriptive alt text — never a filename |

---

## ServicesSection

Grid of service cards. Use for listing what is included in a service or related services overview.

```vue
<ServicesSection
  title="Section heading"
  variant="centered"
  :services="serviceItems"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | yes | H2 heading for the section |
| `variant` | `'centered' \| 'left'` | no | Default: `'left'` |
| `:services` | `ServiceItem[]` | yes | Array of service card objects |

**ServiceItem shape:**
```ts
{
  icon?: string      // icon name or path
  title: string
  description: string
  link?: string      // optional NuxtLink href
}
```

---

## BenefitsSection

Icon + text benefit rows or cards. Use for "why us" or "what you get" sections.

```vue
<BenefitsSection
  title="Section heading"
  :benefits="benefitItems"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | yes | H2 heading |
| `:benefits` | `BenefitItem[]` | yes | |

**BenefitItem shape:**
```ts
{
  icon?: string
  title: string
  description: string
}
```

---

## ProcessSection

Numbered step-by-step process. Use for "how it works" sections.

```vue
<ProcessSection
  title="Section heading"
  :steps="processSteps"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | yes | H2 heading |
| `:steps` | `ProcessStep[]` | yes | |

**ProcessStep shape:**
```ts
{
  step: number       // display number
  title: string
  description: string
}
```

---

## FeaturesSection

Feature blocks with an image alongside. Use for showcasing specific capabilities or service types.

```vue
<FeaturesSection
  title="Section heading"
  :features="featureItems"
  image-url="/path/to/image.webp"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | yes | H2 heading |
| `:features` | `FeatureItem[]` | yes | |
| `image-url` | `string` | no | Optional image alongside features |

**FeatureItem shape:**
```ts
{
  title: string
  description: string
  icon?: string
}
```

---

## ChecklistSection

Two-column info layout. Use for comparison, "what's included", or side-by-side explanations.

```vue
<ChecklistSection
  bg="container-low"
  :columns="checklistColumns"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `bg` | `string` | no | Background variant token, e.g. `'container-low'` |
| `:columns` | `ChecklistColumn[]` | yes | Two columns of content |

**ChecklistColumn shape:**
```ts
{
  heading: string
  items: string[]    // checklist rows
}
```

---

## PricingSection

Pricing table with plans. Use whenever price keywords are present or user_intent is transactional.

```vue
<PricingSection
  title="Section heading"
  subtitle="Short description under the heading"
  :pricing-plans="pricingPlans"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | yes | H2 heading |
| `subtitle` | `string` | no | Subheading under the title |
| `:pricing-plans` | `PricingPlan[]` | yes | |

**PricingPlan shape:**
```ts
{
  name: string
  price: string          // e.g. "od 6 300 zł netto" — always include "od" and "netto"
  delivery?: string      // e.g. "od 7 dni roboczych"
  highlight?: boolean    // true = visually highlighted as recommended
  badge?: string         // e.g. "Najpopularniejszy"
  features: string[]     // list of includes
  cta: string            // button label
  ctaLink: string        // NuxtLink href
  note?: string          // e.g. "Stała cena — wycena przed startem projektu"
}
```

---

## FAQSection

Accordion FAQ. Always the last content section before CTASection.
Q&A text must match FAQPage schema exactly.

```vue
<FAQSection
  title="Section heading"
  :faqs="faqItems"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | yes | H2 heading |
| `:faqs` | `FaqItem[]` | yes | |

**FaqItem shape:**
```ts
{
  question: string   // matches question_targets from blueprint exactly
  answer: string     // complete answer, 1–3 sentences, no CTA
}
```

---

## RelatedServicesSection

Links to related pages. Use at the bottom to drive internal linking.

```vue
<RelatedServicesSection
  eyebrow="Category label"
  title="Section heading"
  :services="relatedItems"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `eyebrow` | `string` | no | Small label above the title |
| `title` | `string` | yes | H2 heading |
| `:services` | `RelatedService[]` | yes | |

**RelatedService shape:**
```ts
{
  title: string
  description: string
  link: string       // internal slug, use NuxtLink under the hood
  icon?: string
}
```

---

## CTASection

Full-width call to action. Always the last section on the page.

```vue
<CTASection
  title="CTA heading"
  description="Supporting sentence"
  primary-cta="Primary button label"
  secondary-cta="Secondary link label"
/>
```

**Props:**
| Prop | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | yes | |
| `description` | `string` | no | |
| `primary-cta` | `string` | yes | |
| `secondary-cta` | `string` | no | |

---

## Standard page section order

Every page follows this order. Skip sections that have no relevant content.

```
1. HeroSection          ← always first
2. IntroSection         ← first substantive H2 section
3. ServicesSection      ← what's included / service breakdown
4. BenefitsSection      ← why us / advantages
5. ProcessSection       ← how it works (skip if not relevant)
6. FeaturesSection      ← specific capabilities or types (optional)
7. ChecklistSection     ← comparison or side-by-side info (optional)
8. PricingSection       ← only when price trigger conditions are met
9. FeaturesSection      ← second use if needed (optional)
10. FAQSection          ← always present, always before CTASection
11. RelatedServicesSection ← internal links
12. CTASection          ← always last
```

---

## What does NOT exist in packages/ui

Do not use or reference these — they do not exist:
- `<HeaderSection>` — use `<HeroSection>`
- `<TableSection>` — use `<ChecklistSection>` or plain `<table>` with Tailwind
- `<CardGrid>` — use `<ServicesSection>`
- `<PriceCard>` — use `<PricingSection>`
- `<AccordionSection>` — use `<FAQSection>`
- Any component not listed above