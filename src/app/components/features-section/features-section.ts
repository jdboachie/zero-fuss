import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-features-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <section
      class="mx-auto flex max-w-(--max-content-width) flex-col items-center gap-12 pb-24"
      aria-labelledby="features-title"
    >
      <h2
        id="features-title"
        class="font-(family-name:--font-heading) text-5xl font-extrabold leading-[1.2] tracking-[-0.04em] text-(--color-primary-dark)"
      >
        What you'll get
      </h2>

      <div class="grid w-full grid-cols-3 gap-8">
        @for (feature of features; track feature.title) {
          <article class="flex flex-col gap-6">
            <div
              class="flex h-15 w-15 items-center justify-center rounded-xl border border-(--color-border) bg-white shadow-[0_1px_0_0_rgba(233,237,232,1)]"
            >
              <img [ngSrc]="feature.icon" [alt]="''" width="40" height="40" />
            </div>

            <div class="flex flex-col gap-3">
              <h3
                class="font-(family-name:--font-heading) text-[32px] font-bold leading-[1.3] tracking-[-0.03em] text-(--color-primary-dark)"
              >
                {{ feature.title }}
              </h3>
              <p
                class="font-(family-name:--font-body) text-xl font-medium leading-normal tracking-[-0.02em] text-(--color-secondary)"
              >
                {{ feature.description }}
              </p>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class FeaturesSectionComponent {
  protected readonly features = [
    {
      icon: '/images/icon-whole-food-recipes.svg',
      title: 'Whole-food recipes',
      description: 'Each dish uses everyday, unprocessed ingredients.',
    },
    {
      icon: '/images/icon-minimum-fuss.svg',
      title: 'Minimum fuss',
      description: 'All recipes are designed to make eating healthy quick and easy.',
    },
    {
      icon: '/images/icon-search-in-seconds.svg',
      title: 'Search in seconds',
      description: 'Filter by name or ingredient and jump straight to the recipe you need.',
    },
  ];
}
