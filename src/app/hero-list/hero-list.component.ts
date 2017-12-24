import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../heroes.service";
import { Hero } from "../heroClass";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  constructor(private heroService: HeroesService) { }

  ngOnInit() {}

  heroes: Hero[] = this.heroService.getHeroes()
  heroDetails: Hero;

  clickHero(hero) {
    this.heroDetails = hero;
  }


}
