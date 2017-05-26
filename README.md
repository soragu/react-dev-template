# react-dev-template
[![Build Status](https://travis-ci.org/soragu/react-dev-template.svg?branch=master)](https://travis-ci.org/soragu/react-dev-template) [![Coverage Status](https://coveralls.io/repos/github/soragu/react-dev-template/badge.svg)](https://coveralls.io/github/soragu/react-dev-template)

This is a simple biopilerate for investagating and building React apps.

## Getting Start
```
// Install the dependencies
npm install

// Build bundle file
npm run build

// Start application
npm start

// Buid dev bundle file
npm run build:dev

// Start application in development mode
npm run start:dev // localhost:3000

// Run tests
npm test

// Run linting
npm run lint

// Run test coverage
npm run test:cover

```

## Files structures about logic and UI separation
```
/src
	/ui
		/components
			/BookList
				/BookItem
			/SearchBar
				/FilterSelector
			/Common
				/Form
					/FieldGroup
		/containers
			/App
			/SearchPage
				/actions
				/selectors
	/logic
		/actions
			/DetailPage
				/book
			/SearchPage
				/books
				/filter
				/query
		/reducers
			/DetailPage
				/book
			/SearchPage
				/books
				/filter
				/query
```


## Future
* Add React Router