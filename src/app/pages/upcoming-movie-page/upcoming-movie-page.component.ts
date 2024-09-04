import { Component } from '@angular/core';
import { Movie } from '../../mock-data';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUpComingMovies } from '../../store/selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-movie-page',
  standalone: true,
  imports: [MovieListComponent, CommonModule],
  templateUrl: './upcoming-movie-page.component.html',
  styleUrl: './upcoming-movie-page.component.scss'
})
export class UpcomingMoviePageComponent {
  constructor(private store:Store){
  }
  movies$!: Observable<Movie[] | null>;
  ngOnInit(): void {
    this.movies$ = this.store.select(selectUpComingMovies);
  }
}
