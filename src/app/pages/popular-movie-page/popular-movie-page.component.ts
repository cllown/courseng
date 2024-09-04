import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Movie } from '../../mock-data';
import { MovieCardPrimeNgComponent } from '../../components/movie-card-primeng/movie-card-prime-ng.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Store } from '@ngrx/store';
import { selectPopularMovies } from '../../store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular-movie-page',
  standalone: true,
  templateUrl: './popular-movie-page.component.html',
  styleUrl: './popular-movie-page.component.scss',
  imports: [
    HeaderComponent,
    MovieCardPrimeNgComponent,
    MovieListComponent,
    CommonModule,
  ],
})
export class PopularMoviePageComponent {
  constructor(private store: Store) {}

  movies$!: Observable<Movie[] | null>;

  ngOnInit(): void {
    this.movies$ = this.store.select(selectPopularMovies);
  }
}
