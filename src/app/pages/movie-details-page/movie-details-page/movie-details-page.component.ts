import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MovieService } from '../../../services/movie/movie.service';
import { Movie } from '../../../mock-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
  imports: [CardModule, CommonModule, ButtonModule, ]
})
export class MovieDetailsPageComponent {

  movie: Movie | undefined;

  constructor(private route:ActivatedRoute, private movieService: MovieService){};

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      const movieId = +params['id'];
      this.movieService.getMovieDetails(movieId).subscribe((movie)=>{
        this.movie =movie;
      });
    });

  }
}
