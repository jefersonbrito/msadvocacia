<script setup>
import PageHeroSection from '@/sections/PageHeroSection.vue'
import { practiceAreas } from '@/data/site'
import PracticeAreaCard from '@/components/PracticeAreaCard.vue'
import CtaSection from '@/sections/CtaSection.vue'
</script>

<template>
  <div>
    <PageHeroSection
      eyebrow="Áreas de atuação"
      title="Expertise jurídica integrada"
      description="Equipes especializadas que atuam de forma coordenada para oferecer soluções completas em demandas corporativas complexas."
    />

    <!-- Introduction section with photo -->
    <section class="section-padding relative overflow-hidden bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black/90">
      <!-- Subtle pattern overlay (same as Home) -->
      <div
        class="absolute inset-0 opacity-[0.02]"
        :style="{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(200, 169, 107, 0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }"
        aria-hidden="true"
      />
      
      <div class="container-wide relative">
        <div class="flex flex-col gap-10 lg:flex-row lg:gap-12 lg:items-center">
          <!-- Text column -->
          <div class="lg:w-3/5">
            <div class="max-w-2xl">
              <h2 class="font-serif text-3xl text-brand-white md:text-4xl animate-fade-in-up">
                Por trás de cada especialidade, uma equipe dedicada
              </h2>
              <p class="text-brand-muted mt-4 text-lg leading-relaxed animate-fade-in-up" style="animation-delay: 100ms">
                Na MS Advocacia, acreditamos que a excelência jurídica nasce da combinação entre expertise técnica e trabalho colaborativo. Cada área de atuação é liderada por profissionais especializados que trabalham de forma integrada.
              </p>
              
              <!-- Values/differentiators -->
              <div class="mt-8 grid gap-6 sm:grid-cols-2">
                <div class="border-l-2 border-brand-gold/30 pl-4 animate-fade-in-up" style="animation-delay: 200ms">
                  <p class="font-serif text-lg text-brand-white">Abordagem integrada</p>
                  <p class="text-brand-muted mt-1 text-sm">Nossas equipes atuam de forma coordenada, garantindo visão 360° das demandas corporativas.</p>
                </div>
                <div class="border-l-2 border-brand-gold/30 pl-4 animate-fade-in-up" style="animation-delay: 300ms">
                  <p class="font-serif text-lg text-brand-white">Visão estratégica</p>
                  <p class="text-brand-muted mt-1 text-sm">Além da expertise técnica, oferecemos análise de impacto empresarial e planejamento preventivo.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Photo column -->
          <div class="lg:w-2/5">
            <div class="relative overflow-hidden rounded-lg border border-brand-gold/10 bg-brand-surface shadow-lg animate-fade-in-up" style="animation-delay: 400ms">
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/equipe/foto_EQUIPE.jpg"
                  alt="Equipe MS Advocacia - Profissionais especializados trabalhando de forma integrada"
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
          </div>
        </div>
      </div>
    </section>

    <!-- Practice areas grid -->
    <section class="section-padding">
      <div class="container-wide">
        <div class="mb-16 text-center">
          <h2 class="font-serif text-3xl text-brand-white md:text-4xl animate-fade-in-up">
            Nossas áreas de especialização
          </h2>
          <p class="text-brand-muted mt-4 max-w-2xl mx-auto text-lg animate-fade-in-up" style="animation-delay: 100ms">
            Conheça as principais frentes do direito empresarial onde atuamos com excelência técnica e abordagem consultiva.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>

    <CtaSection />
  </div>
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
