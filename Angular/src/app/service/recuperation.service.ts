import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistique } from 'src/app/models/statistique/statistique';

@Injectable({
  providedIn: 'root'
})

export class RecuperationService {

  public tabstats: Statistique[] =[];

  constructor(private http: HttpClient) { }

  getStats(): Promise<Statistique[]> {
    return this.http
      .get('https://stats.naminilamy.fr')
      .toPromise()
      .then((obj: any) => {
        for (let o of obj) {
        this.tabstats.push(
          new Statistique(o.id, o.title, o.value, o.appreciation) 
        );
        }
        return this.tabstats;
      });
  }

}
