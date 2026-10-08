import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container inner">
      <p>© {{ year }} {{ profile.name }} · {{ profile.title }}</p>
      <div class="links">
        <a [href]="'mailto:' + profile.email">Email</a>
        <a [href]="profile.linkedin.href" target="_blank" rel="noopener">LinkedIn</a>
        <a [href]="profile.github.href" target="_blank" rel="noopener">GitHub</a>
        <a class="top" href="#home">Back to top <app-icon name="arrow-up" [size]="14" /></a>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; border-top: 1px solid var(--border); }
    .inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem 2rem;
      padding-block: 2rem;
      font-size: 0.875rem;
      color: var(--text-subtle);
    }
    p { margin: 0; }
    .links { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; }
    a { color: var(--text-muted); text-decoration: none; transition: color 150ms ease; }
    a:hover { color: var(--text); }
    .top { display: inline-flex; align-items: center; gap: 0.35rem; }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
