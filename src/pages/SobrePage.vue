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

    <section class="section-padding">
      <div class="container-narrow">
        <SectionHeading
          eyebrow="Nossa história"
          title="Mais de uma década de advocacia corporativa de alto padrão"
        />
        <div class="text-brand-muted mt-8 space-y-5 leading-relaxed">
          <p>
            O MS Advocacia e Consultoria foi fundado por profissionais com trajetória consolidada em
            grandes bancas e departamentos jurídicos de empresas de capital aberto. Desde o início,
            nossa proposta foi clara: oferecer assessoria jurídica que combina profundidade técnica
            com visão estratégica de negócios.
          </p>
          <p>
            Ao longo dos anos, expandimos nossa atuação para as principais verticais do direito
            empresarial, mantendo o modelo boutique que garante proximidade, agilidade e atenção
            personalizada a cada cliente.
          </p>
          <p>
            Hoje, atendemos empresas de diversos portes — de scale-ups em expansão a grupos
            econômicos consolidados — sempre com o mesmo padrão de excelência e discrição.
          </p>
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
