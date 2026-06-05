<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline', 'ghost', 'whatsapp'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  href: { type: String, default: null },
  to: { type: [String, Object], default: null },
  block: { type: Boolean, default: false },
  external: { type: Boolean, default: false },
})

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold'

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-sm',
  }

  const variants = {
    primary:
      'bg-brand-gold text-brand-black hover:bg-brand-gold/90',
    outline:
      'border border-brand-gold/60 text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10',
    ghost: 'text-brand-white/80 hover:text-brand-gold',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20bd5a]',
  }

  return [
    base,
    sizes[props.size],
    variants[props.variant],
    props.block ? 'w-full' : '',
  ].join(' ')
})

const component = computed(() => {
  if (props.to) return 'RouterLink'
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="component"
    :class="classes"
    :href="href || undefined"
    :to="to || undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </component>
</template>
