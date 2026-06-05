<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'center'].includes(v),
  },
  light: { type: Boolean, default: false },
})
</script>

<template>
  <div
    :class="[
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : '',
    ]"
  >
    <p v-if="eyebrow" class="label-eyebrow mb-4">{{ eyebrow }}</p>
    <h2
      class="heading-section text-balance"
      :class="light ? 'text-brand-white' : 'text-brand-white'"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="text-brand-muted mt-5 text-base leading-relaxed md:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
