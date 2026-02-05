import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, ButtonComponent],
  template: `
    <header class="relative border-b border-(--color-divider)">
      <nav
        class="mx-auto flex max-w-(--page-width) items-center justify-between px-4 py-4 md:px-8 md:py-5 lg:px-15"
        aria-label="Main navigation"
      >
        <a routerLink="/" class="flex items-center gap-2" aria-label="Healthy Recipe Finder - Home">
          <img
            ngSrc="/images/logo.svg"
            alt=""
            width="27"
            height="32"
            class="h-8 w-auto md:h-10"
            priority
          />
        </a>

        <ul class="hidden items-center gap-10 lg:flex">
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

        <app-button class="hidden! lg:block!">Browse recipes</app-button>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded bg-(--color-divider) lg:hidden"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          (click)="toggleMenu()"
        >
          <img ngSrc="/images/icon-hamburger-menu.svg" alt="" width="18" height="16" />
        </button>
      </nav>

      @if (menuOpen()) {
        <div
          id="mobile-menu"
          class="absolute left-4 right-4 top-full z-50 mt-2 overflow-hidden rounded-lg border border-(--color-divider) bg-white shadow-[0_12px_22px_-12px_rgba(57,88,82,0.3)] md:left-8 md:right-8 lg:hidden"
        >
          <div class="flex flex-col p-2">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                routerLinkActive="active-mobile"
                [routerLinkActiveOptions]="{ exact: link.exact }"
                class="rounded-lg px-2 py-3 font-(family-name:--font-heading) text-lg font-semibold text-[#293241] transition-colors hover:bg-gray-50"
                (click)="closeMenu()"
              >
                {{ link.label }}
              </a>
            }
            <div class="pt-2.5">
              <app-button class="w-full [&_button]:w-full" (click)="closeMenu()">
                Browse recipes
              </app-button>
            </div>
          </div>
        </div>
      }
    </header>

    @if (menuOpen()) {
      <div class="fixed inset-0 z-40 lg:hidden" aria-hidden="true" (click)="closeMenu()"></div>
    }
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

    .active-mobile {
      color: var(--color-primary-dark);
    }
  `,
})
export class NavbarComponent {
  protected readonly navLinks = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about', exact: false },
    { label: 'Recipes', path: '/recipes', exact: false },
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
