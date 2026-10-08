import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-about',
  imports: [Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container grid" appReveal>
      <app-section-heading eyebrow="About" headingId="about-title"
                           title="I build reliable and scalable backend systems." />
      <div class="body">
        @for (paragraph of profile.about; track $index) {
          <p>{{ paragraph }}</p>
        }
        <h3>Industry domains</h3>
        <ul class="chips">
          @for (domain of domains; track domain) {
            <li class="chip">{{ domain }}</li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .grid {
      display: grid;
      grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
      gap: 2rem clamp(2rem, 6vw, 5rem);
    }
    .body p { margin: 0 0 1.25rem; font-size: 1.0625rem; line-height: 1.75; color: var(--text-muted); }
    .body p:first-child { color: var(--text); }
    h3 {
      margin: 2rem 0 0.875rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-subtle);
    }
    @media (max-width: 860px) {
      .grid { grid-template-columns: 1fr; }
      app-section-heading { margin-bottom: 0; }
    }
  `,
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly domains = EXPERIENCE.map((job) => job.domain);
}
