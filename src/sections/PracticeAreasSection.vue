<script setup>
import { practiceAreas } from '@/data/site'
import SectionHeading from '@/components/SectionHeading.vue'
import PracticeAreaCard from '@/components/PracticeAreaCard.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="section-padding relative overflow-hidden" aria-labelledby="areas-title">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black/90"
      aria-hidden="true"
    />
    
    <!-- Subtle pattern overlay -->
    <div
      class="absolute inset-0 opacity-[0.02]"
      :style="{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(200, 169, 107, 0.2) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }"
      aria-hidden="true"
    />
    
    <div class="container-wide relative">
      <div class="mb-16 md:mb-20">
        <SectionHeading
          id="areas-title"
          eyebrow="Áreas de atuação"
          title="Expertise multidisciplinar para demandas complexas"
          description="Atuamos de forma integrada nas principais frentes do direito empresarial, com equipes dedicadas e abordagem consultiva."
          align="center"
        />
      </div>

      <!-- Main content with photo and cards -->
      <div class="flex flex-col gap-10 lg:flex-row lg:gap-12">
        <!-- Photo column - 35% on desktop, full width on mobile -->
        <div class="lg:w-[35%]">
          <div class="lg:sticky lg:top-24">
            <!-- Photo container -->
            <div class="relative overflow-hidden rounded-lg border border-brand-gold/10 bg-brand-surface shadow-lg">
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/equipe/foto_EQUIPE.jpg"
                  alt="Equipe MS Advocacia - Profissionais especializados em direito empresarial"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <!-- Subtle gradient overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-brand-black/20 via-transparent to-transparent"
                aria-hidden="true"
              />
              <!-- Border effect -->
              <div
                class="absolute inset-0 border border-brand-gold/5"
              />
            </div>
            
            <!-- Institutional text -->
            <div class="mt-6">
              <div class="border-l-2 border-brand-gold/30 pl-4">
                <p class="font-serif text-lg text-brand-white">
                  Por trás de cada solução jurídica, uma equipe dedicada.
                </p>
                <p class="text-brand-muted mt-2 text-sm leading-relaxed">
                  Nossos advogados combinam expertise técnica com visão estratégica para oferecer respostas precisas e personalizadas às demandas mais complexas do direito empresarial.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cards column - 65% on desktop, full width on mobile -->
        <div class="lg:w-[65%]">
          <div class="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PracticeAreaCard
              v-for="(area, index) in practiceAreas"
              :key="area.id"
              :title="area.title"
              :description="area.description"
              :icon="area.icon"
              :style="{
                'animation-delay': `${index * 100}ms`,
                'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)'
              }"
              class="opacity-0 animate-fade-in-up"
            />
          </div>

          <div class="mt-12 text-center">
            <BaseButton
              :to="{ name: 'areas' }"
              variant="outline"
              class="group relative overflow-hidden border-brand-gold/30 hover:border-brand-gold/50"
              :style="{ 'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)' }"
            >
              <span class="relative z-10">Ver todas as áreas</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/5 to-brand-gold/0 transition-all duration-500 group-hover:from-brand-gold/10 group-hover:via-brand-gold/20 group-hover:to-brand-gold/10"
                aria-hidden="true"
              />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
</style>
