<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'document' },
})
</script>

<template>
  <article
    class="group border-brand-dark/80 bg-brand-surface hover:border-brand-gold/30 relative overflow-hidden border p-8 transition-all duration-500 md:p-10"
  >
    <div
      class="bg-brand-gold/5 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
    />
    <div
      class="border-brand-gold/30 text-brand-gold mb-6 flex h-12 w-12 items-center justify-center border"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path
          v-if="icon === 'building'"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"
        />
        <path
          v-else-if="icon === 'scale'"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v18M3 9h18M6 15l6 6 6-6"
        />
        <path
          v-else-if="icon === 'users'"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        />
        <path
          v-else-if="icon === 'shield'"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6M14 2v6h6M16 13H8M16 17H8M10 9H8"
        />
      </svg>
    </div>
    <h3 class="font-serif text-2xl text-brand-white">{{ title }}</h3>
    <p class="text-brand-muted mt-4 text-sm leading-relaxed">{{ description }}</p>
  </article>
</template>
