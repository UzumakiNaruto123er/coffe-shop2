import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface StatsProps {
  locale: Locale;
}

export function Stats({ locale }: StatsProps) {
  const t = getDictionary(locale);
  const items = [
    { value: t.home.stats.priceValue, label: t.home.stats.priceLabel },
    { value: t.home.stats.hoursValue, label: t.home.stats.hoursLabel },
  ];

  return (
    <Section padding="sm" variant="alternate">
      <Container size="lg" padding="md">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-cream-200 py-12 max-w-xl">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-cream-500 mb-2">
                {item.label}
              </dt>
              <dd className="font-display text-4xl sm:text-5xl font-extrabold text-bloo-950">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}