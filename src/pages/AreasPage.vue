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

    <section class="section-padding">
      <div class="container-wide grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <PracticeAreaCard
          v-for="area in practiceAreas"
          :key="area.id"
          :title="area.title"
          :description="area.description"
          :icon="area.icon"
        />
      </div>
    </section>

    <CtaSection />
  </div>
</template>
