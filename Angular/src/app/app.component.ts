import { Component } from '@angular/core';
import { Statistique } from './models/statistique/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvaluationAngular';

  public stat0: Statistique = new Statistique(
    'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
    'Démographie en France',
    '60M',
    'SUCCESS'
  )

  public stat1: Statistique = new Statistique(
    'fa1f5f40-be3b-11eb-91ec-7f5875ecfb47',
    'Démographie en Belgique',
    '11M',
    'Success'
  )
}