import { afterNextRender, DestroyRef, Directive, ElementRef, inject } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 *
 * Content is fully visible in the prerendered HTML; the hidden state is only applied in the
 * browser to elements that start below the fold, and never when the user prefers reduced motion.
 */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const belowFold = element.getBoundingClientRect().top > window.innerHeight;
      if (reduceMotion || !belowFold || !('IntersectionObserver' in window)) {
        return;
      }

      element.classList.add('reveal');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
