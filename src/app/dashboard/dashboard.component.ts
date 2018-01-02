import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../heroes.service";
import { Hero } from "../heroClass";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroesService) { }

  topHeroes: Hero[] = [];
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
    .subscribe(heroData => this.topHeroes = heroData.slice(1,5))
  }
}
