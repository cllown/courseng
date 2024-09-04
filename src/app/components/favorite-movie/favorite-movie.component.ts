import { Component } from '@angular/core';
import { MovieCardPrimeNgComponent } from '../movie-card-primeng/movie-card-prime-ng.component';
import { CommonModule } from '@angular/common';
import { Movie,  } from '../../mock-data';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-favorite-movie',
  standalone: true,
  imports: [MovieCardPrimeNgComponent, CommonModule, MovieListComponent],
  templateUrl: './favorite-movie.component.html',
  styleUrl: './favorite-movie.component.scss'
})
export class FavoriteMovieComponent {
  isActionsShow:boolean =false;
  constructor(private movieService: MovieService){
  }
  movies: Movie[] = [];
  ngOnInit(): void {
      this.movies = this.movieService.getFavoriteMovies();
  }
}
