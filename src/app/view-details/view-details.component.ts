import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../heroClass";

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor() { }

  @Input() hero: Hero;

  ngOnInit() {
  }

  saveDetails(hero) {
    console.log("Saving Details of", hero.name)
  }

}
