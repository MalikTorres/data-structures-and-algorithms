'use strict';

const { sortByYear, sortByTitle, removeLeadingArticles} = require('./index.js');

describe('sortByYear', () => {
  it('should sort movies by most recent year first', () => {
    const movies = [
      { title: 'Movie 1', year: 2020 },
      { title: 'Movie 2', year: 2010 },
      { title: 'Movie 3', year: 2015 },
    ];
    const sortedMovies = sortByYear(movies);
    expect(sortedMovies).toEqual([
      { title: 'Movie 1', year: 2020 },
      { title: 'Movie 3', year: 2015 },
      { title: 'Movie 2', year: 2010 },
    ]);
  });
});

describe('sortByTitle', () => {
  it('should sort movies alphabetically by title, ignoring leading articles', () => {
    const movies = [
      { title: 'The Movie', year: 2020 },
      { title: 'An Amazing Film', year: 2010 },
      { title: 'A Great Movie', year: 2015 },
    ];
    const sortedMovies = sortByTitle(movies);
    expect(sortedMovies).toEqual([
      { title: 'An Amazing Film', year: 2010 },
      { title: 'A Great Movie', year: 2015 },
      { title: 'The Movie', year: 2020 },
    ]);
  });
});

describe('removeLeadingArticles', () => {
  it('should remove leading articles from movie titles', () => {
    expect(removeLeadingArticles('The Movie')).toBe('Movie');
    expect(removeLeadingArticles('An Amazing Film')).toBe('Amazing Film');
    expect(removeLeadingArticles('A Great Movie')).toBe('Great Movie');
    expect(removeLeadingArticles('No Article Here')).toBe('No Article Here');
  });
});
