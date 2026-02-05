import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-cta-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ButtonComponent],
  template: `
    <section
      class="relative mx-auto max-w-(--max-content-width) overflow-hidden rounded-2xl bg-(--color-cta-bg) py-24"
      aria-labelledby="cta-title"
    >
      <img
        ngSrc="/images/pattern-fork.svg"
        alt=""
        width="315"
        height="390"
        class="pointer-events-none absolute -left-18.25 top-6"
        aria-hidden="true"
      />

      <img
        ngSrc="/images/pattern-knife.svg"
        alt=""
        width="338"
        height="338"
        class="pointer-events-none absolute -right-17.5 top-6"
        aria-hidden="true"
      />

      <div class="relative z-10 flex flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-3 text-center">
          <h2
            id="cta-title"
            class="font-(family-name:--font-heading) text-5xl font-extrabold leading-[1.36] tracking-[-0.03em] text-(--color-primary-dark)"
          >
            Ready to cook smarter?
          </h2>
          <p
            class="font-(family-name:--font-body) text-xl font-medium leading-normal tracking-[-0.02em] text-(--color-secondary)"
          >
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>

        <app-button size="large">Browse recipes</app-button>
      </div>
    </section>
  `,
})
export class CtaSectionComponent {}
