import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-real-life-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <section
      class="mx-auto flex max-w-(--max-content-width) flex-col gap-8 px-4 py-16 md:gap-10 md:px-8 md:py-20 lg:flex-row lg:items-center lg:gap-12 lg:py-24"
      aria-labelledby="real-life-title"
    >
      <div class="flex flex-1 flex-col gap-5">
        <h2
          id="real-life-title"
          class="font-(family-name:--font-heading) text-[40px] font-extrabold leading-[1.2] tracking-[-0.05em] text-(--color-primary-dark) md:text-5xl md:leading-[1.36] md:tracking-[-0.03em]"
        >
          Built for real life
        </h2>
        <p
          class="font-(family-name:--font-body) text-xl font-medium leading-normal tracking-[-0.02em] text-(--color-secondary)"
        >
          Cooking shouldn't be complicated. These recipes come in under
          <span class="relative inline-block font-bold">
            30 minutes
            <span
              class="absolute bottom-1.5 rounded-sm left-0 -z-10 h-2.5 w-full bg-(--color-accent-orange)"
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

      <div
        class="relative h-60.75 w-full shrink-0 overflow-hidden rounded-xl md:h-124.75 md:w-176 md:rounded-2xl lg:h-112.5 lg:w-158.75"
      >
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
