import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

export interface FilterOption {
  value: number;
  label: string;
}

@Component({
  selector: 'app-filter-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative inline-block',
    '(document:click)': 'onDocumentClick($event)',
  },
  templateUrl: './filter-dropdown.html',
})
export class FilterDropdownComponent {
  readonly label = input.required<string>();
  readonly options = input.required<FilterOption[]>();
  readonly selectedValue = input<number | null>(null);
  readonly selectionChange = output<number | null>();

  protected readonly isOpen = signal(false);

  protected toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isOpen.update((open) => !open);
  }

  protected selectOption(value: number): void {
    this.selectionChange.emit(value);
    this.isOpen.set(false);
  }

  protected clearSelection(): void {
    this.selectionChange.emit(null);
    this.isOpen.set(false);
  }

  protected onDocumentClick(event: Event): void {
    this.isOpen.set(false);
  }
}
