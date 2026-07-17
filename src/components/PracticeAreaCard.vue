<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'document' },
})
</script>

<template>
  <article
    class="group relative flex h-full min-h-[320px] flex-col overflow-hidden border border-brand-dark/80 bg-gradient-to-br from-brand-surface via-brand-surface to-brand-dark/90 p-8 transition-all duration-500 md:min-h-[340px] md:p-10"
    :style="{ 'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)' }"
  >
    <!-- Background gradient effect -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/0 transition-all duration-500 group-hover:from-brand-gold/5 group-hover:via-brand-gold/3 group-hover:to-brand-gold/2"
    />
    
    <!-- Border gradient effect -->
    <div
      class="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-brand-gold/20"
      :style="{ 'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)' }"
    />
    
    <!-- Icon container with refined design -->
    <div
      class="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold/10 to-brand-gold/5"
    >
      <div
        class="absolute inset-0 rounded-full border border-brand-gold/20 transition-all duration-500 group-hover:border-brand-gold/40"
        :style="{ 'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)' }"
      />
      <svg
        class="h-6 w-6 text-brand-gold transition-transform duration-500 group-hover:scale-110"
        :style="{ 'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)' }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
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
    
    <!-- Content -->
    <div class="relative flex-1">
      <h3 class="font-serif text-2xl text-brand-white transition-colors duration-500 group-hover:text-brand-gold/90">
        {{ title }}
      </h3>
      <p class="text-brand-muted mt-4 text-sm leading-relaxed transition-colors duration-500 group-hover:text-brand-white/80">
        {{ description }}
      </p>
    </div>
    
    <!-- Subtle elevation effect -->
    <div
      class="absolute inset-0 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand-gold/5"
      :style="{
        'box-shadow': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
        'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)'
      }"
    />
  </article>
</template>
