<script setup>
import { site, getWhatsAppUrl } from '@/data/site'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section
    class="relative min-h-screen overflow-hidden"
    aria-label="Banner principal com a Dra. Marília, advogada fundadora do escritório MS Advocacia e Consultoria"
  >
    <div class="flex min-h-screen flex-col lg:flex-row">
      <!-- Coluna da Fotografia (40-45%) -->
      <div class="relative order-2 lg:order-1 lg:w-[45%]">
        <div class="relative h-[50vh] lg:h-full">
          <img
            src="/images/dra-marilia/foto_dr_marilia.jpg"
            alt="Dra. Marília - Advogada fundadora do MS Advocacia e Consultoria"
            class="h-full w-full object-cover object-center"
            loading="eager"
          />
          <!-- Overlay apenas para mobile -->
          <div class="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent lg:hidden" />
        </div>
      </div>

      <!-- Coluna do Conteúdo (55-60%) -->
      <div class="order-1 flex flex-1 items-center justify-center bg-brand-black px-8 py-16 lg:order-2 lg:w-[55%] lg:px-12 lg:py-24">
        <div class="container-wide max-w-2xl">
          <p class="label-eyebrow mb-6 animate-fade-in">{{ site.shortName }}</p>
          <h1 class="heading-display text-balance text-brand-white drop-shadow-lg font-hero-title">
            Seus direitos protegidos com a atenção que você merece.
          </h1>
          <p class="text-brand-muted mt-8 max-w-xl text-lg leading-relaxed font-hero-body">
            Advocacia especializada que une expertise técnica e cuidado humanizado. Trabalhamos lado a lado com você para construir soluções jurídicas seguras e personalizadas.
          </p>
          <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BaseButton :href="getWhatsAppUrl()" external variant="whatsapp" size="lg">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              Falar no WhatsApp
            </BaseButton>
            <BaseButton :to="{ name: 'sobre' }" variant="outline" size="lg">
              Conheça o escritório
            </BaseButton>
          </div>

          <!-- Estatísticas - mantidas na mesma posição -->
          <div class="text-brand-muted mt-20 hidden items-end justify-between border-t border-brand-dark/80 pt-8 md:flex">
            <div class="stat-item">
              <p class="font-serif text-4xl text-brand-gold">15+</p>
              <p class="mt-1 text-xs tracking-widest uppercase">Anos de atuação</p>
            </div>
            <div class="stat-item">
              <p class="font-serif text-4xl text-brand-gold">500+</p>
              <p class="mt-1 text-xs tracking-widest uppercase">Clientes atendidos</p>
            </div>
            <div class="stat-item">
              <p class="font-serif text-4xl text-brand-gold">5</p>
              <p class="mt-1 text-xs tracking-widest uppercase">Áreas especializadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat-item {
  @apply transition-transform duration-500 hover:scale-105;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.heading-display {
  animation: fadeInUp 1s var(--ease-premium) forwards;
}

.label-eyebrow {
  animation: fadeInUp 0.8s var(--ease-premium) 0.2s forwards;
}
</style>
