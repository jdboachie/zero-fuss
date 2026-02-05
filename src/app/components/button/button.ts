import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-block',
  },
  template: `
    <button
      [type]="type()"
      class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent-orange)"
      [class]="variantClasses()"
    >
      <ng-content />
    </button>
  `,
  styles: `
    :host {
      display: inline-block;
    }
  `,
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly size = input<'default' | 'large'>('default');
  readonly type = input<'button' | 'submit'>('button');

  protected variantClasses(): string {
    const variantStyles = {
      primary: 'bg-(--color-primary-dark) text-white hover:bg-[#1e4d45]',
      secondary: 'bg-white text-(--color-primary-dark) hover:bg-gray-100',
    };

    const sizeStyles = {
      default: 'px-4 py-3 text-lg',
      large: 'px-8 py-4 text-xl',
    };

    return `${variantStyles[this.variant()]} ${sizeStyles[this.size()]}`;
  }
}
