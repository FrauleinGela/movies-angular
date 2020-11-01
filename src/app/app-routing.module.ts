import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: "movies",
    component: MovieListComponent
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
