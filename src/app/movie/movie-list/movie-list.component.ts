import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { countries } from 'src/app/shared/countries';
import { languages } from 'src/app/shared/languages';
import { IMovie, IMovieListParameters } from '../shared/movie';
import { MovieService } from '../shared/movie.service';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movies$: Observable<IMovie[]>;
  public formGroup: FormGroup = new FormGroup({
    'title': new FormControl(''),
    'country': new FormControl(''),
    'language': new FormControl(''),
  })
  public countries = countries;
  public languages = languages;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(() => {
      this.movies$ = this.getMovies(this.getCleanedFormGroupParameters())
    })

    this.formGroup.updateValueAndValidity({ emitEvent: true });
  }

  getMovies(parameters: IMovieListParameters) {
    return this.movieService.getMovies(parameters);
  }

  getCleanedFormGroupParameters(): any {
    const parameters = {};
    const rawValue = this.formGroup.getRawValue();
    Object.keys(this.formGroup.getRawValue()).forEach((key) => {
      parameters[key] = rawValue[key] ?? "";
    })
    return parameters;
  }

}
