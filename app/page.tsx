"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, MapPin, Clock, ChevronRight, CheckCircle2,
  Calculator, FileText, Users, Building2, TrendingDown, Lightbulb,
  Scale, MessageCircle, ArrowUp, Search, BarChart3,
  Handshake, Heart, MessageSquare, Eye, Presentation, ArrowRight,
  ShieldCheck, UserCheck, HeadphonesIcon, Quote, TrendingUp, AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }} transition={{ duration: 0.55, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Reforma Tributária", href: "#reforma" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  { icon: Calculator, title: "Contabilidade Empresarial", problem: "Dificuldade em tomar decisões por falta de informações contábeis claras", benefit: "Gestão contábil completa para apoiar decisões e fortalecer a saúde financeira" },
  { icon: FileText, title: "Departamento Fiscal", problem: "Riscos fiscais e dificuldade em acompanhar mudanças na legislação", benefit: "Apuração correta de tributos e cumprimento de todas as obrigações fiscais" },
  { icon: Users, title: "Departamento Pessoal", problem: "Rotinas trabalhistas desorganizadas que geram riscos e retrabalho", benefit: "Administração completa de folha, admissões, desligamentos e obrigações" },
  { icon: Building2, title: "Abertura e Regularização de Empresas", problem: "Dificuldade para empreender ou regularizar a situação da empresa", benefit: "Suporte completo para abrir ou regularizar sua empresa com agilidade" },

  { icon: Lightbulb, title: "Consultoria Empresarial", problem: "Processos internos desorganizados que limitam o crescimento", benefit: "Orientação estratégica para aprimorar processos e identificar oportunidades" },
  { icon: Scale, title: "Reforma Tributária", problem: "Insegurança sobre os impactos da nova legislação no seu negócio", benefit: "Acompanhamento especializado para preparar sua empresa para as mudanças" },
];

const TARGETS = [
  { icon: TrendingUp, title: "Empresas em crescimento", desc: "Que precisam organizar processos e informações contábeis para escalar com segurança." },
  { icon: AlertTriangle, title: "Empresas com dúvidas fiscais", desc: "Que querem evitar riscos, regularizar sua situação e se preparar melhor." },
  { icon: MapPin, title: "Empreendedores em busca de organização", desc: "Que desejam atendimento próximo, personalizado e com foco em resultados." },
  { icon: Scale, title: "Preocupadas com a Reforma Tributária", desc: "Que precisam entender os impactos e se antecipar às mudanças na legislação." },
];

const DIFFERENTIALS = [
  { icon: Heart, title: "Atendimento humanizado", desc: "Soluções sob medida para cada empresa, com proximidade e comprometimento real." },
  { icon: MessageSquare, title: "Comunicação clara", desc: "Informações contábeis explicadas de forma simples, objetiva e sem jargões." },
  { icon: HeadphonesIcon, title: "Suporte próximo", desc: "Acompanhamento contínuo e disponível para decisões mais seguras." },
  { icon: Eye, title: "Visão estratégica", desc: "Contabilidade como ferramenta de crescimento empresarial, não apenas obrigação." },
];

const PROCESS_STEPS = [
  { num: "01", title: "Reunião de apresentação", desc: "Entendemos seu negócio, seus desafios e seus objetivos.", icon: Handshake },
  { num: "02", title: "Diagnóstico das necessidades", desc: "Levantamos demandas contábeis, fiscais e trabalhistas.", icon: Search },
  { num: "03", title: "Análise completa", desc: "Identificamos oportunidades de melhoria, organização e segurança.", icon: BarChart3 },
  { num: "04", title: "Proposta personalizada", desc: "Desenvolvemos uma solução adequada à realidade da sua empresa.", icon: Presentation },
  { num: "05", title: "Acompanhamento contínuo", desc: "Apoiamos sua empresa com suporte estratégico para crescer com segurança.", icon: ShieldCheck },
];

const TESTIMONIALS = [
  { text: "Atendimento próximo, claro e sempre comprometido com a nossa empresa. A Contábil Machado de Assis é mais do que um escritório de contabilidade, é uma verdadeira parceira de negócios.", name: "Cliente há mais de 10 anos", role: "Empresa de serviços — Santo André" },
  { text: "Encontramos na Contábil Machado de Assis uma parceria segura para crescer. A equipe entende a nossa realidade e sempre nos orienta com clareza.", name: "Cliente há mais de 5 anos", role: "Empresa do setor de comércio — São Paulo" },
  { text: "O suporte na Reforma Tributária foi fundamental para tomarmos decisões mais seguras. Recomendo para qualquer empresa que busca organização e tranquilidade.", name: "Cliente há mais de 8 anos", role: "Empresa industrial — São Caetano do Sul" },
];

const WA_LINK = "https://wa.me/5511996488360?text=Olá! Gostaria de saber mais sobre os serviços da Contábil Machado de Assis.";
const MAPS_LINK = "https://maps.app.goo.gl/A1R4dnC6pbSEZKfN8";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  const go = (href: string) => { setMobileOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/98 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button onClick={() => go("#inicio")} className="flex items-center">
            <div className={`px-3 py-2 rounded-xl transition-all duration-300 ${scrolled ? "bg-white shadow-lg border border-[#e2e5ea]" : "bg-white/95 backdrop-blur-md shadow-xl border border-white/30"}`}>
              <img src="/logo-contabil.png" alt="Logo Contábil Machado de Assis" className="h-16 sm:h-20 w-auto" />
            </div>
          </button>
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${scrolled ? "text-[#4b5563] hover:text-[#0c2340] hover:bg-[#0c2340]/5" : "text-white/85 hover:text-white hover:bg-white/10"}`}>{l.label}</button>
            ))}
            <Button onClick={() => window.open(WA_LINK, "_blank")} className={`ml-4 font-semibold shadow-md transition-all duration-300 ${scrolled ? "bg-[#0c2340] hover:bg-[#1e3f63] text-white shadow-[#0c2340]/20" : "bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/20"}`}>Falar com um especialista</Button>
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`xl:hidden p-2 rounded-lg ${scrolled ? "text-[#1f2937]" : "text-white"}`} aria-label="Menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>{mobileOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="xl:hidden bg-white border-t shadow-xl overflow-hidden">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((l) => (<button key={l.href} onClick={() => go(l.href)} className="text-left px-4 py-3 text-sm font-medium text-[#4b5563] hover:text-[#0c2340] hover:bg-[#0c2340]/5 rounded-lg transition-colors">{l.label}</button>))}
            <Separator className="my-2" />
            <Button onClick={() => window.open(WA_LINK, "_blank")} className="mt-2 bg-[#0c2340] hover:bg-[#1e3f63] text-white font-semibold"><MessageCircle className="mr-2 h-4 w-4" />Falar com um especialista</Button>
          </nav>
        </motion.div>
      )}</AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0c2340]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b8973e] to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-white/8 border border-[#b8973e]/25 rounded-full px-5 py-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#b8973e]" />
              <span className="text-[#d4bc7e] text-sm font-semibold tracking-wide">+40 anos de experiência</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-bold text-white leading-[1.15]">
              Sua empresa segura, organizada e preparada para <span className="text-[#d4bc7e]">crescer.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg sm:text-xl text-white/65 leading-relaxed max-w-xl">
              Contabilidade estratégica para empresas de todo o Brasil, com mais de 40 anos de experiência em gestão contábil, fiscal e trabalhista.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => window.open(WA_LINK, "_blank")} className="bg-white text-[#0c2340] hover:bg-[#f7f9fc] font-bold shadow-xl shadow-black/20 text-base px-8 py-6 border-0 rounded-lg">Falar com um especialista<ArrowRight className="ml-2 h-5 w-5" /></Button>
              <Button size="lg" onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })} className="bg-transparent border-2 border-white/25 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-lg transition-all duration-300">Conhecer nossos serviços</Button>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src="/hero-dashboard.png" alt="Gestão contábil estratégica" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-6 py-3 shadow-xl border border-[#e2e5ea]">
              <div className="text-2xl font-bold text-[#0c2340]">+40</div>
              <div className="text-xs font-semibold text-[#6b7280]">anos de experiência</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none"><path d="M0 40L60 36C120 32 240 24 360 28C480 32 600 48 720 52C840 56 960 48 1080 40C1200 32 1320 24 1380 20L1440 16V80H0V40Z" fill="#f7f9fc" /></svg></div>
    </section>
  );
}

function StatsBanner() {
  const stats = [
    { value: "+40", label: "Anos de experiência", sub: "Atuando no mercado" },
    { value: "SP+", label: "Atendimento nacional", sub: "De São Paulo para o Brasil" },
    { value: "360°", label: "Soluções integradas", sub: "Contábil, fiscal e trabalhista" },
    { value: "100%", label: "Personalizado", sub: "Cada empresa é única" },
  ];
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-white shadow-sm border border-[#e2e5ea] hover:shadow-md hover:border-[#b8973e]/30 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-[#0c2340]">{s.value}</div>
                <div className="mt-1 text-sm font-semibold text-[#1f2937]">{s.label}</div>
                <div className="mt-0.5 text-xs text-[#6b7280]">{s.sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SobreSection() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#b8973e] rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#0c2340] rounded-br-2xl" />
              <img src="/about-img.png" alt="Equipe Contábil Machado de Assis" className="rounded-xl shadow-2xl w-full object-cover max-h-[500px]" />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <span className="inline-block text-sm font-bold text-[#b8973e] tracking-wider uppercase mb-3">Sobre nós</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2340] leading-tight">Contábil Machado de Assis</h2>
            <p className="mt-3 text-lg font-semibold text-[#1e3f63]">Mais do que uma contabilidade, uma parceria para o sucesso</p>
            <div className="mt-6 space-y-4 text-[#4b5563] leading-relaxed">
              <p>Há mais de 40 anos, a Contábil Machado de Assis atua ao lado de empresas de todo o Brasil, oferecendo soluções contábeis, fiscais e trabalhistas que proporcionam segurança, organização e crescimento sustentável.</p>
              <p>Nossa história foi construída pela confiança de nossos clientes. Crescemos principalmente por indicações, resultado de um trabalho pautado na proximidade, no comprometimento e na excelência no atendimento.</p>
              <p>Para nós, cada empresa é única e merece um acompanhamento personalizado, alinhado à sua realidade, seus desafios e seus objetivos.</p>
            </div>
            <Button size="lg" onClick={() => window.open(WA_LINK, "_blank")} className="mt-8 bg-[#0c2340] hover:bg-[#1e3f63] text-white font-semibold shadow-lg shadow-[#0c2340]/20 border-0 rounded-lg">Solicitar diagnóstico contábil<ArrowRight className="ml-2 h-5 w-5" /></Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function TargetAudienceSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#edf1f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-bold text-[#b8973e] tracking-wider uppercase mb-3">Para quem é</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2340] leading-tight">Para empresas que precisam de mais <span className="text-[#b8973e]">controle, segurança e clareza</span></h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGETS.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.1}>
              <div className="group h-full p-6 rounded-2xl bg-white border border-[#e2e5ea] hover:border-[#b8973e]/40 hover:shadow-lg hover:shadow-[#0c2340]/5 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-[#0c2340] group-hover:bg-[#1e3f63] flex items-center justify-center transition-all duration-300 mb-4">
                  <t.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0c2340] text-base mb-2">{t.title}</h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">{t.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-bold text-[#b8973e] tracking-wider uppercase mb-3">Nossos serviços</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2340]">Soluções completas para sua empresa</h2>
          <p className="mt-4 text-[#4b5563] leading-relaxed">Serviços especializados para manter sua empresa em conformidade, organizada e preparada para crescer.</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.07}>
              <Card className="group h-full border border-[#e2e5ea] hover:border-[#b8973e]/40 hover:shadow-lg hover:shadow-[#0c2340]/5 transition-all duration-300 bg-white rounded-2xl overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-xl bg-[#0c2340] group-hover:bg-[#1e3f63] flex items-center justify-center transition-all duration-300 mb-3">
                    <s.icon className="h-6 w-6 text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-base leading-snug text-[#0c2340]">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs font-semibold text-[#b8973e] uppercase tracking-wide mb-2">{s.problem}</p>
                  <p className="text-[#4b5563] leading-relaxed text-sm">{s.benefit}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-bold text-[#b8973e] tracking-wider uppercase mb-3">Nosso diferencial</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2340]">Nosso diferencial está no <span className="text-[#1e3f63]">relacionamento</span></h2>
          <p className="mt-4 text-[#4b5563] leading-relaxed max-w-2xl mx-auto">Uma boa assessoria contábil começa ouvindo. Antes de propor soluções, buscamos compreender profundamente o negócio.</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.1}>
              <div className="group h-full p-7 rounded-2xl bg-white border border-[#e2e5ea] hover:border-[#b8973e]/40 hover:shadow-lg transition-all duration-300 text-center">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-[#0c2340] group-hover:bg-[#b8973e] flex items-center justify-center transition-all duration-300 mb-4">
                  <d.icon className="h-7 w-7 text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-[#0c2340] text-base mb-2">{d.title}</h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">{d.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReformaSection() {
  const highlights = ["Análise dos impactos no negócio", "Revisão fiscal completa", "Planejamento tributário estratégico", "Orientação personalizada", "Acompanhamento das mudanças"];
  return (
    <section id="reforma" className="py-20 sm:py-28 bg-[#0c2340] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b8973e] to-transparent" />
      <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#b8973e]/5 blur-3xl" /></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#b8973e]/20 rounded-2xl" />
              <img src="/reforma-img.png" alt="Reforma Tributária" className="rounded-xl shadow-2xl w-full object-cover max-h-[480px] relative z-10" />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <span className="inline-block text-sm font-bold text-[#d4bc7e] tracking-wider uppercase mb-3">Reforma Tributária</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">A Reforma Tributária pode impactar sua empresa. <span className="text-[#d4bc7e]">Você já sabe como?</span></h2>
            <p className="mt-6 text-white/60 leading-relaxed">As mudanças tributárias exigem atenção, planejamento e orientação especializada. A Contábil Machado de Assis acompanha de perto os impactos da nova legislação.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }} viewport={{ once: true }} className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#b8973e]/15 flex items-center justify-center"><CheckCircle2 className="h-4 w-4 text-[#d4bc7e]" /></div>
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <Button size="lg" onClick={() => window.open(WA_LINK, "_blank")} className="mt-8 bg-white text-[#0c2340] hover:bg-[#f7f9fc] font-bold shadow-xl shadow-black/15 border-0 rounded-lg">Avaliar impacto na minha empresa<ArrowRight className="ml-2 h-5 w-5" /></Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="processo" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-bold text-[#b8973e] tracking-wider uppercase mb-3">Nosso processo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2340] leading-tight">Um processo pensado para entender a <span className="text-[#1e3f63]">realidade da sua empresa</span></h2>
        </FadeIn>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-[#edf1f7] rounded-full" />
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative flex-shrink-0">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#0c2340] flex items-center justify-center z-10 shadow-lg shadow-[#0c2340]/20">
                      <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-[#f7f9fc] border border-[#e2e5ea] rounded-xl p-5 sm:p-6 hover:border-[#b8973e]/30 hover:shadow-md transition-all duration-300">
                    <span className="text-[#b8973e] font-bold text-sm tracking-wider">ETAPA {step.num}</span>
                    <h3 className="text-[#0c2340] font-bold text-lg mt-1 mb-2">{step.title}</h3>
                    <p className="text-[#4b5563] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-bold text-[#b8973e] tracking-wider uppercase mb-3">Confiança construída</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2340] leading-tight">Crescemos por indicação porque <span className="text-[#1e3f63]">entregamos confiança.</span></h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div className="h-full p-7 rounded-2xl bg-white border border-[#e2e5ea] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                <Quote className="h-8 w-8 text-[#b8973e]/30 mb-4 flex-shrink-0" />
                <p className="text-[#4b5563] leading-relaxed flex-1 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-[#e2e5ea]">
                  <div className="font-bold text-[#0c2340] text-sm">{t.name}</div>
                  <div className="text-[#6b7280] text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#0c2340] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b8973e] to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Sua empresa merece uma contabilidade que <span className="text-[#d4bc7e]">entende o seu negócio</span></h2>
          <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">Entre em contato e descubra como a Contábil Machado de Assis pode contribuir para a segurança, organização e crescimento da sua empresa.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.open(WA_LINK, "_blank")} className="bg-white text-[#0c2340] hover:bg-[#f7f9fc] text-lg font-bold shadow-xl shadow-black/15 px-10 py-7 border-0 rounded-lg"><MessageCircle className="mr-2 h-5 w-5" />Chamar no WhatsApp</Button>
            <Button size="lg" onClick={() => window.open(WA_LINK, "_blank")} className="bg-[#1e3f63] hover:bg-[#2c5f8a] text-white font-bold shadow-xl shadow-[#1e3f63]/30 text-lg px-10 py-7 border-0 rounded-lg">Solicitar diagnóstico contábil<ArrowRight className="ml-2 h-5 w-5" /></Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = [{ label: "Início", href: "#inicio" }, { label: "Sobre", href: "#sobre" }, { label: "Serviços", href: "#servicos" }, { label: "Reforma Tributária", href: "#reforma" }, { label: "Contato", href: "#contato" }];
  return (
    <footer id="contato" className="bg-[#081b2e] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-white/5 rounded-xl p-3 inline-block mb-4 border border-white/10">
              <img src="/logo-contabil.png" alt="Logo" className="h-14 w-auto" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">Há mais de 40 anos oferecendo soluções contábeis, fiscais e trabalhistas para empresas de todo o Brasil.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#d4bc7e] text-sm uppercase tracking-wider mb-4">Links rápidos</h4>
            <ul className="space-y-2">{footerLinks.map((l) => (<li key={l.href}><button onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })} className="text-white/40 hover:text-[#d4bc7e] text-sm transition-colors">{l.label}</button></li>))}</ul>
          </div>
          <div>
            <h4 className="font-bold text-[#d4bc7e] text-sm uppercase tracking-wider mb-4">Serviços</h4>
            <ul className="space-y-2">{SERVICES.slice(0, 5).map((s) => (<li key={s.title}><span className="text-white/40 text-sm">{s.title}</span></li>))}</ul>
          </div>
          <div>
            <h4 className="font-bold text-[#d4bc7e] text-sm uppercase tracking-wider mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-[#b8973e] flex-shrink-0 mt-0.5" /><span className="text-white/40 text-sm">Rua Conselheiro Justino, 988<br/>Bairro Campestre — Santo André, SP<br/>CEP 09070-580</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#b8973e] flex-shrink-0" /><span className="text-white/40 text-sm">(11) 4421-8233</span></div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-[#b8973e] flex-shrink-0" /><span className="text-white/40 text-sm">Seg a Sex: 8h às 17h30</span></div>
              <div className="flex items-center gap-3"><MessageSquare className="h-4 w-4 text-[#b8973e] flex-shrink-0" /><a href="mailto:Contato@contabilmachado.com.br" className="text-white/40 hover:text-[#d4bc7e] text-sm transition-colors">Contato@contabilmachado.com.br</a></div>
            </div>
            <Button onClick={() => window.open(WA_LINK, "_blank")} className="mt-6 bg-[#0c2340] hover:bg-[#1e3f63] text-white font-semibold shadow-lg shadow-[#0c2340]/30 w-full border-0 rounded-lg"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</Button>
          </div>
        </div>
        <Separator className="my-10 bg-white/8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/25">&copy; {new Date().getFullYear()} Contábil Machado de Assis. Todos os direitos reservados.</p>
          <p className="text-sm text-[#b8973e]/40 italic">Experiência que gera confiança. Relacionamento que gera resultados.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const h = () => setVisible(window.scrollY > 400); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <AnimatePresence>{visible && (
      <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/40 flex items-center justify-center" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor"><path d="M16.004 0C7.165 0 0 7.165 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.054 31.29l6.07-1.95a15.9 15.9 0 0 0 8.88 2.664C24.835 32.004 32 24.839 32 16.004S24.835 0 16.004 0zm9.307 22.603c-.39 1.1-1.932 2.013-3.168 2.28-.846.18-1.95.323-5.67-1.22-4.76-1.97-7.82-6.82-8.06-7.143-.23-.323-1.932-2.576-1.932-4.91s1.223-3.486 1.657-3.963c.39-.434 1.037-.65 1.657-.65.2 0 .378.01.543.018.434.018.65.044.934.726.39 1.013 1.223 2.975 1.33 3.168.108.192.216.478.065.747-.15.27-.28.39-.473.606-.192.216-.378.378-.57.606-.18.18-.378.378-.162.746.216.368 1.013 1.67 2.173 2.706 1.492 1.322 2.748 1.734 3.116 1.926.368.192.582.162.794-.09.217-.258.928-1.082 1.176-1.45.248-.368.496-.306.838-.183.342.12 2.174 1.027 2.548 1.213.374.187.622.28.714.434.09.15.09.876-.3 1.977z" /></svg>
      </motion.a>
    )}</AnimatePresence>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const h = () => setVisible(window.scrollY > 600); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <AnimatePresence>{visible && (
      <motion.button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full bg-[#0c2340] shadow-xl shadow-[#0c2340]/40 flex items-center justify-center text-white hover:bg-[#1e3f63] transition-colors" aria-label="Voltar ao topo">
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    )}</AnimatePresence>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsBanner />
        <TargetAudienceSection />
        <SobreSection />
        <ServicesSection />
        <DifferentialsSection />
        <ReformaSection />
        <ProcessSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}