'use client';

import { useState } from 'react';
import { MapPin, EnvelopeSimple, PaperPlaneTilt, ArrowSquareOut } from '@phosphor-icons/react';
import ScrollReveal from './ScrollReveal';

interface ContactProps {
  dict: {
    contact: {
      label: string;
      title: string;
      description: string;
      form: { name: string; phone: string; email: string; message: string; submit: string };
      info: { address: string; email: string; vk: string };
      vkButton: string;
    };
  };
}

export default function Contact({ dict }: ContactProps) {
  const { contact } = dict;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#013d34]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <span className="font-mono text-xs uppercase tracking-widest text-[#01a38b]/60 mb-4 block">
                {contact.label}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {contact.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base text-white/50 leading-relaxed max-w-[65ch] mb-10">
                {contact.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={contact.form.name}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#01a38b]/50 transition-colors text-sm"
                  />
                  <input
                    type="tel"
                    placeholder={contact.form.phone}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#01a38b]/50 transition-colors text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder={contact.form.email}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#01a38b]/50 transition-colors text-sm"
                />
                <textarea
                  placeholder={contact.form.message}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#01a38b]/50 transition-colors text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#01a38b] hover:bg-[#01a38b]/90 text-white font-medium rounded-xl transition-all hover:shadow-[0_0_30px_rgba(1,163,139,0.3)] active:scale-[0.98] text-sm"
                >
                  {sent ? '✓' : <>{contact.form.submit} <PaperPlaneTilt size={16} /></>}
                </button>
              </form>
            </ScrollReveal>
          </div>

          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#01a38b]/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={18} weight="light" className="text-[#01a38b]" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-1">Address</div>
                    <p className="text-sm text-white/60 leading-relaxed">{contact.info.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#01a38b]/10 flex items-center justify-center shrink-0 mt-1">
                    <EnvelopeSimple size={18} weight="light" className="text-[#01a38b]" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-1">Email</div>
                    <a href={`mailto:${contact.info.email}`} className="text-sm text-white/60 hover:text-[#01a38b] transition-colors">
                      {contact.info.email}
                    </a>
                  </div>
                </div>

                <a
                  href="https://vk.com/permvideo59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl text-sm text-white/60 hover:text-white hover:border-[#01a38b]/30 hover:bg-[#01a38b]/5 transition-all group mt-4"
                >
                  {contact.vkButton}
                  <ArrowSquareOut size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="w-full h-48 rounded-2xl overflow-hidden bg-white/5 border border-white/5 mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.5!2d55.98!3d57.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDU5JzI0LjAiTiA1NcKwNTgnNDguMCJF!5e0!3m2!1sru!2sru!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.1)' }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
