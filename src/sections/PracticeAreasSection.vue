<script setup>
import { practiceAreas } from '@/data/site'
import SectionHeading from '@/components/SectionHeading.vue'
import PracticeAreaCard from '@/components/PracticeAreaCard.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="section-padding" aria-labelledby="areas-title">
    <div class="container-wide">
      <div class="mb-16">
        <SectionHeading
          id="areas-title"
          eyebrow="Áreas de atuação"
          title="Expertise multidisciplinar para demandas complexas"
          description="Atuamos de forma integrada nas principais frentes do direito empresarial, com equipes dedicadas e abordagem consultiva."
          align="center"
        />
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PracticeAreaCard
          v-for="area in practiceAreas"
          :key="area.id"
          :title="area.title"
          :description="area.description"
          :icon="area.icon"
        />
      </div>

      <div class="mt-12 text-center">
        <BaseButton :to="{ name: 'areas' }" variant="outline">
          Ver todas as áreas
        </BaseButton>
      </div>
    </div>
  </section>
</template>
