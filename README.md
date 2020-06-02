# TV Shows SPA
TV Shows dashboard with listings by genres and ratings. Find the TV Show you want to know more about.

[Demo TV Shows SPA](https://tv-shows-spa.herokuapp.com/)

- [Prerequisites](#prerequisites)
- [Technologies](#technologies)
- [Setup](#setup)
- [Guidelines](#guidelines)
- [Author](#author)
- [License](#license)

## Prerequisites
Download Node.js at https://nodejs.org/en/download/ (latest version - contains npm)

## Technologies
Here you can see the tech stack used to develop this project

### Main stack
- HTML5
- Sass
- ECMAScript 6 (ES6)

### Vue
- Vue cli (v4.3.1) Options: Babel, PWA, Router, Sass (dart-sass), ES-Linter + Prettier, Unit (Jest), Vuex (v3.4.0)
- HTTP client: Axios
- Vuetify

### Api
TV shows API: http://www.tvmaze.com/api

#### Endpoints
Shows listing: http://api.tvmaze.com/shows
Show detail: http://api.tvmaze.com/shows/:id and http://api.tvmaze.com/shows/:id/images
Search shows: http://api.tvmaze.com/search/shows?q=:query

## Setup
First clone the repository:
```
git clone https://github.com/Dawntraoz/tv-shows-spa.git
```

To install dependencies and start working on the project run:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Guidelines
Component naming convention: [Vue official style guide](https://vuejs.org/v2/style-guide)
- Multi-word component names
- PascalCase filenames
- Single instance component name as TheHeader and TheSearch
- Child components have as a prefix the parent component name
- Prop names in camelCase

## Author

This project was developed by [Dawntraoz](https://github.com/Dawntraoz).

## License

[The MIT License (MIT)](https://github.com/Dawntraoz/tv-shows-spa/blob/master/LICENSE)