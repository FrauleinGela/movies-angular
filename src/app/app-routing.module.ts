import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieComponent } from './movie/movie/movie.component';

const routes: Routes = [
  {
    path: "movies",
    component: MovieListComponent,
  },
  {
    path: "movies/:imdbID",
    component: MovieComponent
  },
  {
    path: "**",
    redirectTo: 'movies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
