import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../heroClass";
import { HeroesService } from "../heroes.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(
    private heroService: HeroesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getHero();
  }
  heroDetails: Hero;

  saveDetails(hero) {
    console.log("Saving Details of", hero.name)
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(heroDetails => this.heroDetails = heroDetails)
  }

}
