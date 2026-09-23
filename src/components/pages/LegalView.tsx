import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getDictionary, type Dictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

export type LegalKey = Exclude<keyof Dictionary['legal'], 'lastUpdated' | 'updatedDate'>;

interface LegalViewProps {
  locale: Locale;
  legalKey: LegalKey;
}

export function LegalView({ locale, legalKey }: LegalViewProps) {
  const dict = getDictionary(locale);
  const page = dict.legal[legalKey];

  return (
    <Section id="legal" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={page.title} href={`/${legalKey}`} />
        <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">
          {dict.legal.lastUpdated}: {dict.legal.updatedDate}
        </span>
        <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">{page.title}</h1>
        <p className="text-lg text-cream-100/60 leading-relaxed mb-12 measure">{page.intro}</p>

        <div className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-cream-100 mb-3">{section.heading}</h2>
              <p className="text-cream-100/60 leading-relaxed measure">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-16 text-sm text-cream-100/40">{dict.common.disclaimer}</p>
      </Container>
    </Section>
  );
}