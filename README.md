# BookCatalogue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Ways to improve the quality

With the given time restrictions now everything was possible to implement. What could be done more:

- extend validation rules for the fields and the form, regex could be changed to more simple check
- use strict mode
- setup pre-commit hooks for test coverage/linter/prettier
- move errors/success messages for http requests and forms to the translation files instead of hardcoded strings in the code
- add e2e tests
- cover html files with unit tests
- improve unit tests coverage for BookListComponentEffects
- implement responsive design

## Used libraries

- mg-mocks to mock components
- prettier/ eslint to help with code formatting and types

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
