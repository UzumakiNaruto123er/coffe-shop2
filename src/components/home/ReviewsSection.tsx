import { Star } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface ReviewsSectionProps {
  locale: Locale;
}

export function ReviewsSection({ locale }: ReviewsSectionProps) {
  const t = getDictionary(locale);
  const fullStars = Math.floor(BUSINESS_INFO.rating);

  return (
    <Section padding="lg" variant="dark" aria-label={t.home.reviews.eyebrow}>
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow mb-6">{t.home.reviews.eyebrow}</span>
            <h2 className="display-title font-display font-light text-white">
              {t.home.reviews.title1}{' '}
              <span className="italic text-azure-500">{t.home.reviews.title2}</span>
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed measure">
              {t.home.reviews.subtitle}
            </p>
          </div>

          <a
            href={GOOGLE_MAPS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md mx-auto overflow-hidden border border-white/15 bg-white/5 p-8 transition-colors hover:border-azure-500/60 group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
                  <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C41.4 36.1 44 30.6 44 24c0-1.3-.1-2.6-.4-3.9z"/>
                </svg>
                <span className="text-xs uppercase tracking-widest font-bold text-white">
                  Google
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-azure-500 font-bold text-sm">
                  {BUSINESS_INFO.rating.toFixed(1)}
                </span>
                <div className="flex" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className={
                        i < fullStars
                          ? 'w-4 h-4 fill-azure-500 text-azure-500'
                          : 'w-4 h-4 text-white/30'
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-5">
              {BUSINESS_INFO.reviewCount} — {t.home.reviews.ratingSub}
            </p>
            <span className="block text-center text-xs uppercase tracking-[0.2em] text-azure-500 group-hover:text-azure-400 transition-colors border border-azure-500/50 px-6 py-3">
              {t.home.reviews.cta}
            </span>
          </a>
        </div>
      </Container>
    </Section>
  );
}