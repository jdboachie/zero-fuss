import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';
import { Recipe } from '../../models/recipe';
import recipeData from '../../../../data.json';

@Component({
  selector: 'app-recipes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeCardComponent],
  templateUrl: './recipes.html',
})
export class RecipesComponent {
  protected readonly recipes: Recipe[] = recipeData;
}
