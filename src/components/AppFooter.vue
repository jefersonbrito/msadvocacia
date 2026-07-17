<script setup>
import { site, navigation, getWhatsAppUrl } from '@/data/site'
</script>

<template>
  <footer class="border-brand-dark border-t bg-brand-dark">
    <div class="section-padding !pb-12">
      <div class="container-wide grid gap-16 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <RouterLink :to="{ name: 'home' }" class="inline-block">
            <span class="font-serif text-3xl text-brand-gold">MS</span>
          </RouterLink>
          <p class="text-brand-muted mt-4 max-w-md text-sm leading-relaxed">
            {{ site.name }} — escritório boutique especializado em demandas corporativas de alto
            impacto, com atuação estratégica e personalizada.
          </p>
        </div>

        <div>
          <h3 class="label-eyebrow mb-6">Navegação</h3>
          <ul class="space-y-3">
            <li v-for="item in navigation" :key="item.label">
              <RouterLink
                :to="item.to"
                class="text-brand-muted text-sm transition-colors hover:text-brand-gold"
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="label-eyebrow mb-6">Contato</h3>
          <ul class="text-brand-muted space-y-3 text-sm">
            <li>{{ site.phone }}</li>
            <li>
              <a :href="`mailto:${site.email}`" class="hover:text-brand-gold transition-colors">
                {{ site.email }}
              </a>
            </li>
            <li>
              <a
                :href="getWhatsAppUrl()"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-brand-gold transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li class="leading-relaxed">
              {{ site.address.street }}<br />
              {{ site.address.city }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-brand-dark/60 text-brand-muted mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs md:flex-row"
      >
        <p>&copy; {{ new Date().getFullYear() }} {{ site.name }}. Todos os direitos reservados.</p>
        <p class="tracking-wide">OAB/BA — inscrição profissional</p>
      </div>
    </div>
  </footer>
</template>
