import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../heroes.service";
import { Hero } from "../heroClass";
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  constructor(
    private heroService: HeroesService,
    private location: Location) { }

  heroes: Hero[];
  ngOnInit() {
    this.getHeroDetails();
  }

  heroDetails: Hero;

  clickHero(hero) {
    this.heroDetails = hero;
  }

  goBack() {
    this.location.back();
  }

  getHeroDetails() {
    this.heroService.getHeroes().subscribe(heroes=> this.heroes = heroes);
  }


}
