<script setup>
import { partners } from '@/data/site'
import SectionHeading from '@/components/SectionHeading.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="section-padding bg-brand-surface" aria-labelledby="partners-preview-title">
    <div class="container-wide">
      <SectionHeading
        id="partners-preview-title"
        eyebrow="Parceiros"
        title="Rede de especialistas de confiança"
        description="Trabalhamos com parceiros jurídicos e consultores de referência para ampliar nossa capacidade de entrega em demandas nacionais e internacionais."
        align="center"
        class="mb-14"
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="border-brand-dark/60 bg-brand-dark flex flex-col items-center border p-8 text-center transition-colors duration-300 hover:border-brand-gold/30"
        >
          <div
            class="border-brand-gold/20 text-brand-gold mb-4 flex h-16 w-16 items-center justify-center border font-serif text-xl"
          >
            {{ partner.name.charAt(0) }}
          </div>
          <h3 class="font-serif text-lg text-brand-white">{{ partner.name }}</h3>
          <p class="text-brand-muted mt-2 text-xs leading-relaxed">{{ partner.role }}</p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <BaseButton :to="{ name: 'parceiros' }" variant="ghost">
          Conhecer parceiros →
        </BaseButton>
      </div>
    </div>
  </section>
</template>
