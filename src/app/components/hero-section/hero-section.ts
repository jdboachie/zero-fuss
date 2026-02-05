import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ButtonComponent],
  template: `
    <section
      class="relative flex flex-col items-center gap-10 pt-20 max-w-360 mx-auto"
      aria-labelledby="hero-title"
    >
      <img
        ngSrc="/images/pattern-squiggle-1.svg"
        alt=""
        width="1774"
        height="1556"
        class="pointer-events-none absolute -top-6.75 opacity-40 z-0"
        aria-hidden="true"
      />

      <div class="relative flex max-w-201.25 flex-col items-center gap-3 text-center">
        <h1
          id="hero-title"
          class="relative font-(family-name:--font-heading) text-[72px] font-extrabold leading-[1.1] tracking-[-0.02em] text-(--color-primary-dark)"
        >
          <span class="relative inline-block">
            Healthy
            <span
              class="absolute bottom-0 left-0 -z-1 h-9.75 w-full rounded bg-(--color-accent-orange) opacity-40"
              aria-hidden="true"
            ></span>
          </span>
           meals, zero fuss
        </h1>
        <p
          class="max-w-145 font-(family-name:--font-body) text-xl font-medium leading-normal tracking-[-0.02em] text-(--color-secondary)"
        >
          Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no
          guesswork.
        </p>
      </div>

      <app-button size="large">Start exploring</app-button>

      <div
        class="relative h-132.5 w-298 overflow-hidden rounded-xl bg-white shadow-[0_0_0_12px_rgba(255,255,255,1)]"
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
