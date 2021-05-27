import { Component } from '@angular/core';
import { Statistique } from './models/statistique/statistique';
import { RecuperationService } from './service/recuperation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvaluationAngular';
  public tabstats!: Statistique[];

  // public tabstats: Statistique[] = [
  // {
  //   id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
  //   titre: 'Démographie en France',
  //   valeur: '60M',
  //   appreciation: 'SUCCESS',
  // },
  // {
  //   id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb47',
  //   titre: 'Démographie en Belgique',
  //   valeur: '11M',
  //   appreciation: 'SUCCESS',
  // },
  // ]

  constructor(private apiService: RecuperationService) {
    this.apiService.getStats().then((tabstats) => (this.tabstats = tabstats));
    // setTimeout(() => {
    //   this.tabstats.push(
    //     new Statistique('zinedinezidane', 'ENTRAINEUR LIBRE','numero10', 'WARNING')
    //   );
    // }, 5000);

  }
}