import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../shared/movie';
import { MovieService } from '../shared/movie.service';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movies$: Observable<IMovie[]>; 
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }

}
