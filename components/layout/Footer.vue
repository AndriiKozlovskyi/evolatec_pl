<template>
  <footer class="bg-surface-container-low border-t border-outline-variant/30 py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-stack-lg">

        <!-- Brand Section -->
        <div class="lg:col-span-4">
          <div class="flex flex-row items-center gap-2.5">
            <NuxtImg src="/logo.webp" alt="EvolaTec Logo" width="32" height="32" class="h-8 w-8" loading="lazy" />
            <span class="font-display text-headline-md font-bold tracking-tighter text-primary">EvolaTec</span>
          </div>

          <p class="text-on-surface-variant text-sm mt-4 max-w-xs">
            Strony internetowe, SEO i marketing — wszystko z jednej ręki.
          </p>

          <!-- Direct contact -->
          <div class="mt-6 flex flex-col gap-2.5">
            <a href="mailto:kontakt@evolatec.pl" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-base">mail</span>
              kontakt@evolatec.pl
            </a>
            <p class="inline-flex items-center gap-2 text-sm text-on-surface-variant">
              <span class="material-symbols-outlined text-base">location_on</span>
              Warszawa, Polska
            </p>
          </div>

          <!-- Social -->
          <div class="mt-5">
            <a
              href="https://www.linkedin.com/company/evolatec"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-white bg-[#0a66c2] hover:bg-[#004182] transition-colors duration-200"
              aria-label="EvolaTec na LinkedIn"
            >
              <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Link Columns -->
        <div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <!-- Service groups -->
          <nav
            v-for="group in serviceGroups"
            :key="group.title"
            class="flex flex-col gap-2"
            :aria-label="group.title"
          >
            <component
              :is="group.href ? 'a' : 'span'"
              :href="group.href || undefined"
              class="font-bold text-primary mb-2 text-sm"
              :class="group.href ? 'hover:text-primary/70 transition-colors' : ''"
            >{{ group.title }}</component>
            <a
              v-for="item in group.links"
              :key="item.href"
              :href="item.href"
              class="text-on-surface-variant hover:text-primary transition-colors text-sm leading-snug"
            >
              {{ item.label }}
            </a>
          </nav>

          <!-- Company -->
          <nav class="flex flex-col gap-2" aria-label="Firma">
            <span class="font-bold text-primary mb-2 text-sm">Firma</span>
            <a
              v-for="link in companyLinks"
              :key="link.href"
              :href="link.href"
              class="text-on-surface-variant hover:text-primary transition-colors text-sm leading-snug"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p class="text-xs text-on-surface-variant">
          © {{ currentYear }} EvolaTec. Digital Architecture & Engineering.
        </p>
        <div class="flex gap-4">
          <a
            v-for="legal in legalLinks"
            :key="legal.href"
            :href="legal.href"
            class="text-xs text-on-surface-variant hover:text-primary transition-colors"
          >
            {{ legal.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const serviceGroups = [
  {
    title: 'Strona WWW',
    href: '/strona-internetowa',
    links: [
      { label: 'Strona firmowa',   href: '/stworz-strone-firmowa' },
      { label: 'Landing Page',     href: '/landing-page' },
      { label: 'Sklep internetowy', href: '/sklep-internetowy' },
    ],
  },
  {
    title: 'SEO',
    href: '/seo',
    links: [
      { label: 'Optymalizacja SEO', href: '/optymalizacja-seo' },
      { label: 'Lokalne SEO',       href: '/lokalne-seo' },
      { label: 'Link Building',     href: '/link-building' },
      { label: 'Audyt SEO',         href: '/audyt-seo' },
      { label: 'Optymalizacja AI',  href: '/optymalizacja-ai' },
    ],
  },
  {
    title: 'Design & Treści',
    href: undefined,
    links: [
      { label: 'Projektowanie stron', href: '/projektowanie-stron' },
      { label: 'Copywriting',         href: '/copywriting' },
      { label: 'Branding',            href: '/branding' },
      { label: 'UI/UX Design',        href: '/ui-ux-design' },
    ],
  },
  {
    title: 'Marketing',
    href: '/marketing-online',
    links: [
      { label: 'Google Ads',  href: '/google-ads' },
      { label: 'Social Media', href: '/social-media' },
    ],
  },
];

const companyLinks = [
  { label: 'Blog',              href: '/blog' },
  { label: 'Kontakt',           href: '/kontakt' },
  { label: 'Kalkulator kosztów', href: '/kalkulator-kosztow' },
];

const legalLinks = [
  { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
];
</script>
