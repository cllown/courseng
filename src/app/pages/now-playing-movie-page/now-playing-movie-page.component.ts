import { Component } from '@angular/core';
import { Movie } from '../../mock-data';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNowPlayingMovies } from '../../store/selectors';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-now-playing-movie-page',
  standalone: true,
  imports: [MovieListComponent, CommonModule],
  templateUrl: './now-playing-movie-page.component.html',
  styleUrl: './now-playing-movie-page.component.scss'
})
export class NowPlayingMoviePageComponent {
  constructor(private store:Store){
  }
  movies$!: Observable<Movie[] | null>;
  ngOnInit(): void {
    this.movies$ = this.store.select(selectNowPlayingMovies);
  }
}

