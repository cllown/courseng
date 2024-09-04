import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardPrimeNgComponent } from './movie-card-prime-ng.component';

describe('MovieCardPrimengComponent', () => {
  let component: MovieCardPrimeNgComponent;
  let fixture: ComponentFixture<MovieCardPrimeNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardPrimeNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
