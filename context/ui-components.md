# UI Components — @evolatec/ui

Shared Nuxt layer from `../evolatec_de/packages/ui`. Auto-imported — no import statements needed.
Icons use **Material Symbols Outlined** (`font-variation-settings: 'FILL' 0`). Pass icon names as strings, e.g. `"rocket_launch"`.

---

## Table of Contents

- [Sections](#sections)
  - [HeroSection](#herosection)
  - [CTASection](#ctasection)
  - [FAQSection](#faqsection)
  - [ServicesSection](#servicessection)
  - [ProcessSection](#processsection)
  - [BenefitsSection](#benefitssection)
  - [IntroSection](#introsection)
  - [DarkCardsSection](#darkcardssection)
  - [FeaturesSection](#featuressection)
  - [PricingTableSection](#pricingtablesection)
  - [RelatedServicesSection](#relatedservicessection)
  - [ExpertiseCardsSection](#expertisecardssection)
  - [GradientLinksSection](#gradientlinkssection)
  - [TrustSection](#trustsection)
- [Cards](#cards)
  - [FeatureItem](#featureitem)
  - [StatCard](#statcard)
- [Buttons](#buttons)
  - [BaseButton](#basebutton)
- [Storyblok Components](#storyblok-components)
- [Schema Composables](#schema-composables)

---

## Sections

### HeroSection

Full-viewport dark hero with animated glow background, badge, H1 title, description, two CTAs, and a 4-stat row at the bottom.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `badge` | `string` | ✅ | — |
| `title` | `string` | ✅ | — |
| `description` | `string` | ✅ | — |
| `primaryCTA` | `string` | ✅ | — |
| `secondaryCTA` | `string` | ✅ | — |
| `primaryHref` | `string` | | `'/contact'` |
| `secondaryHref` | `string` | | `'/pricing'` |
| `stats` | `Array<{ value: string; label: string; icon: string }>` | ✅ | — |

**Notes**
- Background is hardcoded dark (`#1e1638`) with primary-colored radial blurs. Does not expose a background image prop.
- `stats` renders max 4 items comfortably (grid-cols-4 on sm+).
- Adds `data-nav-label="Start"` and `data-nav-icon="home"` — used by `SectionDotNav`.

**Usage**

```vue
<HeroSection
  badge="Agencja Digital dla Firm"
  title="Tworzymy strony internetowe, które pracują na Twój biznes"
  description="Nowoczesne strony firmowe, landing page i sklepy online — zoptymalizowane pod SEO i konwersję."
  primaryCTA="Bezpłatna konsultacja"
  secondaryCTA="Poznaj ceny"
  primaryHref="/kontakt"
  secondaryHref="/cennik"
  :stats="[
    { value: 'od 3 dni', label: 'Czas realizacji', icon: 'flash_on' },
    { value: '100%', label: 'SEO & GEO', icon: 'search_check' },
    { value: 'Wszystkie', label: 'Urządzenia', icon: 'smartphone' },
    { value: 'Stała cena', label: 'Bez ukrytych kosztów', icon: 'verified' },
  ]"
/>
```

---

### CTASection

Full-width gradient (primary) band with title, description, and two buttons. Use as the last section before the footer.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `description` | `string` | ✅ | — |
| `primaryCta` | `string` | ✅ | — |
| `secondaryCta` | `string` | ✅ | — |
| `primaryHref` | `string` | | `'/contact'` |
| `secondaryHref` | `string` | | `'/pricing'` |

**Notes**
- `primaryCta` uses `BaseButton variant="secondary"` (white button on colored background).
- `secondaryCta` uses `BaseButton variant="outline"` with white border.
- Adds `data-nav-label="CTA"` and `data-nav-icon="send"`.

**Usage**

```vue
<CTASection
  title="Gotowy na profesjonalną stronę?"
  description="Nowoczesna strona internetowa to inwestycja, która zwraca się przez lata."
  primary-cta="Zamów bezpłatną konsultację"
  secondary-cta="Omów projekt"
  primary-href="/kontakt"
  secondary-href="/kontakt"
/>
```

---

### FAQSection

Accordion FAQ built with native `<details>` elements. Supports `FAQPage` JSON-LD when combined with `faqSchema()`.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `faqs` | `Array<{ question: string; answer: string }>` | ✅ | — |

**Notes**
- Background: `bg-surface-container-low`.
- Max width `max-w-3xl` centered — good for 6–12 questions.
- Expand/collapse chevron animates 180° on open.
- Adds `data-nav-label="FAQ"` and `data-nav-icon="help"`.

**Usage**

```vue
<FAQSection
  title="Najczęściej zadawane pytania"
  :faqs="[
    {
      question: 'Ile kosztuje strona internetowa?',
      answer: 'Landing page od 500€, strona firmowa od 1500€, sklep online od 3000€. Każdy projekt wyceniamy indywidualnie.',
    },
    {
      question: 'Jak długo trwa realizacja strony?',
      answer: 'Landing page — od 3 dni roboczych. Strona firmowa — od 7 dni. Sklep online — od 14 dni.',
    },
  ]"
/>
```

---

### ServicesSection

Icon-card grid for listing services. Cards optionally link via `href`.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `subtitle` | `string` | | — |
| `variant` | `'default' \| 'centered'` | | `'default'` |
| `services` | `Service[]` | ✅ | — |
| `learnMoreLabel` | `string` | | `'Learn more'` |

**Service object**

```ts
{
  title: string
  description: string
  icon: string         // Material Symbol name
  iconBg: string       // Tailwind class — currently unused in template (icon bg is hardcoded bg-primary/80)
  iconColor: string    // Tailwind class — currently unused in template
  borderColor?: string // Tailwind class — currently unused in template
  href?: string        // If provided, card renders as <a>
}
```

**Notes**
- Grid: `md:grid-cols-2 lg:grid-cols-3`.
- Dark translucent card style (works on both light and dark backgrounds).
- "Learn more" arrow only shows when `href` is provided.
- `variant="centered"` centers icon and text — good for standalone services page.

**Usage**

```vue
<ServicesSection
  title="Nasze usługi"
  subtitle="Wszystko czego potrzebujesz do obecności w internecie"
  learn-more-label="Dowiedz się więcej"
  :services="[
    {
      title: 'Tworzenie stron internetowych',
      description: 'Nowoczesne strony firmowe, landing page i sklepy online.',
      icon: 'language',
      iconBg: '',
      iconColor: '',
      href: '/strony-internetowe',
    },
    {
      title: 'SEO',
      description: 'Więcej klientów z wyszukiwarki Google.',
      icon: 'search_insights',
      iconBg: '',
      iconColor: '',
      href: '/seo',
    },
  ]"
/>
```

---

### ProcessSection

Step-by-step process timeline with ghost number backgrounds and alternating accent colors (sky → emerald → violet → amber → rose). Max 5 steps.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `eyebrow` | `string` | | — |
| `steps` | `Array<{ icon: string; title: string; description: string }>` | ✅ | — |

**Notes**
- Background: `bg-surface-container-low`.
- Steps laid out horizontally on `lg`, vertically stacked on mobile.
- Each step gets an animated stagger (`animationDelay: index * 70ms`).
- Accent colors cycle automatically; you can't override per-step.
- Adds `data-nav-label="Process"` and `data-nav-icon="route"`.

**Usage**

```vue
<ProcessSection
  eyebrow="Jak pracujemy"
  title="Twoja strona w 4 krokach"
  :steps="[
    { icon: 'mail',           title: 'Bezpłatna konsultacja', description: 'Omawiamy Twoje cele i budżet.' },
    { icon: 'design_services',title: 'Projekt i design',      description: 'Planujemy strukturę i tworzymy unikalny design.' },
    { icon: 'code',           title: 'Realizacja i SEO',      description: 'Kodujemy stronę z pełną optymalizacją SEO.' },
    { icon: 'rocket_launch',  title: 'Uruchomienie',          description: 'Testujemy na wszystkich urządzeniach i wdrażamy.' },
  ]"
/>
```

---

### BenefitsSection

Benefit cards in a grid. Two modes controlled automatically by whether items have `image` property:

- **With images**: overlapping photo cards with gradient overlay (`h-72`, `grid-cols-4` for 4 items, `grid-cols-3` otherwise).
- **Without images**: icon + text cards with glass effect.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `benefits` | `Array<{ icon: string; title: string; description: string; image?: string }>` | ✅ | — |

**Notes**
- Background: `bg-white`.
- Grid columns: `md:grid-cols-2 lg:grid-cols-4` for 4 items; `md:grid-cols-3` otherwise.
- Image path is passed to `<NuxtPicture>` — use `/public/` relative paths.

**Usage (icon mode)**

```vue
<BenefitsSection
  title="Dlaczego warto nam zaufać"
  :benefits="[
    { icon: 'bolt',           title: 'Szybkie strony',    description: 'Lighthouse score 95–100. Czas ładowania poniżej 1 sekundy.' },
    { icon: 'search_insights',title: 'SEO w standardzie', description: 'Każda strona wychodzi zoptymalizowana pod Google.' },
    { icon: 'design_services',title: 'Unikalny design',   description: 'Żadnych szablonów. Każdy projekt tworzony od podstaw.' },
    { icon: 'verified',       title: 'Stała cena',        description: 'Wycena przed startem projektu — bez ukrytych kosztów.' },
  ]"
/>
```

---

### IntroSection

Two-column section: image (with optional floating badge) on the left, heading + paragraphs on the right. Optional USP card row below.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `heading` | `string` | ✅ | — |
| `paragraphs` | `string[]` | ✅ | — |
| `image` | `string` | ✅ | — |
| `imageAlt` | `string` | | — |
| `badge` | `{ icon: string; title: string; subtitle: string; iconBg?: string }` | | — |
| `usps` | `USP[]` | | — |

**USP object**

```ts
{
  title: string
  description: string
  icon: string
  iconBg: string      // e.g. 'bg-primary/10'
  iconColor: string   // e.g. 'text-primary'
  borderColor: string // top border — e.g. 'border-primary/30'
}
```

**Notes**
- `paragraphs` supports `v-html` — safe to include `<strong>` or `<a>` inline.
- `badge` floats over the bottom-left of the image.
- USPs render in `md:grid-cols-3` below the two-column row.
- Uses `<NuxtPicture>` — image must be in `/public/`.

**Usage**

```vue
<IntroSection
  heading="Agencja digital z Polski dla polskich firm"
  :paragraphs="[
    'EvolaTec tworzy nowoczesne strony internetowe dla firm i startupów.',
    'Specjalizujemy się w szybkich, zoptymalizowanych stronach z <strong>pełnym SEO</strong>.',
  ]"
  image="/about/team.webp"
  image-alt="Zespół EvolaTec"
  :badge="{ icon: 'verified', title: 'Certyfikowany partner', subtitle: 'Google Ads & SEO' }"
  :usps="[
    { title: 'Szybkość',  description: 'Poniżej 1s na mobile.', icon: 'bolt',     iconBg: 'bg-sky-50',    iconColor: 'text-sky-500',    borderColor: 'border-sky-300' },
    { title: 'SEO',       description: 'Widoczność w Google.',  icon: 'search',   iconBg: 'bg-violet-50', iconColor: 'text-violet-500', borderColor: 'border-violet-300' },
    { title: 'Design',    description: 'Unikalny UI/UX.',       icon: 'brush',    iconBg: 'bg-amber-50',  iconColor: 'text-amber-500',  borderColor: 'border-amber-300' },
  ]"
/>
```

---

### DarkCardsSection

Icon cards on a gradient primary background. Good for features, benefits, or sub-services inside a service page.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `cards` | `Array<{ title: string; description: string; icon: string; href?: string }>` | ✅ | — |
| `columns` | `2 \| 3 \| 4` | | `4` |

**Notes**
- Background: `bg-gradient-to-br from-primary/90 via-primary to-primary/90`.
- Cards optionally render as `<a>` when `href` is provided.
- Adds `data-nav-icon="dashboard"`.

**Usage**

```vue
<DarkCardsSection
  title="Co zawiera każda strona internetowa"
  :columns="4"
  :cards="[
    { icon: 'phone_iphone',    title: 'Responsywność',   description: 'Działa perfekcyjnie na każdym urządzeniu.' },
    { icon: 'search_insights', title: 'SEO on-page',     description: 'Meta tagi, nagłówki i struktura zoptymalizowane pod Google.' },
    { icon: 'speed',           title: 'Wysoka wydajność',description: 'Core Web Vitals w zielonej strefie.' },
    { icon: 'lock',            title: 'SSL & Bezpieczeństwo', description: 'Certyfikat SSL i bezpieczna architektura.' },
  ]"
/>
```

---

### FeaturesSection

Two-column layout: feature list with icons on the left (on `bg-primary`), image on the right.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `features` | `Array<{ icon: string; title: string; description: string }>` | ✅ | — |
| `imageUrl` | `string` | ✅ | — |
| `imageAlt` | `string` | | `''` |

**Notes**
- Background: `bg-primary` with white text. Features rendered via `<FeatureItem>`.
- Image uses `<NuxtPicture>` with absolute fill — must be in `/public/`.
- Adds `data-nav-icon="auto_awesome"`.

**Usage**

```vue
<FeaturesSection
  title="Dlaczego nasze strony działają lepiej"
  image-url="/web/features.webp"
  image-alt="Przykład strony EvolaTec"
  :features="[
    { icon: 'bolt',     title: 'Ładowanie < 1s',   description: 'Budowane w Nuxt.js — statyczne generowanie i SSR.' },
    { icon: 'schema',   title: 'Dane strukturalne', description: 'Schema.org dla SEO i widoczności w AI.' },
    { icon: 'devices',  title: 'Mobile-first',      description: 'Projektujemy zaczynając od ekranu telefonu.' },
  ]"
/>
```

---

### PricingTableSection

Simple two-column pricing table (service name + price). Optional CTA button below.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `description` | `string` | | — |
| `serviceLabel` | `string` | | `'Service'` |
| `priceLabel` | `string` | | `'Price'` |
| `ctaLabel` | `string` | | — |
| `ctaHref` | `string` | | — |
| `items` | `Array<{ name: string; price: string }>` | ✅ | — |

**Notes**
- Max width `max-w-2xl` centered.
- CTA button only renders if both `ctaLabel` and `ctaHref` are provided.
- Use for a single service category (e.g., SEO prices). For multi-category pricing, build a custom section.

**Usage**

```vue
<PricingTableSection
  title="Cennik SEO"
  description="Transparentne ceny bez ukrytych kosztów."
  service-label="Usługa"
  price-label="Cena"
  cta-label="Zapytaj o wycenę"
  cta-href="/kontakt"
  :items="[
    { name: 'Audyt SEO',        price: '100€' },
    { name: 'Optymalizacja SEO', price: 'od 300€/mies.' },
    { name: 'Lokalne SEO',      price: '400€' },
    { name: 'Linkbuilding',     price: '100€' },
  ]"
/>
```

---

### RelatedServicesSection

Card grid for cross-linking related services. Shows icon, title, short description, price, and a "learn more" link.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `eyebrow` | `string` | | `'Related services'` |
| `title` | `string` | | `'You might also be interested in'` |
| `cta` | `string` | | `'Learn more'` |
| `services` | `Array<{ icon: string; title: string; description: string; price: string; href: string }>` | ✅ | — |

**Notes**
- Background: `bg-surface-container-low` with top border.
- Grid: `sm:grid-cols-2 lg:grid-cols-3`.
- `href` is always required (cards are always links).

**Usage**

```vue
<RelatedServicesSection
  eyebrow="Powiązane usługi"
  title="Może Cię zainteresować"
  cta="Dowiedz się więcej"
  :services="[
    { icon: 'search_insights', title: 'SEO',          description: 'Więcej klientów z Google.',    price: 'od 300€/mies.', href: '/seo' },
    { icon: 'trending_up',     title: 'Google Ads',   description: 'Szybkie efekty z reklam.',     price: 'od 400€/mies.', href: '/google-ads' },
    { icon: 'brush',           title: 'Logo Design',  description: 'Profesjonalne logo dla firmy.', price: 'od 200€',      href: '/logo-design' },
  ]"
/>
```

---

### ExpertiseCardsSection

Two-column cards with thick top gradient accent line, icon, title, multiple paragraphs, and optional tag pills. Good for service detail pages.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `eyebrow` | `string` | | — |
| `eyebrowIcon` | `string` | | — |
| `title` | `string` | | — |
| `blocks` | `Array<{ icon: string; title: string; paragraphs: string[]; tags?: string[] }>` | ✅ | — |

**Notes**
- Background: `bg-surface-container-low`.
- Always 2 columns on `lg`. Renders 2 or 4 items best.
- Tags are rendered as primary-tinted pill badges.
- Adds `data-nav-icon="verified"`.

**Usage**

```vue
<ExpertiseCardsSection
  eyebrow-icon="code"
  eyebrow="Nasza specjalizacja"
  title="Technologie, których używamy"
  :blocks="[
    {
      icon: 'code_blocks',
      title: 'Nowoczesny frontend',
      paragraphs: [
        'Budujemy strony w Vue.js i Nuxt — szybkie, skalowalne i łatwe w utrzymaniu.',
        'Tailwind CSS zapewnia spójny design bez zbędnego CSS.',
      ],
      tags: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'TypeScript'],
    },
    {
      icon: 'search_insights',
      title: 'SEO i GEO od podstaw',
      paragraphs: [
        'Techniczne SEO jest wbudowane w każdy projekt — nie doklejane na końcu.',
        'Schema.org i GEO-markup sprawiają, że Twoja firma pojawia się w odpowiedziach AI.',
      ],
      tags: ['Schema.org', 'Core Web Vitals', 'GEO'],
    },
  ]"
/>
```

---

### GradientLinksSection

Navigation cards on a gradient background. Uses `<NuxtLink>` — `to` must be an internal route.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | ✅ | — |
| `eyebrow` | `string` | | — |
| `eyebrowIcon` | `string` | | — |
| `description` | `string` | | — |
| `learnMoreLabel` | `string` | | `'Learn more'` |
| `cards` | `Array<{ to: string; icon: string; title: string; description: string }>` | ✅ | — |

**Notes**
- Background: `bg-gradient-to-br from-primary via-primary-container to-primary-container`.
- Grid: `md:grid-cols-2 xl:grid-cols-4`.
- `to` is an internal Nuxt route — use `/uslugi` not `https://...`.
- Adds `data-nav-icon="hub"`.

**Usage**

```vue
<GradientLinksSection
  eyebrow-icon="apps"
  eyebrow="Wszystkie usługi"
  title="Co możemy dla Ciebie zrobić"
  description="Kompleksowe rozwiązania digital dla firm."
  learn-more-label="Dowiedz się więcej"
  :cards="[
    { to: '/strony-internetowe', icon: 'language',       title: 'Strony internetowe', description: 'Landing page, strony firmowe, sklepy.' },
    { to: '/seo',                icon: 'search_insights', title: 'SEO',                description: 'Widoczność w Google i AI.' },
    { to: '/google-ads',         icon: 'trending_up',    title: 'Google Ads',          description: 'Kampanie reklamowe.' },
    { to: '/design',             icon: 'brush',          title: 'Design',              description: 'Logo, branding, UI/UX.' },
  ]"
/>
```

---

### TrustSection

Minimal horizontal bar of company/client names. Grayscale text — no logos, no images.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `companies` | `string[]` | ✅ | — |

**Notes**
- Background: `bg-surface-container-low` with bottom border.
- Adds `data-nav-icon="verified"`.
- Pass actual client/partner names. If you have no clients yet, omit this section.

**Usage**

```vue
<TrustSection :companies="['Klient A', 'Klient B', 'Klient C', 'Partner D']" />
```

---

## Cards

### FeatureItem

Single feature row with icon + title + description. Used inside `FeaturesSection` but can be composed inline.

**Props**

| Prop | Type | Required |
|---|---|---|
| `icon` | `string` | ✅ |
| `title` | `string` | ✅ |
| `description` | `string` | ✅ |

**Notes**
- Styled for use on `bg-primary` background (uses `text-on-primary-container`).
- Icon is 32px Material Symbol.

**Usage**

```vue
<FeatureItem
  icon="bolt"
  title="Szybkie ładowanie"
  description="Czas ładowania poniżej 1 sekundy na każdym urządzeniu."
/>
```

---

### StatCard

Large icon + value + label card. Styled for use on dark/primary backgrounds (white text). Used inside `HeroSection` stats row but can be used standalone.

**Props**

| Prop | Type | Required |
|---|---|---|
| `value` | `string` | ✅ |
| `label` | `string` | ✅ |
| `icon` | `string` | ✅ |

**Notes**
- Icon is very large (`text-[6rem]`). Use for stats sections on primary-colored backgrounds.
- Hover triggers scale + underline animation.

**Usage**

```vue
<StatCard value="50+" label="Zadowolonych klientów" icon="people" />
```

---

## Buttons

### BaseButton

The only button primitive in the layer. All other CTAs in section components are built from this.

**Props**

| Prop | Type | Required | Default |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | | `'md'` |

**Notes**
- Passes `$attrs` — add `type`, `disabled`, `class`, `@click`, etc. directly.
- `variant="secondary"` is a white button — use on colored backgrounds (`CTASection`, `HeroSection`).
- `variant="outline"` is borderless with current color — usually needs `!border-white/30 !text-white` overrides on dark sections (see `HeroSection` usage).
- Min height: sm=40px, md=48px, lg=56px (touch-friendly).

**Sizes**

| Size | Min height | Padding |
|---|---|---|
| `sm` | 40px | px-5 py-2 text-sm |
| `md` | 48px | px-7 py-3 text-base |
| `lg` | 56px | px-9 py-4 text-lg |

**Usage**

```vue
<!-- Standard CTA -->
<a href="/kontakt">
  <BaseButton variant="primary" size="lg">Zamów bezpłatną konsultację</BaseButton>
</a>

<!-- White button on primary background -->
<BaseButton variant="secondary" size="md">Poznaj ceny</BaseButton>

<!-- Outline on dark bg (override border/text color) -->
<BaseButton variant="outline" size="md" class="!border-white/30 !text-white hover:!bg-white/10">
  Dowiedz się więcej
</BaseButton>
```

---

## Storyblok Components

Registered globally (auto-imported in Storyblok templates). All receive a `blok` prop — the Storyblok block object.

### Page
Wraps a Storyblok `page` content type. Iterates `blok.body` and renders nested components.

### Grid
Three-column grid renderer for Storyblok `grid` blocks. Iterates `blok.columns`.

### Teaser
Renders `blok.headline` and `blok.description` in a styled container.

### Feature
Single feature card with star icon and `blok.name` as title. Used inside `Grid`.

### Article
Full article page layout: hero image, author, read time, `blok.content` (rich text), and structured data (`Article` JSON-LD).

### ArticleCard
Article preview card with `NuxtLink`. Props: `article`, `slug`, `lang?`, `date?`.

### AllArticles
Blog index section. Fetches articles from Storyblok API, renders featured article + card grid + "view all" link. Receives `blok.headline`.

---

## Schema Composables

Located in `composables/schema/`. Auto-imported by Nuxt.

### `global.ts`

#### `buildSchema(...entities)`
Wraps entities in `{ '@context': 'https://schema.org', '@graph': [...] }`. Pass all schema objects as arguments.

```ts
const schema = buildSchema(organizationSchema(opts), websiteSchema(opts), pageSchema(opts))
useHead({ script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
```

#### `organizationSchema(opts)`
Generates `Organization + ProfessionalService` node.

```ts
interface OrganizationSchemaOptions {
  name: string
  url: string
  baseUrl?: string
  description: string
  logoUrl: string
  address: { streetAddress: string; addressLocality: string; postalCode: string; addressCountry: string }
  telephone: string
  email: string
  foundingDate?: string
  founderName?: string
  sameAs?: string[]  // social profile URLs
}
```

#### `websiteSchema(opts)`
Generates `WebSite` node with `publisher` reference to organization.

```ts
websiteSchema({ name: string; url: string; description: string })
```

#### `pageSchema(opts)`
Generates `WebPage` node.

```ts
interface PageSchemaOptions {
  url: string
  name: string
  description: string
  lang?: string    // default: 'de-DE' — override to 'pl-PL' for Poland
  baseUrl?: string
}
```

#### `serviceListSchema(items)`
Generates `ItemList` of `Service` nodes with price.

```ts
interface ServiceListItem {
  name: string
  description: string
  url: string
  minPrice: string | number
}
```

---

### `service.ts`

#### `serviceSchema(opts)`
Single `Service` node with optional `Offer/PriceSpecification`.

```ts
interface ServiceSchemaOptions {
  id: string        // full URL + fragment, e.g. 'https://evolatec.pl/strony-internetowe#service'
  name: string
  description: string
  url: string
  serviceType?: string
  minPrice?: string | number
  currency?: string  // default: 'EUR'
}
```

#### `breadcrumbSchema(items)`
Generates `BreadcrumbList`.

```ts
breadcrumbSchema([
  { name: 'Strona główna', url: 'https://evolatec.pl' },
  { name: 'Strony internetowe', url: 'https://evolatec.pl/strony-internetowe' },
])
```

#### `faqSchema(faqs)`
Generates `FAQPage` node. Pass the same array to both `FAQSection` and `faqSchema()`.

```ts
const faqs = [
  { question: 'Ile kosztuje strona?', answer: 'Od 500€.' },
]

// In useHead:
faqSchema(faqs)  // → FAQPage JSON-LD

// In template:
<FAQSection title="FAQ" :faqs="faqs" />
```

---

## Tailwind Design Tokens

Defined in `../evolatec_de/packages/ui/tailwind.config.ts`. Available in any component via standard Tailwind classes.

### Colors

| Token | Hex | Use |
|---|---|---|
| `primary` | `#6d46b1` | Brand violet — buttons, headings, accents |
| `on-primary` | `#ffffff` | Text on primary background |
| `primary-container` | `#5b21b6` | Darker primary for gradients |
| `surface` | `#faf9ff` | Page background |
| `surface-container-low` | `#f3f0fa` | Section alternating background |
| `on-surface` | `#1c1b25` | Body text |
| `on-surface-variant` | `#48444f` | Secondary text |
| `outline-variant` | `#cac4d6` | Borders |

### Spacing

| Token | Value | Use |
|---|---|---|
| `container-max` | `80rem` | `max-w-container-max` — page max width |
| `gutter` | `2rem` | `px-gutter` — horizontal padding |
| `section-padding` | `clamp(2.5rem, 6vw+1rem, 8rem)` | `py-section-padding` — vertical section spacing |
| `stack-sm` | `1rem` | Tight spacing between elements |
| `stack-md` | `2rem` | Medium spacing |
| `stack-lg` | `4rem` | Large spacing between blocks |

### Typography

| Class | Size | Weight | Notes |
|---|---|---|---|
| `text-body-md` | 0.875rem | 400 | Default body |
| `text-body-lg` | 1.125rem | 400 | Large body |
| `text-label-md` | 10px | 700 | All-caps label / eyebrow |
| `text-nav-link` | 0.875rem | 500 | Navigation |
| `text-headline-md` | 1.25rem | 700 | Card titles |
| `text-headline-lg` | 2.25rem | 600 | Section headings |
| `text-display` | 4.5rem | 700 | Hero H1 |
