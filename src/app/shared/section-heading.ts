import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="eyebrow">{{ eyebrow() }}</p>
    <h2 [id]="headingId()">{{ title() }}</h2>
    @if (lead()) {
      <p class="lead">{{ lead() }}</p>
    }
  `,
  styles: `
    :host { display: block; max-width: 44rem; margin-bottom: clamp(2.25rem, 5vw, 3.5rem); }
    h2 {
      margin: 0.75rem 0 0;
      font-size: clamp(1.875rem, 4vw, 2.75rem);
      line-height: 1.1;
      letter-spacing: -0.03em;
      font-weight: 650;
    }
    .lead { margin: 1rem 0 0; color: var(--text-muted); font-size: 1.0625rem; }
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly lead = input<string>();
}
