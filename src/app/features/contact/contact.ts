import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <div class="panel" appReveal>
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">Let’s build something great.</h2>
        <p class="text">
          Interested in backend engineering, distributed systems, cloud platforms or challenging technical problems?
        </p>
        <div class="actions">
          <a class="btn btn-primary" [href]="'mailto:' + profile.email">
            <app-icon name="mail" [size]="17" /> Email Me
          </a>
          <a class="btn btn-secondary" [href]="profile.linkedin.href" target="_blank" rel="noopener">
            <app-icon name="linkedin" [size]="16" /> LinkedIn
          </a>
          <a class="btn btn-secondary" [href]="profile.github.href" target="_blank" rel="noopener">
            <app-icon name="github" [size]="17" /> GitHub
          </a>
        </div>
        <p class="email">
          <a [href]="'mailto:' + profile.email">{{ profile.email }}</a>
        </p>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .panel {
      position: relative;
      overflow: hidden;
      padding: clamp(2.5rem, 7vw, 5rem) clamp(1.5rem, 5vw, 4rem);
      border: 1px solid var(--border);
      border-radius: var(--radius-xl);
      background:
        radial-gradient(ellipse 60% 80% at 50% 0%, rgb(var(--accent-rgb) / 0.12), transparent 70%),
        var(--surface);
      text-align: center;
    }
    h2 {
      margin: 1rem 0 0;
      font-size: clamp(2rem, 5vw, 3.25rem);
      line-height: 1.08;
      letter-spacing: -0.035em;
      font-weight: 650;
    }
    .text {
      max-width: 34rem;
      margin: 1.25rem auto 0;
      font-size: 1.0625rem;
      color: var(--text-muted);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 2.25rem;
    }
    .email { margin: 1.75rem 0 0; font-family: var(--font-mono); font-size: 0.875rem; }
    .email a { color: var(--text-subtle); text-decoration: none; transition: color 150ms ease; }
    .email a:hover { color: var(--text); }
    @media (max-width: 520px) {
      .actions .btn { flex: 1 1 100%; }
    }
  `,
})
export class Contact {
  protected readonly profile = PROFILE;
}
