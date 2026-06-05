export function buildSchema(...entities: (object | null | undefined)[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': entities.filter(Boolean),
  }
}

export interface PageSchemaOptions {
  url: string
  name: string
  description: string
  lang?: string
  baseUrl?: string
}

export function pageSchema({ url, name, description, lang = 'de-DE', baseUrl = '' }: PageSchemaOptions) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: { '@id': `${baseUrl}/#organization` },
    inLanguage: lang,
  }
}

export interface OrganizationSchemaOptions {
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
  sameAs?: string[]
}

export function organizationSchema(opts: OrganizationSchemaOptions) {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${opts.baseUrl ?? opts.url}/#organization`,
    name: opts.name,
    url: opts.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${opts.baseUrl ?? opts.url}/#logo`,
      url: opts.logoUrl,
      contentUrl: opts.logoUrl,
    },
    image: { '@id': `${opts.baseUrl ?? opts.url}/#logo` },
    description: opts.description,
    address: { '@type': 'PostalAddress', ...opts.address },
    telephone: opts.telephone,
    email: opts.email,
    areaServed: { '@type': 'Country', name: opts.address.addressCountry === 'DE' ? 'Germany' : opts.address.addressCountry },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: opts.telephone,
      contactType: 'sales',
      email: opts.email,
    },
    ...(opts.foundingDate ? { foundingDate: opts.foundingDate } : {}),
    ...(opts.founderName ? { founder: { '@type': 'Person', name: opts.founderName } } : {}),
    ...(opts.sameAs?.length ? { sameAs: opts.sameAs } : {}),
  }
}

export function websiteSchema(opts: { name: string; url: string; description: string }) {
  return {
    '@type': 'WebSite',
    '@id': `${opts.url}/#website`,
    name: opts.name,
    url: opts.url,
    description: opts.description,
    publisher: { '@id': `${opts.url}/#organization` },
  }
}

export interface ServiceListItem { name: string; description: string; url: string; minPrice: string | number }

export function serviceListSchema(items: ServiceListItem[]) {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: item.name,
        description: item.description,
        url: item.url,
        offers: {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: String(item.minPrice), priceCurrency: 'EUR' },
        },
      },
    })),
  }
}
