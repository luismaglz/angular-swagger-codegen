import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvertisementComponent } from './home-advertisement.component';

describe('HomeAdvertisementComponent', () => {
  let component: HomeAdvertisementComponent;
  let fixture: ComponentFixture<HomeAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
