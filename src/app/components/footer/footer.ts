import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <footer class="mx-auto max-w-(--max-content-width) px-4 md:px-8">
      <div
        class="flex flex-col items-center gap-6 border-t border-(--color-divider) py-8 md:flex-row md:justify-between md:py-10"
      >
        <nav aria-label="Social media links" class="order-1 md:order-2">
          <ul class="flex items-center gap-6">
            @for (social of socialLinks; track social.label) {
              <li>
                <a
                  [href]="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  [attr.aria-label]="social.label"
                  class="block text-(--color-primary-dark) transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent-orange)"
                >
                  <img [ngSrc]="social.icon" [alt]="''" width="22" height="22" />
                </a>
              </li>
            }
          </ul>
        </nav>

        <p
          class="order-2 text-center text-base font-medium tracking-[-0.019em] text-(--color-primary-dark) md:order-1 md:text-left"
        >
          Made with ❤️ and 🥑
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly socialLinks = [
    {
      label: 'Follow us on Instagram',
      icon: '/images/icon-instagram.svg',
      url: 'https://instagram.com',
    },
    {
      label: 'Follow us on Bluesky',
      icon: '/images/icon-bluesky.svg',
      url: 'https://bsky.app',
    },
    {
      label: 'Follow us on TikTok',
      icon: '/images/icon-tiktok.svg',
      url: 'https://tiktok.com',
    },
  ];
}
