<script setup>
import PageHeroSection from '@/sections/PageHeroSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import BaseButton from '@/components/BaseButton.vue'
import { site, getWhatsAppUrl } from '@/data/site'
</script>

<template>
  <div>
    <PageHeroSection
      eyebrow="Inicie seu atendimento"
      title="Fale com nossa equipe"
      description="Escolha o canal de sua preferência para entrar em contato com nossa equipe. Estamos à disposição para compreender sua necessidade e orientar os próximos passos."
    />

    <!-- Main content section with photo and contact options -->
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
                  src="/images/institucional/foto_dr_marilia_CONTATO.jpg"
                  alt="Dra. Marília - Advogada especialista em direito empresarial"
                  class="h-full w-full object-cover"
                  loading="lazy"                />
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

          <!-- Contact content column -->
          <div class="lg:w-3/5">
            <div class="max-w-2xl">
              <!-- WhatsApp as primary action -->
              <div class="mb-12">
                <h2 class="font-serif text-3xl text-brand-white md:text-4xl">
                  Fale conosco pelo WhatsApp
                </h2>
                <p class="text-brand-muted mt-4 text-lg">
                  Nosso principal canal para agendamentos e orientações iniciais.
                </p>
                <BaseButton 
                  :href="getWhatsAppUrl()" 
                  external 
                  variant="whatsapp"
                  class="mt-6 group relative overflow-hidden"
                  :style="{ 'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)' }"
                >
                  <span class="relative z-10">Conversar pelo WhatsApp</span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/10 to-green-0/0 transition-all duration-500 group-hover:from-green-600/20 group-hover:via-green-600/30 group-hover:to-green-600/20"
                    aria-hidden="true"/>
                </BaseButton>
              </div>

              <!-- Alternative contact methods -->
              <div class="grid gap-8 md:grid-cols-2">
                <div class="border-l-2 border-brand-gold/30 pl-5 py-2">
                  <h3 class="font-serif text-lg text-brand-white">Telefone direto</h3>
                  <p class="text-brand-muted mt-2 text-sm">
                    {{ site.phone }}
                  </p>
                </div>
                
                <div class="border-l-2 border-brand-gold/30 pl-5 py-2">
                  <h3 class="font-serif text-lg text-brand-white">E-mail</h3>
                  <a 
                    :href="`mailto:${site.email}`" 
                    class="text-brand-muted hover:text-brand-gold mt-2 text-sm transition-colors duration-300"
                  >
                    {{ site.email }}
                  </a>
                </div>
              </div>

              <!-- Contact form section -->
              <div class="mt-12">
                <h2 class="font-serif text-2xl text-brand-white">Formulário de contato</h2>
                <p class="text-brand-muted mt-3 text-sm leading-relaxed">
                  Descreva sua situação para que possamos compreender como podemos ajudá-lo.
                </p>
                <ContactForm class="mt-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location and address section -->
    <section class="section-padding">
      <div class="container-wide">        <div class="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 class="font-serif text-2xl text-brand-white">Visite nosso escritório</h2>
            <div class="mt-6 space-y-4">
              <p class="text-brand-muted text-sm">
                <span class="text-brand-white font-medium">Endereço:</span><br>
                {{ site.address.street }}<br>
                {{ site.address.city }} — CEP {{ site.address.cep }}
              </p>
              <p class="text-brand-muted text-xs">                Agende previamente sua visita para melhor atendimento.
              </p>
            </div>
          </div>

          <div>
            <div class="relative overflow-hidden rounded-lg border border-brand-gold/10 bg-brand-surface shadow-xl">
              <div class="aspect-video">
                <iframe
                  title="Localização MS Advocacia"
                  class="h-full w-full grayscale opacity-80"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9999999999995!2d-38.510000000000005!3d-12.970000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiUyAzOMKwMzAnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  allowfullscreen
                />
              </div>
              <!-- Border effect -->
              <div
                class="absolute inset-0 border border-brand-gold/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>