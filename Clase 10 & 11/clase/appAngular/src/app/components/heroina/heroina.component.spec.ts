import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroinaComponent } from './heroina.component';

describe('HeroinaComponent', () => {
  let component: HeroinaComponent;
  let fixture: ComponentFixture<HeroinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
