import { fallbackLang, messages, type Lang } from '../data/i18n';

const STORAGE_KEY = 'origin.lang';
const ZH = 'zh';
const EN = 'en';

let currentLang: Lang = fallbackLang;

function isLang(value: string | null | undefined): value is Lang {
  return value === ZH || value === EN;
}

function detectSystemLang(): Lang {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  return langs.some((item) => item.toLowerCase().startsWith('zh')) ? ZH : EN;
}

function getMessage(lang: Lang, key: string): string | null {
  return messages[lang][key] ?? messages[fallbackLang][key] ?? null;
}

function interpolate(template: string, el: HTMLElement | HTMLMetaElement): string {
  return template.replace(/\{\{([a-zA-Z0-9_-]+)\}\}/g, (_, token) => {
    const datasetKey = token.replace(/-([a-z])/g, (_: string, c: string) => c.toUpperCase());
    return (el as HTMLElement).dataset?.[datasetKey] ?? '';
  });
}

function applyTranslations(lang: Lang): void {
  document.documentElement.lang = lang === ZH ? 'zh-CN' : 'en-US';

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = getMessage(lang, key);
    if (value == null) return;
    el.textContent = interpolate(value, el);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (!key) return;
    const value = getMessage(lang, key);
    if (value == null) return;
    el.setAttribute('aria-label', interpolate(value, el));
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (!key) return;
    const value = getMessage(lang, key);
    if (value == null) return;
    el.setAttribute('title', interpolate(value, el));
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!key) return;
    const value = getMessage(lang, key);
    if (value == null) return;
    el.setAttribute('placeholder', interpolate(value, el));
  });

  document.querySelectorAll<HTMLMetaElement>('[data-i18n-content]').forEach((el) => {
    const key = el.dataset.i18nContent;
    if (!key) return;
    const value = getMessage(lang, key);
    if (value == null) return;
    el.setAttribute('content', interpolate(value, el));
  });
}

function syncSwitchState(lang: Lang): void {
  document.querySelectorAll<HTMLElement>('[data-lang-switch]').forEach((btn) => {
    const active = btn.dataset.langSwitch === lang;
    btn.setAttribute('aria-pressed', String(active));
  });
}

function setLang(lang: Lang, persist: boolean): void {
  currentLang = lang;
  applyTranslations(lang);
  syncSwitchState(lang);

  if (!persist) return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Ignore private mode/storage errors.
  }
}

function getInitialLang(): Lang {
  const hinted = document.documentElement.dataset.langCandidate;
  if (isLang(hinted)) return hinted;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // Ignore.
  }
  return detectSystemLang();
}

function bindSwitcher(): void {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const trigger = target?.closest<HTMLElement>('[data-lang-switch]');
    if (!trigger) return;
    const next = trigger.dataset.langSwitch;
    if (!isLang(next) || next === currentLang) return;
    setLang(next, true);
  });
}

function refreshCurrentLang(): void {
  applyTranslations(currentLang);
  syncSwitchState(currentLang);
}

function init(): void {
  const initial = getInitialLang();
  setLang(initial, false);
  document.documentElement.classList.remove('i18n-pending');
  bindSwitcher();

  // Re-apply once islands are ready and once after a short delay.
  // This avoids DOM observer side effects with client:visible islands.
  window.addEventListener('astro:load', refreshCurrentLang);
  window.addEventListener('astro:page-load', refreshCurrentLang);
  window.setTimeout(refreshCurrentLang, 600);
}

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
