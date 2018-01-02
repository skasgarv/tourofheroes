import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcasesComponent } from './testcases.component';

fdescribe('TestcasesComponent', () => {
  let component: TestcasesComponent;
  let fixture: ComponentFixture<TestcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dummy function to be defined', ()=> {
    expect(component.dummyFunction).toBeDefined();
  });

  it('second function should take two numbers and return sum', ()=> {
    expect(component.add(1,2)).toEqual(3);
  })
});
