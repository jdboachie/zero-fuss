import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ButtonComponent],
  template: `
    <section
      class="relative flex flex-col items-center max-lg:items-start gap-8 px-4 pt-12 md:gap-10 md:px-8 md:pt-12 lg:pt-20"
      aria-labelledby="hero-title"
    >
      <img
        ngSrc="/images/pattern-squiggle-1.svg"
        alt=""
        width="1774"
        height="1556"
        class="pointer-events-none w-full absolute top-16 -z-10 opacity-40 max-sm:top-92 left-0 md:top-60 lg:-top-6.75"
        aria-hidden="true"
      />

      <div
        class="relative flex max-w-full flex-col items-start gap-4 text-left md:max-w-full lg:max-w-201.25 md:items-center lg:text-center"
      >
        <h1
          id="hero-title"
          class="relative font-(family-name:--font-heading) text-[52px] font-extrabold leading-[1.1] tracking-[-0.04em] text-(--color-primary-dark) md:text-[64px] md:tracking-[-0.03em] lg:text-[72px] lg:tracking-[-0.02em]"
        >
          <span class="relative inline-block">
            Healthy
            <span
              class="absolute bottom-1 left-0 -z-10 h-6 w-full rounded bg-(--color-accent-orange) opacity-40 md:h-7 lg:bottom-1.5 lg:h-9.75"
              aria-hidden="true"
            ></span>
          </span>
           meals, zero fuss
        </h1>
        <p
          class="max-w-full font-(family-name:--font-body) text-xl font-medium leading-normal tracking-[-0.02em] text-(--color-secondary) md:max-w-full lg:max-w-145"
        >
          Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no
          guesswork.
        </p>
      </div>

      <app-button size="large">Start exploring</app-button>

      <div
        class="relative h-50 w-full overflow-hidden rounded-lg bg-white shadow-[0_0_0_3px_rgba(255,255,255,1)] md:h-87.5 md:w-176 md:rounded-lg md:shadow-[0_0_0_7px_rgba(255,255,255,1)] lg:h-132.5 lg:w-298 lg:rounded-xl lg:shadow-[0_0_0_12px_rgba(255,255,255,1)]"
      >
        <img
          ngSrc="/images/image-home-hero-large.webp"
          alt="A colorful spread of fresh, healthy ingredients including vegetables, fruits, and whole grains arranged beautifully on a table"
          fill
          priority
          class="object-cover"
        />
      </div>
    </section>
  `,
})
export class HeroSectionComponent {}
