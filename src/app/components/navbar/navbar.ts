import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, ButtonComponent],
  template: `
    <header class="border-b border-(--color-divider)">
      <nav
        class="mx-auto flex max-w-(--page-width) items-center justify-between px-15 py-5"
        aria-label="Main navigation"
      >
        <a
          routerLink="/"
          class="flex items-center gap-2.5"
          aria-label="Healthy Recipe Finder - Home"
        >
          <img ngSrc="/images/logo.svg" alt="" width="260" height="40" priority />
        </a>
        <ul class="flex items-center gap-10">
          @for (link of navLinks; track link.path) {
            <li>
              <a
                [routerLink]="link.path"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: link.exact }"
                class="nav-link relative font-(family-name:--font-heading) text-lg font-semibold tracking-[-0.017em] text-(--color-primary-dark) transition-colors hover:text-(--color-secondary)"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>

        <app-button>Browse recipes</app-button>
      </nav>
    </header>
  `,
  styles: `
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--color-accent-orange);
      border-radius: 4px;
    }
  `,
})
export class NavbarComponent {
  protected readonly navLinks = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about', exact: false },
    { label: 'Recipes', path: '/recipes', exact: false },
  ];
}
