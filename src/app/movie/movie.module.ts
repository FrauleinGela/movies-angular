import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './shared/movie.service';
import { MovieMapperService } from './shared/movie-mapper.service';

@NgModule({
  declarations: [MovieListComponent],
  imports: [CommonModule],
  exports: [],
  providers: [MovieService, MovieMapperService],
})
export class MovieModule { }