import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../data/profile';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-education',
  imports: [Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <app-section-heading eyebrow="Education" headingId="education-title" title="Academic background" />
      <ul class="grid" appReveal>
        @for (item of education; track item.short) {
          <li class="card">
            <span class="short">{{ item.short }}</span>
            <div>
              <h3>{{ item.degree }}</h3>
              <p>{{ item.institution }}</p>
            </div>
            <span class="year">{{ item.year }}</span>
          </li>
        }
      </ul>
    </div>
  `,
  styles: `
    :host { display: block; }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .card {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 1.25rem;
      align-items: start;
      padding: 1.5rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      background: var(--surface);
    }
    .short {
      display: grid;
      place-items: center;
      width: 3rem;
      height: 3rem;
      border: 1px solid var(--border-strong);
      border-radius: 10px;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--accent);
    }
    h3 { margin: 0; font-size: 1.0625rem; font-weight: 600; letter-spacing: -0.01em; }
    p { margin: 0.3rem 0 0; color: var(--text-muted); }
    .year { font-family: var(--font-mono); font-size: 0.875rem; color: var(--text-subtle); }
    @media (max-width: 760px) {
      .grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 420px) {
      .card { grid-template-columns: auto 1fr; }
      .year { grid-column: 2; }
    }
  `,
})
export class EducationSection {
  protected readonly education = EDUCATION;
}
