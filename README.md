# AngularMovies
This is a project to put in practice OAUTH Proof Key for Code Exchange (PKCE)
At the same time, the applications displays a list of  movies filtered by title, location, country.
A user is able to book a movie and unbook.

<br>
<br>
<br>
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.
This project works along with an API 
## Dependencies

This project depends on the following API:  https://github.com/FrauleinGela/movies-api-csharp

## TODO
 * Check a movie if its booked
 * Check a movie if its booked by a user

## Prerequisites to run this project
 * Install Node.js(I recommend a LTS version) and npm, that are essential to Angular development.
 * Install @angular cli  `npm install -g @angular/cli` 
Get it now if it's not already installed on your machine.
Verify that you are running at least node v4.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

## Prerequisites to use OAUTH Proof Key for Code Exchange (PKCE)
 * Create a JSON file with the following structure. where the values should be the ones used in your OAuth account <br>
`
{
  "clientId": "YOUR_CLIENT_ID",
  "domain": "YOUR_DOMAIN",
  "audience": "YOUR_AUDIENCE_ID",
}
`


## Steps to run the app
 1. Install npm packages found in the file package.json `npm install` (If not installed yet)
 1. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
 
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



