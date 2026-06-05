export const CONTACT = {
  email:    'team@evolatec.pl',
  phone:    '+48 789 711 631',
  phoneTel: 'tel:+48789711631',
  whatsapp: 'https://wa.me/48789711631',
  linkedin:       'https://www.linkedin.com/company/evolatec',
  googleBusiness: 'https://share.google/5wP6pXAHrJEr07jXl',
  city:           'Wrocław, Polska',
} as const

export function useContact() {
  return CONTACT
}
