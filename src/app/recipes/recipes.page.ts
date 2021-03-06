import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id:'r1',
      title:'pasta',
      imageURL:'',
      ingredients:['onion','capsicum','tomato','pasta']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
