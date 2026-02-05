import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Recipe } from '../../models/recipe';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';
import recipesData from '../../../../data.json';

@Component({
  selector: 'app-recipe-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage, RecipeCardComponent],
  templateUrl: './recipe-detail.html',
})
export class RecipeDetailComponent {
  readonly slug = input.required<string>();

  protected readonly recipes: Recipe[] = recipesData;

  protected readonly recipe = computed(() => {
    return this.recipes.find((r) => r.slug === this.slug()) ?? null;
  });

  protected readonly moreRecipes = computed(() => {
    const currentRecipe = this.recipe();
    if (!currentRecipe) return [];

    return this.recipes.filter((r) => r.id !== currentRecipe.id).slice(0, 3);
  });
}
