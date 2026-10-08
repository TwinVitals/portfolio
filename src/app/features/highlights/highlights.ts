import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HIGHLIGHTS } from '../../data/profile';

@Component({
  selector: 'app-highlights',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <h2 class="visually-hidden">Engineering highlights</h2>
      <dl class="grid">
        @for (item of highlights; track item.label) {
          <div class="stat">
            <dt>{{ item.label }}</dt>
            <dd class="value">{{ item.value }}</dd>
            <dd class="detail">{{ item.detail }}</dd>
          </div>
        }
      </dl>
    </div>
  `,
  styles: `
    :host { display: block; }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin: 0;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      background: var(--surface);
      overflow: hidden;
    }
    .stat {
      display: flex;
      flex-direction: column;
      padding: 1.75rem 1.5rem;
    }
    .stat + .stat { border-left: 1px solid var(--border); }
    dt { order: 2; margin-top: 0.5rem; font-weight: 550; color: var(--text); }
    .value {
      order: 1;
      margin: 0;
      font-size: clamp(2.25rem, 4vw, 2.75rem);
      font-weight: 650;
      letter-spacing: -0.04em;
      line-height: 1;
      color: var(--text);
    }
    .detail { order: 3; margin: 0.35rem 0 0; font-size: 0.875rem; color: var(--text-subtle); }
    @media (max-width: 860px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
      .stat + .stat { border-left: 0; }
      .stat:nth-child(even) { border-left: 1px solid var(--border); }
      .stat:nth-child(n + 3) { border-top: 1px solid var(--border); }
    }
    @media (max-width: 420px) {
      .stat { padding: 1.25rem 1rem; }
    }
  `,
})
export class Highlights {
  protected readonly highlights = HIGHLIGHTS;
}
