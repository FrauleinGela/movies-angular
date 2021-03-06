import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './shared/movie.service';
import { MovieMapperService } from './shared/movie-mapper.service';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MovieListComponent, MovieComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [],
  providers: [MovieService, MovieMapperService],
})
export class MovieModule { }