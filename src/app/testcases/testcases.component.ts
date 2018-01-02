import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testcases',
  templateUrl: './testcases.component.html',
  styleUrls: ['./testcases.component.scss']
})
export class TestcasesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  dummyFunction() {}

  add(a, b){
    return a+b;
  }

}
