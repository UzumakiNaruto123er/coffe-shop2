'use client';

import { useState } from 'react';
import { Phone, Camera, MapPin, Send } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface ContactViewProps {
  locale: Locale;
  contactEmail?: string;
}

export function ContactView({ locale, contactEmail }: ContactViewProps) {
  const t = getDictionary(locale);
  const page = t.contactPage;
  const hasEmail = typeof contactEmail === 'string' && contactEmail.trim().length > 0;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const channels = [
    {
      icon: Phone,
      label: page.callLabel,
      description: page.callDesc,
      value: BUSINESS_INFO.phone,
      href: BUSINESS_INFO.phoneHref,
      action: t.common.callUs,
      external: false,
    },
    {
      icon: Camera,
      label: page.instagramLabel,
      description: page.instagramDesc,
      value: BUSINESS_INFO.instagram,
      href: BUSINESS_INFO.instagramUrl,
      action: t.nav.follow,
      external: true,
    },
    {
      icon: MapPin,
      label: page.addressLabel,
      description: BUSINESS_INFO.address,
      value: BUSINESS_INFO.address,
      href: GOOGLE_MAPS.directionsUrl,
      action: t.common.directions,
      external: true,
    },
  ] as const;

  const validate = () => {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) next.name = page.required;
    if (!email.trim()) next.email = page.required;
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = page.invalidEmail;
    if (!message.trim()) next.message = page.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const openMailClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasEmail || !validate()) return;
    const subject = `Message from ${name.trim()} (${email.trim()})`;
    const body = `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.contact} href="/contact" />
        <div className="max-w-3xl mb-16">
          <span className="text-azure-500 text-xs uppercase tracking-[0.4em] mb-4 block">
            {page.tagline}
          </span>
          <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">
            {page.title1} <span className="italic text-azure-500">{page.title2}</span>
          </h1>
          <p className="text-xl text-cream-100/60 leading-relaxed measure">{page.subtitle}</p>
        </div>

        <p className="text-sm text-cream-100/50 border-l-2 border-azure-500/40 pl-4 mb-12 max-w-2xl">
          {page.note}
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {hasEmail ? (
              <form onSubmit={openMailClient} noValidate className="max-w-xl">
                <h2 className="font-display text-3xl text-cream-100 mb-2">{page.formTitle}</h2>
                <p className="text-sm text-cream-100/60 mb-10">{page.formIntro}</p>

                <div className="space-y-8">
                  <Input
                    id="contact-name"
                    label={page.nameLabel}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={errors.name}
                    required
                    autoComplete="name"
                  />
                  <Input
                    id="contact-email"
                    label={page.emailLabel}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    required
                    autoComplete="email"
                  />
                  <Textarea
                    id="contact-message"
                    label={page.messageLabel}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={errors.message}
                    required
                    rows={6}
                  />
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <Button type="submit" variant="primary" size="lg" icon={<Send className="w-4 h-4" aria-hidden="true" />}>
                    {page.send}
                  </Button>
                  <p className="text-xs text-cream-100/40 max-w-xs">{page.documentNote}</p>
                </div>
              </form>
            ) : (
              <div className="max-w-xl border border-cream-200 bg-charcoal-900 p-8 lg:p-10 rounded-[1.5rem]">
                <h2 className="font-display text-3xl text-cream-100 mb-4">{page.noFormTitle}</h2>
                <p className="text-cream-100/60 mb-8">{page.noEmail}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" asChild>
                    <a href={BUSINESS_INFO.phoneHref} className="inline-flex items-center gap-3">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      {BUSINESS_INFO.phone}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3"
                    >
                      <Camera className="w-4 h-4" aria-hidden="true" />
                      {BUSINESS_INFO.instagram}
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4">
              {channels.map(({ icon: Icon, label, description, value, href, action, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group border border-cream-200 bg-charcoal-900 p-8 flex flex-col rounded-[1.5rem] transition-colors hover:border-azure-500/40"
                >
                  <Icon className="w-7 h-7 text-navy-500 mb-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h2 className="font-display text-xl text-cream-100 mb-2">{label}</h2>
                  <p className="text-cream-100/55 text-sm mb-6">{description}</p>
                  <span className="mt-auto text-xs uppercase tracking-[0.25em] text-navy-600 font-bold">
                    {action}
                  </span>
                  <span className="sr-only">{value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}