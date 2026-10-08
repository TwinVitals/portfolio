import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/skills';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-skills',
  imports: [Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <app-section-heading eyebrow="Skills" headingId="skills-title" title="Technologies and practices"
                           lead="The tools I rely on to design, build and run backend systems in production." />
      <dl class="groups" appReveal>
        @for (group of groups; track group.label) {
          <div class="group">
            <dt>{{ group.label }}</dt>
            <dd>
              <ul class="chips">
                @for (skill of group.skills; track skill) {
                  <li class="chip">{{ skill }}</li>
                }
              </ul>
            </dd>
          </div>
        }
      </dl>
    </div>
  `,
  styles: `
    :host { display: block; }
    .groups {
      margin: 0;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      background: var(--surface);
    }
    .group {
      display: grid;
      grid-template-columns: 13rem 1fr;
      gap: 0.75rem 2rem;
      align-items: baseline;
      padding: 1.25rem 1.5rem;
    }
    .group + .group { border-top: 1px solid var(--border); }
    dt { font-weight: 550; color: var(--text); }
    dd { margin: 0; }
    @media (max-width: 700px) {
      .group { grid-template-columns: 1fr; padding: 1.125rem 1.125rem 1.25rem; }
    }
  `,
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
