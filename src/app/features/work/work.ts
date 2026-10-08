import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SELECTED_WORK } from '../../data/experience';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-work',
  imports: [Icon, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <app-section-heading eyebrow="Selected Work" headingId="work-title" title="Platforms I’ve helped build"
                           lead="Case studies from client and product engagements — professional work, not side projects." />
      <ul class="grid">
        @for (item of work; track item.index) {
          <li appReveal>
            <article class="card">
              <div class="top">
                <span class="index">{{ item.index }}</span>
                <span class="label">Professional Experience</span>
              </div>
              <h3>{{ item.title }}</h3>
              <p class="context">{{ item.context }}</p>
              <p class="description">{{ item.description }}</p>
              <p class="stack">{{ item.stack.join(' • ') }}</p>
              <a class="more" [href]="'#experience-' + item.experienceId"
                 [attr.aria-label]="'Read more about ' + item.title + ' in experience'">
                See role details <app-icon name="arrow-right" [size]="15" />
              </a>
            </article>
          </li>
        }
      </ul>
    </div>
  `,
  styles: `
    :host { display: block; }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.25rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li { display: flex; }
    .card {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1.75rem 1.5rem 1.5rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      background: linear-gradient(180deg, var(--surface-2), var(--surface) 45%);
      transition: border-color 200ms ease, transform 200ms ease;
    }
    .card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
    .top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .index { font-family: var(--font-mono); font-size: 0.875rem; color: var(--accent); }
    .label {
      padding: 0.2rem 0.55rem;
      border: 1px solid var(--border);
      border-radius: 999px;
      font-size: 0.6875rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-subtle);
    }
    h3 { margin: 2.25rem 0 0; font-size: 1.25rem; font-weight: 600; letter-spacing: -0.02em; }
    .context { margin: 0.3rem 0 0; font-weight: 500; color: var(--text-muted); }
    .description { margin: 1rem 0 0; line-height: 1.65; color: var(--text-muted); }
    .stack {
      margin: auto 0 0;
      padding-top: 1.5rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      line-height: 1.7;
      color: var(--text-subtle);
    }
    .more {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 1.25rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--border);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text);
      text-decoration: none;
    }
    .more app-icon { transition: transform 150ms ease; }
    .more:hover app-icon { transform: translateX(3px); }
    @media (max-width: 960px) {
      .grid { grid-template-columns: 1fr; }
      h3 { margin-top: 1.5rem; }
    }
  `,
})
export class Work {
  protected readonly work = SELECTED_WORK;
}
