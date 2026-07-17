<script setup>
import PageHeroSection from '@/sections/PageHeroSection.vue'
import { partners } from '@/data/site'
import SectionHeading from '@/components/SectionHeading.vue'
import CtaSection from '@/sections/CtaSection.vue'
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Parceiros"
      title="Rede jurídica de excelência"
      description="Colaboramos com escritórios e consultorias de referência para ampliar nossa capacidade de atendimento em demandas nacionais e internacionais."
    />

    <!-- Main content section with photo and strategic context -->
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
                  src="/images/institucional/parceiros.jpg"
                  alt="Rede de parceiros estratégicos MS Advocacia - Ecossistema de excelência jurídica"
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

          <!-- Strategic content column -->
          <div class="lg:w-3/5">
            <div class="max-w-2xl">
              <SectionHeading
                eyebrow="Ecossistema estratégico"
                title="Ampliação inteligente de capacidades"
                description="Cada parceiro é selecionado por critérios rigorosos de qualidade técnica, ética e alinhamento com o padrão MS Advocacia."
              />
              
              <!-- Enhanced value proposition -->
              <div class="mt-8 space-y-6 leading-relaxed">
                <p class="text-brand-muted">
                  Nossa rede de parceiros estratégicos permite oferecer soluções jurídicas completas 
                  que transcendem as especialidades do escritório, garantindo cobertura integral para 
                  demandas complexas e multidisciplinares.
                </p>
                
                <div class="border-l-2 border-brand-gold/30 pl-6 py-2">
                  <p class="font-serif text-lg text-brand-white mb-2">
                    Vantagem competitiva para seu negócio
                  </p>
                  <p class="text-brand-muted text-sm">
                    Acesso a expertise complementar sem necessidade de múltiplos fornecedores.
                  </p>
                </div>
                
                <div class="border-l-2 border-brand-gold/30 pl-6 py-2">
                  <p class="font-serif text-lg text-brand-white mb-2">
                    Coordenação integrada
                  </p>
                  <p class="text-brand-muted text-sm">
                    Gestão unificada de todas as frentes jurídicas por nossa equipe.
                  </p>
                </div>
                
                <div class="border-l-2 border-brand-gold/30 pl-6 py-2">
                  <p class="font-serif text-lg text-brand-white mb-2">
                    Padrão consistente de qualidade
                  </p>
                  <p class="text-brand-muted text-sm">
                    Todos os parceiros seguem nossos rigorosos critérios de excelência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners presentation section -->
    <section class="section-padding">
      <div class="container-wide">
        <div class="mb-16 text-center">
          <h2 class="font-serif text-3xl text-brand-white md:text-4xl">
            Nossos parceiros estratégicos
          </h2>
          <p class="text-brand-muted mt-4 max-w-2xl mx-auto text-lg">
            Conheça as organizações que compõem nossa rede de excelência jurídica.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <article
            v-for="partner in partners"
            :key="partner.name"
            class="border-brand-dark/80 bg-brand-surface group border p-8 transition-all duration-300 hover:border-brand-gold/30 md:p-10"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="font-serif text-2xl text-brand-white group-hover:text-brand-gold/90 transition-colors duration-300">
                  {{ partner.name }}
                </h3>
                <p class="text-brand-gold mt-1 text-sm font-medium">
                  {{ partner.role }}
                </p>
                <p class="text-brand-muted mt-4 text-sm leading-relaxed">
                  Parceiro integrado à nossa rede para demandas que exigem expertise complementar e
                  cobertura especializada.                </p>
              </div>
            </div>
          </article>
极        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>