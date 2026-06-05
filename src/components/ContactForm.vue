<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <form v-if="!submitted" class="space-y-6" @submit.prevent="handleSubmit">
    <div class="grid gap-6 md:grid-cols-2">
      <div>
        <label for="name" class="label-eyebrow mb-2 block !text-[10px]">Nome completo</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="border-brand-dark bg-brand-surface focus:border-brand-gold w-full border px-4 py-3 text-sm text-brand-white outline-none transition-colors"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label for="email" class="label-eyebrow mb-2 block !text-[10px]">E-mail</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="border-brand-dark bg-brand-surface focus:border-brand-gold w-full border px-4 py-3 text-sm text-brand-white outline-none transition-colors"
          placeholder="seu@email.com"
        />
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div>
        <label for="phone" class="label-eyebrow mb-2 block !text-[10px]">Telefone</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="border-brand-dark bg-brand-surface focus:border-brand-gold w-full border px-4 py-3 text-sm text-brand-white outline-none transition-colors"
          placeholder="(00) 00000-0000"
        />
      </div>
      <div>
        <label for="subject" class="label-eyebrow mb-2 block !text-[10px]">Assunto</label>
        <select
          id="subject"
          v-model="form.subject"
          required
          class="border-brand-dark bg-brand-surface focus:border-brand-gold w-full border px-4 py-3 text-sm text-brand-white outline-none transition-colors"
        >
          <option value="" disabled>Selecione</option>
          <option value="empresarial">Direito Empresarial</option>
          <option value="tributario">Direito Tributário</option>
          <option value="trabalhista">Direito Trabalhista</option>
          <option value="compliance">Compliance</option>
          <option value="contratos">Contratos</option>
          <option value="outro">Outro</option>
        </select>
      </div>
    </div>

    <div>
      <label for="message" class="label-eyebrow mb-2 block !text-[10px]">Mensagem</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        class="border-brand-dark bg-brand-surface focus:border-brand-gold w-full resize-none border px-4 py-3 text-sm text-brand-white outline-none transition-colors"
        placeholder="Descreva brevemente sua demanda..."
      />
    </div>

    <BaseButton type="submit" variant="primary" size="lg">
      Enviar mensagem
    </BaseButton>
  </form>

  <div
    v-else
    class="border-brand-gold/30 bg-brand-surface border p-10 text-center"
    role="status"
  >
    <p class="font-serif text-2xl text-brand-gold">Mensagem recebida</p>
    <p class="text-brand-muted mt-3 text-sm">
      Em breve nossa equipe entrará em contato. Obrigado pelo interesse.
    </p>
  </div>
</template>
