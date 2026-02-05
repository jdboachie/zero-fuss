import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './recipe-card.html',
})
export class RecipeCardComponent {
  readonly recipe = input.required<Recipe>();
}
