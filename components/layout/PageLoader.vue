<template>
  <Transition name="loader-fade">
    <div v-if="show" class="loader-root" aria-hidden="true">

      <!-- Background blobs matching hero -->
      <div class="loader-blob loader-blob-1"></div>
      <div class="loader-blob loader-blob-2"></div>
      <div class="loader-blob loader-blob-3"></div>
      <div class="loader-grid"></div>

      <!-- Brand mark -->
      <div class="loader-content">
        <div class="loader-mark">
          <span>E</span>
        </div>
        <p class="loader-name">EvolaTec</p>
        <div class="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="loader-bar-track">
        <div class="loader-bar" :class="{ 'loader-bar-finish': finishing }"></div>
      </div>

    </div>
  </Transition>
</template>

<script setup lang="ts">
const show = ref(true)
const finishing = ref(false)

let hideTimer: ReturnType<typeof setTimeout>

function startLoading() {
  clearTimeout(hideTimer)
  finishing.value = false
  show.value = true
}

function stopLoading() {
  if (!show.value) return
  finishing.value = true
  clearTimeout(hideTimer)
  hideTimer = setTimeout(() => {
    show.value = false
    finishing.value = false
  }, 10)
}

// Dismiss on initial mount — page:finish does not fire for the first render
onMounted(() => nextTick(() => stopLoading()))

// Route changes
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', startLoading)
nuxtApp.hook('page:finish', stopLoading)

onUnmounted(() => clearTimeout(hideTimer))
</script>

<style scoped>
.loader-root {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1e1638;
  overflow: hidden;
}

/* Background blobs */
.loader-blob {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}
.loader-blob-1 {
  top: -30%; right: -20%;
  width: 70%; height: 70%;
  background: rgba(109, 70, 177, 0.45);
  filter: blur(120px);
}
.loader-blob-2 {
  bottom: -20%; left: -15%;
  width: 60%; height: 60%;
  background: rgba(109, 70, 177, 0.65);
  filter: blur(100px);
}
.loader-blob-3 {
  top: 20%; left: 30%;
  width: 35%; height: 35%;
  background: rgba(109, 70, 177, 0.35);
  filter: blur(80px);
}
.loader-grid {
  position: absolute;
  inset: 0;
  opacity: 0.07;
  background-image:
    linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px);
  background-size: 72px 72px;
}

/* Brand */
.loader-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.loader-mark {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: markPulse 1.6s ease-in-out infinite;
}
.loader-mark span {
  font-family: Inter, system-ui, sans-serif;
  font-size: 1.75rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.03em;
}

.loader-name {
  font-family: Inter, system-ui, sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin: 0;
}

/* Animated dots */
.loader-dots {
  display: flex;
  gap: 6px;
  margin-top: 4px;
}
.loader-dots span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255,255,255,0.35);
  animation: dotBounce 1.2s ease-in-out infinite;
}
.loader-dots span:nth-child(2) { animation-delay: 0.2s; }
.loader-dots span:nth-child(3) { animation-delay: 0.4s; }

/* Progress bar */
.loader-bar-track {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: rgba(255,255,255,0.08);
}
.loader-bar {
  height: 100%;
  background: linear-gradient(90deg, #6d46b1, #a78bfa);
  width: 0%;
  animation: progressFill 2.5s cubic-bezier(0.1, 0.4, 0.8, 1) forwards;
  box-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
}
.loader-bar-finish {
  animation: progressFinish 0.4s ease-out forwards;
}

/* Transition */
.loader-fade-enter-active {
  transition: opacity 0.1s ease;
}
.loader-fade-leave-active {
  transition: opacity 0.25s ease;
}
.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}

/* Keyframes */
@keyframes markPulse {
  0%, 100% { transform: scale(1);    opacity: 1; }
  50%       { transform: scale(0.93); opacity: 0.7; }
}
@keyframes dotBounce {
  0%, 80%, 100% { transform: translateY(0);    opacity: 0.35; }
  40%           { transform: translateY(-5px); opacity: 1; }
}
@keyframes progressFill {
  0%   { width: 0%; }
  60%  { width: 75%; }
  100% { width: 88%; }
}
@keyframes progressFinish {
  0%   { width: 88%; }
  100% { width: 100%; }
}
</style>
