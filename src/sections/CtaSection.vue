<script setup>
import { getWhatsAppUrl } from '@/data/site'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="section-padding relative overflow-hidden" aria-label="Chamada para ação">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,107,0.08)_0%,_transparent_70%)]"
    />
    <div class="container-narrow relative text-center">
      <p class="label-eyebrow mb-4">Fale conosco</p>
      <h2 class="heading-section text-balance">
        Pronto para elevar o padrão da sua assessoria jurídica?
      </h2>
      <p class="text-brand-muted mx-auto mt-5 max-w-lg text-base leading-relaxed">
        Agende uma conversa com nossa equipe. Atendimento personalizado, sigiloso e focado nas
        necessidades do seu negócio.
      </p>
      <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <BaseButton :href="getWhatsAppUrl()" external variant="whatsapp" size="lg">
          WhatsApp
        </BaseButton>
        <BaseButton :to="{ name: 'contato' }" variant="outline" size="lg">
          Formulário de contato
        </BaseButton>
      </div>
    </div>
  </section>
</template>
