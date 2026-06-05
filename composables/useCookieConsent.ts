const CONSENT_VERSION = '1'

export interface ConsentChoices {
  analytics: boolean
  marketing: boolean
}

export interface StoredConsent {
  v: string
  ts: number
  necessary: true
  analytics: boolean
  marketing: boolean
}

export function useCookieConsent() {
  const stored = useCookie<StoredConsent | null>('evolatec-cookie-consent', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/',
  })

  const bannerHighlighted = useState('cookie-banner-hl', () => false)
  const forceShowBanner   = useState('cookie-force-show', () => false)

  const showBanner       = computed(() => stored.value === null || forceShowBanner.value)
  const hasConsented     = computed(() => stored.value !== null)
  const analyticsAllowed = computed(() => stored.value?.analytics === true)
  const marketingAllowed = computed(() => stored.value?.marketing === true)

  function save(choices: ConsentChoices) {
    stored.value = {
      v: CONSENT_VERSION,
      ts: Date.now(),
      necessary: true,
      analytics: choices.analytics,
      marketing: choices.marketing,
    }
    forceShowBanner.value = false
  }

  const acceptAll       = () => save({ analytics: true,  marketing: true  })
  const acceptNecessary = () => save({ analytics: false, marketing: false })
  const saveCustom      = (choices: ConsentChoices) => save(choices)
  const openPreferences = () => { forceShowBanner.value = true }

  function focusBanner() {
    if (!import.meta.client) return
    bannerHighlighted.value = true
    setTimeout(() => { bannerHighlighted.value = false }, 1600)
  }

  return {
    stored,
    showBanner,
    hasConsented,
    analyticsAllowed,
    marketingAllowed,
    bannerHighlighted,
    acceptAll,
    acceptNecessary,
    saveCustom,
    openPreferences,
    focusBanner,
  }
}
