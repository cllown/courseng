import { Component } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../mock-data';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTopRatedMovies } from '../../store/selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-rated-movie-page',
  standalone: true,
  imports: [MovieListComponent, CommonModule],
  templateUrl: './top-rated-movie-page.component.html',
  styleUrl: './top-rated-movie-page.component.scss'
})
export class TopRatedMoviePageComponent {
  constructor(private store:Store){
  }
  movies$!: Observable<Movie[] | null>;
  ngOnInit(): void {
    this.movies$ = this.store.select(selectTopRatedMovies);
  }
}
