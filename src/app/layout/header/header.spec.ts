import { TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  it('toggles the mobile menu and closes it on Escape', async () => {
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;
    const toggle = host.querySelector<HTMLButtonElement>('.menu-toggle')!;

    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(host.querySelector('#mobile-menu')!.hasAttribute('inert')).toBe(false);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('links to the resume download', async () => {
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();
    const link = (fixture.nativeElement as HTMLElement).querySelector('a[download]');
    expect(link?.getAttribute('href')).toBe('resume/Navneet_Kumar_Senior_Software_Engineer.pdf');
  });
});

describe('ThemeToggle', () => {
  afterEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset['theme'];
  });

  it('switches theme and remembers the choice', async () => {
    document.documentElement.dataset['theme'] = 'dark';
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();
    const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('app-theme-toggle button')!;
    expect(button.getAttribute('aria-label')).toBe('Switch to light theme');

    button.click();
    await fixture.whenStable();
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(button.getAttribute('aria-label')).toBe('Switch to dark theme');
  });
});
