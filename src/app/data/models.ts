/**
 * Content models. Everything rendered on the site is described by these types so the
 * portfolio can be updated in `src/app/data/*` without touching UI components.
 */

export interface ExternalLink {
  readonly label: string;
  readonly href: string;
  readonly display: string;
}

export interface ProfilePhoto {
  /** Path relative to `public/`, e.g. `images/navneet-kumar.webp`. */
  readonly src: string;
  readonly alt: string;
}

export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly specialization: string;
  readonly currentRole: string;
  readonly headline: string;
  readonly intro: string;
  readonly about: readonly string[];
  readonly email: string;
  readonly linkedin: ExternalLink;
  readonly github: ExternalLink;
  readonly resumeUrl: string;
  /** Hero photo; `null` shows the monogram placeholder. */
  readonly photo: ProfilePhoto | null;
  readonly heroSkills: readonly string[];
}

export interface Highlight {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
}

export interface SkillGroup {
  readonly label: string;
  readonly skills: readonly string[];
}

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly client?: string;
  readonly role: string;
  readonly period: string;
  readonly location: string;
  readonly domain: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
}

export interface WorkItem {
  readonly index: string;
  readonly title: string;
  readonly context: string;
  readonly description: string;
  readonly stack: readonly string[];
  /** Id of the matching experience entry. */
  readonly experienceId: string;
}

export interface Education {
  readonly degree: string;
  readonly short: string;
  readonly institution: string;
  readonly year: number;
}

export interface NavItem {
  readonly id: string;
  readonly label: string;
}
