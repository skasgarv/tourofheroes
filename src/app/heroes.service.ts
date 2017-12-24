import { Injectable } from '@angular/core';
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroesService {

  constructor() { }
  getHeroes() {
    return HEROES;
  }

}
