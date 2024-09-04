import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { MovieService } from './services/movie/movie.service';
import { AuthService } from './services/auth/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MovieListComponent, SidebarComponent, RouterModule, RouterLink, HeaderComponent]
})
export class AppComponent {
  constructor(private movieService: MovieService, private authService: AuthService){
  }
  ngOnInit(): void {
    this.authService.authenticateAndGetAccountId().subscribe(
       accountId => {
           this.movieService.setAccountId(accountId);
           console.log('Account ID:', accountId);
       },
         error => {
             console.error('Authentication failed:', error);
         }
     );
  }
}
