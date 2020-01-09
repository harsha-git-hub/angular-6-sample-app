import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoprightsComponent } from './coprights.component';

describe('CoprightsComponent', () => {
  let component: CoprightsComponent;
  let fixture: ComponentFixture<CoprightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoprightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoprightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
