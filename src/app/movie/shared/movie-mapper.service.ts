import { Injectable } from '@angular/core';
import { IMovie } from './movie';

@Injectable()
export class MovieMapperService {
  mapMovies(movies: any[]): IMovie[] {
    return movies.map((movie: any) => (this.mapMovie(movie)))
  }

  mapMovie(movie: any): IMovie {
    const mapped = <IMovie>{};
    mapped.title = movie.title;
    mapped.Actors = movie.actors;
    mapped.year = movie.year;
    mapped.Rated = movie.Rated;
    mapped.Released = movie.Released;
    mapped.Runtime = movie.Runtime;
    mapped.Genre = movie.Genre;
    mapped.Director = movie.Director;
    mapped.Writer = movie.Writer;
    mapped.Actors = movie.Actors;
    mapped.Plot = movie.Plot;
    mapped.Language = movie.Language;
    mapped.Country = movie.Country;
    mapped.Poster = movie.Poster;
    mapped.Awards = movie.Awards;
    mapped.ImdbRating = movie.ImdbRating;
    mapped.ImdbID = movie.ImdbID;
    return mapped;
  }
}