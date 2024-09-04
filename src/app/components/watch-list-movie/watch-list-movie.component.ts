import { Component } from '@angular/core';
import { Movie } from '../../mock-data';
import { MovieCardPrimeNgComponent } from '../movie-card-primeng/movie-card-prime-ng.component';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-watch-list-movie',
  standalone: true,
  imports: [MovieCardPrimeNgComponent, MovieListComponent],
  templateUrl: './watch-list-movie.component.html',
  styleUrl: './watch-list-movie.component.scss'
})
export class WatchListMovieComponent {
  constructor(private movieService: MovieService){
  }
  movies: Movie[] = [];
  ngOnInit(): void {
      this.movies = this.movieService.getWatchList();
  }
}
