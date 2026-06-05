<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <section class="border-brand-dark border-b bg-brand-dark pt-32 pb-16 md:pt-40 md:pb-24">
    <div class="container-wide px-6 md:px-10 lg:px-16">
      <p v-if="eyebrow" class="label-eyebrow mb-4">{{ eyebrow }}</p>
      <h1 class="heading-display text-balance max-w-3xl">{{ title }}</h1>
      <p v-if="description" class="text-brand-muted mt-6 max-w-2xl text-lg leading-relaxed">
        {{ description }}
      </p>
    </div>
  </section>
</template>
