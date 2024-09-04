
import { Component, Input, input } from '@angular/core';
import { MovieCardPrimeNgComponent } from '../movie-card-primeng/movie-card-prime-ng.component';
import { Movie } from '../../mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardPrimeNgComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
  trackById(index: number, movie: Movie): number {
    return movie.id;
  }
}



