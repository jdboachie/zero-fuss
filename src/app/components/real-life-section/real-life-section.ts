import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-real-life-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <section
      class="mx-auto flex max-w-(--max-content-width) items-center gap-12 py-24"
      aria-labelledby="real-life-title"
    >
      <div class="flex flex-1 flex-col gap-5">
        <h2
          id="real-life-title"
          class="font-(family-name:--font-heading) text-5xl font-extrabold leading-[1.36] tracking-[-0.03em] text-(--color-primary-dark)"
        >
          Built for real life
        </h2>
        <p
          class="font-(family-name:--font-body) text-xl font-medium leading-normal tracking-[-0.02em] text-(--color-secondary)"
        >
          Cooking shouldn't be complicated. These recipes come in under
          <span class="relative inline-block">
            30 minutes
            <span
              class="absolute bottom-0.5 left-0 -z-10 h-2.5 w-full bg-(--color-accent-orange)"
              aria-hidden="true"
            ></span>
          </span>
          of active time, fit busy schedules, and taste good enough to repeat.
        </p>
        <p
          class="font-(family-name:--font-body) text-xl font-medium leading-normal tracking-[-0.02em] text-(--color-secondary)"
        >
          Whether you're new to the kitchen or just need fresh ideas, we've got you covered.
        </p>
      </div>

      <div class="relative h-112.5 w-158.75 shrink-0 overflow-hidden rounded-2xl">
        <img
          ngSrc="/images/image-home-real-life-large.webp"
          alt="A person preparing a healthy meal in a bright, modern kitchen with fresh ingredients on the counter"
          fill
          class="object-cover"
        />
      </div>
    </section>
  `,
})
export class RealLifeSectionComponent {}
