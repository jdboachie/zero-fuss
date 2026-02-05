import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-cta-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ButtonComponent],
  template: `
    <section
      class="relative mx-4 overflow-hidden rounded-2xl bg-(--color-cta-bg) px-4 py-12 md:mx-8 md:px-0 md:py-20 lg:mx-auto lg:max-w-(--max-content-width) lg:py-24"
      aria-labelledby="cta-title"
    >
      <img
        ngSrc="/images/pattern-fork.svg"
        alt=""
        width="179"
        height="232"
        class="pointer-events-none absolute -left-12 bottom-0 hidden md:block md:h-58 md:w-auto lg:-left-18.25 lg:top-6 lg:h-auto lg:w-auto"
        aria-hidden="true"
      />

      <img
        ngSrc="/images/pattern-knife.svg"
        alt=""
        width="172"
        height="172"
        class="pointer-events-none absolute -top-12 right-0 hidden md:block md:h-43 md:w-auto lg:-right-17.5 lg:top-6 lg:h-auto lg:w-auto"
        aria-hidden="true"
      />

      <div class="relative z-10 flex flex-col items-center gap-8 md:gap-10">
        <div class="flex flex-col items-center gap-3 text-center">
          <h2
            id="cta-title"
            class="font-(family-name:--font-heading) text-[40px] font-extrabold leading-[1.2] tracking-[-0.05em] text-(--color-primary-dark) md:text-5xl md:leading-[1.36] md:tracking-[-0.03em]"
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
