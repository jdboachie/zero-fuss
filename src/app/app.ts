import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div class="flex min-h-screen flex-col">
      <app-navbar />
      <div id="main-content" class="flex-1">
        <router-outlet />
      </div>
      <app-footer />
    </div>
  `,
})
export class App {}
