import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/** Must match the key used by the inline script in index.html. */
const STORAGE_KEY = 'theme';
const THEME_COLORS: Record<Theme, string> = { dark: '#0a0a0c', light: '#fafafa' };

/**
 * Owns the `data-theme` attribute on <html>. The initial value is applied before first paint by
 * the inline script in index.html (saved choice, else system preference); this service picks it
 * up, follows system changes until the user chooses, and persists manual choices.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly theme$ = signal<Theme>('dark');
  readonly theme = this.theme$.asReadonly();

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) {
      return;
    }
    const root = this.document.documentElement;
    this.theme$.set(root.dataset['theme'] === 'light' ? 'light' : 'dark');

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (event) => {
      if (!this.savedTheme()) {
        this.apply(event.matches ? 'light' : 'dark');
      }
    });
  }

  toggle(): void {
    const next: Theme = this.theme$() === 'dark' ? 'light' : 'dark';
    this.apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the switch still works for this visit.
    }
  }

  private apply(theme: Theme): void {
    const root = this.document.documentElement;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('theme-transition');
      setTimeout(() => root.classList.remove('theme-transition'), 320);
    }
    root.dataset['theme'] = theme;
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
    this.theme$.set(theme);
  }

  private savedTheme(): Theme | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }
}
