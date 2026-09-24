'use client';

import { useEffect } from 'react';
import { type Locale, localeDirections } from '@/lib/i18n';

const STORAGE_KEY = 'bloo-locale';

/**
 * Keeps the document `<html>` lang/dir attributes in sync with the
 * active locale (the root layout renders static defaults).
 */
export function HtmlLangSetter({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirections[locale];
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // private mode / storage disabled — ignore
    }
  }, [locale]);

  return null;
}