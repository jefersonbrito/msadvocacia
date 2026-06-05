<script setup>
import PageHeroSection from '@/sections/PageHeroSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import BaseButton from '@/components/BaseButton.vue'
import { site, getWhatsAppUrl } from '@/data/site'
</script>

<template>
  <div>
    <PageHeroSection
      eyebrow="Contato"
      title="Vamos conversar"
      description="Entre em contato por formulário, WhatsApp ou visite nosso escritório. Retornamos em até 24 horas úteis."
    />

    <section class="section-padding">
      <div class="container-wide grid gap-16 lg:grid-cols-2">
        <div>
          <h2 class="font-serif text-2xl text-brand-white">Envie sua mensagem</h2>
          <p class="text-brand-muted mt-3 text-sm leading-relaxed">
            Preencha o formulário e nossa equipe analisará sua demanda com a devida atenção e
            sigilo.
          </p>
          <ContactForm class="mt-8" />
        </div>

        <div class="space-y-10">
          <div>
            <h3 class="label-eyebrow mb-4">WhatsApp</h3>
            <p class="text-brand-muted mb-4 text-sm">
              Atendimento ágil para dúvidas e agendamentos.
            </p>
            <BaseButton :href="getWhatsAppUrl()" external variant="whatsapp">
              Iniciar conversa
            </BaseButton>
          </div>

          <div>
            <h3 class="label-eyebrow mb-4">Informações</h3>
            <ul class="text-brand-muted space-y-3 text-sm">
              <li>
                <span class="text-brand-white">Telefone:</span> {{ site.phone }}
              </li>
              <li>
                <span class="text-brand-white">E-mail:</span>
                <a :href="`mailto:${site.email}`" class="hover:text-brand-gold transition-colors">
                  {{ site.email }}
                </a>
              </li>
              <li>
                <span class="text-brand-white">Endereço:</span><br />
                {{ site.address.street }}<br />
                {{ site.address.city }} — CEP {{ site.address.cep }}
              </li>
            </ul>
          </div>

          <div>
            <h3 class="label-eyebrow mb-4">Localização</h3>
            <div
              class="border-brand-dark bg-brand-surface flex aspect-video items-center justify-center border"
            >
              <iframe
                title="Localização MS Advocacia"
                class="h-full w-full grayscale opacity-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.655!3d-23.561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjYiUyA0NsKwMzknMTguMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
