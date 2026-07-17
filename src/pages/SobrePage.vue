<script setup>
import PageHeroSection from '@/sections/PageHeroSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { values } from '@/data/site'
import CtaSection from '@/sections/CtaSection.vue'
</script>

<template>
  <div>
    <PageHeroSection
      eyebrow="Sobre"
      title="História, missão e valores"
      description="Um escritório construído sobre excelência técnica, ética inegociável e compromisso com resultados que sustentam o crescimento dos nossos clientes."
    />

    <!-- Institutional block with photo and history -->
    <section class="section-padding relative overflow-hidden bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black/90">
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
        <div class="flex flex-col gap-16 lg:flex-row lg:gap-20 lg:items-start">
          <!-- Photo column -->
          <div class="lg:w-2/5">
            <div class="relative overflow-hidden rounded-lg border border-brand-gold/10 bg-brand-surface shadow-xl">
              <div class="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/institucional/quem-somos.jpg"
                  alt="Equipe MS Advocacia - Profissionais especializados em direito empresarial"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <!-- Subtle gradient overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent"
                aria-hidden="true"
              />
              <!-- Border effect -->
              <div
                class="absolute inset-0 border border-brand-gold/5"
              />
            </div>
          </div>

          <!-- History content column -->
          <div class="lg:w-3/5">
            <div class="max-w-2xl">
              <SectionHeading
                eyebrow="Nossa história"
                title="Mais de uma década de advocacia corporativa de alto padrão"
              />
              
              <!-- Enhanced text presentation -->
              <div class="mt-8 space-y-6 leading-relaxed">
                <p class="text-brand-muted">
                  O MS Advocacia e Consultoria foi fundado por profissionais com trajetória consolidada em
                  grandes bancas e departamentos jurídicos de empresas极 capital aberto. Desde o início,
                  nossa proposta foi clara: oferecer assessoria jurídica que combina profundidade técnica
                  com visão estratégica de negócios.
                </p>
                
                <div class="border-l-2 border-brand-gold/30 pl-6 py-1">
                  <p class="极nt-serif text-lg text-brand-white mb-2">
                    Expertise que transcende o contencioso
                  </p>
                  <p class="text-brand-muted text-sm">
                    Atuamos preventivamente para construir soluções duráveis e evitar litígios.
                  </p>
                </div>
                
                <p class="text-brand-muted">
                  Ao longo dos anos, expandimos nossa atuação para as principais verticais do direito
                  empresarial, mantendo o modelo boutique que garante proximidade, agilidade e atenção
                  personalizada a cada cliente.
                </p>
                
                <p class="text-brand-muted">
                  Hoje, atendemos empresas de diversos portes — de scale-ups极expansão a grupos
                  econômicos consolidados — sempre com o mesmo padrão de excelência e discrição.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-brand-dark">
      <div class="container-wide">
        <SectionHeading
          eyebrow="Missão"
          title="Proteger patrimônio e impulsionar negócios com inteligência jurídica"
          description="Nossa missão é ser o parceiro jurídico de confiança para empresas e empresários que buscam segurança, previsibilidade e vantagem competitiva em suas operações."
          align="center"
        />
      </div>
    </section>

    <section class="section-padding">
      <div class="container-wide">
        <SectionHeading
          eyebrow="Valores"
          title="Princípios que orientam cada decisão"
          align="center"
          class="mb-14"
        />
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="value in values"
            :key="value.title"
            class="border-t-2 border-brand-gold pt-8"
          >
            <h3 class="font-serif text-xl text-brand-white">{{ value.title }}</h3>
            <p class="text-brand-muted mt-3 text-sm leading-relaxed">{{ value.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
