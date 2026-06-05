<script setup>
import PageHeroSection from '@/sections/PageHeroSection.vue'
import { partners } from '@/data/site'
import SectionHeading from '@/components/SectionHeading.vue'
import CtaSection from '@/sections/CtaSection.vue'
</script>

<template>
  <div>
    <PageHeroSection
      eyebrow="Parceiros"
      title="Rede jurídica de excelência"
      description="Colaboramos com escritórios e consultorias de referência para ampliar nossa capacidade de atendimento em demandas nacionais e internacionais."
    />

    <section class="section-padding">
      <div class="container-wide">
        <SectionHeading
          eyebrow="Ecossistema"
          title="Parceiros estratégicos"
          description="Cada parceiro é selecionado por critérios rigorosos de qualidade técnica, ética e alinhamento com o padrão MS Advocacia."
          align="center"
        />

        <div class="mt-14 grid gap-8 md:grid-cols-2">
          <article
            v-for="partner in partners"
            :key="partner.name"
            class="border-brand-dark bg-brand-surface group flex gap-6 border p-8 transition-colors duration-300 hover:border-brand-gold/30 md:p-10"
          >
            <div
              class="border-brand-gold/30 text-brand-gold flex h-20 w-20 shrink-0 items-center justify-center border font-serif text-2xl transition-colors group-hover:bg-brand-gold/10"
            >
              {{ partner.name.split(' ').map((w) => w[0]).join('').slice(0, 2) }}
            </div>
            <div>
              <h3 class="font-serif text-2xl text-brand-white">{{ partner.name }}</h3>
              <p class="text-brand-gold mt-1 text-sm">{{ partner.role }}</p>
              <p class="text-brand-muted mt-4 text-sm leading-relaxed">
                Parceiro integrado à nossa rede para demandas que exigem expertise complementar e
                cobertura especializada.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
