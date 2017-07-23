import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCreateComponentComponent } from './hero-create-component.component';

describe('HeroCreateComponentComponent', () => {
  let component: HeroCreateComponentComponent;
  let fixture: ComponentFixture<HeroCreateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCreateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
