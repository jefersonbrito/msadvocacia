<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="section-padding bg-brand-dark" aria-labelledby="about-preview-title">
    <div class="container-wide">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <div
          class="border-brand-gold/20 relative aspect-[4/5] max-h-[560px] overflow-hidden border lg:max-h-none"
        >
          <div
            class="absolute inset-0 bg-[linear-gradient(135deg,_#1A1A1A_0%,_#0D0D0D_50%,_rgba(200,169,107,0.15)_100%)]"
          />
          <div class="absolute inset-0 flex items-end p-8 md:p-12">
            <p class="font-serif text-3xl leading-snug text-brand-white/90 italic md:text-4xl">
              &ldquo;Justiça com método, estratégia e discrição.&rdquo;
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            id="about-preview-title"
            eyebrow="Sobre nós"
            title="Tradição e inovação a serviço do seu negócio"
            description="O MS Advocacia e Consultoria nasceu da união de profissionais experientes em direito corporativo, com a missão de oferecer assessoria jurídica premium para empresas que não abrem mão de excelência."
          />
          <p class="text-brand-muted mt-6 leading-relaxed">
            Com sede em São Paulo e atuação nacional, combinamos rigor técnico, visão de negócio e
            proximidade com o cliente para entregar soluções que vão além do contencioso — priorizamos
            a prevenção e a construção de valor.
          </p>
          <BaseButton :to="{ name: 'sobre' }" variant="primary" class="mt-8">
            Nossa história
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
