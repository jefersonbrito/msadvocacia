<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { navigation, site } from '@/data/site'
import BaseButton from '@/components/BaseButton.vue'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="[
      isScrolled || isMenuOpen || route.name !== 'home'
        ? 'border-brand-dark/80 bg-brand-black/95 border-b backdrop-blur-md'
        : 'bg-transparent',
    ]"
  >
    <div class="container-wide flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
      <RouterLink
        :to="{ name: 'home' }"
        class="group flex items-center"
        @click="closeMenu"
      >
        <img
          src="/images/logos/logo.png"
          alt="MS Advocacia e Consultoria"
          class="h-8 transition-opacity group-hover:opacity-90 md:h-10"
        />
      </RouterLink>

      <nav class="hidden items-center gap-10 lg:flex" aria-label="Principal">
        <RouterLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="link-underline text-sm tracking-wide text-brand-white/80 transition-colors hover:text-brand-white"
          active-class="!text-brand-gold after:!w-full"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="hidden lg:block">
        <BaseButton :to="{ name: 'contato' }" variant="outline" size="sm">
          Fale conosco
        </BaseButton>
      </div>

      <button
        type="button"
        class="text-brand-white flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span
          class="block h-px w-6 bg-current transition-transform duration-300"
          :class="isMenuOpen ? 'translate-y-[5px] rotate-45' : ''"
        />
        <span
          class="block h-px w-6 bg-current transition-opacity duration-300"
          :class="isMenuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block h-px w-6 bg-current transition-transform duration-300"
          :class="isMenuOpen ? '-translate-y-[5px] -rotate-45' : ''"
        />
      </button>
    </div>

    <Transition name="menu">
      <div
        v-if="isMenuOpen"
        class="border-brand-dark bg-brand-black/98 border-t px-6 py-8 backdrop-blur-lg lg:hidden"
      >
        <nav class="flex flex-col gap-6" aria-label="Menu mobile">
          <RouterLink
            v-for="item in navigation"
            :key="item.label"
            :to="item.to"
            class="font-serif text-2xl text-brand-white/90"
            active-class="text-brand-gold"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
        <div class="mt-8">
          <BaseButton :to="{ name: 'contato' }" variant="primary" block @click="closeMenu">
            {{ site.tagline.split(' ').slice(0, 2).join(' ') }} — Contato
          </BaseButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.35s var(--ease-premium);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
