import { Injectable } from '@angular/core';
import { HEROES } from "./mock-heroes";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroesService {

  constructor() { }
  getHeroes() {
    return of(HEROES);
  }

  getHero(id){
    return of(HEROES.find(hero => hero.id ===id));
  }

}
