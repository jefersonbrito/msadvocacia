export const site = {
  name: 'MS Advocacia e Consultoria',
  shortName: 'MS Advocacia',
  tagline: 'Advocacia estratégica para quem exige excelência.',
  whatsapp: {
    number: '5571993724045',
    message: 'Olá! Gostaria de falar com a MS Advocacia e Consultoria.',
  },
  email: 'contato@msadvocaciaeconsultoria.com.br',
  phone: '(71) 99372-4045',
  address: {
    street: 'Edifício Cidade do Salvador, nº 397, sala 606',
    city: 'Salvador - BA',
    cep: '',
  },
  social: {
    linkedin: '',
    instagram: '',
  },
}

export const navigation = [
  { label: 'Início', to: { name: 'home' } },
  { label: 'Sobre', to: { name: 'sobre' } },
  { label: 'Áreas', to: { name: 'areas' } },
  { label: 'Parceiros', to: { name: 'parceiros' } },
  { label: 'Contato', to: { name: 'contato' } },
]

export const practiceAreas = [
  {
    id: 'empresarial',
    title: 'Direito Empresarial',
    description:
      'Estruturação societária, governança e operações corporativas com visão preventiva e estratégica.',
    icon: 'building',
  },
  {
    id: 'tributario',
    title: 'Direito Tributário',
    description:
      'Planejamento fiscal, contencioso tributário e compliance para reduzir riscos e maximizar eficiência.',
    icon: 'scale',
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    description:
      'Assessoria preventiva e contenciosa para empresas que buscam segurança jurídica e gestão responsável.',
    icon: 'users',
  },
  {
    id: 'compliance',
    title: 'Compliance',
    description:
      'Programas de integridade, políticas internas e adequação regulatória alinhados às melhores práticas.',
    icon: 'shield',
  },
  {
    id: 'contratos',
    title: 'Contratos',
    description:
      'Elaboração, revisão e negociação de contratos complexos com foco em clareza e proteção patrimonial.',
    icon: 'document',
  },
]

export const values = [
  {
    title: 'Excelência',
    description: 'Entrega técnica de alto padrão em cada demanda, com atenção aos detalhes que importam.',
  },
  {
    title: 'Ética',
    description: 'Conduta transparente e responsável, pilar da relação de confiança com nossos clientes.',
  },
  {
    title: 'Estratégia',
    description: 'Soluções jurídicas alinhadas aos objetivos de negócio e ao contexto de cada cliente.',
  },
  {
    title: 'Discrição',
    description: 'Sigilo absoluto e tratamento personalizado para demandas sensíveis e de alto valor.',
  },
]

export const partners = [
  {
    name: 'Alvarez & Associados',
    role: 'Consultoria tributária internacional',
    logo: null,
  },
  {
    name: 'Nexus Compliance',
    role: 'Auditoria e programas de integridade',
    logo: null,
  },
  {
    name: 'Prime Corporate',
    role: 'Assessoria financeira e M&A',
    logo: null,
  },
  {
    name: 'Lex International',
    role: 'Rede jurídica global',
    logo: null,
  },
]

export function getWhatsAppUrl(customMessage) {
  const { number, message } = site.whatsapp
  const text = encodeURIComponent(customMessage || message)
  return `https://wa.me/${number}?text=${text}`
}
