import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { EducationSection } from '../education/education';
import { ExperienceSection } from '../experience/experience';
import { Hero } from '../hero/hero';
import { Highlights } from '../highlights/highlights';
import { Skills } from '../skills/skills';
import { Work } from '../work/work';

@Component({
  selector: 'app-home',
  imports: [About, Contact, EducationSection, ExperienceSection, Hero, Highlights, Skills, Work],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="home" aria-labelledby="hero-title"><app-hero /></section>
    <section aria-label="Engineering highlights"><app-highlights /></section>
    <section id="about" class="section" aria-labelledby="about-title"><app-about /></section>
    <section id="skills" class="section" aria-labelledby="skills-title"><app-skills /></section>
    <section id="experience" class="section" aria-labelledby="experience-title"><app-experience /></section>
    <section id="work" class="section" aria-labelledby="work-title"><app-work /></section>
    <section id="education" class="section" aria-labelledby="education-title"><app-education /></section>
    <section id="contact" class="section" aria-labelledby="contact-title"><app-contact /></section>
  `,
})
export class Home {}
