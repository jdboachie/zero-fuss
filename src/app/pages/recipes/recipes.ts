import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';
import {
  FilterDropdownComponent,
  FilterOption,
} from '../../components/filter-dropdown/filter-dropdown';
import { Recipe } from '../../models/recipe';
import recipeData from '../../../../data.json';

@Component({
  selector: 'app-recipes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeCardComponent, FilterDropdownComponent],
  templateUrl: './recipes.html',
})
export class RecipesComponent {
  protected readonly recipes = signal<Recipe[]>(recipeData);
  protected readonly searchQuery = signal('');
  protected readonly maxPrepTime = signal<number | null>(null);
  protected readonly maxCookTime = signal<number | null>(null);

  protected readonly prepTimeOptions: FilterOption[] = [
    { value: 0, label: '0 minutes' },
    { value: 5, label: '5 minutes' },
    { value: 10, label: '10 minutes' },
    { value: 15, label: '15 minutes' },
    { value: 20, label: '20 minutes' },
  ];

  protected readonly cookTimeOptions: FilterOption[] = [
    { value: 0, label: '0 minutes' },
    { value: 5, label: '5 minutes' },
    { value: 10, label: '10 minutes' },
    { value: 15, label: '15 minutes' },
    { value: 20, label: '20 minutes' },
  ];

  protected readonly filteredRecipes = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const maxPrep = this.maxPrepTime();
    const maxCook = this.maxCookTime();

    return this.recipes().filter((recipe) => {
      const matchesSearch =
        !query ||
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query));

      const matchesPrepTime = maxPrep === null || recipe.prepMinutes <= maxPrep;
      const matchesCookTime = maxCook === null || recipe.cookMinutes <= maxCook;

      return matchesSearch && matchesPrepTime && matchesCookTime;
    });
  });

  protected readonly totalFilteredRecipes = computed(() => this.filteredRecipes().length);

  constructor() {
    effect(() => {
      const query = this.searchQuery();
      const maxPrep = this.maxPrepTime();
      const maxCook = this.maxCookTime();
      const count = this.totalFilteredRecipes();

      console.log('Filter state changed:', {
        searchQuery: query || '(empty)',
        maxPrepTime: maxPrep !== null ? `${maxPrep} mins` : '(any)',
        maxCookTime: maxCook !== null ? `${maxCook} mins` : '(any)',
        resultsCount: count,
      });
    });
  }

  protected onSearchChange(value: string): void {
    this.searchQuery.set(value);
  }

  protected onMaxPrepTimeChange(value: number | null): void {
    this.maxPrepTime.set(value);
  }

  protected onMaxCookTimeChange(value: number | null): void {
    this.maxCookTime.set(value);
  }
}
