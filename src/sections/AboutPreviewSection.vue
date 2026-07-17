<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="section-padding relative overflow-hidden bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black/90" aria-labelledby="about-preview-title">
    <!-- Subtle pattern overlay (consistent with other sections) -->
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
        <!-- Image/quote column -->
        <div class="lg:w-2/5">
          <div class="relative">
            <!-- Main photo container -->
            <div class="relative overflow-hidden rounded-lg border border-brand-gold/10 bg-brand-surface shadow-xl animate-fade-in-up">
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
            
            <!-- Quote as complementary element -->
            <div class="mt-8 animate-fade-in-up" style="animation-delay: 100ms">
              <div class="border-l-2 border-brand-gold/30 pl-5 py-2 bg-gradient-to-r from-brand-surface/50 to-transparent">
                <p class="font-serif text-xl leading-snug text-brand-white/90 italic">
                  &ldquo;Justiça com método, estratégia e discrição.&rdquo;
                </p>
                <div class="mt-3">
                  <p class="text-brand-gold/70 text-xs font-medium tracking-wider uppercase">
                    Filosofia do escritório
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content column -->
        <div class="lg:w-3/5">
          <div class="max-w-2xl">
            <SectionHeading
              id="about-preview-title"
              eyebrow="Sobre nós"
              title="Tradição e inovação a serviço do seu negócio"
              description="O MS Advocacia e Consultoria nasceu da união de profissionais experientes em direito corporativo, com a missão de oferecer assessoria jurídica premium para empresas que não abrem mão de excelência."
              class="animate-fade-in-up"
            />
            
            <!-- Institutional message with emphasis -->
            <div class="mt-10 animate-fade-in-up" style="animation-delay: 100ms">
              <div class="border-l-2 border-brand-gold/30 pl-6 py-2">
                <p class="font-serif text-xl text-brand-white mb-4">
                  Mais do que um escritório, um parceiro estratégico
                </p>
                <p class="text-brand-muted leading-relaxed">
                  Com sede em São Paulo e atuação nacional, combinamos rigor técnico, visão de negócio e
                  proximidade com o cliente para entregar soluções que vão além do contencioso — priorizamos
                  a prevenção e a construção de valor.
                </p>
              </div>
            </div>

            <!-- Values presentation - elegant and light -->
            <div class="mt-16">
              <div class="mb-10 animate-fade-in-up" style="animation-delay: 200ms">
                <p class="font-serif text-2xl text-brand-white">
                  Valores que orientam cada decisão
                </p>
                <p class="text-brand-muted mt-2 text-sm">
                  Princípios fundamentais que definem nossa atuação e relação com os clientes.
                </p>
              </div>
              
              <div class="grid gap-8 sm:grid-cols-2">
                <div class="group animate-fade-in-up" style="animation-delay: 300ms">
                  <div class="border-l-2 border-brand-gold/30 pl-5 py-1 transition-all duration-300 group-hover:border-brand-gold/50">
                    <p class="font-serif text-lg text-brand-white group-hover:text-brand-gold/90 transition-colors duration-300">
                      Excelência
                    </p>
                    <p class="text-brand-muted mt-2 text-sm leading-relaxed">
                      Entrega técnica de alto padrão em cada demanda, com atenção aos detalhes que importam.
                    </p>
                  </div>
                </div>
                
                <div class="group animate-fade-in-up" style="animation-delay: 350ms">
                  <div class="border-l-2 border-brand-gold/30 pl-5 py-1 transition-all duration-300 group-hover:border-brand-gold/50">
                    <p class="font-serif text-lg text-brand-white group-hover:text-brand-gold/90 transition-colors duration-300">
                      Ética
                    </p>
                    <p class="text-brand-muted mt-2 text-sm leading-relaxed">
                      Conduta transparente e responsável, pilar da relação de confiança com nossos clientes.
                    </p>
                  </div>
                </div>
                
                <div class="group animate-fade-in-up" style="animation-delay: 400ms">
                  <div class="border-l-2 border-brand-gold/30 pl-5 py-1 transition-all duration-300 group-hover:border-brand-gold/50">
                    <p class="font-serif text-lg text-brand-white group-hover:text-brand-gold/90 transition-colors duration-300">
                      Estratégia
                    </p>
                    <p class="text-brand-muted mt-2 text-sm leading-relaxed">
                      Soluções jurídicas alinhadas aos objetivos de negócio e ao contexto de cada cliente.
                    </p>
                  </div>
                </div>
                
                <div class="group animate-fade-in-up" style="animation-delay: 450ms">
                  <div class="border-l-2 border-brand-gold/30 pl-5 py-1 transition-all duration-300 group-hover:border-brand-gold/50">
                    <p class="font-serif text-lg text-brand-white group-hover:text-brand-gold/90 transition-colors duration-300">
                      Discrição
                    </p>
                    <p class="text-brand-muted mt-2 text-sm leading-relaxed">
                      Sigilo absoluto e tratamento personalizado para demandas sensíveis e de alto valor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA button -->
            <div class="mt-16 animate-fade-in-up" style="animation-delay: 500ms">
              <BaseButton 
                :to="{ name: 'sobre' }" 
                variant="primary" 
                class="group relative overflow-hidden"
                :style="{ 'transition-timing-function': 'cubic-bezier(0.22, 1, 0.36, 1)' }"
              >
                <span class="relative z-10">Conheça nossa história completa</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 transition-all duration-500 group-hover:from-brand-gold/20 group-hover:via-brand-gold/30 group-hover:to-brand-gold/20"
                  aria-hidden="true"
                />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
