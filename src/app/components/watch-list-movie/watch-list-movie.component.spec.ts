import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListMovieComponent } from './watch-list-movie.component';

describe('WatchListMovieComponent', () => {
  let component: WatchListMovieComponent;
  let fixture: ComponentFixture<WatchListMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchListMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchListMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
