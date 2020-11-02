import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMovie } from '../shared/movie';
import { MovieService } from '../shared/movie.service';

@Component({
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }
  public movie$: Observable<IMovie>;
  ngOnInit(): void {
    const movieImdbId = this.activatedRoute.snapshot.paramMap.get("imdbID");
    this.movie$ = this.getMovies(movieImdbId);
  }

  getMovies(imdbId: string) {
    return this.movieService.getMovie(imdbId);
  }
}
