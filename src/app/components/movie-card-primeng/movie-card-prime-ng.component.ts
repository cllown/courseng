
import { Component, Input } from '@angular/core';
import { Movie } from '../../mock-data';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MovieService } from '../../services/movie/movie.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card-prime-ng',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule],
  templateUrl: './movie-card-prime-ng.component.html',
  styleUrl: './movie-card-prime-ng.component.scss',
})
export class MovieCardPrimeNgComponent {

  @Input() movie!: Movie;
  @Input() isActionsShow: boolean = true;

  constructor(private movieService: MovieService){};

  setToFavorite(movie: Movie): void {
    this.movieService.setToFavorite(movie);
  }
  setToWatchList(movie: Movie): void {
    this.movieService.setToWatchList(movie);
  }
}
