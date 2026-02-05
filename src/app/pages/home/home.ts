import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { FeaturesSectionComponent } from '../../components/features-section/features-section';
import { RealLifeSectionComponent } from '../../components/real-life-section/real-life-section';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroSectionComponent,
    FeaturesSectionComponent,
    RealLifeSectionComponent,
    CtaSectionComponent,
  ],
  template: `
    <div class="flex flex-col">
      <div class="pb-20">
        <app-hero-section />
      </div>

      <main class="pt-20">
        <app-features-section />

        <div class="mx-auto max-w-(--max-content-width)" role="presentation">
          <hr class="border-t border-(--color-divider)" />
        </div>

        <app-real-life-section />

        <app-cta-section />
      </main>
    </div>
  `,
})
export class HomeComponent {}
