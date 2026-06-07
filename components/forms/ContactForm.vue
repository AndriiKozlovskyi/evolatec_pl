<template>
  <form
    @submit.prevent="handleSubmit"
    name="contact-form"
    data-netlify="true"
    netlify
    data-netlify-honeypot="bot-field"
    method="POST"
    class="space-y-4"
    novalidate
  >
    <input type="hidden" name="form-name" value="contact-form" />

    <!-- Imię + Email side by side on sm+ -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="name" class="block text-sm font-bold text-on-surface mb-1.5">Imię i nazwisko *</label>
        <input
          id="name"
          name="name"
          v-model="form.name"
          type="text"
          required
          autocomplete="name"
          placeholder="Twoje imię i nazwisko"
          :class="inputClass('name')"
          @input="clearError('name')"
        />
        <p v-if="fieldErrors.name" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
          <span class="material-symbols-outlined text-sm leading-none">error</span>
          {{ fieldErrors.name }}
        </p>
      </div>

      <div>
        <label for="email" class="block text-sm font-bold text-on-surface mb-1.5">E-Mail *</label>
        <input
          id="email"
          name="email"
          v-model="form.email"
          type="email"
          required
          autocomplete="email"
          inputmode="email"
          placeholder="twoj.email@przyklad.pl"
          :class="inputClass('email')"
          @input="clearError('email')"
        />
        <p v-if="fieldErrors.email" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
          <span class="material-symbols-outlined text-sm leading-none">error</span>
          {{ fieldErrors.email }}
        </p>
      </div>
    </div>

    <!-- Wybór usługi -->
    <div>
      <label for="service" class="block text-sm font-bold text-on-surface mb-1.5">Co Cię interesuje? *</label>
      <select
        id="service"
        name="service"
        v-model="form.service"
        required
        :class="[inputClass('service'), 'bg-white']"
        @change="clearError('service')"
      >
        <option value="">-- Wybierz --</option>
        <option value="landing-page">Landing page</option>
        <option value="strona-internetowa">Strona internetowa</option>
        <option value="sklep-internetowy">Sklep internetowy</option>
        <option value="seo">Pozycjonowanie SEO</option>
        <option value="google-ads">Google Ads</option>
        <option value="konsultacja">Bezpłatna konsultacja</option>
      </select>
      <p v-if="fieldErrors.service" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
        <span class="material-symbols-outlined text-sm leading-none">error</span>
        {{ fieldErrors.service }}
      </p>
    </div>

    <!-- Wiadomość (opcjonalna) -->
    <div>
      <label for="message" class="block text-sm font-bold text-on-surface mb-1.5">
        Wiadomość <span class="font-normal text-on-surface-variant">(opcjonalnie)</span>
      </label>
      <textarea
        id="message"
        name="message"
        v-model="form.message"
        placeholder="Opisz krótko swój projekt..."
        rows="4"
        class="w-full px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant resize-none text-base"
      ></textarea>
    </div>

    <!-- Honeypot -->
    <div class="hidden" aria-hidden="true">
      <label for="bot-field">Do not fill</label>
      <input id="bot-field" name="bot-field" v-model="form.botField" type="text" tabindex="-1" autocomplete="off" />
    </div>

    <!-- Zgoda na politykę prywatności -->
    <div>
      <div class="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          v-model="form.privacy"
          type="checkbox"
          required
          :class="[
            'w-5 h-5 rounded text-primary focus:ring-primary mt-0.5 cursor-pointer flex-shrink-0',
            fieldErrors.privacy ? 'border-2 border-red-400' : 'border-surface-container-high',
          ]"
          @change="clearError('privacy')"
        />
        <label for="privacy" class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Akceptuję
          <a href="/polityka-prywatnosci" class="text-primary font-semibold hover:underline">Politykę prywatności</a>. *
        </label>
      </div>
      <p v-if="fieldErrors.privacy" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
        <span class="material-symbols-outlined text-sm leading-none">error</span>
        {{ fieldErrors.privacy }}
      </p>
    </div>

    <!-- Cookie consent notice -->
    <div
      v-if="!hasConsented"
      class="flex items-start gap-2.5 p-3.5 rounded-xl bg-primary/5 border border-primary/15 cursor-pointer"
      @click="focusBanner"
    >
      <span class="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">cookie</span>
      <p class="text-xs text-on-surface-variant leading-relaxed">
        Najpierw ustaw swoje
        <button type="button" @click.stop="focusBanner" class="text-primary font-semibold underline underline-offset-2">ustawienia plików cookie</button>,
        aby wysłać formularz.
      </p>
    </div>

    <BaseButton
      v-else
      variant="primary"
      size="md"
      class="w-full"
      type="submit"
      :disabled="isSubmitting || !isFormFillable"
    >
      {{ isSubmitting ? 'Wysyłanie…' : 'Wyślij zapytanie' }}
    </BaseButton>

    <!-- Sukces -->
    <div
      v-if="submitSuccess"
      role="status"
      class="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-start gap-2 text-sm"
    >
      <span class="material-symbols-outlined text-lg flex-shrink-0">check_circle</span>
      <span>Dziękujemy! Odpowiemy w ciągu 24 godzin.</span>
    </div>

    <!-- Błąd -->
    <div
      v-if="submitError"
      role="alert"
      class="p-3 bg-error/10 border border-error/30 rounded-lg text-error flex items-start gap-2 text-sm"
    >
      <span class="material-symbols-outlined text-lg flex-shrink-0">error</span>
      <span>{{ errorMessage }}</span>
    </div>
  </form>
</template>

<script setup lang="ts">
const { hasConsented, focusBanner } = useCookieConsent()

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const BASE_INPUT = 'w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant text-base'

const form = ref({
  name: '',
  email: '',
  service: '',
  message: '',
  privacy: false,
  botField: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)
const errorMessage = ref('')
const fieldErrors = ref<Record<string, string>>({})

const isFormFillable = computed(() =>
  form.value.name.trim() !== '' &&
  form.value.email.trim() !== '' &&
  form.value.service !== '' &&
  form.value.privacy
)

function inputClass(field: string): string {
  return `${BASE_INPUT} ${fieldErrors.value[field] ? 'border-red-400 focus:ring-red-400' : 'border-surface-container-high focus:ring-primary'}`
}

function clearError(field: string) {
  if (fieldErrors.value[field]) {
    const { [field]: _, ...rest } = fieldErrors.value
    fieldErrors.value = rest
  }
}

function validate(): boolean {
  const errors: Record<string, string> = {}

  if (!form.value.name.trim()) {
    errors.name = 'Proszę podać imię i nazwisko.'
  } else if (form.value.name.trim().length < 2) {
    errors.name = 'Imię musi mieć co najmniej 2 znaki.'
  }

  if (!form.value.email.trim()) {
    errors.email = 'Proszę podać adres e-mail.'
  } else if (!EMAIL_RE.test(form.value.email.trim())) {
    errors.email = 'Proszę podać prawidłowy adres e-mail.'
  }

  if (!form.value.service) {
    errors.service = 'Proszę wybrać temat.'
  }

  if (!form.value.privacy) {
    errors.privacy = 'Proszę zaakceptować politykę prywatności.'
  }

  fieldErrors.value = errors
  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  if (form.value.botField) return
  if (!validate()) return

  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false
  errorMessage.value = ''

  try {
    const body = new URLSearchParams({
      'form-name': 'contact-form',
      'bot-field': form.value.botField,
      name: form.value.name,
      email: form.value.email,
      service: form.value.service,
      message: form.value.message,
      privacy: String(form.value.privacy),
    })

    await $fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })

    submitSuccess.value = true
    form.value = { name: '', email: '', service: '', message: '', privacy: false, botField: '' }
    fieldErrors.value = {}
    setTimeout(() => { submitSuccess.value = false }, 6000)
  } catch {
    submitError.value = true
    errorMessage.value = 'Coś poszło nie tak. Spróbuj ponownie lub napisz do nas bezpośrednio.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
