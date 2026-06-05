export interface ServiceSchemaOptions {
  id: string
  name: string
  description: string
  url: string
  serviceType?: string
  minPrice?: string | number
  currency?: string
}

export function serviceSchema({ id, name, description, url, serviceType, minPrice, currency = 'EUR' }: ServiceSchemaOptions) {
  return {
    '@type': 'Service',
    '@id': id,
    name,
    description,
    url,
    ...(serviceType ? { serviceType } : {}),
    ...(minPrice !== undefined ? {
      offers: {
        '@type': 'Offer',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: String(minPrice), priceCurrency: currency },
      },
    } : {}),
  }
}

export interface BreadcrumbItem { name: string; url: string }

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  const lastUrl = items.at(-1)?.url ?? ''
  return {
    '@type': 'BreadcrumbList',
    '@id': `${lastUrl}#breadcrumb`,
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url })),
  }
}

export interface FAQ { question: string; answer: string }

export function faqSchema(faqs: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
