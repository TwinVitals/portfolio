import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '../core/theme';
import { Icon } from './icon';

/**
 * Both icons are always rendered and CSS shows the right one from `data-theme`, so the
 * prerendered markup matches on hydration and the correct icon shows before the app boots.
 */
@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" (click)="theme.toggle()" [attr.aria-label]="label()" [attr.title]="label()">
      <app-icon class="moon" name="moon" [size]="17" />
      <app-icon class="sun" name="sun" [size]="18" />
    </button>
  `,
  styles: `
    :host { display: inline-flex; }
    button {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      padding: 0;
      border: 1px solid transparent;
      border-radius: 8px;
      background: transparent;
      color: var(--text-muted);
      cursor: pointer;
      transition: color 150ms ease, background-color 150ms ease;
    }
    button:hover { color: var(--text); background: var(--surface-2); }
    .sun { display: none; }
    :host-context([data-theme='dark']) .moon { display: none; }
    :host-context([data-theme='dark']) .sun { display: inline-flex; }
  `,
})
export class ThemeToggle {
  protected readonly theme = inject(ThemeService);
  protected readonly label = computed(() =>
    this.theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
  );
}
