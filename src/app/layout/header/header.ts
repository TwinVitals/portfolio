import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { NAV_ITEMS, PROFILE } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { ThemeToggle } from '../../shared/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [Icon, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.scrolled]': 'scrolled()',
    '[class.menu-open]': 'menuOpen()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  protected readonly profile = PROFILE;
  protected readonly navItems = NAV_ITEMS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeSection = signal('home');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      this.onScroll();

      // Highlight the nav item whose section crosses the middle of the viewport.
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const item of this.navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          observer.observe(section);
        }
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
